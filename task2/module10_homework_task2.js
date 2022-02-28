/*	Савенкова Марина, FR-92
 *	//#2
 *	Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 
 */

 const btn = document.querySelector('.j-btn-test');

//обработчик событий для кнопки
btn.addEventListener('click', () => {
    //используем Screen API: свойства window.screen.width и window.screen.height
    alert(`Ширина экрана: ${window.screen.width}\nВысота экрана: ${window.screen.height}`);

    //это эксперименты с анимацией смайлика на кнопочке
    let timerId = setInterval(() => btn.classList.add('btn--magic'), 1000);
    setTimeout(() => { clearInterval(timerId); btn.classList.remove('btn--magic')  }, 3000);
});
