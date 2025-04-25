import { streamText, tool } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import { searchSuppliers } from "@/lib/suppliers";

export const runtime = "edge";

const searchSuppliersTool = tool({
  parameters: z.object({
    industry: z.string().optional(),
    category: z.string().optional(),
    location: z.string().optional(),
    riskScoreLimit: z.number().optional(),
    topRiskScoreLimit: z.number().optional(),
  }),
  execute: async ({
    topRiskScoreLimit,
    industry,
    category,
    location,
    riskScoreLimit,
  }: {
    topRiskScoreLimit?: number;
    industry?: string;
    category?: string;
    location?: string;
    riskScoreLimit?: number;
  }) => {
    return searchSuppliers({
      topRiskScoreLimit,
      industry,
      category,
      location,
      riskScoreLimit,
    });
  },
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: openai("gpt-4.1"),
    tools: { searchSuppliersTool },
    messages,
    maxSteps: 5,
  });
  const dataStreamResponse = result.toDataStreamResponse();
  return dataStreamResponse;
}
