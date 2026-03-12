"use client";

interface BentoCardProps {
  title?: string;
  date?: string;
  bg: string;
  contentHeight: number;
  dark?: boolean;
  videoSrc?: string;
}

function BentoCard({
  title,
  date,
  bg,
  contentHeight,
  dark = false,
  videoSrc = "/nav.mp4",
}: BentoCardProps) {
  const outerShadow = dark
    ? "0 10px 26px rgba(0,0,0,0.72), 0 2px 6px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.18), 0 0 22px rgba(255,255,255,0.06)"
    : "0 10px 24px rgba(0,0,0,0.65), 0 2px 6px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.16), 0 0 20px rgba(255,255,255,0.05)";

  const innerShadow = dark
    ? "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 0 0 1px rgba(255,255,255,0.10), inset 0 0 22px rgba(255,255,255,0.06)"
    : "inset 0 1px 0 rgba(255,255,255,0.28), inset 0 0 0 1px rgba(255,255,255,0.10), inset 0 0 22px rgba(255,255,255,0.05)";

  return (
    <div
      className="flex flex-col overflow-hidden rounded-[14px] border border-[#2a2a2a] p-0.5"
      style={{
        backgroundColor: dark ? bg : "#181818",
        boxShadow: `${outerShadow}, inset 0 0 0 1px #1f1f1f`,
      }}
    >
      {/* Video area */}
      <div
        className="w-full overflow-hidden rounded-[10px] bg-black"
        style={{ height: contentHeight, boxShadow: innerShadow }}
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

const columns: BentoCardProps[][] = [
  [
    {
      title: "Novelty",
      date: "February 2026",
      bg: "#ffffff",
      contentHeight: 200,
      videoSrc: "/navbar.mp4",
    },
    {
      title: "Testimonials",
      date: "September 2025",
      bg: "#ffffff",
      contentHeight: 350,
      videoSrc: "/mac.mp4",
    },
    {
      title: "Sidebar",
      date: "February 2025",
      bg: "#1c1c1c",
      contentHeight: 90,
      dark: true,
      videoSrc: "/checkmark.mp4",
    },
  ],
  [
    {
      title: "",
      date: "",
      bg: "#181818",
      contentHeight: 270,
      dark: true,
      videoSrc: "/game.mp4",
    },
    {
      title: "Combobox",
      date: "December 2025",
      bg: "#c8c8c8",
      contentHeight: 160,
      videoSrc: "/earlylaunch.mp4",
    },
    {
      title: "Next.js Dev Tools",
      date: "February 2025",
      bg: "#ffffff",
      contentHeight: 250,
      videoSrc: "/dbideas.mp4",
    },
  ],
  [
    {
      title: "",
      date: "",
      bg: "#f5f4f0",
      contentHeight: 180,
      videoSrc: "/idk.mp4",
    },
    {
      title: "",
      date: "",
      bg: "#f0f0ee",
      contentHeight: 160,
      videoSrc: "/navbar.mp4",
    },
    {
      title: "Devouring Details",
      date: "July 2025",
      bg: "#ffffff",
      contentHeight: 290,
      videoSrc: "/clock.mp4",
    },
  ],
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] p-1.5 font-mono">
      <div className="flex items-start gap-1.5">
        {columns.map((cards, colIndex) => (
          <div key={colIndex} className="flex flex-1 flex-col gap-1.5">
            {cards.map((card, cardIndex) => (
              <BentoCard key={cardIndex} {...card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
