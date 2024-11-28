const express=require('express')
const app=express()

const port=3000

// HomeRoute
app.get('/', (request, response) => {
    response.send('Hello Universe Be Ready')
})

// UserRoute
app.get('/user',(request, response) => {
    response.send('Welcome User:2150')
})

// NotificationRoute
app.get('/notification',(request,response) => {
    response.send('Notification Centre')
})

// PostsRoute
app.get('/posts', (request, response) => {
    const postsList = [
        {
            id: 1,
            postContent: 'Hello',
        },
        {
            id: 2,
            postContent: 'World',
        },
        {
            id: 3,
            postContent: 'Text',
        },
    ]
    response.send(postsList)
})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})