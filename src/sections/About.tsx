"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NextJsIcon from "@/assets/icons/nextjs.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import memojiSmile from "@/assets/images/memoji-smile.png";
import { title } from "process";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const hobbies = [
  {
    title: "Lectura",
    emoji: "📚",
    left: "5%",
    top: "5%",
  },
  {
    title: "Cocinar",
    emoji: "🍳",
    left: "50%",
    top: "5%",
  },
  {
    title: "Videojuegos",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Camping",
    emoji: "🏕️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Voleibol",
    emoji: "🏐",
    left: "70%",
    top: "45%",
  },
  {
    title: "Musica",
    emoji: "🎵",
    left: "5%",
    top: "65%",
  },
  {
    title: "Correr",
    emoji: "🏃",
    left: "45%",
    top: "70%",
  },
];

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "NextJs",
    iconType: NextJsIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Acerca de mi"
          title="Una mirada a mi mundo"
          description="Aprende más sobre quién soy, qué hago y qué me inspira."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Mis lecturas"
                description="Explora los libros que moldean mis perspectivas"
              />

              <div>
                <Image
                  className="w-40 mx-auto mt-2 md:mt-0"
                  src={bookImage}
                  alt="Portada del libro"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Mis herramientas"
                description="Explora las tecnologías y herramientas que utilizo para crear experiencias digitales."
              />
              <ToolBoxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6 lg:m-2"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6 "
                title="Más allá del código"
                description="Explora mis intereses y pasatiempos más allá del código"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 cursor-pointer"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <Image
                  src={memojiSmile}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
