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

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "5%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
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
    title: "Voleyball",
    emoji: "🏐",
    left: "70%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "65%",
  },
  {
    title: "Running",
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
  return (
    <div className="pb-20">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A gimplse into my world"
          description="Learn more about who Iam, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My reads"
              description="Explore the books shaping my perspectives"
            />

            <div>
              <Image
                className="w-40 mx-auto mt-8"
                src={bookImage}
                alt="Book cover"
              />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My toolbox"
              description="Explore the technologies and tools I use to create digital
                experiences."
              className="px-6 pt-6"
            />
            <ToolBoxItems items={toolboxItems} className="mt-6" />
            <ToolBoxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              className="px-6 py-6"
              title="Beyond the code"
              description="Explore my interests and hobbies beyond the code"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                  style={{
                    left:hobby.left,
                    top:hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={memojiSmile} alt="smiling memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
