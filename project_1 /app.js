

function slidesPlugin(activeSlides = 0) {
    const slides = document.querySelectorAll('.slide')

    // нам необходимо обойти циклом по каждому из этих слайдов и добавить слушателя
    slides[activeSlides].classList.add('active')
    // 1 способ обхода 
    
    for (const slide of slides) {
        //добавляем функцию которая принимает 2 события клик и что будет выполняться след.функцией при клике
        slide.addEventListener('click', () => {
           
            clearActiveClasses()
    
    // добавляем активный класс
    slide.classList.add('active')
        }) 
    }
    // очищаем все активные классы
    function clearActiveClasses (){
       
        // 2 способ перебора, позволяет последовательно перебрать все элементы массива и удали класс Active.
       slides.forEach ((slide) =>{
        slide.classList.remove('active')
       })
    }
}
 // вызываем данную функцию
  slidesPlugin ()
