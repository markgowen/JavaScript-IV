// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.location = attrs.location;
    this.age = attrs.age;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.favLanguage = attrs.favLanguage;
    this.specialty = attrs.specialty;
    this.catchPhrase = attrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(studentName, subject) {
    return `${studentName} received a perfect score on ${subject}!`;
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }
  listsSubjects() {
    const lastItem = this.favSubjects[this.favSubjects.length - 1];
    const otherItems = this.favSubjects.slice(0, -1);

    return `${this.name}'s favorite subjects are ${otherItems.join(
      ', '
    )}, and ${lastItem}.`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy time!`;
  }
  debugsCode(studentName, subject) {
    return `${this.name} debugs ${studentName}'s code on ${subject}`;
  }
}

const belding = new Instructor({
  name: 'Mr. Belding',
  location: 'Bayside',
  age: 48,
  specialty: 'Python',
  favLanguage: 'React',
  catchPhrase: 'Hey, Hey, Hey, Hey! What is going on here?'
});

const zack = new ProjectManager({
  name: 'Zack Morris',
  location: 'Bayside',
  age: 25,
  gradClassName: 'Web23',
  favInstructor: 'Mr. Belding'
});

const mark = new Student({
  name: 'Mark',
  location: 'Oregon',
  age: 37,
  previousBackground: 'Photographer',
  className: 'Web23',
  favSubjects: ['HTML', 'CSS', 'JS']
});

console.log(mark.listsSubjects());
console.log(zack.standUp('Web23', 'CSS'));
console.log(belding.grade('Mark', 'JavaScript'));