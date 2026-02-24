document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    button.addEventListener('click', function() {
        alert('Button clicked!');
        console.log('Button was clicked at ' + new Date().toLocaleTimeString());
    });
});