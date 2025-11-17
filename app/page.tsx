"use client";

import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppleShortcutsSolid,
  GoogleCircleSolid,
  SoundHighSolid,
  SoundOffSolid,
} from "iconoir-react";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useRef, useState } from "react";

import { parisienne } from "@/config/font";
import { Timer } from "@/components/ui/Timer";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [accepted, setAccepted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [coming, setComing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    formState: { errors },
  } = form;

  const playAudio = () => {
    if (audioRef.current && !hasPlayed) {
      audioRef.current.volume = 0.5;
      audioRef.current.muted = false;
      audioRef.current.play().catch(() => {});
      setHasPlayed(true);
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  useEffect(() => {
    const handleClick = () => playAudio();
    window.addEventListener("click", handleClick, { once: true });
    return () => window.removeEventListener("click", handleClick);
  }, [hasPlayed]);

  useEffect(() => {
    const saved = localStorage.getItem("sayangAccepted");
    if (saved === "true") {
      setAccepted(true);
    }
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setComing(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const formData = new FormData();
      formData.append("email", values.email);

      const response = await fetch("/api/sendInvite", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSuccessMessage("Your message has been sent successfully!");
      setAccepted(true);
      localStorage.setItem("sayangAccepted", "true");
      form.reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Error submitting form";
      setErrorMessage(message);
    } finally {
      setComing(false);
    }
  }

  return (
    <section className="flex flex-col gap-8 p-8 sm:p-16 my-8 sm:my-0 w-full mx-auto max-w-2xl items-center justify-center text-white">
      <audio autoPlay loop ref={audioRef} src="/Audio/playback.mp3" />

      <button
        onClick={toggleMute}
        className="fixed top-6 sm:top-8 right-6 sm:right-8 z-50 cursor-pointer"
      >
        {isMuted ? (
          <SoundOffSolid className="w-6 h-6 text-[#f6caa9]/50 hover:text-[#f0ad7a]" />
        ) : (
          <SoundHighSolid className="w-6 h-6 hover:text-[#f0ad7a]" />
        )}
      </button>
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
              if (!timeLeft) return "Celebration Day!";
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
        <h2
          className={`${parisienne.className} text-4xl sm:text-6xl italic font-bold`}
        >
          My Sweetest One
        </h2>
        <p>
          A day crafted with intention, wrapped in mystery, and designed to
          sweep you off your feet.
        </p>
        <p className="italic text-white/50">
          Every moment has been made just for you
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full items-center justify-center">
        {!accepted ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-8 w-full max-w-md"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@example.com"
                        {...field}
                        className={`w-full h-14 rounded-full shadow-none bg-transparent! ${
                          errors.email
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="p-4 w-full max-w-md rounded-full cursor-pointer backdrop-blur-md shadow-xl border border-white/15 bg-white/5 hover:text-[#f0ad7a] hover:border-[#f0ad7a] hover:bg-[#f0ad7a]/5"
              >
                <span className="mx-auto up-down-on-hover text-base font-semibold">
                  {coming ? "On my way..." : "I’m Coming, Baby!"}
                </span>
              </button>
            </form>
          </Form>
        ) : (
          <div className="space-y-8 w-full text-center">
            <p className="italic text-[#f0ad7a]">
              Your spot is saved. I'm all yours, baby!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full items-center justify-center">
              <a
                href="/api/apple-calendar"
                target="_blank"
                rel="noreferrer noopener"
                className="flex p-4 gap-2 items-center justify-center w-full sm:w-auto rounded-full cursor-pointer backdrop-blur-md shadow-xl border border-white/15 bg-white/5 hover:text-[#f0ad7a] hover:border-[#f0ad7a] hover:bg-[#f0ad7a]/5"
              >
                <AppleShortcutsSolid className="w-6 h-6" />
                <span>Add To Apple Calendar</span>
              </a>
              <a
                href="/api/google-calendar"
                target="_blank"
                rel="noreferrer noopener"
                className="flex p-4 gap-2 items-center justify-center w-full sm:w-auto rounded-full cursor-pointer backdrop-blur-md shadow-xl border border-white/15 bg-white/5 hover:text-[#f0ad7a] hover:border-[#f0ad7a] hover:bg-[#f0ad7a]/5"
              >
                <GoogleCircleSolid className="w-6 h-6" />
                <span>Add To Google Calendar</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
