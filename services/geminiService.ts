
import { GoogleGenAI, Type } from "@google/genai";
import { MaterialBatch, VerificationResult } from "../types";
import { hasApiKey, getApiKeyError } from "../utils/apiKeyCheck";

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export class ApiKeyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ApiKeyError';
  }
}

export const verifyBatchCircularity = async (batch: MaterialBatch): Promise<VerificationResult> => {
  if (!hasApiKey() || !ai) {
    throw new ApiKeyError(getApiKeyError());
  }

  const prompt = `Analyze this circular material batch data and provide a verification report.
    Batch Details: ${JSON.stringify(batch)}
    
    Evaluate:
    1. Circularity Score (0-100) based on origin and material type.
    2. Integrity insights (short 2-sentence summary).
    3. Compliance status (Passed/Pending/Flagged).
    4. Suggested price premium (%) for verified status.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            integrityInsights: { type: Type.STRING },
            complianceStatus: { type: Type.STRING },
            suggestedPremium: { type: Type.STRING },
          },
          required: ["score", "integrityInsights", "complianceStatus", "suggestedPremium"]
        },
      },
    });

    return JSON.parse(response.text.trim()) as VerificationResult;
  } catch (error) {
    console.error("Gemini verification failed", error);
    throw error;
  }
};
