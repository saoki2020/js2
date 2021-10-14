'use strict';
{
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const fizzNum = document.getElementById("FizzNum");
    const buzzNum = document.getElementById("BuzzNum");

    const numCheck = (num) => {
      const regexp = /^\d*$/;
      return regexp.test(num);
    }

    const ul = document.querySelector('ul');

    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }

    if (numCheck(fizzNum.value) && numCheck(buzzNum.value) && fizzNum.value && buzzNum.value) {
      const fragment = document.createDocumentFragment();
      for (let i = 1; i < 100; i++) {
        if ((i % fizzNum.value === 0) && (i % buzzNum.value === 0)) {
          const li = document.createElement('li');
          li.textContent = "FizzBuzz " + i;
          fragment.appendChild(li);
        } else if (i % fizzNum.value === 0) {
          const li = document.createElement('li');
          li.textContent = "Fizz " + i;
          fragment.appendChild(li);
        } else if (i % buzzNum.value === 0) {
          const li = document.createElement('li');
          li.textContent = "Buzz " + i;
          fragment.appendChild(li);
        }
      }
      ul.appendChild(fragment);
    } else {
      const li = document.createElement('li');
      li.textContent = "整数値を入力してください";
      ul.appendChild(li);
    }
  });
}
