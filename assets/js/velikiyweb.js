$(document).ready(function() {
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
  $('#grid_gk_br').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/gk_br_responsive.jpg', 
          caption: 'Адаптивная верстка сайта Группы Компаний "Бизнес-решения"' },
      { url: 'assets/img/gk_br_interactive.gif', 
          caption: 'Интерактивные элементы' },
      { url: 'assets/img/gk_br_cms.png', 
          caption: 'Управление контентом' },
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

// BUTTONS
    $(".js-scrolldown").click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#portfolio").offset().top},
            'slow');
    });
    
  $(function(){
      $(".intro__heading").typed({
        strings: ["Веб-разработчик / аналитик"],
        typeSpeed: 70
      });
      // $(".intro__heading").typed({
        // stringsElement: $('.intro__heading'),
        // typeSpeed: 70
      // });
  });
});
