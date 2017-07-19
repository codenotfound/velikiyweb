$(document).ready(function() {
  $('#grid_smolenskiy').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/smolenskiy_floor_picker.gif', 
          caption: 'Просмотр свободной площади на этаже' },
      { url: 'assets/img/smolenskiy_parallax.gif', 
          caption: 'Эффекты: параллакс-скроллинг и трехмерная дфеормация' },
    ]);
  });
  $('#grid_lhk').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/lhk_accordion.gif', 
          caption: 'Слайдер типа &laquo;аккордеон&raquo;' },
    ]);
  });
  $('#grid_acmen').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/acmen_mobile.gif', 
          caption: 'Мобильное меню' },
      { url: 'assets/img/acmen_3d.gif', 
          caption: 'Анимация с трехмерным эффектом' },
    ]);
  });
  $('#grid_finderent').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/finderent_filter.gif', 
          caption: 'Поисковый фильтр' },
      { url: 'assets/img/finderent_mobile.gif', 
          caption: 'Мобильная версия' },
    ]);
  });
  $('#grid_bonus').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/bonus_calc.gif', 
          caption: 'Калькулятор дохода' },
      { url: 'assets/img/bonus_members_area.jpg', 
          caption: 'Личный кабинет' },
    ]);
  });
  $('#grid_tryfoto').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/tryfoto_1080p.png', 
          caption: 'Адаптивная верстка для проекта tryfoto.ru' },
      { url: 'assets/img/tryfoto_tablet.png', 
          caption: 'Адаптивная верстка для проекта tryfoto.ru' },
      { url: 'assets/img/tryfoto_nexus.png', 
          caption: 'Адаптивная верстка для проекта tryfoto.ru' },
    ]);
  });
  $('#grid_fuzzyforecast').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/fuzzyforecast_app.png', 
        caption: 'Приложение для прогнозирования наркоситуации с помощью нечеткой логики'}
    ]);
  });
  $('#grid_metacritic').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/metacritic_1.png', 
        caption: 'Сравнение средних оценок критиков и пользователей'},
      { url: 'assets/img/metacritic_2.png', 
        caption: 'Сравнение числа рецензий критиков и пользователей'},
      { url: 'assets/img/metacritic_3.png', 
        caption: 'Оценки в разрезе по издателям'}
    ]);
  });
  $('#grid_steam').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/steam_1.png', 
        caption: 'Визуализация графа друзей социальной сети Steam Community с помощью программы Gephi'},
      { url: 'assets/img/steam_1_labels.png', 
        caption: 'Визуализация графа друзей социальной сети Steam Community (показаны идентификаторы пользователей)'},
      { url: 'assets/img/steam_1_sigma.png', 
        caption: 'Визуализация графа друзей социальной сети Steam Community с помощью Sigma.js'}
    ]);
  });
  $('#grid_modular-css').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/modular-css_menu.png', 
        caption: 'Пример модульной верстки меню с использованием технологий SASS и БЭМ'},
      { url: 'assets/img/modular-css_pricing.png', 
        caption: 'Пример модульной верстки ценовой таблицы с использованием технологий SASS и БЭМ'},
      { url: 'assets/img/modular-css_bemtree.png', 
        caption: 'БЭМ-дерево проекта'}
    ]);
  });
  $('#grid_bitovka-profi').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/bitovka-profi_1080p.png', 
        caption: 'Модульная адаптивная верстка для сайта компании "Бытовка Профи"'},
      { url: 'assets/img/bitovka-profi_tablet.png', 
        caption: 'Модульная адаптивная верстка для сайта компании "Бытовка Профи"'},
      { url: 'assets/img/bitovka-profi_smartphone.png', 
        caption: 'Модульная адаптивная верстка для сайта компании "Бытовка Профи"'},
    ]);
  });
  $('#grid_test-tasks').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/test-tasks_task1.png', 
        caption: 'Пример выполнения тестового задания по web-верстке'},
    ]);
  });
  $('#grid_ulmart').on('click', function(event) {
		// the page will scroll up without this
		event.preventDefault();
		Strip.show([
			{ url: 'assets/img/ulmart_1.jpg',
				caption: 'Каталог десктоп-приложения'},
            { url: 'assets/img/ulmart_2.png',
				caption: 'Чекаут десктоп-приложения'},
		]);
	});

// BUTTONS
    $(".js-scrolldown").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#portfolio").offset().top},
            'slow');
    });
    
//INTRO typed.js
    $(function(){
        $(".intro__heading").typed({
            strings: ["Веб-разработчик / аналитик"],
            typeSpeed: 70,
            showCursor: false,
            preStringTyped: function() {
                $(".intro__heading").css("opacity", "1"); 
            },
        });
    });
});
