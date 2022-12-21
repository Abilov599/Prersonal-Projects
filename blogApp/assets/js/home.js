const API_URL = "http://localhost:8000/blogs";

function fetching() {
  axios.get(API_URL).then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      let blog = response.data[i];
      let blogCard = `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">${blog.title}</h2>
                <p class="card-content">${blog.body}</p>
                <p class="card-author">Written by: ${blog.author}</p>
                <div class= "btnBox">
                <button class="delBtn" id="${blog.id}">Delete</button>
                <button class="editBtn" id="${blog.id}">Edit</button>
                </div>
            </div>
        </div>
        `;
      document.querySelector("#blog-list").innerHTML += blogCard;
    }

    let editBtn = document.querySelectorAll(".editBtn");
    for (let i = 0; i < editBtn.length; i++) {
      editBtn[i].addEventListener("click", (e) => {
        let id = e.target.getAttribute("id");
        editBtn[i].closest(".card").innerHTML = `
                <div class="card">
            <div class="card-body">
                <label>Tittle</label>
                <input class="edit-title">
                <label>Content</label>
                <input class="edit-content">
                <label>Author</label>
                <input class="edit-author">
                <div class= "btnBox">
                <button class="saveBtn" id="${id}">Save</button>
                <button class="cancelBtn" id="${id}">Cancel</button>
                </div>
            </div>
        </div>
        `;
      });
    }

    let deleteBtn = document.querySelectorAll(".delBtn");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", (e) => {
        console.log("jeyhun");
        let id = e.target.getAttribute("id");
        console.log(id);
        axios.delete(`${API_URL}/${id}`);
        fetching();
      });
    }
  });
}

fetching();
