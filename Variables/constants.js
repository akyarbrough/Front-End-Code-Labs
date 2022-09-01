const post = {
    status: "I am hiking today!"
}
console.log(post);

post.status = "I was hiking today!";
console.log(post);

const posts = [
    {status: "I am going to the movies today!"}

]
//posts = [];

posts.push(["I got my license today!"]);
console.log(posts);
