// Super simple deck generator with CORS enabled – no AI yet

module.exports = async (req, res) => {
  // Allow requests from any origin (frontend)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { idea, style } = req.body || {};

  const title = idea || "Untitled Project";
  const visualStyle = style || "General cinematic look";

  const frames = [
    { description: `Opening wide shot that sets up: ${title}` },
    { description: `Introduce the main subject or character. Style: ${visualStyle}` },
    { description: `Key moment or turning point related to: ${idea || "the concept"}` },
    { description: `Closing frame with a strong visual button to end the piece.` },
  ];

  return res.status(200).json({
    title,
    style: visualStyle,
    frames,
  });
};
