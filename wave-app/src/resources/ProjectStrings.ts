class Project{
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    public name:string = '';
    public description:string = '';
}

export default class ProjectStrings {
    public static Welcome = new Project(
        "Welcome", 
        "Hello! My name is Seth Krantzler, I'm a programmer, designer, content creator, and musician. Welcome to my tribute to Hokusai's 'The Great Wave'. I wanted to make a website using parallax scrolling, and thought this would be a really cool visual. For the time being, I'm going to use the rest of this page to showcase some of my other projects."
    );
    public static lilBub = new Project(
        "Lil Bub's Big Adventure", 
        "After graduating from college I took a 3 week trip around Europe. I'm not very into taking pictures of myself, so I took a Lil Bub plush and took pictures of that instead. When I came home I had about 300 photos, so I narrowed it down the best ones, and used turn.js to make a digital photo album, complete with collections and my favorites at the end. I really love how it came together and it's a great way to remember what I saw and who I met along my trip."
    );
    public static newtonOpticks = new Project(
        "Newton's Opticks",
        "In college I took a class called 'Technologies of Language'. The goal of the class was to look at the effect technology had on interaction with physical media like books, magazines, etc. and what is lost when interacting with physical media through technology. For the final project, we were asked to pick a book from Northwestern's McCormick Library of Special Collections and created a digital version of it. I selected Sir Isaac Newton's Opticks, and created a webpage with original visualizations to highlight word frequency, ligature use, and even a HTML replicate of the cover."
    );
    public static sethLovesPizza = new Project(
        "Seth Loves Pizza",
        "A pizza review site that catalyzed the idea for my YouTube channel Seth Loves to Talk. I worked on this for a Hackathon my friends and I did one weekend. I built the site using React and deployed it to sethlovespizza.com to become more familiar with hosting. I used Google Sheets as a database so that updating the site is as straightforward as possible."
    );
    public static sethLovesToTalk = new Project(
        "Seth Loves to Talk",
        "My YouTube channel where make videos about particular topics I care about. This has been my primary creative outlet throughout quarantine and I've focused from video to video on trying to improve my design, writing, editing, animating, narrating, and general production skills. I've been very lucky to have received a lot of positive feedback, and have loved seeing how many people have enjoyed my videos. If you're looking for a place to start, I'd recommend watching my video on Vulfpeck or Animal Collective's My Girls music video."
    );

}