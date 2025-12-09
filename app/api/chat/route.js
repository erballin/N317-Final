import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const code = body?.code?.trim();
    const language = body?.language?.trim() || "plain text";

    if (!code) {
      return NextResponse.json(
        { error: "Code is required to generate documentation." },
        { status: 400 }
      );
    }

    const lineCount = code.split("\n").length;

    const model = google("gemini-2.5-flash", {
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    const prompt = `
You are DocuGen AI. Generate concise, accurate documentation for the provided ${language} code.
Focus on: what it does, key functions/classes, parameters, return values, side effects, and usage.
Keep the tone clear and professional. Use Markdown with headings and lists where helpful.

Code:
"""
${code}
"""
`;

    const { text } = await generateText({
      model,
      prompt,
    });

    return NextResponse.json({
      markdown: text,
      metadata: {
        language,
        lineCount,
      },
    });
  } catch (error) {
    console.error("[chat:POST] failed to generate docs", error);
    return NextResponse.json(
      { error: "Failed to generate documentation. Please try again." },
      { status: 500 }
    );
  }
}
