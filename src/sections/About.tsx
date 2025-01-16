import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/javascript.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NextJsIcon from "@/assets/icons/next-js.svg";
import { TechIcon } from "@/components/TechIcon";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon ,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon ,
  },
  {
    title: "CSS3",
    iconType: CssIcon ,
  },
  {
    title: "NextJs",
    iconType: NextJsIcon ,
  },
  {
    title: "React",
    iconType: ReactIcon ,
  },
  {
    title: "Github",
    iconType: GithubIcon ,
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About me"
        title="A gimplse into my world"
        description="Learn more about who Iam, what I do, and what inspires me."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My reads</h3>
            <p>Explore the books shaping my perspectives</p>
          </div>
          <Image src={bookImage} alt="Book cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My toolbox</h3>
            <p>
              Explore the technologies and tools I use to create digital
              experiences.
            </p>
          </div>
          <div>
            {toolboxItems.map((item, index) => (
              <div key={index}>
                <TechIcon component={item.iconType}/>
                <span>{item.title}</span>

              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My reads</h3>
            <p>Explore the books shaping my perspectives</p>
          </div>
          <Image src={bookImage} alt="Book cover" />
        </Card>
      </div>
    </div>
  );
};
