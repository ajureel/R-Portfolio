import React, { useState  } from 'react';
import Modal from '../Modal';

// For each project you feature in your portfolio, you should include the following:
// An image of the deployed application (either a GIF or a screenshot)
// The title of the project
// A link to the deployed application
// A link to the corresponding GitHub repository

const ProjectList = ({ category }) => {

    const [projects] = useState([
        {
          title: 'CryptoNow!',
          appLink: 'https://ajureel.github.io/CryptoNow/index.html',
          repoLink: 'https://github.com/ajureel/CryptoNow/',
        },
        {
            title: '2020 Digital Holiday Card',
            appLink: 'https://ureelfamily.com/xmas/2020Snow.html',
            repoLink: 'https://ureelfamily.com/xmas/2020Snow.html',
          },
          {
            title: 'Portfolio - Non-React Version',
            appLink: 'https://ajureel.github.io/AJUreel-Portfolio/',
            repoLink: 'https://github.com/ajureel/AJUreel-Portfolio',
          },
          {
            title: 'Bootcamp - Horiseon',
            appLink: 'https://ajureel.github.io/AJs_Horiseon/Develop/index.html',
            repoLink: 'https://github.com/ajureel/AJs_Horiseon',
          }
    ]);

    const linkDivStyle = 'align: left';

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, i) => (
          <div><h3>{project.title}</h3>
          <img
            // src={require(`../../assets/images/portfolio/${i}.png`).default}
            src={require(`../../assets/images/portfolio/${i}.png`)}
            alt={project.title}
            className="img-thumbnail mx-1"
            key={project.title}
          /><br/>
          <a href={project.appLink} style={{left: "-400px"}}>Deployed App</a>
          <br/><a href={project.repoLink} style={{left: "-400px"}}>Code Repository</a>
            <br/><br/>
        </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList;