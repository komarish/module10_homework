/*	Савенкова Марина, FR-92
 *	//#1
 *	Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). 
 *	При клике на кнопку иконка должна меняться на icon_02. 
 *	Повторный клик меняет иконку обратно.
 */

 const btn = document.querySelector('.j-btn-test');
 const svg1 = document.getElementById("icon_01");
 const svg2 = document.getElementById("icon_02");

 //задаем одной иконке значение display "block", а другой - "none"
 svg1.style.display = "block";
 svg2.style.display = "none";

//обработчик событий для кнопки
//проверяем значение display элементов и в зависимости от
//текущего значения меняем на противоположное
//возникает чередование
btn.addEventListener('click', () => {
  if (svg1.style.display == "none") {
  	svg1.style.display = "block";
  	svg2.style.display = "none";
  }
  else {
  	svg1.style.display = "none";
  	svg2.style.display = "block";
  }
});