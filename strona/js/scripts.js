$(document).ready(function() { 
   //Strona ladowana jako pierwsza:
   $('.content').load('pages/home.html');
 
   //Ladowanie pozostalych podstron:
   $('ul#menu li a').click(function() {
      var podstrona = $(this).attr('href');
      $('.content').html('Ładowanie strony...');
      $('.content').load('pages/'+podstrona);
      return false;
   });
});