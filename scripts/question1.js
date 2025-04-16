
class Student{
    constructor(name,scores){
        this.name=name;
        this.scores=scores

    }
}

let score1=[90,85,92];
let score2=[70,68,72];
let score3=[100,100,100];
let s1=new Student("Ali",score1);
let s2=new Student("Bob",score2);
let s3=new Student("Charlie",score3);

function calculateAverage(scoreArray){
    let sum=0;
    for(let i=0;i<scoreArray.length;i++){
        sum+=scoreArray[i];
    }
    return (sum/scoreArray.length);
}
function calculateGrade(grade){
    if(grade>=90){
        return "A"
    }
    if(grade>=80){
        return "B"
    }
    if(grade>=70){
        return "C"
    }
    else{
        return "F"
    }
}
function generateReports(students){
    average= calculateAverage(students.scores);
    grade=calculateGrade(average);
    console.log(`Name: ${students.name},average: ${average},grade: ${grade}`);
}

generateReports(s1);
generateReports(s2);
generateReports(s3);
