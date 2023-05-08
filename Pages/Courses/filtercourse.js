filterSelection("all");
function filterSelection(c) {
  const indiv=document.getElementById("searchresult");
    indiv.innerHTML="";
    const container = document.getElementById("Course-container");
    container.innerHTML = ""; // clear the container's content
  
    var text = "";
    for (var i in Courses) {
      if (c === "all" || Courses[i].C_Keywords.includes(c)) {
        text += '<a class="c-link" href="' + Courses[i].C_link + '"><div class="c-div-container"><img class="course-image" src="' + Courses[i].C_img + '"/><div class="c-discrip"><h3 class="course-title">' + Courses[i].C_name + '</h3><p class="course-Provider">Course from <span class="course-from">' + Courses[i].C_provider + '</span></p><p class="course-duration">Course Duration: <span class="course-duration-value">' + Courses[i].C_time + '</span></p><div class="Course-tags">';
        for (var j in Courses[i].C_tags) {
          if (Courses[i].C_tags[j] === "Recommended") {
            text += '<p class="course-tag-r"><span class="material-symbols-outlined">verified</span></p>';
          } else if (Courses[i].C_tags[j] != "Free") {
            text += '<p class="course-tag">' + Courses[i].C_tags[j] + '</p>';
          } else {
            text += '<p class="course-tag-r2">' + Courses[i].C_tags[j] + '</span>';
          }
        }
        text += "</div></div></div></a>";
      }
    }
  
    const para = document.createElement("div");
    para.classList.add("Course_inner_container");
    para.innerHTML = text;
    container.appendChild(para);
  }
  