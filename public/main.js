requirejs.config({
    "baseURL": './',
    "patch" : {
        "posts": 'posts'
    }
});

requirejs(['posts'], function () {
    
});