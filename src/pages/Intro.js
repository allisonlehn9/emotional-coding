import Link from "../components/Link";
import Footnote from "../components/Footnote";

export default function Intro() {
    return (
        <div className="intro">
            <h1>Introduction</h1>
            <p>
                Earlier this year, as I was trying to learn how to use the Twitter API, I experimented 
                with a new coping mechanism: every time I started to feel like I was about to cry, I 
                would immediately stop looking at the screen and crochet a granny square: the six 
                minutes of disconnect from the situation helped calm me down so I could start fresh and 
                pore over documentation for another twenty minutes or so. Feeling proud of myself, I 
                eagerly turned to my friend Trang, who was working on this project with me, to explain 
                my new anti-breakdown strategy. Looking up from her own code, she asked me why I 
                insisted on pursuing a computer science major in the first place, since it seemed to 
                just make me miserable. And here’s where she said something that I’ve been unpacking 
                for months: <b>“Allison, you’re the most emotional coder I’ve ever met.”</b>
                <Footnote num="1" text="When I asked her if I could use this comment as the central 
                    thread of this project, she admitted that she hardly remembered even saying it. However, 
                    she did tell me that—out of all of the random things she’s told me over the years—she’s 
                    glad that this one stuck." />
            </p>
            <p>
                She’s not wrong about me being emotional. Over the course of my computer science degree, 
                I’ve felt the entire spectrum, from jumping-on-the-couch, look-what-I-just-coded 
                euphoria to immense, tearful despair from just opening VSCode. And she would know—she 
                was my roommate during the most intense burnout period of my life, and had to tolerate 
                the irregular fluctuations in vibes that I brought to the apartment. To all of my 
                roommates through the years, especially Trang, this project is at least partially 
                dedicated to you.
            </p>
            <p>
                Anyway, I too had the sense that I was a bit more emotionally involved than the average 
                computer science major, but something about winning the superlative really threw me for 
                a loop. <i>Most</i> emotional coder? After some thoughtful consideration of what that 
                actually implied, I’ve proudly assumed the title, but it’s not one that I’d like to keep 
                for long. And I don’t mean that I plan to become <i>less</i> emotional, but I genuinely 
                think that everyone should be working to become as emotional as me, if not more so.
            </p>
            <p>
                Let’s take a step back here. What does it mean to be “emotional?” It’s a word that’s 
                heavy with connotation, <i>especially</i> when it comes to gender
                <Footnote num="2" text="As part of this discourse surrounding gender, 
                    I will largely be talking about the concepts of masculinity and femininity, 
                    which—although rooted in a traditional Western binary—do transcend gender identity. 
                    However, I will occasionally use the terms “male” and “female,” largely in their 
                    most cisgender sense. Many of the experiences I describe are based on my own experience 
                    as a cisgender woman living within this binary, and it felt inappropriate for me to 
                    generalize these experiences to people of all genders, regardless of whether or not 
                    they may be applicable. Furthermore, some of the gender studies I reference only 
                    considered and evaluated the gender roles of cisgender men and women, and it is even 
                    more inappropriate to extrapolate these conclusions. I would like to use this moment 
                    to call for more psychological and sociological studies to deliberately and thoughtfully 
                    include and aim to understand the emotional lives of non-cisgender people." />
                . In decision-making, we frequently posit emotion as the opposite of reason, and, 
                more importantly, we value rationality over the former. It’s no wonder that, in a 
                typical Western patriarchy, the gender binary is divided by these two categories, 
                with femininity being affiliated with the emotional side—and thereby being valued 
                less.
            </p>
            <p>
                And yet, the idea that any human can (and should aspire to) be perfectly rational is a 
                total myth. Humans intrinsically use non-rational, subconscious mechanisms in order to 
                think, make decisions, and evaluate the overwhelming amount of information we’re hit 
                with on a daily basis
                <Footnote num="3" text={<div>For a good overview of the various ways in which modern 
                    psychology explores the relationship between emotions and “rationality,” see Gerald L. 
                    Clore, “Psychology and the Rationality of Emotion,” <i>Modern Theology</i> 27, no. 2 
                    (April 4, 2011): 325, <Link text="https://doi.org/10.1111/j.1468-0025.2010.01679.x." 
                    href="https://doi.org/10.1111/j.1468-0025.2010.01679.x." /></div>} />
                . The only way to be “less emotional” is to be in denial of the constant flux of 
                emotions that we experience as living, breathing humans. And, as we all know, denial 
                is a river in Egypt
                <Footnote num="4" text={<div>Also, according to Wendy Williams, <Link text="your husband is gay." 
                    href='https://youtu.be/1P01hBHuCGA?t=42' /></div>} />
                , not an effective strategy for managing feelings.
            </p>
            <p>
                Although we’re all emotional beings, there are still gendered differences when it comes 
                to emotional expression. These typically fall on two axes: type and amount of emotion 
                expressed. Certain types of emotions, like anger, are correlated with our idea of 
                masculinity, and there’s an expectation that the male expression of emotion is more 
                sparing. On the other hand, femininity implies an overall greater amount of emotional 
                expression, but with only the soft and nurturing types of feelings
                <Footnote num="5" text={<div>For a more in-depth discussion of the traditional roles of masculinity 
                    and femininity, as well as how emotional health can be improved by challenging these norms, 
                    see Damien Boquet, Didier Lett, and Siân Reynolds, “Editorial: Emotions and the Concept of Gender,” 
                    Clio. <i>Women, Gender, History</i>, no. 47 (2018): 7–22.</div>} />
                . With that being said, when we define general emotionality as only the feminine expression of emotion, 
                not only do we ignore male-coded emotions as part of the spectrum of feelings that we view as irrational, 
                but we also paint masculine patterns of emotional expression and regulation as something aspirational.
            </p>
            <p>
                What’s interesting about this is that a woman who emotes in a traditionally masculine sense is not necessarily 
                rewarded for that behavior in the way that a man would be. An ethnographic study found that women who expressed 
                controlled anger at a debt settlement firm were, in some cases, praised for this behavior, but other times called 
                “crazy” or “hysterical
                <Footnote num="6" text={<div>Zaibu Tufail and Francesca Polletta, “The Gendering of Emotional Flexibility: Why 
                    Angry Women Are Both Admired and Devalued in Debt Settlement Firms,” <i>Gender and Society</i> 29, no. 4 (2015): 
                    484–508.</div>} />
                ." The standard for women in the workplace to prove that they are “just as capable as men” is not only impossible, 
                but actively counterproductive, since it actively limits them in a fantastic skill that they usually possess to a much higher 
                degree than the average man: caring.
            </p>
            <p>
                Here’s where we get into my favorite feminist ethical theory: <b>ethics of care.</b> Essentially, it suggests that 
                we make our moral judgments in consideration of our personal relationships with our surrounding communities, and 
                we are driven by an innate desire to care for the people living within it. Many other ethical theories consider 
                our individualistic morality in more abstract, rational (read: masculine) ways that don’t completely consider how 
                we act as social beings and the crucial significance of relationships. This theory challenges those claims to 
                objectivity, considering the overtly male-dominated history of mainstream philosophy
                <Footnote num="7" text={<div>I was first introduced to the ethics of care philosophical framework through the 
                    fantastic digital humanities case study discussed in Todd Suomela et al., “Applying an Ethics of Care to Internet 
                    Research: Gamergate and Digital Humanities,” <i>Digital Studies / Le Champ Numérique</i> 9, no. 1 (February 13, 2019), <Link 
                    text="https://doi.org/10.16995/dscn.302" href="https://doi.org/10.16995/dscn.302" />. For a more concise overview 
                    of the theory and some of its main authors, this <Link text="Encyclopedia Britannica entry" 
                    href="https://www.britannica.com/topic/ethics-of-care" /> does well.</div>} />
                .
            </p>
            <p>
                Furthermore, in an economic sense, it is actual <i>work</i> to maintain relationships and offer care to the people 
                around us, but this kind of work is devalued—and oftentimes unpaid—since it’s not recognized as explicitly “productive.” 
                Consider the domestic effort that it takes to keep a house, care for a child, and/or tend to an elderly family member. 
                A study in Colombia collected data on these types of carework over the course of ten years, evaluating if it could be formalized
                within the economy. The results found that the care industry, if fully recognized, would constitute 20% of the nation’s GDP
                <Footnote num="8" text={<div>“Care Economy: An Opportunity to Create Jobs and Close the Gender Gap,” World Economic Forum, May 25, 
                    2022, <Link text="https://www.weforum.org/agenda/2022/05/care-economy-gender-gap-davos22/" 
                    href="https://www.weforum.org/agenda/2022/05/care-economy-gender-gap-davos22/" />.</div>} />
                . Innovation is built upon a base of maintenance of what already exists, and we oftentimes valorize the former at the expense of the latter.
            </p>
            <p>
                At the end of the day, it’s not just about appreciating women for performing unrecognized, traditionally feminine labor—we also should be looking 
                into how we can share the burden of this work. Emotional intelligence is a skill that can be learned
                <Footnote num="9" text={<div>For a look into the science of emotional intelligence, including evidence that it can be learned, see Peter Salovey 
                    and Daisy Grewal, “The Science of Emotional Intelligence,” <i>Current Directions in Psychological Science</i> 14, no. 6 (2005): 281–85.</div>} />
                , so it’s not necessary—rather, it’s potentially more harmful—to pigeonhole people that already possess it into relationship-centered careers. My argument is that 
                we <i>all</i> should be working to expand our emotional intelligence and learn how to actively care about each other, to the fullest meaning of that word. 
                And I mean this especially in the tech world.
            </p>
            <p>
                In recent years, we’ve seen a massive influx of non-males in STEM-related fields—myself included. I do believe that this has helped promote 
                emotional intelligence as a valuable skill in the industry, but, honestly speaking, it’s still brutal out here. I have cried <i>at least once </i>  
                in every single one of my upper-division computer science classes out of sheer frustration, which led me to spiral and hate myself even more for 
                being so dramatic, which would make me cry <i>again</i>. I felt this intrinsic need to prove myself by not only understanding everything at first 
                glance, but also keeping quiet about it when I didn’t. It took me ages to realize and accept that all of my feelings of rage, self-loathing, and 
                general distress have been natural consequences of a system that simultaneously isn’t all that friendly to beginners, and yet requires everyone to 
                constantly be beginners at something, whether that’s a new program, language, software, hardware, or some other ungodly technical innovation. In a 
                field that is constantly focused on productivity, innovation, and <i>rationality</i>, there is little effort put into caring.
            </p>
            <p>
                But what does “caring” even look like in tech? I’ll give you a few examples. It’s clean, understandable documentation. It’s data cleaning and 
                maintenance. It’s accessible, beginner-friendly educational resources. It’s high data privacy standards. It’s a consideration of how a project will 
                impact the people it relies upon and intends to serve. It’s good teamwork.
            </p>
            <p>
                Despite my tumultuous relationship with the field, I still really love computer science. I love having a personal technical toolkit, which grants me 
                the ability to build whatever I want. I love reaching the end of a project and feeling proud of what I’ve done. I love feeling challenged—but not 
                overwhelmed—through the process of learning something new and celebrating the little successes along the way
                <Footnote num="10" text="And I mean it when I say that I’m a celebrator. I’ve shown a draft version of this very website to nearly every one of my 
                    close friends, not for feedback, but just to show off the latest hover property that I figured out how to configure with CSS. Yes, including the one 
                    you’re interacting with right now." />
                . I love building an emotional attachment to the data I’m working with, and thoroughly evaluating the impact my project will have on others. I love 
                caring immensely about what I’m doing, and that’s what I get to do with computer science.
            </p>
            <p>
                The issue for me is the uncaring climate. Like I said, I think that the big tech world will get there <i>eventually</i>, but I'm tired of forcing 
                myself into spaces that are hostile to me and the emotionally-charged way in which I work. This is why I’ve gravitated towards the digital humanities 
                field, where the connection between people (and I don’t mean users, customers, or clients; I mean <i>people</i>) and technology is so much stronger 
                than anywhere else. There are dozens of definitions of the term <b>digital humanities</b>
                <Footnote num="11" text={<div>To see a few of these, check out a digital humanities project that sought to collect some of these definitions from within
                    the community: Jason A. Heppler, “What Is Digital Humanities?,” <i>What Is Digital Humanities</i>, 20:40 600, <Link text="https://whatisdigitalhumanities.com/" 
                    href="https://whatisdigitalhumanities.com/" />. Refresh the page a few times to get a few answers.</div>} />
                , but the part that’s most important to me is the emphasis on the use of technology <i>for and with the public</i>. Establishing a relationship between yourself, your 
                audience, and the people connected to your data seems to me the most important part of doing anything with true, genuine care. Over the past year, I’ve created 
                two main digital humanities projects—and attempted many more. All of these aim to explore these relationships, as well as my own emotional journey through the 
                process. My frustrations, anxieties, and moments of joy are all inextricably tied to the products I’ve created, which makes them even more valuable. 
            </p>
            <p>
                The first main project is the <b>Colombia Periodical Licenses Map</b>. Working with Professor Robert Karl as part of the Colombia Digital History Lab, I’ve worked to 
                translate images of archival periodical licenses to a digital dataset. I then was able to geocode the locations so the licenses can be viewed on a map, making them 
                more explorable for Latin American scholars. Throughout the process of creating the project, I reflected on the technological and ethical considerations necessary 
                when translating a primary source, as well as what it means to create a meaningful digital resource.
            </p>
            <p>
                The second project is titled <b>RuPaul’s Machine Learning Race</b>, and you’ll never guess what show I was watching when I came up with the idea for it. After going 
                through multiple breakdowns while taking a machine learning class, I made it my goal to try to explain the concepts in a beginner-friendly, engaging way, and found 
                the fantastical case study of ranking the runway outfits on <i>RuPaul’s Drag Race</i> a perfect way to imperfectly teach the fundamentals of web scraping, image 
                processing, classification/regression, and unsupervised learning.
            </p>
            <p>
                Through the process of creating these two main projects, I experimented with many different ideas and techniques—to varying degrees of success. With some projects, 
                I ran into unexpected technical or practical <i>frustrations</i>, forcing me to abandon them. Other projects were just low-pressure <i>explorations</i> of new 
                technologies, which I never intended to turn into main projects. Lastly, I realized that some of these ideas were more <i>aspirations</i> than feasible projects 
                that could be done in the time I had available. Reclaiming these projects as not failures, but <b>Frustrations, Explorations, and Aspirations</b>, has helped me 
                come to terms with my own perfectionism and the self-hatred that emerges from "quitting." I reflected on each of these types of projects, considering how the work 
                that doesn’t end up on the final page is still valuable in its own right.
            </p>
            <p>
                Throughout all of these, I want to highlight my emotional, relationship-centered approach to creating ethical computer science projects as an asset, not something to
                be fixed. More importantly, I want to show that this mindset should be intrinsic to all coding-related work—not just projects within the digital humanities field. In 
                an ideal world, <b>I really shouldn’t be the most emotional coder that you know.</b>
            </p>
            <a className="homelink" href="/">return home</a>
        </div>
    )
}