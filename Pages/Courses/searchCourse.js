const searchCourse = () => {

    const input = document.getElementById('search').value;

    console.log(input);

    let filteredCourses=[];

    const inputRegex = new RegExp(`^${input}`, 'i');

    Courses.forEach(({ C_Keywords }) => {
        filteredCourses.push(...C_Keywords)
    });

    filteredCourses = [ ...new Set(filteredCourses) ];

    filteredCourses = filteredCourses.filter((course) => course.match(inputRegex));

    text="";
    const indiv=document.getElementById("searchresult");

    if(input){
        for(var i in filteredCourses){
            text +=`<button class="searches" onclick="filterSelection('${filteredCourses[i]}')">${filteredCourses[i]}</button>`
        }
    }

    indiv.innerHTML= text;
}


