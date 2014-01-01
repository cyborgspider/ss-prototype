(function() {
  $(function() {
    return $('.nav-trigger').click(function() {
      $(this).find('.nav-trigger-arrow').toggleClass('active');
      return $('.main-nav').toggleClass('active');
    });
  });

}).call(this);
