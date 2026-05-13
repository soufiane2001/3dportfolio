import fs from "fs";
import path from "path";

const API_KEY = "AIzaSyDH0QC31OH7Jwh9P0ICbQt0DMuc4ho6LG8";
const MODEL = "gemini-2.5-flash-image";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

async function generateImage(prompt, filename) {
  console.log(`Generating: ${filename}...`);
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ["IMAGE", "TEXT"] },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error for ${filename}: ${res.status} - ${err}`);
  }

  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData?.mimeType?.startsWith("image/"));

  if (!imagePart) {
    console.log("Response:", JSON.stringify(data, null, 2));
    throw new Error(`No image returned for ${filename}`);
  }

  const buffer = Buffer.from(imagePart.inlineData.bytesBase64Encoded ?? imagePart.inlineData.data, "base64");
  const outPath = path.join("public", filename);
  fs.writeFileSync(outPath, buffer);
  console.log(`Saved: ${outPath}`);
}

await generateImage(
  "Professional mobile app UI mockup for a cash management and expense tracking app. Dark modern interface with orange accent colors, financial dashboard showing income and expense bar charts, transaction list with categories, total wallet balance at top, clean minimalist design on smartphone",
  "cash-management-app.png"
);

await generateImage(
  "Professional desktop application UI screenshot for a patient management healthcare system. Clean medical interface with blue and white color scheme, patient records table with names and medical info, appointment calendar panel, health statistics charts, modern clinical dashboard design",
  "patient-management-app.png"
);

console.log("Done! Both images generated.");
