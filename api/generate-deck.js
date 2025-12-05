// Super simple fake deck – no OpenAI yet

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { idea, style } = req.body || {};

  const title = idea || "Untitled Project";
  const visualStyle = style || "General cinematic look";

  const frames = [
    { description: `Opening wide shot that sets up: ${title}` },
    { description: `Character or subject introduced in a close-up. Style: ${visualStyle}` },
    { description: `Key moment or turning point related to: ${idea || "the concept"}` },
    { description: `Closing frame with strong visual button to end the piece.` },
  ];

  return res.status(200).json({
    title,
    style: visualStyle,
    frames,
  });
};
