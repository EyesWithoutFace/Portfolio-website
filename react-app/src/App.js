import './App.css';
import React from 'react';
import Navbar from './Navbar'

 const  Main = () => {
   return (
    
   <main>
    <div className="mission-grid">
    <h2 className="mission-title">Mission</h2>
<article className="mission-statement">
    <p className="missionp">Develop high quality and affordable websites/applications, 
        enable clients to establish presence online, enhance
        web solutions and assure accessibility on the web.
    </p>

<h2 className="project-title">Projects</h2>
<div id="projects">
    <ul>
        <a href="https://github.com/EyesWithoutFace/Fortune-Teller"><li>Fortune-Teller</li></a>
        <a href="https://github.com/EyesWithoutFace/PySimpleGui-Calculator"><li>Python Calculator</li></a>
        <a href="https://github.com/EyesWithoutFace/Snake-Game-Python"><li>Snake Game (Python)</li></a>
    </ul>
</div>
</article>
</div>
<h2>Skills</h2>
<div id="skills"></div>
<img src="https://github.com/EyesWithoutFace/Portfolio-website/blob/main/react-app/build/html5.png?raw=true" alt="HTML" id="html5"/>
<img src="https://github.com/EyesWithoutFace/Portfolio-website/blob/main/react-app/build/css3.png?raw=true" alt="CSS" id="css3"/>
<img src="javascript.png" alt="Javascript" id="javascript-img"/>
<img src="https://github.com/EyesWithoutFace/Portfolio-website/blob/main/react-app/build/cli.png?raw=true" alt="Command Line(Linux)" id="cli-img"/>
<img src="https://github.com/EyesWithoutFace/Portfolio-website/blob/main/react-app/build/git.png?raw=true" alt="Git" id="git-img"/>
<img src="https://github.com/EyesWithoutFace/Portfolio-website/blob/main/react-app/build/python.png?raw=true" alt="Python" id="python-img"/>
</main>
  );
}

export default Main