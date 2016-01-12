$(document).ready(function() {
  $('#grid_tryfoto').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/tryfoto_1080p.png', 
          caption: 'Адаптивная верстка для проекта tryfoto.ru' },
      { url: 'assets/img/tryfoto_tablet.png', 
          caption: 'Адаптивная верстка для проекта tryfoto.ru' },
      { url: 'assets/img/tryfoto_iphone.png', 
          caption: 'Адаптивная верстка для проекта tryfoto.ru' },
      { url: 'assets/img/tryfoto_nexus.png', 
          caption: 'Адаптивная верстка для проекта tryfoto.ru' },
      { url: 'https://media.giphy.com/media/xT77XKxcPqxIZqUrwk/giphy.gif', 
          caption: 'Адаптивная верстка для проекта tryfoto.ru' },
    ]);
  });
  $('#grid_gk_br').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'assets/img/tryfoto_1080p.png', 
          caption: 'Адаптивная верстка сайта Группы Компаний "Бизнес-решения"' },
      { url: 'assets/img/gk_br_interactive.gif', 
          caption: 'Интерактивные элементы' },
    ]);
  });
});
