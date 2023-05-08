filterSelection("all");
function filterSelection(c) {
    const indiv=document.getElementById("searchresult");
    indiv.innerHTML="";
    const container = document.getElementById("Course-container");
    container.innerHTML = ""; // clear the container's content
  
    var text = "";
    for (var i in blog) {
      if (c === "all" || blog[i].b_Keywords.includes(c)) {
        text += '<a class="b-link" href="' + blog[i].b_link + '"><div class="b-div-container"><img class="blog-image" src="' + blog[i].b_img + '"/><div class="b-bottom-discrip"><h3 class="blog-title">' + blog[i].b_title + '</h3><p class="blog-discription">'+blog[i].b_discrip+'...<p class="blog-Provider">By <span class="blog-from">' + blog[i].b_from + '</span></p></p><div class="blog-tags">';
        for (var j in blog[i].b_tags) {
          if (blog[i].b_tags[j] === "Recommended") {
            text += '<p class="blog-tag-r"><span class="material-symbols-outlined">verified</span></p>';
          } else if (blog[i].b_tags[j] != "Free") {
            text += '<p class="blog-tag">' + blog[i].b_tags[j] + '</p>';
          } else {
            text += '<p class="blog-tag-r2">' + blog[i].b_tags[j] + '</span>';
          }
        }
        text += "</div></div></div></a>";
      }
    }
  
    const para = document.createElement("div");
    para.classList.add("blog_inner_container");
    para.innerHTML = text;
    container.appendChild(para);
  }
  