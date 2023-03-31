import Link from "../components/Link";
import Footnote from "../components/Footnote";
import Figure from "../components/Figure";

import fig1 from "../images/colombia/fig1.JPG";
import fig2a from "../images/colombia/fig2a.png";
import fig2b from "../images/colombia/fig2b.png";
import fig3a from "../images/colombia/fig3a.png";
import fig3b from "../images/colombia/fig3b.png";
import fig3c from "../images/colombia/fig3c.png";
import fig4 from "../images/colombia/fig4.png";
import fig5 from "../images/colombia/fig5.png";
import fig6 from "../images/colombia/fig6.png";
import fig7a from "../images/colombia/fig7a.png";
import fig7b from "../images/colombia/fig7b.png";
import fig8a from "../images/colombia/fig8a.png";
import fig8b from "../images/colombia/fig8b.png";
import fig9a from "../images/colombia/fig9a.png";
import fig9b from "../images/colombia/fig9b.png";
import fig9c from "../images/colombia/fig9c.png";
import fig10a from "../images/colombia/fig10a.png";
import fig10b from "../images/colombia/fig10b.png";
import fig10c from "../images/colombia/fig10c.png";

export default function Colombia() {
    return (
        <div className="colombia">
            <h1>Colombia Periodical Licenses Map</h1>
            
            <div className="colombia--body">
                <div className="section">
                    <div className="column--text">
                        <h2>Introduction</h2>
                        <p>
                            In the summer of 2022, I got the opportunity to work with{' '}
                            <Link text="Professor Robert Karl" href="http://www.rakarl.com/"/> 
                            {' '}as part of the Colombia Digital History Lab (CDHL), a project with the goal to 
                            create and compile public history products for scholars of Latin America. Currently 
                            in the works at the CDHL is a social network analysis of Colombian elites according 
                            to their self-identification in the <i>Quién es quién en Colombia</i>
                            <Footnote num="1" text={<div><i>Quién es quién en Colombia.</i> 3rd ed. Bogotá: Oliverio Perry 
                            & Cia., 1961.</div>}/> 
                            {' '}publication, with the broader goal of exploring structures of political, economic, and social 
                            power among the country's oligarchs.
                            <Footnote num="2" text={<div>A huge amount of this work was done by Ang Li-Lian, who magnificently 
                                detailed her process in this Twitter thread. Ang Li-Lian [@lianlaughsalot], “The Challenge from 
                                @RAKarl : Extract the Names and Related Information of 1,000+ People from 500+ Scanned Pages of 
                                Quien Es Quien (Who’s Who) En Colombia 1961. Then, Represent Their Relationships as a Social 
                                Network Diagram. Here’s How I Did It. #ColombianOligarchyProject 1/ Https://T.Co/72jnOOI0nt,” 
                                Tweet, <i>Twitter</i>, June 16, 2022, <Link text="https://twitter.com/lianlaughsalot/status/1537496086335705088" 
                                href="https://twitter.com/lianlaughsalot/status/1537496086335705088" />.</div>}/>
                        </p>
                        <p>
                            I, on the other hand, wanted to do some kind of geospatial analysis. If there’s one thing you need to 
                            know about me, it’s that I am perpetually interested in taking some information and putting it onto a 
                            map. The perfect opportunity presented itself with a huge image archive of periodical licenses published 
                            in the annual editions of <i>Memoria del Ministro de Gobierno</i>
                            <Footnote num="3" text={<div>Monsalve, Diego. <i>Colombia cafetera.</i> Barcelona: Artes Gráficas, 1927;<br></br> 
                                Morales Olaya, Agustín. <i>Memoria del Ministro de Gobierno al Congreso Nacional en sus sesiones ordinarias de 
                                1933. Anexos – Tomo II.</i> Bogotá: Imprenta Nacional, 1933; <br></br>
                                República de Colombia. <i>Memoria del Ministro de Gobierno al Congreso en sus sesiones ordinarias de 1928. 
                                Anexos – Tomo II.</i> Bogotá: Imprenta Nacional, 1928;<br></br> 
                                República de Colombia. <i>Memoria del Ministro de Gobierno al Congreso en sus sesiones ordinarias de 1929. 
                                Tomo II.</i> Bogotá: Imprenta Nacional, 1929; <br></br>
                                República de Colombia. <i>Memoria del Ministro de Gobierno. Segunda parte: Documentos.</i> Bogotá: Imprenta 
                                Nacional, 1916; <br></br>
                                Restrepo, Carlos E. <i>Memoria del Ministro de Gobierno al Congreso en sus sesiones ordinarias de 1931. 
                                Anexos – Tomo II.</i> Bogotá: Imprenta Nacional, 1931.</div>}/>
                            , spanning various years between 1915 and 1962. Among information about the publishers, directors, and types of these 
                            publications, each entry included the location in which they were published, which was enough for me to warrant a goal 
                            to do some mapping with this information. Figure 1 shows a section of this data.
                            {/* <Figure num="1" src={fig1} text="Sample image of periodical license data" /> */}
                        
                        </p>
                        <p>
                            Why a map, you ask? Well, one of the goals of this project in particular is to make this archival data explorable for 
                            anyone interested in exploring the history of Latin America. The idea of a generous interface is fundamental to a project like this
                            <Footnote num="4" text={<div>For a fundamental and absolutely crucial elaboration of the concept of a generous interface, 
                                see Mitchell Whitelaw, “Generous Interfaces for Digital Cultural Collections,” <i>Digital Humanities Quarterly</i> 009, 
                                no. 1 (May 21, 2015).</div>}/>
                            . A generous interface takes the wealth of information in its archival stores and makes it browseable and freely available, instead 
                            of hiding it behind a search bar—which is only useful for people who know exactly what they’re looking for. And, good for those people, 
                            but very rarely am I one of them.
                        </p>
                        <p>
                            As opposed to a giant table of seemingly endless data (there are thousands of periodical licenses spread over the eleven years that the 
                            archive covers), a digital map is a bit more engaging to interact with. By relating this information to a spatial variable, we might also 
                            uncover trends and anomalies that otherwise would have gone unnoticed. However, we’ll have to be careful about that. Maps are incredibly 
                            powerful tools that benefit from a great deal of perceived credibility, so extra care has to be taken to make sure that what ends up being 
                            presented doesn’t mislead the audience.</p>
                        <h2>Data Processing</h2>
                        <p>
                            Before any maps could enter the scene, I had to get the data in the proper shape. First, I had to find a way to digitize the information, 
                            since at the outset it was just a picture of some text. Then, I had to convert the names of the cities into latitude and longitude coordinates, 
                            the necessary variables for plotting our information on a map. This is all much easier said than done.
                        </p>
                        <h3>Optical Character Recognition (OCR) and Data Cleaning</h3>
                        <p>
                            The first step in this workflow is converting an image of text into actual, digital text. The most straightforward way to do this is by hand-typing 
                            everything from the picture into a spreadsheet, but that gets boring <i>very</i> quickly. You can only transcend reality while you mindlessly type 
                            the names of old newspaper directors into Google Sheets for so long. Luckily, there are technical solutions for this: <b>Optical Character Recognition 
                            (OCR)</b> algorithms are able to "read" the text from images and process it as digital text. They’ve been trained on text data to be able to identify 
                            typed and handwritten letters and numbers, but they’re far from perfect. I had some familiarity with{' '} 
                            <Link text="Google's Tesseract OCR engine" href="https://github.com/tesseract-ocr/tesseract" />{' '}
                            and tried to use it on the data, but immediately ran into some issues. Figure 2a is the image that I gave to the algorithm, and Figure 2b shows what I 
                            got out of it:
                        </p>
                        {/* <Figure num="2a" src={fig2a} text="Input image data" /> */}
                        {/* <Figure num="2b" src={fig2b} text="Output text data" /> */}
                        <p>
                            Now, OCR is usually pretty messy, but this is very, very bad
                            <Footnote num="5" text="The only fun part about getting messy OCR is the word search game that it unintentionally creates. The first 5 words you can 
                                find will tell you your future!"/>
                            . After much trial and error, I realized that the problem was the long trail of periods after every word in the table: they're being read as letters for 
                            some reason, and it's ruining everything. I still cannot explain why this happens, but believe me, I tried everything to fix the issue. When I manually 
                            removed the periods (Figure 3a) and made the images black and white (Figure 3b), things worked much better (Figure 3c). This was still fairly time-consuming, 
                            but at least it worked.
                        </p>
                        {/* <Figure num="3a" src={fig3a} text="Input image data with periods removed" /> */}
                        {/* <Figure num="3b" src={fig3b} text="Binarized image data" /> */}
                        {/* <Figure num="3c" src={fig3c} text="Improved output text data" /> */}
                        <p>
                            Even after this, there are still some spelling errors, especially when it comes to placing accents. Here comes the central tradeoff when it comes to data 
                            cleaning: accuracy vs. speed. There are some algorithms and techniques that can catch these errors, and I implemented them to the best of my ability, but 
                            language is complex and has many exceptions, so it’s pretty difficult to systematically fix everything this way. If I spent ages, I could correct every error 
                            manually, but even then I would still miss some mistakes, and this would also potentially drive me insane. In some projects, my time might better be used elsewhere 
                            if I can accept a certain degree of data messiness, but in this case, I'm creating a translation of an archival resource, where users will be approaching the product 
                            as something close or equivalent to the primary source. To avoid misleading information, it was important that I strive for accuracy, so I did spend extra time making 
                            sure the data was as clean as possible.
                        </p>
                        <p>
                            Apart from spelling errors, there are also certainly semantic errors. For example, a key attribute in the table is the name of the director of the publication (Nombre 
                            del director). Upon request from Professor Karl, I needed to separate the first name (Nombre) from the last names (Apellido). Typically, the input field in the original 
                            data would be the name of an individual, so in those cases I could just separate out the first word in the text. However, this wasn’t always the case, and even so, an 
                            individual might have two first names
                            <Footnote num="6" text="I have yet to fix this particular issue, due to my lack of familiarity with Colombian names and a complete lack of a systematic way to determine 
                                what’s what. For scholars utilizing this data, I would advise additional caution when it comes to this field, as there was only so much that I could personally do in 
                                this particular instance." />
                            . Sometimes there were multiple directors of the periodical, and other times the "name" is more of a title, like "Secretario del Gobierno." Even still, at times a normal-looking 
                            name would have an additional title alongside of it, like "presbítero." If I were the final consumer of my product, I would be able to make some purpose-driven decisions about 
                            how much of this data to represent. However, I'm creating this product for other scholars of Latin America, so I intended to be as comprehensive and unambiguous as possible. I 
                            ended up creating four columns just to encapsulate this one attribute: title (before the name, or entire title if there was no name), first name, last names, and title (after 
                            the name). Figure 4 shows a subset of this data:
                        </p>
                        {/* <Figure num="4" src={fig4} text="Subset of director variable examples from the year 1931" /> */}
                        <p>
                            Being so involved with the digital data creation process made me especially aware of the sheer effort required to do this kind of project. Digitization and data cleaning is carework, 
                            through and through. It’s no wonder that it’s an incredibly underpaid and underappreciated job—one even potentially upheld by prison labor
                            <Footnote num="7" text={<div>For a discussion of one instance in which prison labor was recommended for yearbook digitization services, see “Recollection Wisconsin Discourages the Use 
                                of Prison Labor for Digitization,” <i>Recollection Wisconsin</i> (blog), October 25, 2022, <Link text="https://recollectionwisconsin.org/recollection-wisconsin-discourages-the-use-of-prison-labor-for-digitization" 
                                href="https://recollectionwisconsin.org/recollection-wisconsin-discourages-the-use-of-prison-labor-for-digitization" />.</div>}/>
                            . Caring is a reciprocal process: if we are not caring for the lives and livelihoods of the people who are responsible for the immense effort of creating and maintaining high quality 
                            data, we are relying upon an exploitative and fundamentally unethical model. 
                        </p>
                    </div>
                    <div className="column--img">
                        <div className="figure--group">
                            <Figure num="1" src={fig1} text="Sample image of periodical license data" />
                            <span></span>
                        </div>
                        <div className="figure--group">
                            <Figure num="2a" src={fig2a} text="Input image data" />
                            <Figure num="2b" src={fig2b} text="Output text data" />
                        </div>
                        <div className="figure--group">
                            <Figure num="3a" src={fig3a} text="Input image data with periods removed" />
                            <Figure num="3b" src={fig3b} text="Binarized image data" />
                            <Figure num="3c" src={fig3c} text="Improved output text data" />
                        </div>
                        <Figure num="4" src={fig4} text="Subset of director variable examples from the year 1931" />
                    </div>
                </div>
                <div className="section">
                    <div className="column--text">
                        <h3>Geocoding</h3>
                        <p>
                            I spent at least a month processing and cleaning data from various years ranging from 1915 to 1962. You can access all of this data{' '} 
                            <Link text="here" href="https://docs.google.com/spreadsheets/d/1VuOGNYs4akt1cRniznnAzliN7TMlpAU14J8Fg8E8Ajs/edit#gid=924754231" />
                            , but, as I discussed earlier, scrolling through a spreadsheet is not the most engaging way to explore archival information, unless you have a plan in mind. The next step in creating an 
                            interesting and engaging resource is to <b>geocode</b> the data. This is the process of taking the names of places and assigning them latitude and longitude coordinates so that our digital 
                            mapping software knows where to put them.
                        </p>
                        <p>
                            There are several ways of doing this. If your data is in Google Sheets, there’s a really great (and free!) extension called{' '} 
                            <Link text="Geocode by Awesome Table" href="https://workspace.google.com/marketplace/app/geocode_by_awesome_table/904124517349"/>
                            {' '}that does this right within your spreadsheet. If you’re also an ArcGIS user, you can also do this using the ArcGIS Geocoding Service, but it costs some credits on your account. 
                        </p>
                        <p>
                            Neither of these options worked incredibly well for me. What ended up working best for this project was building my own <b>locator</b> that would match these place names to coordinates. 
                            Professor Karl had access to a dataset including thousands of named places in Colombia with their affiliated coordinates, and using ArcGIS, I was able to use this data to build my own 
                            locator. This included a lot more nuance on Colombian places than other general geocoding services, and it operates for free!
                        </p>
                        <p>
                            This was still far from perfect, and I had to individually rematch certain entries to locations when they were placed incorrectly. The issue is that a lot of Colombian geography has changed 
                            over the past century, and the dataset of Colombian places is up to date with the names from the 1990s onward. Certain departments, like Quindio and Risaralda, didn’t exist in 1915, so a lot 
                            of the cities in those departments are labeled under other ones, like Caldas. At the end of the day, I had to make some guesses about which “Santa Rosa” the data could have been specifying, 
                            and I might have been wrong. This presents a huge dilemma, because we tend to take maps like this at face value. The only solution I have for circumventing this situation is simply full transparency
                            <Footnote num="8" text="Something about data feminism"/>
                            . As part of the final map product, I knew that I would need to present an introduction highlighting any potentially misleading information <i>before</i> the user even gets to look at the map. The pursuit 
                            of perfection and objectivity is a fruitless endeavor, and I would rather own up to the ways in which my project could be flawed than lie and claim dangerously false perfection.
                        </p>
                    </div>
                    <div className="column--img">

                    </div>
                </div>
                <div className="section">
                    <div className="column--text">    
                        <h2>Mapping and Visualization</h2>
                        
                        <p>
                            Finally, onto the fun part: digital cartography! Once I loaded six years of the available data (various years through 1915-1933) into ArcGIS, I was ready to start experimenting with different ways that I 
                            could present all of this data in a visually engaging and generous way.
                        </p>
                        <p>
                            The first issue is this: there are tons of points that get plotted on the exact same location, since many municipalities have more than one newspaper. ArcGIS's default visualization in this scenario is 
                            each point’s pop-up window showing a table with all of the data corresponding with that location (Figure 5). While this is technically functional, it doesn't make it easy to explore the information—it's 
                            impossible to tell whether a point has dozens of entries or just one.
                        </p>
                        {/* <Figure num="5" src={fig5} text="Default view of multiple values being plotted at the same location (Ibagué)."/> */}
                        <p>
                            The first solution is to group these into clusters, as in Figure 6. This lets us visualize the numbers, but it won't show all of the tables for each point in the cluster as in Figure 5.  
                        </p>
                        {/* <Figure num="6" src={fig6} text="Default cluster view"/> */}
                        <p>
                            My next idea was to try to make the colors of the clusters represent something more meaningful within the data. Here's the problem: the dataset consists of almost entirely non-quantitative data. Most of 
                            the variables are either categorical (types of paper, publication frequency) or simply qualitative (name of the paper, name of the director, city of publication), which aren't inherently visualizable. 
                            The purpose of the project is to make the data more explorable, though, so I had to figure out a way to make it work.
                        </p>
                        <p>
                            The specific variable I chose to focus on first was the type of paper. The main summary statistic possible for categorical data like this is the mode, so I decided to visualize the most common type of 
                            paper for each cluster of points in a city. However, the categories used to describe the papers are largely inconsistent. For example, one paper would describe itself as “Político” and another “Política” 
                            or “Político y variedades.” All of these papers have an element of politics in them, but if we wanted to query the number of political papers by searching for the count of “Político” labels, we wouldn't 
                            get an accurate representation of the data. I had to operationalize the variable, splitting the categories into several main ones, allowing for multiple categories when applicable. Figure 7a shows these 
                            different categories and Figure 7b shows the different style of cluster labeling that came from it. 
                        </p>
                        {/* <Figure num="7a" src={fig7a} text="Numerical representation of the periodical categories"/> */}
                        {/* <Figure num="7b" src={fig7b} text="Labeled clusters by category"/> */}
                        <p>
                            What makes me nervous about processing like this is that the more involved I am with creating categories that weren’t in the original dataset, the more I introduce entirely new pathways of error. This is 
                            inevitable, of course, as I’ve discussed with the issue of accuracy. However, there are trade-offs that have to be considered here. If, by reorganizing the data into these more simplified categories, we 
                            are more able to visualize what is actually happening in the data, the intervention might be justified.
                        </p>
                        <p>
                            This still doesn’t allow for the exploration of <i>individual</i> newspapers. Another option to solve this issue is to add a bit of visual spread to the points, where each point is kicked off of the exact location 
                            that it was geocoded to by just a little bit so it can be selected individually. While messing around with some ArcGIS presets, I wound up with something like Figure 8a, and realized that I could configure the pop-up 
                            windows to show the individual information about the paper in a more visually friendly way than the giant tables in Figure 5. However, this particular image is still pretty overwhelming and ugly. This becomes even more 
                            true as you zoom out (Figure 8b): the spread of the points no longer has any real geographical correlation.
                        </p>
                        {/* <Figure num="8a" src={fig8a} text="Spread points, colored by category"/> */}
                        {/* <Figure num="8b" src={fig8b} text="Spread points, zoomed out"/> */}
                        <p>
                            So, the clusters are better for zoomed out data, but the spread out points are better for close-up data. Luckily, we can combine the two! Through some configuring, I figured out that I could make the cluster view (Figure 9a) 
                            only visible until a certain point of scrolling in, and then it would split into dispersed points (Figure 9b). Scroll in even further, and each of the points gets labeled by the name of its periodical (Figure 9c). I also made 
                            the pop-up windows more informative: in the cluster view, they specify the primary city encompassed by that group. I also fleshed out the pop-ups for the individual points with all of the available information about them. 
                            Overall, this strategy allows for high-level and low-level perusability. The user has the opportunity to engage at whatever level they find most interesting, hopefully mixing and matching both as they inform each other.
                        </p>
                        {/* <Figure num="9a" src={fig9a} text="Cluster view, constrained to zoomed-out viewport"/> */}
                        {/* <Figure num="9b" src={fig9b} text="Spread point view, constrained to zoomed-in viewport"/> */}
                        {/* <Figure num="9c" src={fig9c} text="Labeled spread point view, constrained to zoomed-in viewport"/> */}
                        <p>
                            The views in Figure 10a, Figure 10b, and Figure 10c show the more refined output of what is visible in the web app that people can interact with. Some of the symbology is different due to constraints with what is available in 
                            the online map viewer and some stylistic refinements have been made along the way. There’s still plenty of room for future development (making the clusters show different attributes, including the rest of the data, making the 
                            labels more clear), but for now, this project accomplishes its mission: it makes a spreadsheet of data explorable and generous.
                        </p>
                        {/* <Figure num="10a" src={fig10a} text="Final product - Cluster view"/> */}
                        {/* <Figure num="10b" src={fig10b} text="Final product - Spread point view"/> */}
                        {/* <Figure num="10c" src={fig10c} text="Final product - Labeled spread point view"/> */}
                        <p>
                            As I was proudly demonstrating this product to my friends at various points in its development, I would frequently be questioned as to what this is all for. Who <i>really</i> would use this incredibly specific information about 
                            early to mid-twentieth century Colombian periodical licenses? Why go through all of the effort to make it digital and so visually enticing? Truthfully, I have no idea if this project will ever actually be useful to anyone. That’s 
                            the gamble when it comes to projects like these. In moments when I began to doubt that all of my efforts would amount to something, I had to remind myself that there is value in the act of caring for data so intensively. Even if 
                            nobody ever uses this information, there was something about reaching the end of this project that felt fulfilling, as if I’d given new life to something.
                        </p>
                        <p>
                            Our histories are the narratives we tell ourselves about the past, and the information we have available in our archives is at the heart of these narratives. If we only choose to digitize certain datasets with greater perceived value 
                            than others, our stories will be incomplete. Perhaps we need some trivial data in the mix to help us understand ourselves better. Maybe one day the history will be about the effort and attention it took to care about this data so much.
                        </p>
                    </div>
                    <div className="column--img">
                        
                        <div className="figure--group">
                        <Figure num="5" src={fig5} text="Default view of multiple values being plotted at the same location (Ibagué)."/>
                        <Figure num="6" src={fig6} text="Default cluster view"/>
                        </div>
                        
                        <div className="figure--group">
                            <Figure num="7a" src={fig7a} text="Numerical representation of the periodical categories"/>
                            <Figure num="7b" src={fig7b} text="Labeled clusters by category"/>
                        </div>
                        <div className="figure--group">
                            <Figure num="8a" src={fig8a} text="Spread points, colored by category"/>
                            <Figure num="8b" src={fig8b} text="Spread points, zoomed out"/>
                        </div>
                        <div className="figure--group">
                            <Figure num="9a" src={fig9a} text="Cluster view, constrained to zoomed-out viewport"/>
                            <Figure num="9b" src={fig9b} text="Spread point view, constrained to zoomed-in viewport"/>
                            <Figure num="9c" src={fig9c} text="Labeled spread point view, constrained to zoomed-in viewport"/>
                        </div>
                        <div className="figure--group">
                            <Figure num="10a" src={fig10a} text="Final product - Cluster view"/>
                            <Figure num="10b" src={fig10b} text="Final product - Spread point view"/>
                            <Figure num="10c" src={fig10c} text="Final product - Labeled spread point view"/>
                        </div>
                    </div>
                     
                </div>
            </div>
            <div className="project--links">
                <a className="project--seeproject" href="https://allisonlehn.maps.arcgis.com/apps/instant/media/index.html?appid=6df1792f3e5e4762ba2a2e8302d42d52" target="_blank" rel="noopener noreferrer">see project</a>
                <a className="homelink" href="/">return home</a>
            </div>
            
        </div>
    )
}