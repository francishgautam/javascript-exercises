const posts = [
  { title: "First post", id: 1 },
  { title: "Second post", id: 2 },
];

function getPosts() {
  setTimeout(() => {
    posts.forEach((element) => {
      console.log(element.title);
    });
  }, 1000);
}
// getPosts();

function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.forEach((element) => {
        console.log(element.id);
      });
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    });
  });
}

getPromise()
  .then(console.log("The promise was fulfilled"))
  .then(getPosts())
  .catch((err) => console.log(err));

promise1 = Promise.resolve("Hello there general kenobi!");
promise2 = 10;
promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "A fine addition to my collection");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
