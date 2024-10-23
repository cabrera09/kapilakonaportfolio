import React from 'react';
import './projects.css'; // Import your CSS file

// Import your project image
import AwesometodosImg from './Awesometodos.jpg'; 

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project">
                <img src={AwesometodosImg} alt="Awesome Todos" className="project-image" />
                <h3>AwesomeTodos</h3>
                <p>This is a task management application that allows users to create, update, and delete tasks. It has a user-friendly interface and is built using React.</p>
                <div className="project-links">
                    <a href="https://awesometodo-yxcl.onrender.com" className="demo-link"> Demo</a>
                    <a href="https://github.com/cabrera09/awesometodo" className="source-link"> Source</a>
                </div>
            </div>
            {/* Add more projects as needed */}
        </section>
    );
};

export default Projects;
