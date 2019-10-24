let btn = document.querySelector('.btn');
let reviews = document.querySelector('.container-item__reviews');

let addText = () => {
    
    let message = document.querySelector('#message');
    let text = message.value;
    let newText = document.createTextNode(text);
    let div = document.createElement('div');
    let divContainer = document.createElement('div');
    let content = divContainer.innerHTML;
    let newName = document.createTextNode(content);

    if(text !== '') {
        divContainer.appendChild(newName);
        divContainer.className = 'review';
        divContainer.innerHTML = '<div class="strong">Шевченко Андрей</div>';
        divContainer.innerHTML +='<div class="review-data">24.10.2019</div>';
        reviews.appendChild(divContainer);
        
        div.className = 'review-text';
        div.appendChild(newText);
        reviews.appendChild(div);
    } else {
        alert('Заполните поле ввода!');
    }
}

btn.addEventListener('click', addText);

document.addEventListener('keyup', function(e) {
    if(e.ctrlKey && e.keyCode == 13) {
        addText();
    }
});
