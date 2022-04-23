import React from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';

// For each project you feature in your portfolio, you should include the following:
// An image of the deployed application (either a GIF or a screenshot)
// The title of the project
// A link to the deployed application
// A link to the corresponding GitHub repository

function Portfolio({ currentCategory }) {
  const { name, description } = currentCategory;
  if (name !== 'my portfolio') return;
  else return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <ProjectList category={currentCategory.name}  />
    </section>
  );
}

export default Portfolio;