const searchCourse = () => {

    const input = document.getElementById('search').value;

    console.log(input);

    let filteredBlogs=[];

    const inputRegex = new RegExp(`${input}`, 'i');

    blog.forEach(({ b_Keywords }) => {
        filteredBlogs.push(...b_Keywords)
    });

    filteredBlogs = [ ...new Set(filteredBlogs) ];
    filteredBlogs.push("all");
    filteredBlogs = filteredBlogs.filter((blog1) => blog1.match(inputRegex));

    console.log(filteredBlogs);

    text="";
    const indiv=document.getElementById("searchresult");

    if(input){
        for(var i in filteredBlogs){
            text +=`<button class="searches" onclick="filterSelection('${filteredBlogs[i]}')">${filteredBlogs[i]}</button>`
        }
    }

    indiv.innerHTML= text;
}


