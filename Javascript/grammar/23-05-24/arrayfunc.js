// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const str = fruits.join();
    console.log(str);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const arr = fruits.split(', ');
    console.log(arr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const newArray = array.slice(2, array.length);
    console.log(newArray);
}

class Student {
    constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const stu = students.find((student, index) => student.score === 90);
    console.log(stu);
    /*
    for (let i = 0; i < students.length; i++) {
        if (students[i].score === 90) {
            console.log(students[i].name);
        }
    }
    */
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student, index) => student.enrolled);
    console.log(result);
    /*
    const array = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].enrolled === true) {
            array.push(students[i]);
        }
    }
    console.log(array);
    */
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
    /*
    const array = [];
    for (let i = 0; i < students.length; i++) {
        array.push(students[i].score);
    }
    console.log(array);
    */
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result);
    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
    /*
    for (let i = 0; i < students.length; i++) {
        if (students[i].score < 50) console.log(students[i].name);
    }
    */
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
    /*
    let total = 0;
    for (let i = 0; i < students.length; i++) {
        total += students[i].score;
    }
    console.log(total / students.length);
    */
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map((student) => student.score).join(', ');
    console.log(result);
    /*
    const array = [];
    for (let i = 0; i < students.length; i++) {
        array.push(students[i].score);
    }
    const str = array.join(', ');
    console.log(str);
    */
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((student) => student.score).sort().join(', ');
    console.log(result);
    /*
    const array = [];
    for (let i = 0; i < students.length; i++) {
        array.push(students[i].score);
    }
    array.sort();
    const str = array.join(', ');
    console.log(str);
    */
}