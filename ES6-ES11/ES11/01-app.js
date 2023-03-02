let btn = document.querySelector('button');
btn.onclick = function() {
    import('./01-hello.js').then(module => {
        module.hello();
    });
}