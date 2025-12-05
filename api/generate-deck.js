// Super simple deck generator – no OpenAI, always works

module.exports = async (req, res) => {
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
