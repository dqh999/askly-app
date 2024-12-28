import { createGoogleGenerativeAI } from "@ai-sdk/google";
import type { LanguageModelV1 } from "ai";

type ModelType = "openai" | "anthropic" | "google";

export const getLanguageModel = (): LanguageModelV1 => {
    const googleApiKey = process.env.GOOGLE_API_KEY;
    console.log(googleApiKey);

    if (googleApiKey) {
        const gemini = createGoogleGenerativeAI({
            apiKey: googleApiKey,
        });
        return gemini("gemini-1.5-pro-latest", {
            safetySettings: [
              { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
              {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_NONE",
              },
              { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
              {
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_NONE",
              },
            ],
          });
    }
    throw new Error("No API key found for any supported AI model");
}

export const getModelType = (): { type: ModelType; model: string } => {
    const model = getLanguageModel();
  
    const provider = model.provider.toLocaleLowerCase();
  
    if (provider.includes("openai"))
      return { type: "openai", model: model.modelId };
    if (provider.includes("anthropic"))
      return { type: "anthropic", model: model.modelId };
    if (provider.includes("google"))
      return { type: "google", model: model.modelId };
  
    throw new Error("Unknown model");
  };