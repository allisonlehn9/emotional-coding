import Link from "../components/Link";
import Footnote from "../components/Footnote";

export default function RuPaul() {
    return (
        <div className="rupaul">
            <h1>RuPaul's Machine Learning Race</h1>
            <p>
                The idea for this project emerged mostly out of spite. I felt so strongly wronged by my machine learning class, 
                as it seemed to take every opportunity to make things more difficult than they needed to be. I had just come out 
                of a similar situation in my software engineering course the semester before, which is what brought me to my most 
                emotionally vulnerable state yet. There were days where I would wake up, look at my open code notebook, and instantly 
                burst into tears. I’d then channel that frustration into anger, directed <i>somewhat</i> justifiably at my professor 
                and the class content. Was it productive? Not really. Did it make me feel better? Still no. But I didn’t know what 
                else to do. If I couldn’t avoid being emotionally challenged by every situation I encountered, I might as well make 
                sure that those emotions were as “strong” as possible to defend against how mentally weak I felt.
            </p>
            <p>
                Through such difficult experiences, you’re bound to end up learning <i>something</i>. As I struggled through the curriculum, 
                I found exactly three things that made me feel slightly more sane. Two of them were YouTube channels: <Link text="StatQuest with Josh Starmer" href="https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw" /> and <Link text="ritvikmath" href="https://www.youtube.com/@ritvikmath" />
                . These two were expertly able to explain every data science concept that I was ever tasked with learning, far better than any 
                of my textbooks or professors ever did. The most important thing that I learned from them was that learning this content didn’t 
                have to be emotionally difficult <i>at all</i>. It might be a bit challenging—it is fairly high-level stuff, and I wasn’t so 
                narcissistic as to believe that I’d understand everything instantly—but it never had to feel impossible. I owe my current mentality, 
                as well as any actual knowledge of machine learning techniques, to their honorable dedication to beginner-friendly instruction.
            </p>
            <p>
                The third thing that kept me from completely falling off the deep end was, surely enough, taking up crochet. My inability to grasp 
                machine learning was making me feel like I was a bad learner, or that I had lost all of my tenacity for challenges. Luckily enough, 
                my roommate Mateus spontaneously decided to encourage us all to crocheting early in the semester and ordered hooks and yarn for the 
                whole flat. Although I had received a DIY crochet kit as a birthday gift when I was about nine years old, I had never quite figured 
                it out. I distinctly remember—<i>on multiple occasions</i>—crying alone in my room after being unable to understand the confusing 
                instruction diagrams and shamefully abandoning the whole thing. Sound familiar?
            </p>
            <p>
                Although I was aware of the irony of the whole situation, I figured that if I was going to have to abandon any sense of belonging in 
                the computer science world, I could at least reassure myself that I had the ability to learn something new without being dramatic about 
                it. Fortunately, the crochet YouTube tutorial scene has grown immensely since the late 2000s, and I was able to find plenty of good 
                resources to learn the basics. After dozens of failed attempts, I found myself getting the hang of it, and my work got better and better
                <Footnote num="1" text={<div>I’ve loosely documented my fiber arts journey on my designated crochet Instagram account, <Link text="@verycoolallison" 
                href="https://www.instagram.com/verycoolallison/"/>. Yes, this is an entirely shameless self-promo.</div>} />
                . <i>Sound familiar?</i>
            </p>
            <p>
                Armed with new learning strategies and coping mechanisms, I slowly eased out of my horrible burnout state over the course of the semester. 
                In fact, I realized that I had actually grown fairly confident with the fundamentals of machine learning, against all odds. After a full 
                summer spent recharging, I prepared to enact my revenge: I was going to make machine learning easier to understand for the next generation 
                of learners.
            </p>
            <p>
                Along with crochet, Mateus introduced me to RuPaul’s Drag Race around this time, and one of our communal flat activities was watching it 
                together. Months later, I put together how the overabundance of Drag Race content could work as a fun data source to explore some machine 
                learning techniques that use image data, which were the ones I enjoyed the most. The Drag Race demographic was an interesting audience to 
                address, too—if I could explain machine learning to a largely non-technical crowd, I could explain it to anyone. My goal was to create 
                multiple levels of explanation:
            </p>
            <ol>
                <li><b>The completely non-technical audience:</b> I explain all of the concepts at a high level, barely touching the mathematics or 
                computer science behind it.</li>
                <li><b>The beginning coder:</b> I make my coding process clear and understandable by putting them into Colab notebook tutorials for 
                someone who would like to learn along with it.</li>
                <li><b>The advanced coder:</b> I link my unannotated code, in case a seasoned coder is just interested in the process I used.</li>
            </ol>
            <p>
                My article is addressed to the first audience, but I link a Colab tutorial to my web scraping process specifically for the second audience, 
                as well as the plain code for the third. I cast a wide net, and give options for a choose-your-own-adventure situation, since no two people 
                are at the exact same stage in their journey. One of the few good things that came out of being so emotionally upended by my computer science 
                experience is that I can remember exactly what it felt like to be a beginner, putting me in a great position to circumvent common confusions 
                and roadblocks. I’m squarely positioned to create the exact kind of product that I myself would have valued, which is perhaps the most satisfying 
                end to this journey that I could possibly imagine. 
            </p>
            <p>
                At the time, I needed to run on purely negative emotional energy just to keep myself going, but I couldn’t help but feel ashamed of how it spilled 
                over onto the people I cared about, who were having a great time crocheting and watching Drag Race without all of my turmoil in the mix. Looking back, 
                I know that all of that effort spent trying to contain my feelings—to absolutely no success—actively held me back from embracing support from people 
                that genuinely cared enough to offer it. I’ve moved on from all of that anger and guilt, but I still feel almost as intensely about machine learning 
                as I did then: this time in the opposite direction. I’m now in a position where I can be a part of the support system that helps people convert their 
                raging thunderstorms of emotions about machine learning into curiosity and joy.
            </p>
            <p>
                To anyone feeling trapped in a spiral of negative emotions in any situation like this: it makes sense that you feel this intensely awful. Listen to 
                those feelings, and let them guide you to an environment that treats you more kindly. And if that place doesn’t exist, you get to be the one to create 
                it. I promise that it’s worth it.
            </p>
            <div className="project--links">
                <a className="project--seeproject" href="/">see project</a>
                <a className="homelink" href="/">return home</a>
            </div>
        </div>
    )
}