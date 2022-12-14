const API_URL = "http://localhost:8000/blogs";

let submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let body = document.querySelector("#content").value;
  let author = document.querySelector("#author").value;
  let blog = {
    title: title,
    body: body,
    author: author,
  };
  axios.post(API_URL, blog);
});
