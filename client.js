document.getElementById("getText").addEventListener("click", getText)
document.getElementById("getUsers").addEventListener("click", getUsers)
document.getElementById("getPosts").addEventListener("click", getPosts)

function getText(){
    fetch("sample.txt")
    .then(response => response.text())
    .then((data)=>{
        document.getElementById("output").innerHTML = `<p>${data}</p>`
        anime({
            targets: 'p',
            scale: [1,1.3],
            translateX: 30,
            duration: 1500
        })
    })
    .catch(err=>console.log(err))
}

function getUsers(){
    fetch("users.json")
    .then(response => response.json())
    .then((data)=>{
        let output = "<h1>Users</h1>"
        data.forEach(user => {
            output += `
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>eMail: ${user.email}</li>
            </ul>
            `
        })
        document.getElementById("output").innerHTML = output
        anime({
            targets: 'ul',
            translateX:[-500,50],
            duration: 2000,
            delay: anime.stagger(50)
        })
        anime({
            targets: 'h1',
            translateY: [-500, -20],
            delay: 100,
            duration: 2000
        })
    })
}

function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((data)=>{
        let output = "<h1>Posts</h1>";
        data.forEach(post =>{
            output +=
            `<div class="card">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            `
        })
    document.getElementById("output").innerHTML = output;
    anime({
        targets: ['.card'],
        translateY:[-500,-30],
        duration: 3000,
        opacity: [0,1],
        delay: anime.stagger(50)
    })
    anime({
        targets: 'h1',
        translateY: [-500, -30],
        delay: 100,
        duration: 3000
    })
    })
}
anime({
    targets: 'button',
    translateY: [-200, 0],
    duration: 2000,
    direction: 'alternate',
    loop: false,
    delay: anime.stagger(100)
})