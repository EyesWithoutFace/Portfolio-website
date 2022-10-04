import './App.css';
import React from 'react';


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
        <a href="./dima/dima.html"><li>Dima the Cat</li></a>
    </ul>
</div>
</article>
</div>
<h2>Skills</h2>
<div id="skills"></div>
<img src="html5.png" alt="HTML" id="html5"/>
<img src="css3.png" alt="CSS" id="css3"/>
<img src="javascript.png" alt="Javascript" id="javascript-img"/>
<img src="cli.png" alt="Command Line(Linux)" id="cli-img"/>
<img src="git.png" alt="Git" id="git-img"/>
<img src="python.png" alt="Python" id="python-img"/>
</main>
  );
}

export default Main