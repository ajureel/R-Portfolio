import React, { useEffect  } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Background from '../../assets/images/sunrise-h200.jpg';

function Nav(props) {

  const {
    categories=[],
    setCurrentCategory,
    currentCategory,
  } = props;
  // categories.push(...props.children[1]);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);


// console.log(setCurrentCategory);
// console.log(props.children[1]);

  return (
    <header style={{ height: "150px", backgroundImage: `url(${Background})` }}>
        <h1>
          <a href="" >
            AJ Ureel
          </a>
        </h1>
        <nav >
          <ul className="flex-row" >
            {/* <li className="mx-2">
              <a href="#about">
                About me
              </a>
            </li>
            <li>
              <span>Contact</span>
            </li> */}
            {categories.map((category) => (
            <li className={`mx-1 
                 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
            {/* <li className={`mx-1 `} key={category.name}> */}
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
                {/* {' * '}{(category.name)}{' * '} */}
              </span>
            </li>
          ))}
          </ul>
        </nav>
    </header>
      
  );
}

export default Nav;
/*
function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          AJ Ureel
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
*/