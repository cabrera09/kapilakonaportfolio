import React from 'react';
import './tools.css'; // Import your CSS file

// Import images from the components folder
import htmlImg from './html.jpg'; // Adjust the file name as necessary
import cssImg from './css.jpg';
import figmaImg from './figma.jpg';
import mongodbImg from './mongodb.jpg';
import reactImg from './react.jpg';
import nodeImg from './node.jpg';

const toolsData = [
    { id: 1, name: 'HTML', imgSrc: htmlImg, description: 'Structure your web content with HTML.' },
    { id: 2, name: 'CSS', imgSrc: cssImg, description: 'Style your web pages beautifully with CSS.' },
    { id: 3, name: 'Figma', imgSrc: figmaImg, description: 'Design and prototype user interfaces with Figma.' },
    { id: 4, name: 'MongoDB', imgSrc: mongodbImg, description: 'NoSQL database for storing data.' },
    { id: 5, name: 'React', imgSrc: reactImg, description: 'A JavaScript library for building user interfaces.' },
    { id: 6, name: 'Node.js', imgSrc: nodeImg, description: 'JavaScript runtime for server-side development.' },
];

const Tools = () => {
    return (
        <section id="tools">
            <h2>Tools I Use</h2>
            <div className="tools-container">
                {toolsData.map(tool => (
                    <div className="tool-item" key={tool.id}>
                        <img src={tool.imgSrc} alt={tool.name} />
                        <h3>{tool.name}</h3>
                        <p>{tool.description}</p> {/* Displaying the tool description */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tools;
