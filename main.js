//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/users')
     .then(value => value.json())
     .then(users => {
         for (let user of users) {
         let userDiv = document.createElement('div');
                let btn = document.createElement('button');
                let block = document.createElement('div')

                let p = document.createElement('p')
                userDiv.append(p)
                userDiv.append(block)
                userDiv.append(btn);
                btn.innerText = 'press'
                p.innerText = `${user.id} ${user.name} ${user.username}`
                btn.onclick = function () {
                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                        .then(value => value.json())
                        .then(posts => {
                            block.innerHTML = ''
                            for (const post of posts) {
                                let li = document.createElement('li')
                                block.appendChild(li)
                                li.innerText = `${post.title}`
                            }
                        })
                }
                let target = document.getElementById('target');
                target.append(userDiv);
         }})