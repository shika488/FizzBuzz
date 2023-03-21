'use strict';

const fb = document.getElementById('fb');

const goBtn = () => {
    var text = '';

    for (let i = 1; i <= 100; i ++) {

        if (i % 15 === 0) {
            text = text +'FizzBuzz' + '<br>';

        } else if (i % 3 === 0) {
            text = text + 'Fizz' + '<br>';

        } else if (i % 5 === 0) {
            text = text + 'Buzz' + '<br>';

        } else {
            console.log(i);
            text = text + i + '<br>';
        }
    }

    fb.innerHTML = text;
}

