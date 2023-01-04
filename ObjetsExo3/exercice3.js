let students = [
    {
        name : "Steven",
        age : 18,
        average : 10
    },
    {
        name : "Jessica",
        age : 20,
        average : 13
    },
    {
        name : "Charlie",
        age : 17,
        average : 12
    },
];

for(student of students)
{
    console.log(`${student.name} is ${student.age} years old and has a average of ${student.average}. `);
}

for(let i = 0; i < students.length; i++)
{
    console.log(`${students[i].name} is ${students[i].age} years old and has a average of ${students[i].average}. `);
}