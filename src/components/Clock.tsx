"use client";
import { useEffect, useState } from "react";
import { MapPin, Moon, Sun, Droplets, Wind } from "lucide-react";

function useClock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}

function formatTime(date: Date) {
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

type MetricCardProps = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

const MetricCard = ({ label, value, icon }: MetricCardProps) => (
  <div className="flex-1 p-3 rounded-xl bg-white/10 border border-white/10">
    <div className="flex items-center gap-2 text-xs text-neutral-400">
      <div className="p-1 rounded-md bg-white/10">{icon}</div>
      <span>{label}</span>
    </div>
    <div className="mt-1 text-3xl font-medium text-white">{value}</div>
  </div>
);

export default function Clock() {
  const time = useClock();
  const formattedTime = formatTime(time);
  const hours = time.getHours();
  const isNight = hours >= 18 || hours < 6;

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#0E0E0E]">
      <div className="h-56 w-md p-4 rounded-4xl bg-[#1C1C1C] border-2 border-[#262626]">
        <div className="h-full p-2 rounded-3xl bg-white/10 border-6 border-black/60">
          <div className="flex h-full gap-2">
            {/* LEFT PANEL */}
            <div className="w-2/5 h-full p-2 space-y-5 rounded-2xl bg-white/70 border border-black/40 text-neutral-800">
              <div className="flex items-center gap-1 text-xs">
                {isNight ? (
                  <Moon size={14} className="text-neutral-700" />
                ) : (
                  <Sun size={14} className="text-neutral-700" />
                )}
                <span>{isNight ? "Night" : "Day"}</span>
              </div>

              <div className="text-7xl font-medium">16°</div>

              <div className="flex items-center gap-1 text-xs">
                <MapPin size={10} className="text-neutral-700" />
                <span>Delhi</span>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex flex-col h-full">
              {/* METRICS */}
              <div className="flex gap-2 pb-2">
                <MetricCard label="AQI" value="701" icon={<Wind size={12} />} />
                <MetricCard
                  label="Humidity"
                  value="68%"
                  icon={<Droplets size={12} />}
                />
              </div>

              {/* CLOCK */}
              <div className="mt-auto rounded-2xl bg-white/10 border border-white/10 p-2 text-center text-5xl font-mono text-white">
                {formattedTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
