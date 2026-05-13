const API_KEY = "AIzaSyDH0QC31OH7Jwh9P0ICbQt0DMuc4ho6LG8";
const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
const data = await res.json();
const imageModels = data.models.filter(m =>
  m.name.includes("imagen") || m.name.includes("image") ||
  m.supportedGenerationMethods?.includes("predict")
);
console.log(JSON.stringify(imageModels.map(m => ({ name: m.name, methods: m.supportedGenerationMethods })), null, 2));
