"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { TimerItems } from "@/types";

export default function SplashScreen() {
  const router = useRouter();

  const targetDate = new Date("2025-11-10T00:18:00"); // YYYY-MM-DDTHH:MM:SS

  const calculateTimeLeft = (): TimerItems => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimerItems>(calculateTimeLeft());
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (timeLeft) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }

    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (!updatedTimeLeft) {
        clearInterval(timer);

        // // on changes: start exit animation
        setExiting(true);

        // // on changes: remove splash after animation
        setTimeout(() => {
          document.documentElement.style.overflow = "";
          document.body.style.overflow = "";
          router.push("/"); // redirect to home
        }, 600); // matches CSS transition duration
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [router, timeLeft]);

  // // on changes: hide splash if timeLeft is null
  if (!timeLeft && !exiting) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-9999 overflow-hidden transform transition-transform duration-700 ${
        exiting ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {timeLeft && (
        <div className="text-xl">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </div>
      )}
    </div>
  );
}
