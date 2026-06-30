import { GoogleGenAI } from "@google/genai";
import env from "@/config/env";
import { SYSTEM_PROMPT } from "@/utils/prompt";

const ai = new GoogleGenAI({
  apiKey: env.geminiApiKey,
});

export const summarizeNews = async (articles: any[]) => {
  const prompt = `
${SYSTEM_PROMPT}

Articles:

${JSON.stringify(articles, null, 2)}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text;

  if (!text) {
    throw new Error("Gemini returned empty response.");
  }

  // Remove markdown if Gemini wraps JSON inside ```json
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
};
