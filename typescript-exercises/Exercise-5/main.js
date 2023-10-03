class Student {
    constructor(studentName, studentAge, studentGrade) {
      this.studentName = studentName;
      this.studentAge = studentAge;
      this.studentGrade = studentGrade;
    }
  
    displayInfo() {
      console.log(`Name: ${this.studentName}, Age: ${this.studentAge}, Grade: ${this.studentGrade}`);
    }
  
    isPassing(gradeThreshold) {
      return this.studentGrade >= gradeThreshold;
    }
  }
  
  // Example usage:
var student1 = new Student("John", 18, 85);
  student1.displayInfo(); // Output: Name: John, Age: 18, Grade: 85
  console.log(student1.isPassing(60)); // Output: true
  console.log(student1.isPassing(90)); // Output: false
  