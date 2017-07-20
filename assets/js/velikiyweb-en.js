$(document).ready(function() {
  $('#grid_smolenskiy').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/smolenskiy_floor_picker.gif', 
          caption: 'Free office space viewer' },
      { url: '/assets/img/smolenskiy_parallax.gif', 
          caption: 'Effects: parallax scrolling and 3d skewing' },
    ]);
  });
  $('#grid_lhk').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/lhk_accordion.gif', 
          caption: '&laquo;Accordion&raquo; type slider' },
    ]);
  });
  $('#grid_acmen').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/acmen_mobile.gif', 
          caption: 'Mobile menu' },
      { url: '/assets/img/acmen_3d.gif', 
          caption: 'Animation with 3d effect' },
    ]);
  });
  $('#grid_finderent').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/finderent_filter.gif', 
          caption: 'Search filter' },
      { url: '/assets/img/finderent_mobile.gif', 
          caption: 'Mobile version' },
    ]);
  });
  $('#grid_bonus').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/bonus_calc.gif', 
          caption: 'Profit calculator' },
      { url: '/assets/img/bonus_members_area.jpg', 
          caption: 'Members area' },
    ]);
  });
  $('#grid_tryfoto').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/tryfoto_1080p.png', 
          caption: 'Responsive layouts for tryfoto.ru project' },
      { url: '/assets/img/tryfoto_tablet.png', 
          caption: 'Responsive layouts for tryfoto.ru project' },
      { url: '/assets/img/tryfoto_nexus.png', 
          caption: 'Responsive layouts for tryfoto.ru project' },
    ]);
  });
  $('#grid_fuzzyforecast').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/fuzzyforecast_app.png', 
        caption: 'A web app for drug situation forecasting using fuzzy logic'}
    ]);
  });
  $('#grid_metacritic').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/metacritic_1.png', 
        caption: 'Comparison between mean critic scores and user scores'},
      { url: '/assets/img/metacritic_2.png', 
        caption: 'Comparison between total number of user reviews and critic reviews'},
      { url: '/assets/img/metacritic_3.png', 
        caption: 'Scores by publisher'}
    ]);
  });
    $('#grid_steam').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/steam_1.png', 
        caption: 'Visualization of friends graph from Steam Community social network using Gephi software'},
      { url: '/assets/img/steam_1_labels.png', 
        caption: 'Visualization of friends graph from Steam Community social network (user IDs are shown)'},
      { url: '/assets/img/steam_1_sigma.png', 
        caption: 'Visualization of friends graph from Steam Community social networkusing Sigma.js library'}
    ]);
  });
  $('#grid_modular-css').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/modular-css_menu.png', 
        caption: 'An example of modular CSS+HTML layout using SASS and BEM technologies'},
      { url: '/assets/img/modular-css_pricing.png', 
        caption: 'SASS+BEM pricing table'},
      { url: '/assets/img/modular-css_bemtree.png', 
        caption: 'BEM tree of a project'}
    ]);
  });
  $('#grid_bitovka-profi').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/bitovka-profi_1080p.png', 
        caption: 'Modular and responsive layout for &laquo;Bytovka profi&raquo; corporate website'},
      { url: '/assets/img/bitovka-profi_tablet.png', 
        caption: 'Modular and responsive layout for &laquo;Bytovka profi&raquo; corporate website'},
      { url: '/assets/img/bitovka-profi_smartphone.png', 
        caption: 'Modular and responsive layout for &laquo;Bytovka profi&raquo; corporate website'},
    ]);
  });
  $('#grid_test-tasks').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: '/assets/img/test-tasks_task1.png', 
        caption: 'An example of an interview task I completed'},
    ]);
  });
    $('#grid_ulmart').on('click', function(event) {
        // the page will scroll up without this
        event.preventDefault();
        Strip.show([
            { url: '/assets/img/ulmart_mobile_1.gif',
                caption: 'Compare goods in mobile app'},
            { url: '/assets/img/ulmart_mobile_2.jpg',
                caption: 'Home page of mobile app'},
            { url: '/assets/img/ulmart_mobile_3.jpg',
                caption: 'User profile'},
            { url: '/assets/img/ulmart_mobile_4.jpg',
                caption: 'Good availability'},
            { url: '/assets/img/ulmart_mobile_5.jpg',
                caption: 'Good availability'},
            { url: '/assets/img/ulmart_1.jpg',
                caption: 'Catalogue in desktop app'},
            { url: '/assets/img/ulmart_2.png',
                caption: 'Checkout process in desktop app'},
        ]);
    });
    $('#grid_uniteller').on('click', function(event) {
        // the page will scroll up without this
        event.preventDefault();
        Strip.show([
            { url: '/assets/img/uniteller_1.png',
                caption: 'Payment page (mobile version)'},
            { url: '/assets/img/uniteller_2.png',
                caption: 'Payment page (desktop version)'},
            { url: '/assets/img/uniteller_3.png',
                caption: 'Payment authorization'},
            { url: '/assets/img/uniteller_4.png',
                caption: 'Payment successful'},
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
            strings: ["Web developer / data analyst"],
            typeSpeed: 70,
            showCursor: false,
            preStringTyped: function() {
                $(".intro__heading").css("opacity", "1"); 
            },
        });
    });
});
