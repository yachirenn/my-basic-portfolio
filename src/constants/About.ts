import { personalInfo } from "./personalInfo";

export const bioCode = ` $class Developer {
  constructor() {
    this.name = "${personalInfo.name}";
    this.role = "${personalInfo.title}";
    this.location = "${personalInfo.location}";
    this.email = "${personalInfo.email}";
  }

  getBio() {
    return \`
      Hello, I am yachirenn. Rendy Sulistyawan, commonly known as Rendy. 
      I am a student majoring in System, Information, Network, and Application, 
      with a particular interest in web development. 
      I enjoy creating digital solutions that are simple yet effective, 
      particularly using JavaScript, and I am eager to continue learning about the latest technologies. 
      I am seeking opportunities to contribute in an environment that fosters creativity and innovation.
    \`;
  }

  getCurrentFocus() {
    return [
      "Learning robust APIs with Node.js & Express",
      "Learing database structures with MongoDB, MySQL, and Firebase",
      "Prompt enjiner",
    ];
  }
}

const developer = new Developer();
console.log(developer.getBio());`;