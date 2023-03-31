import React from "react";

export default function Project(project) {
    var links = <div className="project--links">
            <a className="project--readmore" href={project.readmore}>read more</a>
        </div>
    if ("seeproject" in project) {
        links = <div className="project--links">
            <a className="project--readmore" href={project.readmore}>read more</a>
            <a className="project--seeproject" href={project.seeproject} target="_blank" rel="noopener noreferrer">see project</a>
        </div>
    }
    return (
        <div className="project">
            <div className="project--title" >{project.title}</div>
            <div className="project--content">{project.content}</div>
            {links}
        </div>
    )
}