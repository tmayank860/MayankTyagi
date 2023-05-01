// var title=document.getElementById("title");
// var desc=document.getElementById("description");
{
     
}
// api call in javascript?



const userAction = async () => {
  const response = await fetch('https://dev.to/api/articles?username=tmayank860', {
    method: 'GET',
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log("fhhgfh",myJson);
  return myJson
}



// const userAction = async () => {
//   const response = await fetch('https://dev.to/api/articles?username=tmayank860');
//   const myJson = await response.json(); //extract JSON from the http response
//   console.log(myJson);
//   return myJson;
// }
var ld=document.getElementById("ld");
var loader=document.createElement("div");
loader.className="loader";
     ld.append(loader);
     var blg=document.getElementById("bl");
const getBlogs=async()=>{
const blogs= await userAction();
// console.log(blogs);
blogs.map(blog=>{
     var div=document.createElement("div");
     div.className="blog";
     var heading=document.createElement("h3");
     heading.id="title";
     var span=document.createElement("span");
     span.className="date color-text";
     span.innerText=(blog.readable_publish_date);
     var img=document.createElement("img");
     img.className="img-responsive";
     var a=document.createElement("a");
     a.href=blog.url;
     button=document.createElement("button");
     button.className="btn btn-1";
     button.innerHTML="Read More"
     img.setAttribute("src",blog.cover_image ? blog?.cover_image : blog?.social_image);
     img.setAttribute("alt",blog.title);
     img.setAttribute("class","blog-cover");
     heading.innerHTML=blog.title;
     var para=document.createElement("p");
     para.id="description";
     para.innerHTML=blog.description;
     a.appendChild(button);
     div.appendChild(img);
     div.appendChild(heading);
     div.appendChild(span);
     div.appendChild(para);
     div.appendChild(a);
     blg.append(div);
}
)
}
setTimeout(() => {
     ld.remove(loader);
     getBlogs();
  }, 2000);




