$ ->
  $('.nav-trigger').click ->
      $(@).find('.nav-trigger-arrow').toggleClass 'active'
      $('.main-nav').toggleClass 'active'

  $('.favorite').click ->
      $(@).toggleClass('true')

  $('.favorite').tooltip({title:'Add to Favorites'})