import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(request) {
  // AI Model
  const model = google("gemini-2.5-flash", {
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY, // Import the API key from your env file
  });
}
