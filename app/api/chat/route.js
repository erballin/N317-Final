import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function POST(request) {
  try {
    const body = await request.json();
    const language = body.language;
    const code = body.code;

    // AI Model
    const model = google("gemini-2.5-flash", {
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY, // Import the API key from your env file
    });
    const prompt = `Generate documentation for the following ${language} code:\n\n${code}`;

    // Generate Response
    const generateResult = await generateText(model, prompt);

    // Send result to frontend side
    return new Response(
      JSON.stringify({ documentation: generateResult.text }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error getting API:", error.message);

    return new Response(
      JSON.stringify({ error: error.message || JSON.stringify(err) }),
      {
        status: 500,
      }
    );
  }
}
