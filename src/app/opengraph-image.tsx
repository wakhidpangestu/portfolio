import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { DATA } from "@/data/resume";

export const alt = `${DATA.name} — ${DATA.description}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const getAssets = async () => {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const [cabinetGrotesk, clashDisplay, avatarBuffer] = await Promise.all([
      readFile(path.join(publicDir, "fonts", "CabinetGrotesk-Medium.ttf")),
      readFile(path.join(publicDir, "fonts", "ClashDisplay-Semibold.ttf")),
      readFile(path.join(publicDir, "me.png")),
    ]);
    const mime =
      avatarBuffer[0] === 0xff && avatarBuffer[1] === 0xd8
        ? "image/jpeg"
        : "image/png";
    return {
      cabinetGrotesk,
      clashDisplay,
      avatarDataUri: `data:${mime};base64,${avatarBuffer.toString("base64")}`,
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
          position: "relative",
          backgroundColor: "#050507",
          padding: "36px",
          fontFamily: "Cabinet Grotesk, sans-serif",
          color: "#fafafa",
          overflow: "hidden",
        }}
      >
        {/* Subtle architectural grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient lighting glows */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-120px",
            width: "620px",
            height: "620px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(56, 189, 248, 0.08) 40%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            left: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, transparent 65%)",
          }}
        />

        {/* Inner Glass Frame */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
            width: "100%",
            height: "100%",
            borderRadius: "28px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: "rgba(12, 12, 16, 0.86)",
            padding: "48px 52px",
            overflow: "hidden",
          }}
        >
          {/* Specular top hairline */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "12%",
              right: "12%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
            }}
          />

          {/* Left Column: Editorial Identity */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "67%",
              paddingRight: "32px",
            }}
          >
            {/* Eyebrow badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  fontSize: "15px",
                  letterSpacing: "0.1em",
                  color: "#d4d4d8",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "9999px",
                    backgroundColor: "#34d399",
                  }}
                />
                <span>FOUNDER &amp; CTO · ZENLAB STUDIO</span>
              </div>
            </div>

            {/* Hero Display Name + Subtitle */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Clash Display, sans-serif",
                  fontSize: "78px",
                  fontWeight: 600,
                  lineHeight: 0.96,
                  letterSpacing: "-0.04em",
                  color: "#ffffff",
                }}
              >
                <span>Wakhid</span>
                <span style={{ color: "#a1a1aa" }}>Pangestu.</span>
              </div>

              <div
                style={{
                  fontSize: "23px",
                  lineHeight: 1.4,
                  color: "#a1a1aa",
                  maxWidth: "600px",
                }}
              >
                Software Engineer crafting SaaS, Web3 &amp; AI systems from
                Jakarta, Indonesia.
              </div>
            </div>

            {/* Bottom Architectural Metrics Bar */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "36px",
                paddingTop: "22px",
                borderTop: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    color: "#71717a",
                  }}
                >
                  VENTURE
                </span>
                <span style={{ fontSize: "18px", color: "#f4f4f5" }}>
                  ZenLab · Teknify.id
                </span>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "32px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    color: "#71717a",
                  }}
                >
                  CORE STACK
                </span>
                <span style={{ fontSize: "18px", color: "#f4f4f5" }}>
                  TS · Rust · Java · Solidity
                </span>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "32px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    color: "#71717a",
                  }}
                >
                  TRACK RECORD
                </span>
                <span style={{ fontSize: "18px", color: "#f4f4f5" }}>
                  4× Hackathon Top Rank
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Double-Bezel Portrait + Domain */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "33%",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "12px",
                borderRadius: "36px",
                border: "1px solid rgba(255,255,255,0.14)",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
              }}
            >
              {assets?.avatarDataUri && (
                <img
                  src={assets.avatarDataUri}
                  alt={DATA.name}
                  width={260}
                  height={260}
                  style={{
                    width: "260px",
                    height: "260px",
                    borderRadius: "26px",
                    objectFit: "cover",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              )}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.14)",
                backgroundColor: "rgba(255,255,255,0.06)",
                fontSize: "17px",
                color: "#e4e4e7",
              }}
            >
              <span>wakhidpangestu.web.id</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a1a1aa"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </div>
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
