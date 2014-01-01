(function() {
  $(function() {
    $('.nav-trigger').click(function() {
      $(this).find('.nav-trigger-arrow').toggleClass('active');
      return $('.main-nav').toggleClass('active');
    });
    $('.favorite').click(function() {
      return $(this).toggleClass('true');
    });
    return $('.favorite').tooltip({
      title: 'Add to Favorites'
    });
  });

}).call(this);
