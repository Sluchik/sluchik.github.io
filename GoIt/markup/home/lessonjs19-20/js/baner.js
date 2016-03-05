$(function() {
var baner =[
{
  section:'Banners Plase',
  title:'Accordion Section #1',
  text: 'Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.'
},
{
  title:'Accordion Section #2',
  text: 'Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.'
},
{
  title:'Accordion Section #3',
  text: 'Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.'
},
{
  title:'Accordion Section #4',
  text: 'Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.'
}


];

var $html = $('#baner').html(); //.html() записує повнічтю html вміст
var $template = tmpl($html,{
    data: baner
});

$('.banners').append($template);

var $allLinks = $('.accordion__section__title');
var $links = $('.accordion__section__title');



/*
$links.on('click', function(e){
  e.preventDefault()
  $links.css({
     "background-color": "#fff",
     "color": "#000",
     "background-image":"url(img/plus.png)",
     "backgroundPosition":'10px center'
   }).next('div').slideUp()

 $(this).css( {
   "background-color": "#f4b60d",
   "color": "#fff",
   "background-image":"url(img/min.png)",
   "backgroundPosition":'10px center'
  }).next('div').slideDown();

})
*/
  $links.on('click', function(e){
  e.preventDefault()

    $links.css({
       "background-color": "#fff",
       "color": "#000",
       "background-image":"url(img/plus.png)",
       "backgroundPosition":'10px center'
     }).next('div').slideUp()

     $(this).css( {
       "background-color": "#f4b60d",
       "color": "#fff",
       "background-image":"url(img/min.png)",
       "backgroundPosition":'10px center'
     })

     var $content = $(this).next('div');
         if($content.css('display') == 'none'){
         $content.slideDown()
         }
       })
     })
