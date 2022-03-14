const elInputAdd = document.querySelector('input[type="text"]');
const elForm = document.querySelector("form");
const elList = document.querySelector("#id-list");
const elItemNone = document.getElementById('id-none');
const elAll = document.getElementById('id-all');
const elCom = document.getElementById('id-com');
const elIncom = document.getElementById('id-incom');


elForm.addEventListener("submit", addItem);

function addItem(e, element){
  if(e) {
    e.preventDefault();
  }

  // li item boxni yaratadigan bo'lim

  let newItem = elInputAdd.value;  //inputdan keladigan ma'lumot
  let li = document.createElement("li"); //li item boxni yaratdik
  li.className = "todo__item incomplete"; // li itemga  class nimni berdik

  // Text qo'shiladigan bo'lim

  let inputText = elInputAdd.value;
  let pText = document.createElement('p');
  pText.className = "todo__text";
  // pText.appendChild(document.createTextNode(inputText));
  pText.textContent = inputText;


  // li item boxga pText (inputdan)  keladiigan ma'lumotni qo'shib qo'yish

  li.appendChild(pText); // li itemga inputdan kelgan textni qo'shib qoydik


  // O'chirish va Tasdiqlashni qo'shish qismi

  let elSpan = document.createElement('span');
  elSpan.className = "todo__right";

  // Tasdiqlash bo'limni qo'shish

  let elCheck = document.createElement('button');
  elCheck.className = "btn todo__checkbox";
  elCheck.innerHTML = "<i class='bx bx-checkbox todo__iconcheck'></i>"; // checkIconi qo'shildi
  let chek = true;
  elCheck.addEventListener("click", ()=> {
    if(chek) {
      elCheck.innerHTML = "<i class='bx bxs-checkbox-checked todo__iconcheck'></i>";
      pText.style.opacity = "0.5";
      chek = false;
      li.classList.remove('incomplete')
      li.classList.add("complete");

    }
    else {
      elCheck.innerHTML = "<i class='bx bx-checkbox todo__iconcheck'></i>";
      pText.style.opacity = "1";
      chek = true;
      li.classList.remove("complete");
      li.classList.add("incomplete");
    }
  });


  // O'chirish tugamasi qo'shish

  let elDelete = document.createElement('button');
  elDelete.className = "btn todo__delete";
  elDelete.innerHTML = "<i class='bx bx-trash-alt todo__icontrash'></i>"; // Trash icon qo'shildi
  elDelete.addEventListener('click', ()=> {
    elList.removeChild(li);
  });

  // elSpanga tasdiqlsh va o'chirish qismni qo'shish

  elSpan.appendChild(elCheck);
  elSpan.appendChild(elDelete);


  // li item boxga tasdiqlash va o'chirish qismni qo'shish

  li.appendChild(elSpan);


  //Displayga chiqarish
  elList.appendChild(li); // ul list,ni ishiga li item boxni qo'shib qoydik

  elInputAdd.value = [];

  elItemNone.className = "none";

}


// SORTLASH QISMI

elAll.addEventListener('click', () => {
  let sortLi = document.querySelectorAll('li');

  for(let i = 0; i < sortLi.length; i++) {
    if(sortLi[i].classList.contains("incomplete") || sortLi[i].classList.contains("complete")) {
      sortLi[i].style.display = 'flex';
    }
  }
});

elCom.addEventListener('click', ()=> {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(sortLi[i].classList.contains("incomplete")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'flex'
      }
    }
  });

  elIncom.addEventListener('click', () => {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(sortLi[i].classList.contains("complete")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'flex';
      }
    }
  })