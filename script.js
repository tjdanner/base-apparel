const button = document.querySelector('button');
const input = document.querySelector('input');
const errorMessage = document.getElementById('error');
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

button.onmouseover = e => {
    button.style.boxShadow = '5px 5px 10px lightgray';
    button.onmouseout = e => {
        button.style.boxShadow = '';
    }
}

button.onclick = e => {
    if (input.value.match(re)) {
        return true
        error.style.display = '';
    } else {
        e.preventDefault();
        error.style.display = 'block';
    }
}