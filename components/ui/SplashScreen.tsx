"use client";

import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

import { Timer } from "@/components/ui/Timer";
import { TimerItems } from "@/types";
import { marcellus } from "@/config/font";

export default function SplashScreen() {
  // const router = useRouter();
  const targetDate = new Date("2026-01-01T00:00:00");
  const [exiting, setExiting] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const handleComplete = () => {
    setExiting(true);
    setTimeout(() => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      // router.push("/");
    }, 600);
  };

  if (!hasMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col gap-4 text-xl items-center justify-center text-center overflow-hidden transform transition-transform duration-600 backdrop-blur-md shadow-xl text-white bg-[linear-gradient(to_bottom_right,#242615,#2E2D19,#342814,#3A2312,#1F1812,#2B2623)]/80 ${
        exiting ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div>
        <h2 className={`${marcellus.className} text-2xl`}>
          Every glance, every moment
        </h2>
        <p className="text-lg text-white/80">
          pleasure is waiting just for you...
        </p>
      </div>
      <Timer
        targetDate={targetDate}
        onComplete={handleComplete}
        render={(timeLeft: TimerItems | null) =>
          timeLeft ? (
            <div>
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </div>
          ) : null
        }
      />
      <p className="absolute bottom-24 text-base text-white/50">
        Tap anywhere to play music
      </p>
    </div>
  );
}
