class Project{
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    public name:string = '';
    public description:string = '';
}

export default class ProjectStrings {
    public static lilBub = new Project("Lil Bub's Big Adventure", "After graduating from college I took a 3 week trip around Europe.");
    public static newtonOpticks = new Project("Newton's Opticks", "Digitized an old textbook");
    public static sethLovesPizza = new Project("Seth Love's Pizza", "A pizza review site that catalyzed the idea for my YouTube channel Seth Loves to Talk");
    public static sethLovesToTalk = new Project("Seth Loves to Talk", "My YouTube channel where make videos about particular topics I care about.");

}