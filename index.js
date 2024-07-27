let posts = document.querySelector(".posts")

fetch("https://jsonplaceholder.typicode.com/comments")
.then(function (res) {
    return res.json()
}).then
(function (data) {
    for (let post of data ) {
        let title = post.name
        let email = post.email
        let body = post.body

        console.log(title);
        console.log(email);
        console.log(body);

        let box = document.createElement("div");
        let titleEl = document.createElement("h2");
        let emailEl = document.createElement("p");
        let bodyEl = document.createElement("p");

        box.classList.add('post');
        titleEl.textContent = title;
        emailEl.textContent = email;
        bodyEl.textContent = body;

        box.appendChild(titleEl);
        box.appendChild(emailEl);
        box.appendChild(bodyEl);

        posts.appendChild(box);
    }
});