import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Joseph Etim — Product Engineer, Frontend Lead, and Systems Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#020617",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 64,
            height: 64,
            border: "1px solid #475569",
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center",
            color: "#818cf8",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          JE
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 650, letterSpacing: "-4px" }}>
            Joseph Etim
          </div>
          <div style={{ fontSize: 30, color: "#a5b4fc" }}>
            Product Engineer · Frontend Lead · Systems Builder
          </div>
          <div style={{ fontSize: 24, color: "#94a3b8", maxWidth: 880 }}>
            Building calm, reliable products where performance, architecture,
            and user experience meet.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
