var posts=["2025/11/14/hello-world/","2025/11/14/我的第一个博客/","2025/11/14/第二个文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };