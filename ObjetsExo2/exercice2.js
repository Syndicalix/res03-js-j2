let student = {
    name : "Steven",
    age : 19,
    grades : [12, 14, 8],
    average : 0
};

for(grade of student.grades)
{
    student.average = student.average + grade;
}

student.average = student.average / students.grades.length;

student.average = (12 + 14 + 8) / 3;