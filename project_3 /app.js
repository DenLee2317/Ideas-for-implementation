// в первую очередь запускаем кнопки
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const mainSlide = document.querySelector('.main-slide');

const container = document.querySelector('.container');
// вызовем все div, для этого созадем const
const slidesCount = mainSlide.querySelectorAll('div').length;

// создаем перементу для понимания какой слайд является активным
let ativeSlideIndex = 0;
// 1.задаем правильное положение картинки согласно цвету
// 1.1.задаем отступ сверху для совпадения изображ.
const sidebar = document.querySelector('.sidebar');
// теперь мы можем манипулировать его стилями
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`// интерполяция

//добавляем слушателя события для кнопок, вызываем функц с разными параметрами
upBtn.addEventListener('click', () => {
changeSlide('up');
})
downBtn.addEventListener('click', () => {
changeSlide('down');
})
// указываем направление изменения слайда
function changeSlide(direction){

    if(direction === 'up'){ 
       ativeSlideIndex ++
if(ativeSlideIndex  === slidesCount)
{
    ativeSlideIndex  = 0
}

}else if (direction === 'down'){
    ativeSlideIndex --
    if(ativeSlideIndex  < 0)
    {
        ativeSlideIndex  = slidesCount - 1
    }
}

const height = container.clientHeight;


mainSlide.style.transform = `translateY(-${ativeSlideIndex * height}px)`

sidebar.style.transform = `translateY(${ativeSlideIndex * height}px)`
}
