import { GoogleGenerativeAI } from "@google/generative-ai";

// Use the key defined in .env.local
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

export const generateReviewReply = async (
  reviewText: string,
  authorName: string,
  businessType: string = "our business"
) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `You are a professional customer response assistant replying to Google reviews for a local business. 

Your goal is to write a polite, humble, natural, and human reply that addresses the customer's experience directly.

Follow these rules strictly:
1. Thank the customer by name.
2. Mention the business type or service they experienced once, naturally.
3. Maintain a humble, professional, and sincere tone.
4. If the review is positive: Be warm, appreciative, and briefly acknowledge their kind words.
5. If the review is negative: Be empathetic, non-defensive, and professional. Acknowledge their specific concerns and ask for their permission to connect directly so you can address the situation and make things right.
6. Encourage a future visit (for positive reviews) or express a sincere hope for a chance to resolve the matter (for negative reviews) in a confident, non-salesy way.
7. Keep the reply 2–3 sentences long.
8. Do NOT use emojis.
9. Do NOT keyword stuff, repeat phrases, or sound promotional.
10. Avoid exclamation overload (max one exclamation or none).
11. End with a warm, natural closing.
12. Output only the final reply text—no explanations.

The reply must sound like it was written personally by a business owner and comply with Google review reply best practices.`
    });

    const prompt = `Customer Name: ${authorName}
Business Type: ${businessType}
Review Text: "${reviewText}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();
  } catch (error: any) {
    console.error("Gemini Error:", error);
    return "Thank you so much for your feedback! We truly appreciate your support and hope to see you again soon.";
  }
};
