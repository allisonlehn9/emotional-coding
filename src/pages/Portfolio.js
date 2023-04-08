import Link from "../components/Link";
import Footnote from "../components/Footnote";

export default function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfolio Website</h1>
            <p>
                Back in the fall of 2021, I entered my first software engineering course, 
                entirely inexperienced and ready to learn the fundamentals of what I assumed 
                would be my future career. At the end of the year, I left the course as a shell 
                of a being, drastically reevaluating my ambitions in life. After a year-long break, 
                I gave it another shot, and built the very website you’re currently interacting with. 
                While it might not look like much to a more advanced software engineer, I love it 
                like it’s my own child, and it felt wrong to not dignify it with a complete backstory 
                of how it came into being.
            </p>
            <p>
                If you’ve read about my previous project (<a className="pagelink" href="/RuPauls-Machine-Learning-Race">
                RuPaul’s Machine Learning Race</a>), you’ll know that before I struggled my way through 
                my machine learning course, I was absolutely obliterated by the software engineering course 
                I took the semester before, largely for the same reasons. The class aimed to walk us through 
                the fundamentals of software engineering: working with Git, coding web application functionality, 
                configuring databases, deployment, and more. For the half of the class that had already landed a 
                software engineering internship the summer before, the course essentially offered an accelerated 
                recap of everything that they already knew, plus a few additional details. For me and the rest of 
                my peers that were encountering this content for the very first time, it was hell on wheels. Not 
                only did the class preparation require upwards of four hours to even complete, the structure of the 
                lessons wasn’t well-designed enough to warrant the effort.
            </p>
            <p>
                Rather than waste my time learning things in the most frustratingly complicated and unclear way possible, 
                I decided to cut my losses and assume the role of the class whistleblower. At the start of the semester, my 
                self-confidence was still intact, so I had the energy to be a micro-activist. If I was struggling, I was 
                certain that other people—too afraid to speak up—were as well. However, it’s difficult work to advocate for 
                a group that never really asked you to: I constantly worried that I was projecting my feelings onto others, 
                and that they were actually doing just fine, and wished that I would stop whining all the time. This was made 
                worse by the fact that there were people who outspokenly <i>were</i> doing fine, largely due to their prior 
                knowledge of the field.
            </p>
            <p>
                The primary goal for the course was to work together in teams to design, build, and deploy a web application to 
                submit as a final project. In theory, this makes total sense—web development is best learned through practice. 
                However, it’s very difficult to work in teams when the skill levels between members are drastically different. 
                Five out of seven of my teammates had web development experience prior to the class; they all knew and preferred 
                the React library of JavaScript, so we collectively decided to build the project using that. Now, mind you, we 
                were not taught JavaScript as part of this course, let alone React. I wasn’t bothered by this initially—I figured 
                that if I was going to have to learn something from the ground up on my own time, it might as well be what the 
                group prefers. 
            </p>
            <p>
                Spoiler alert: I was <i>not</i> able to learn how to code a React application in time to do anything useful. My 
                contributions to this group project were minimal at best, and I felt so helpless and guilty for not being able to 
                keep up. I rapidly spiraled into a state of panic and frustration, which prevented me from being able to even <i>think</i> 
                about the project. When others kindly offered to help, I refused, convinced that I was so lost that I was beyond 
                helping, insisting upon (unsuccessfully) trying to figure everything out by myself
                <Footnote num="1" text="Special recognition is warranted here for my teammate Ha, a software engineering genius 
                    who not only offered to help me on multiple occasions, but also brought me a bar of chocolate after a class 
                    where she could tell that I was particularly upset. I sobbed the whole time I ate it."/>
                . Even then, I understood how self-destructive this mindset was, and, naturally, thinking about my own irrationality 
                made me feel even worse.
            </p>
            <p>
                Upon reflection, one of the core issues with this course was that the learning process happened very publicly. I 
                still tear up when I think about the time when I was asked the most simple question of the entire class—followed up 
                by an even easier question—and still had to admit each time that I didn’t know the answer. Now, if I were surrounded 
                by a community that was universally welcoming, empathetic, and considerate, I would have been much more comfortable 
                with being a disaster. However, the norms of the class were largely masculine: an outward presentation of competence 
                and rationality, with all struggles and emotions hidden from view. At best, my public emotional outbursts made me a 
                pity case; at worst, I was certain that everyone believed I was stupid, annoying, a discredit to my entire gender, 
                et cetera.
            </p>
            <p>
                Furthermore, the collaborative nature of our final project brought on so much additional pressure to be competent. While 
                I was scrambling to learn the very fundamentals of React, my teammates were ten steps ahead of me, writing code that I 
                likely could not understand to this day. You might think that I was at least able to find solace in my one fellow newbie 
                teammate, but he was much better at learning than me (in other words, he wasn’t mortified to ask for help). I had no sense 
                of what was going on, so I was terrified to contribute anything that would break the code, and largely just made CSS design tweaks
                <Footnote num="2" text="And I certainly can’t take full credit for that. I caught COVID the week this project was due, and my 
                    quarantine mate and good friend Gabriel, who had front-end experience, guided me through each of the properties that I wanted to edit."/>.
            </p>
            <p>
                As much as I feared writing bad code, I feared Git even more. On the singular day that the software engineering course devoted 
                to learning how collaborative coding worked, I absorbed nothing other than intense anxiety. While the only way to learn how to 
                use Git is through practice, the stakes are higher when you’re actually working with other people, who would have every right 
                to despise you in the case that you’d accidentally overwrite their work, delete the repository, or otherwise bring about the end 
                of the universe. All this did was put an extra layer of confusion on top of something that already filled me with dread. Not much 
                of a learning opportunity, to put it lightly
                <Footnote num="3" text={<div>I was only able to pull through (pun intended) with my bare-minimum code commits due to the help of 
                    my <i>other</i> quarantine mate and almost twin, Ingrid, who happens to be incredibly fluent in Git. I still ask her for help 
                    each time I need to use it, but we’ll get into that later.</div>} />.
            </p>
            <p>
                Though I spent years deluding myself that I could handle failure, rejection, and critique without excessive emotion, at some point 
                I had to accept that—for better or worse—I’m a very, very sensitive person. My self-worth will always, to a certain degree, rely 
                upon the opinions of the people around me. This is due to the fact that I care about my surrounding community and my role within it,
                and an understanding of ethics of care has helped me reframe this as a strength—not a weakness. Without a relationship-centered ethical 
                framing, I wasn’t distinguishing between the types of relationships I had in my life and the attentiveness that they warranted. I 
                sought care and support from places that clearly were not going to reciprocate the emotional effort that I offered them, leaving me 
                pouring from an empty cup.
            </p>
            <p>
                Mentally withstanding a situation where my failures were constantly put on full display to my peers brought me to the absolute brink. 
                My immediate solution was to abandon web development entirely: I clearly wasn’t cut out for it, and it wasn’t the only career path in 
                the world. Despite this, I had the sneaking sense that if I could start the whole learning process over again—at my own pace and entirely 
                by myself—I would have the freedom to fail enough to figure it out. 
            </p>
            <p>
                After finding my digital humanities niche, rebuilding my computational confidence, and finally completing an introductory React tutorial
                <Footnote num="4" text={<div>Nazar, another one of my other teammates that was incredibly supportive of my software engineering spiral, 
                    recommended this excellent <Link text="React tutorial from scrimba" href="https://scrimba.com/learn/learnreact"/>, which I swear by 
                    to this day.</div>}/>
                , I felt recharged and ready to try my hand at building my own portfolio website. I spent a few weeks in a fervor of experimentation, executing 
                my design whims and showing them off to my friends every few minutes. The first version of this site is accessible <Link text="here" 
                href="https://allison-lehn.netlify.app/" />, and I never cried once while I made it. This site is a complete rebuild of that previous one, since 
                I wanted to make some design changes. Building one website by myself, let alone <i>two</i>, would be a miracle in the eyes of my past self, and 
                I get sentimental every time I think about it.
            </p>
            <p>
                Looking back, I did wonder what this meant about my ability to work with others. There’s only so much that I can do by myself, and all of my future 
                careers will require teamwork, but I was only able to find success when I shut myself off from all external pressure. However, I got an unexpected 
                collaborator on this project. After asking my friend a question about a minor bug I had with the footnotes on this site
                <Footnote num="5" text={<div>As with everyone else that I’ve mentioned in this project, I asked this person if I could use his name when I offer 
                    him acknowledgements, and he requested to be referred to by his pseudonym, “Mr. Bossome.” Since I only take things seriously when ethically 
                    relevant or humorous to do so—and this satisfies <i>both</i> conditions—I’ve respected the request. For clarification, “Bossome” is pronounced 
                    like “awesome,” <i>not</i> “bosom.” Anyway, he made sure that this very footnote wouldn’t spill over the edge of the page. Thanks, Mr. Bossome.</div>} />
                , he asked if he could spend “just five minutes” trying to fix it. My reflex was to reject the help—I knew that I was comfortable presenting only what 
                I had figured out by myself—but he insisted, desperate for a distraction from his own work. Within probably twenty minutes, he had fixed the issue and 
                submitted a pull request. I felt a mix of feelings, in this exact order: gratitude for the help, slight anxiety about presenting work that wasn’t my own, 
                and greater anxiety about now having to deal with merging branches on Git.
            </p>
            <p>
                Before thinking about the Git issue, I took a moment to reconsider that first little anxiety. Looking back on this write-up, it’s clear that my web 
                development journey has been full of help from my friends the whole time. If you haven’t been reading the footnotes, each one is dedicated to someone 
                that took time out of their lives to help me out, even when I had nothing to immediately offer in return other than my bitter, self-hating flavor of 
                gratitude. I may have written most of the code for this website by myself, but my knowledge was accumulated from the support and expertise of others. I 
                thought that I needed to shut out the world in order to be able to learn, but, in reality, I just needed to recognize where my true community was, and 
                shut out the rest. 
            </p>
            <p>
                So, when I had to deal with this Git anxiety, I knew that I could turn to Ingrid, my token Git expert friend, and—this is equally important—she knows 
                that she can turn to me for help with things that I’m more confident in
                <Footnote num="6" text="In this particular skill exchange instance, she guided me through what turned out to be a very simple merging scenario (that I still
                    managed to mess up) and I knew exactly where her professional email needed commas." />
                . Without me even realizing it, my skills in <i>asking for help</i> have improved alongside the technical ones. By learning how to refocus my emotional a
                ttention only on the people that I can trust to support me, I’ve relieved myself of the guilt and shame of being imperfect in public.
            </p>
            <p>
                Overall, the actual website is relatively straightforward: it’s a place to dump my work in a unified and distinctly personal way. It’s a reminder for me 
                of how far I’ve come, and that I am capable of so much more, so long as I surround myself with a community of mutual support. Above all else, it’s a tribute 
                to my identity as an emotional coder.
            </p>
            <div className="project--links">
                <a className="homelink" href="/">return home</a>
            </div>
        </div>
    )
}