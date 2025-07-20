import React from 'react'




import './Portfolio.css'

const Portfolio = () => {

    
    return(
        <div id="portfolio" className="portfolio-project" >
            <h1>Projects</h1>
            <div className ="projects">
            <div className='project-card'>
               <img  className="project-img" 
                src="https://res.cloudinary.com/daqtrti8f/image/upload/v1739862519/5289039_zv7jjv.jpg" alt="project"/>
                <a href="https://srijabtodosapp.ccbp.tech/"   target="_blank">Tourism </a>

            
            </div>
            <div  className='project-card'>
                <img  className="project-img" src="https://res.cloudinary.com/daqtrti8f/image/upload/v1739862119/8484561_3912427_x2aqmx.svg" alt="project"/>
                <a href="https://srijabtodosapp.ccbp.tech/"   target="_blank">Todo App</a>
            </div>
            <div  className='project-card'>
                <img  className="project-img" src="https://res.cloudinary.com/daqtrti8f/image/upload/v1739862098/high-protein-meal-with-smartphone-arrangement_gybqfl.jpg" alt="project"/>
                <a href="https://srijabtodosapp.ccbp.tech/"   target="_blank">Food Munch</a>
            </div>
            <div  className='project-card'>
                <img  className="project-img" src="https://res.cloudinary.com/daqtrti8f/image/upload/v1739862068/30116544_7648828_cbrh5x.jpg" alt="project"/>
                <a href="https://srijabtodosapp.ccbp.tech/"   target="_blank">Nxt Trendz</a>
            </div>
            </div>
        </div>
    )
}
export default Portfolio