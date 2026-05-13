import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1,
            fontFamily: "sans-serif",
          }}
        >
          S
        </span>
        <span
          style={{
            fontSize: 22,
            fontWeight: 900,
            color: "#ff6b00",
            lineHeight: 1,
            fontFamily: "sans-serif",
          }}
        >
          .
        </span>
      </div>
    ),
    { ...size }
  );
}
