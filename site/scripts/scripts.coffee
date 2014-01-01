$ ->
  $('.nav-trigger').click ->
      $(@).find('.nav-trigger-arrow').toggleClass 'active'
      $('.main-nav').toggleClass 'active'