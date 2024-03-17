var posts=["2024/03/11/hello-world/","2024/03/17/第一次博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };