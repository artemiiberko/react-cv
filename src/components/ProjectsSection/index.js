import React from "react"
import Icon1 from "../../images/project-primeone.png"
import Icon2 from "../../images/project-sortedtable.png"
import Icon3 from "../../images/project-chat.png"
import Icon4 from "../../images/project-weatherapp.png"
import Icon5 from "../../images/project-adminpanel.png"
import Icon6 from "../../images/project-foodapp.jpg"

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsH2,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsP,
} from "./ProjectsElements"

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard target="_blank" href="https://mini-admin.netlify.app/">
          <ProjectsIcon src={Icon5} />
          <ProjectsH2>Admin Panel</ProjectsH2>
          <ProjectsP>
            React Application with RestApi, Login, Tables with adding, editing
            and deleting records
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard
          target="_blank"
          href="https://www.youtube.com/watch?v=QzAbcwrSYrU"
        >
          <ProjectsIcon src={Icon6} />
          <ProjectsH2>Food Scanner</ProjectsH2>
          <ProjectsP>
            Mobile App created using React Native. Scan the food and calculate
            daily intake of calories and PFC
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard
          target="_blank"
          href="https://artemiiberko.github.io/primeone/"
        >
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>PrimeOne</ProjectsH2>
          <ProjectsP>RWD Layout (HTML, SCSS, BEM)</ProjectsP>
        </ProjectsCard>
        <ProjectsCard
          target="_blank"
          href="https://artemiiberko.github.io/sortedtable/"
        >
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Sorted Table</ProjectsH2>
          <ProjectsP>
            Simple table with abilities to sort, search, delete and add new
            items using React, JS, Bootstrap
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard
          target="_blank"
          href="https://artemiiberko.github.io/react-chat/"
        >
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>ReactChat</ProjectsH2>
          <ProjectsP>Real-time chat using React, JS and Firebase</ProjectsP>
        </ProjectsCard>
        <ProjectsCard
          target="_blank"
          href="https://artemiiberko.github.io/weatherapp/"
        >
          <ProjectsIcon src={Icon4} />
          <ProjectsH2>WeatherApp</ProjectsH2>
          <ProjectsP>Weather App using React, JS and Weather API</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
