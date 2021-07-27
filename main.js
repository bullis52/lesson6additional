//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {

        for (const post of posts) {
            let userDiv = document.createElement('div');
            let btn = document.createElement('button');
            userDiv.append(btn);
            btn.innerText = 'press'
            let h2 = document.createElement('h2')
            let h3 = document.createElement('h3')
            let p = document.createElement('p')
            let span = document.createElement('span')
            btn.onclick = function (){
                //userDiv.append(`${post.id}`,`${post.userId}`,`${post.title}`,`${post.body}`)
                userDiv.append(h2)
                userDiv.append(h3)
                userDiv.append(p)
                userDiv.append(span)
                h2.innerText = `${post.id}`
                h3.innerText = `${post.userId}`
                p.innerText = `${post.title}`
                span.innerText = `${post.body}`
            }
            let target = document.getElementById('target');
            target.append(userDiv);
        }})
