import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { idea, style } = req.body || {};

    if (!idea) {
      return res.status(400).json({ error: "Missing 'idea' in request body" });
    }

    const prompt = `
Create a JSON object ONLY (no explanation) describing a concept deck.

Idea: ${idea}
Preferred Style / Format: ${style || "unspecified"}

Return JSON with this exact shape:
{
  "title": "string",
  "style": "string",
  "frames": [
    { "description": "short visual description for frame 1" },
    { "description": "short visual description for frame 2" },
    { "description": "short visual description for frame 3" },
    { "description": "short visual description for frame 4" }
  ]
}
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a film / creative deck generator." },
        { role: "user", content: prompt }
      ]
    });

    const text = completion.choices[0].message.content;

    let json;
    try {
      json = JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse JSON from OpenAI:", text);
      return res.status(500).json({ error: "Failed to parse deck JSON from model" });
    }

    return res.json(json);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Deck generation failed" });
  }
}
