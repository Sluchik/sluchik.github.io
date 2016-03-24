
$(function() {

var profiles =[
{
  avatar:'img/ava1.jpg',
  name: 'Bradley Hunter',
  info: 'Based in Chicago. I love playing tennis and loud music.',
  status:'img/tv.png',
},
{
  avatar:'img/ava2.jpg',
  name: 'Heather Walker',
  info: 'Im a happy person that loves cats and climbing on mountains.',
  status:'img/chem.png',
},
{
  avatar:'img/ava3.jpg',
  name: 'Lucas Marsha',
  info: 'I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.',
  status:'img/cof.png',
},
{
  avatar:'img/ava4.jpg',
  name: 'Bradley Hunter',
  info: 'Based in Chicago. I love playing tennis and loud music.',
  status:'img/trev.png',
 }
];

var $html = $('#person').html();
var $template = tmpl($html,{
    data: profiles
});

$('.person__box').append($template);

})
