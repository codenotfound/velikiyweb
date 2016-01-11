$(document).ready(function() {
  $('#grid_tryfoto').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();
    Strip.show([
      { url: 'http://placehold.it/700x701', caption: 'Caption below the image' },
      { url: 'http://placehold.it/700x702', caption: 'Another caption' }
    ]);
  });
});
