
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
        sum+=scoreArray.at(i)
    }
    return (sum/scoreArray.length)
}


console.log(calculateAverage(s1.scores))
