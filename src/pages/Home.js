// import React from "react";
import Title from "../components/Title";
import Project from "../components/Project"

export default function Home() {
    return (
      <div className='home'>
        <Title/>
        <Project title="Introduction" readmore="Introduction" 
            content="A good friend of mine stopped me in my tracks one day when she told me that I was the “most emotional coder [she] had ever met.” 
            She wasn’t wrong: my computer science career has seen all of the epic highs and lows of a Greek tragedy. Since that conversation, I’ve come 
            to realize that my connection with my emotions is, in fact, my greatest asset in the tech world. With reference to the gendered ideas of what 
            it means to be “emotional” and the feminist ethics of care philosophy, I explore my emotion-centered approach to coding in the following digital 
            humanities projects. Through these, I advocate for a greater emotional relationship with our data, the products that we create, and ourselves."/>
        <Project title="Colombia Periodical Licenses Map" readmore="Colombia-Periodical-Licenses-Map" seeproject="https://allisonlehn.maps.arcgis.com/apps/instant/media/index.html?appid=6df1792f3e5e4762ba2a2e8302d42d52" 
            content="As part of the Colombia Digital History Lab, I painstakingly digitized and geocoded images of archival documents listing Colombian 
            periodical licenses from the early- to mid-20th century. I then created an interactive digital map to make this data explorable for scholars 
            of Latin America. Throughout the process, I truly realized the immense and underappreciated effort behind archival digitization, as well as 
            the responsibilities involved with creating a project for and with the public."/>
        <Project title="RuPaul’s Machine Learning Race" readmore="RuPauls-Machine-Learning-Race" seeproject="https://medium.com/@allison_98737/list/rupauls-machine-learning-race-c79a58348ad2" 
            content="In response to a frustratingly difficult machine learning class, I decided to create a completely beginner-friendly and imperfect 
            introduction to several machine learning techniques, including classification, regression, and dimension reduction, through the entertaining 
            example of rating the runway outfits on RuPaul’s Drag Race. In the process of gathering the data for this analysis, I also created a tutorial 
            for web scraping the images of these outfits."/>
        <Project title="Portfolio Website" readmore="Portfolio-Website" 
            content="My first foray into software development was nothing short of devastating, forcing me to completely question my space in the computer 
            science field. However, you’re currently visiting a website that I successfully coded and deployed with my own ten fingers, so somewhere along 
            the way I clearly figured things out. From giving myself the space to learn on my own terms to recognizing the power of true friendship, nowhere 
            is my technical and emotional growth more prominent than my journey through the world of web development." />
        <Project title="Frustrations, Explorations, and Aspirations" readmore="Frustrations-Explorations-Aspirations" 
            content={<div>The process of assembling this portfolio saw the rise and fall of dozens of project ideas along the way. 
            As part of overcoming my internalized hatred for “quitting” and “failure,” I’ve reframed how I think about these 
            projects by classifying them into one of the three <i>-ations</i>: frustrations, explorations, and aspirations. Despite not 
            making the cut as finalized projects, these all were still worth discussing and appreciating in their own right.</div>}/>
        <Project title="Conclusion" content="Taking all of these works into consideration, I reflect on what I’ve learned from the process and how my emotions 
            have evolved as a result. I think about what emotional coding means for the world and how this work helps contribute to that vision." 
            readmore="Conclusion"/>
      </div>
      
    );
  }