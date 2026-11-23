import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = `${DATA.name} — ${DATA.description}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};

const getAssets = async () => {
  try {
    const [cabinetGrotesk, clashDisplay, avatarBuffer] = await Promise.all([
      fetch(
        new URL("../../public/fonts/CabinetGrotesk-Medium.ttf", import.meta.url)
      ).then((res) => res.arrayBuffer()),
      fetch(
        new URL("../../public/fonts/ClashDisplay-Semibold.ttf", import.meta.url)
      ).then((res) => res.arrayBuffer()),
      fetch(new URL("../../public/me.png", import.meta.url)).then((res) =>
        res.arrayBuffer()
      ),
    ]);
    return {
      cabinetGrotesk,
      clashDisplay,
      avatarDataUri: `data:image/png;base64,${arrayBufferToBase64(avatarBuffer)}`,
    };
  } catch (error) {
    console.error("Failed to load OG assets:", error);
    return null;
  }
};

export default async function Image() {
  const assets = await getAssets();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.18), transparent 45%), radial-gradient(circle at 15% 85%, rgba(16, 185, 129, 0.14), transparent 45%)",
          padding: "56px",
          color: "#fafafa",
          fontFamily: "Cabinet Grotesk, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {assets?.avatarDataUri && (
              <img
                src={assets.avatarDataUri}
                alt={DATA.name}
                width={116}
                height={116}
                style={{
                  width: "116px",
                  height: "116px",
                  borderRadius: "9999px",
                  border: "3px solid rgba(255,255,255,0.2)",
                  objectFit: "cover",
                }}
              />
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div
                style={{
                  fontSize: "20px",
                  color: "#a1a1aa",
                  letterSpacing: "0.02em",
                }}
              >
                {DATA.location}
              </div>
              <div
                style={{
                  fontSize: "22px",
                  color: "#e4e4e7",
                  fontWeight: 600,
                }}
              >
                Founder & CTO · ZenLab Studio
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.16)",
              backgroundColor: "rgba(255,255,255,0.06)",
              fontSize: "20px",
              color: "#d4d4d8",
            }}
          >
            wakhidpangestu.web.id
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontFamily: "Clash Display, sans-serif",
              fontSize: "68px",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            {DATA.name}
          </div>
          <div
            style={{
              fontSize: "28px",
              lineHeight: 1.4,
              color: "#a1a1aa",
            }}
          >
            {DATA.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {["TypeScript", "Next.js", "Rust", "Java", "Solidity", "AI Agents"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  fontSize: "20px",
                  color: "#e4e4e7",
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: assets
        ? [
            {
              name: "Cabinet Grotesk",
              data: assets.cabinetGrotesk,
              weight: 400,
              style: "normal",
            },
            {
              name: "Clash Display",
              data: assets.clashDisplay,
              weight: 600,
              style: "normal",
            },
          ]
        : undefined,
    }
  );
}
