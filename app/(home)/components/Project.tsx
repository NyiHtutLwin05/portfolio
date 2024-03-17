import React from "react";
import {
  SiGoogleanalytics,
  SiMantine,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const Project = () => {
  const projects = [
    {
      title: "Super Select - Glass & Aluminium",
      tech: [SiReact, SiMantine, SiGoogleanalytics, SiTailwindcss],
      link: "https://www.superselectglass.com/",
      cover: "/pj.png",
      background: "bg-indigo-500",
    },
    {
      title: "Porfolio",
      tech: [
        SiReact,
        SiNextdotjs,
        SiGoogleanalytics,
        SiTailwindcss,
        SiTypescript,
      ],
      link: "https://www.superselectglass.com/",
      cover: "/Screenshot from 2024-03-17 01-09-56.png",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, key) => {
                        return <Icon key={key} className="w-8 h-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
