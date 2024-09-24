"use client"

import CreativeProject from "./CreativeProject";
import "./creative-project-section.scss";

export default function CreativeProjectSection({
  creativeProjects,
}: {
  creativeProjects: {
    title: string;
    content: {
      images: { url: string }[];
      textContent: string;
      link: string;
    };
  }[];
}) {
  return (
    <div className="creative-project-section__wrapper">
      <div className="creative-project-section__container">
        {creativeProjects?.length
          ? creativeProjects.map((project) => (
              <CreativeProject key={project.title} creativeProject={project} />
            ))
          : null}
      </div>
    </div>
  );
}
