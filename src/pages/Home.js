// import React from "react";
import Title from "../components/Title";
import Project from "../components/Project"

export default function Home() {
    return (
      <div className='home'>
        <Title/>
        <Project title="Introduction" readmore="Introduction" content="A good friend of mine stopped me in my tracks one day when she told me that I was the “most emotional coder [she] had ever met.” She wasn’t wrong: my computer science career has seen all of the epic highs and lows of a Greek tragedy. Since that conversation, I’ve come to realize that my connection with my emotions is, in fact, my greatest asset in the tech world. With reference to the gendered ideas of what it means to be “emotional” and the feminist ethics of care philosophy, I explore my emotion-centered approach to coding in the following digital humanities projects. Through these, I advocate for a greater emotional relationship with our data, the products that we create, and ourselves."/>
        <Project title="Colombia Periodical Licenses Map" readmore="Colombia-Periodical-Licenses-Map" seeproject="https://www.w3schools.com/css/css_form.asp" content="As part of the Colombia Digital History Lab, I painstakingly digitized and geocoded images of archival documents listing Colombian periodical licenses from the early- to mid-20th century. I then created an interactive digital map to make this data explorable for scholars of Latin America. Throughout the process, I truly realized the immense and underappreciated effort behind archival digitization, as well as the responsibilities involved with creating a project for and with the public."/>
        <Project title="RuPaul's Machine Learning Race" readmore="RuPauls-Machine-Learning-Race" seeproject="https://www.w3schools.com/css/css_form.asp" content="In response to a frustratingly difficult machine learning class, I decided to create a completely beginner-friendly and imperfect introduction to several machine learning techniques, including classification, regression, and dimension reduction, through the entertaining example of rating the runway outfits on RuPaul’s Drag Race. In the process of gathering the data for this analysis, I also created a tutorial for web scraping the images of these outfits."/>
        <Project title="Frustrations, Explorations, and Aspirations" readmore="Frustrations-Explorations-Aspirations" content="The process of assembling this portfolio saw the rise and fall of dozens of project ideas along the way. As part of overcoming my internalized hatred for “quitting” and “failure,” I’ve reframed how I think about these projects by classifying them into one of the three -ations. Frustrations are projects that reached a dead end and had to be abandoned, explorations are the small-scale projects that helped me learn new technologies, and aspirations are the incomplete projects, still in some idea form due to some limitations of the present. Despite not making the cut as finalized projects, these all were learning opportunities that are still worth discussing and appreciating."/>
        <Project title="Conclusion" content="blah" readmore="Conclusion"/>
      </div>
      
    );
  }