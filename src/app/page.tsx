"use client";

import {
  SiGithub,
  SiHostinger,
  SiLinkedin,
  SiYoutube,
  SiWise,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { NomadIcon } from "../components/nomad-icon";

interface Link {
  name: string;
  description?: string;
  url: string;
  icon?: ReactNode;
}

const externalLinks: Link[] = [
  {
    name: "LinkedIn",
    description: "follow my career",
    url: "https://www.linkedin.com/in/theodoro-ferreira-b3597622b",
    icon: <SiLinkedin className="fill-[#0077B5] dark:fill-zinc-200" />,
  },
  {
    name: "GitHub",
    description: "steal my code",
    url: "https://github.com/theodoroferreira",
    icon: <SiGithub />,
  },
  {
    name: "YouTube",
    description: "watch me yap",
    url: "https://www.youtube.com/@theodorogferreira",
    icon: <SiYoutube className="fill-[#FF0032] dark:fill-zinc-200" />,
  },
  {
    name: "Hostinger",
    description: "support me and get a discount",
    url: "https://hostinger.com.br?REFERRALCODE=GVZTHEOGFTJV",
    icon: <SiHostinger className="fill-[#673DE6] dark:fill-zinc-200" />,
  },
  {
    name: "Nomad",
    description: "support me and get 0% fee on your first conversion",
    url: "https://nomad.onelink.me/wIQT/Account?code=HSG8KWM721%26n=Theodoro%20Gaspar%20Ferreira",
    icon: <NomadIcon className="fill-[#FFCE00] stroke-[#FFCE00] dark:fill-zinc-200 dark:stroke-zinc-200" />,
  },
  {
    name: "Wise",
    description: "support me and get 0% fee on your first conversion",
    url: "https://wise.com/invite/ilpn/theodorog10",
    icon: <SiWise className="fill-[#9FE870] dark:fill-zinc-200" />,
  }
];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="group flex items-center justify-between p-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
    >
      <span className="flex items-center gap-4">
        {link.icon} {link.name}
        <span className="-translate-x-4 text-zinc-500 opacity-0 transition-all max-sm:hidden sm:group-hover:translate-x-0 sm:group-hover:opacity-100 dark:text-zinc-400">
          {link.description}
        </span>
      </span>
      <ArrowUpRight
        strokeWidth={1.4}
        className="size-5 shrink-0 text-zinc-800 transition-all sm:group-hover:rotate-45 dark:text-zinc-200"
      />
    </a>
  );
};

const EMAIL = "theodorogasparferreira@gmail.com";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group/copy -m-8 flex cursor-pointer items-center gap-3 p-8 transition-all"
    >
      {EMAIL}
      {copied ? (
        <Check strokeWidth={1.4} className="size-4 text-green-600 dark:text-emerald-500" />
      ) : (
        <Copy
          strokeWidth={1.4}
          className="size-4 text-zinc-800 dark:text-zinc-200"
        />
      )}
    </button>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm">
        An enthusiastic Spring Boot developer with a solid foundation in Java,
        RESTful web services, APIs, functional programming and OOP. Over 3 years of experience
        building backend applications with Spring Boot. I&apos;m a quick learner and
        passionate about writing efficient, maintainable code and collaborating in agile teams.
      </p>
      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {externalLinks.map((link: Link) => (
          <ExternalLink key={link.url} {...link} />
        ))}
      </div>
      <div className="flex justify-center gap-6 max-sm:flex-col-reverse sm:justify-between">
        <div className="flex flex-col justify-center gap-4 max-sm:items-center">
          <CopyEmailButton />
          <span className="-mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-600 ring-1 ring-green-500 dark:bg-transparent dark:text-emerald-500 dark:ring-emerald-500">
            <div className="size-2 animate-pulse rounded-full bg-green-500 dark:bg-emerald-500" />
            Online
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="/theodoro-ferreira-cv.pdf"
            download="theodoro-ferreira-cv.pdf"
            className="flex flex-row items-center justify-center gap-3 rounded bg-sky-300 p-4 text-sky-800 ring-1 ring-sky-500 transition-all sm:hover:bg-sky-400 dark:bg-inherit dark:text-sky-500 dark:ring-sky-500 sm:sm:dark:hover:bg-zinc-800"
          >
            <span className="text-nowrap">Download my CV</span>
            <Download strokeWidth={1.4} className="size-5 max-sm:hidden" />
          </a>
        </div>
      </div>
    </div>
  );
}
