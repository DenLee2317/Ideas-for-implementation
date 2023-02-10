
const board  = document.querySelector('#board');
//создаем массив с палитрой цвета
const colors = ['#25DFF6','#F1F7B5','#A8D1D1','#9EA1D4','#FFD4B2','#CEEDC7','#86C8BC','#EAC7C7','#852999','#39B5E0','#A31ACB','#FF78F0','#F5EA5A','#FF7000','#46C2CB','#30E3CA','#E0F9B5','#2EEB95','#20D450','#29F625','#88F625','#B4D420','#F63005','#D40B04','#EB085E','#D404BB','#F80299','#CC02D9','#A40EF0','#5702D9','#2002F8','#118CD9','#14DCF8']

const SQUARES_NUMBER = 1000

for (let i = 0; i < SQUARES_NUMBER;i++ ){
    const square = document.createElement('div')
    square.classList.add('square')

    //добавляем слушателя событий 
    // при наведение появляется цвет
square.addEventListener('mouseover',setColor)


// по истечении времени цвет преходит в другой
square.addEventListener('mouseleave', removeColor)

    board.append(square)
}
// добавляем отображение цвета 
function setColor(event) {
    const element = event.target
    const color = getRandomColor ()
element.style.background = (color);
//добавление объемного эффекта,меняет кавычки на обратные благодаря чему можем передавать динамическое значение в строчку
element.style.boxShadow = `0 0 2px ${color}, 0 0 15px ${color}`
}
//удаляем отображение цвета
function removeColor(event){
    const element = event.target
    element.style.background = ('#1d1d1d');
    element.style.boxShadow = `0 0 2px #000`// если не удалим, останутся крохи
}
// для случайного выбора цвета создаем функицю где обращаемся с индексу массива
function getRandomColor() {
    
    return colors[Math.floor(Math.random()*colors.length)]
}