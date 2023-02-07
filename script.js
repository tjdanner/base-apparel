const button = document.querySelector('button');

button.onmouseover = e => {
    button.style.boxShadow = '5px 5px 10px lightgray';
    button.onmouseout = e => {
        button.style.boxShadow = '';
    }
}