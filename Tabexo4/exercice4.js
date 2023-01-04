let grades = [[20, 10], [15, 20], [13, 18]];

let average = 0;

for(let i = 0; i < grades.length; i++)
{
    average += parseInt(grades[i]);
}
let avg = average / grades.length;
console.log(avg)


// let sum = 0
// for(grad of grades)
//{
//    for(subrades of grade)
//    {
//        sum = sum + subgrade;
//    }
//    
//    totalGradesNumber = totalGradesNumber + grade.length;
//}
//average = sum / totalGradesNumber;
//consol.lo(average);