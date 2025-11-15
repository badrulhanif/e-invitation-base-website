"use client";

import Image from "next/image";

import { Timer } from "@/components/ui/Timer";

export default function Home() {
  return (
    <section className="flex flex-col gap-8 p-8 sm:p-16 w-full mx-auto max-w-4xl items-center justify-center text-white">
      <div className="relative w-[40vh] h-[50vh] rounded-3xl overflow-hidden shadow-xl border border-white/10">
        <Image
          fill
          src="/Images/hero-banner.jpg"
          alt=""
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute flex px-2 py-1  left-1/2 -translate-x-1/2 top-4 sm:top-8 items-center justify-center  whitespace-nowrap min-w-max rounded-full border border-white/10 bg-white/10">
          <Timer
            targetDate={new Date("2026-08-15T14:00:00")}
            render={(timeLeft) => {
              if (!timeLeft) return "Birthday Sayang!";
              const dayText = timeLeft.days === 1 ? "Day" : "Days";
              return `${timeLeft.days} ${dayText} Left`;
            }}
          />
        </div>
        <div className="absolute flex flex-col gap-2 inset-x-0 bottom-4 sm:bottom-8 items-center justify-center">
          <h2 className="text-xl sm:text-2xl font-bold">BIRTHDAY SAYANG</h2>
          <p>Sat, 15 Aug 2026, 2:00 PM</p>
          <p>Secret Location</p>
        </div>
      </div>
      <div className="space-y-4 text-center">
        <h2 className="text-4xl sm:text-6xl font-bold">Bonjour</h2>
        <p>
          Lorem ipsum amet tu init marisa de la paris de espanyol bola en de
          constant de papel
        </p>
      </div>
      <button className="p-4 w-full max-w-lg rounded-full cursor-pointer backdrop-blur-md shadow-xl border border-white/30 bg-white/10">
        Title
      </button>
    </section>
  );
}
