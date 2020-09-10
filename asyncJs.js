const posts = [
  { title: "First post", id: 1 },
  { title: "Second post", id: 1 },
];

function getPosts() {
  setTimeout(() => {
    posts.forEach((element) => {
      console.log(element.title);
    });
  }, 1000);
}
getPosts();
