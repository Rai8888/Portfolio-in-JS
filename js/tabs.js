const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescriptions = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const tabSectionImages = document.querySelectorAll('.feature__img')

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove('hidden')
    } else {
      elem.classList.add('hidden')
    }
  })
}

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
const dataValue = tabButton.dataset.tabsHandler 
changeContent(tabDescriptions, dataValue)
changeContent(tabImages, dataValue)
changeContent(tabSectionImages, dataValue)

tabButtons.forEach((btn) => {
  if (btn === event.target) {
    btn.classList.add('design-list__item_active')
  } else {
    btn.classList.remove('design-list__item_active')
  }
})
  })
})

/*-- Менять title вкладки браузера на текст из заголовка над табами --*/
the_title = document.querySelector('title');

document.querySelector('#the_button').onclick = function () { 
 the_title.innerHTML = "Примеры сайтов"; 
}

the_title = document.querySelector('title');

document.querySelector('#the_button2').onclick = function () { 
  the_title.innerHTML = "Примеры приложений"; 
}

  