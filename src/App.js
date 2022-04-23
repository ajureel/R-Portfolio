import React, { useState }  from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';


function App() {
  const [categories] = useState([
    {
      name: "about me",
      description:
        "Get to know me"
    },
    { name: "my portfolio", description: "Some of the projects I've done" },
    { name: "contact me", description: "How to connect with me" },
    {
      name: "resume",
      description: "Experience and skills"
    },
  ]);


  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        >
      </Nav>
      <main>
        <About></About>
        {/* <Portfolio  currentCategory={currentCategory}></Portfolio> */}
        <Portfolio currentCategory={currentCategory}></Portfolio>
      </main>
    </div>
  );
}

export default App;