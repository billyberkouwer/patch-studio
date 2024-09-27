"use client"

import { CreativeProjectType } from "@/types";
import CreativeProject from "./CreativeProject";
import "./creative-project-section.scss";

export default function CreativeProjectSection({
  creativeProjects,
}: {
  creativeProjects: CreativeProjectType[];
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
