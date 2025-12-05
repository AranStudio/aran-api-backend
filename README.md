# Creative Deck API (Express + Vercel)

This is the backend for Aran's creative deck + image generator.

## Endpoints

### POST /api/generate-deck

Body:
```json
{ "idea": "string", "style": "string" }
```

Returns:
```json
{
  "title": "string",
  "style": "string",
  "frames": [
    { "description": "..." }
  ]
}
```

### POST /api/generate-images

Body:
```json
{
  "frames": [{ "description": "..." }],
  "style": "optional style string"
}
```

Returns:
```json
{
  "frames": [
    { "imageUrl": "data:image/png;base64,..." }
  ]
}
```

## Local development

```bash
npm install
OPENAI_API_KEY=your_key_here npm start
```

Then call:
- http://localhost:3001/api/generate-deck
- http://localhost:3001/api/generate-images
