let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/24",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/24",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/24",
        Fee: "50.00",
    }
];

//  When does the PROG200 course start?
//  What is the title of the PROJ500 course?+
// What are the titles of the courses that cost $50 or less?
// What  classes meet in "Classroom 1"?

let courseindexlength = courses.length;
for (let i = 0; i < courseindexlength; i++) {
    if (courses[i].CourseId === 'PROG200')
        console.log(`PROG200 Start Date:${courses[i].StartDate}`);
    if (courses[i].CourseId === 'PROJ500')
        console.log(`PROG500 Title:${courses[i].Title}`);
    if (courses[i].Fee <= 50)
        console.log(`Fees Less than $50 or less:${courses[i].Title}`);
        if (courses[i].Location ==='Classroom 1')
        console.log(`Classes meet in classroom1 :${courses[i].Title}`);
}















