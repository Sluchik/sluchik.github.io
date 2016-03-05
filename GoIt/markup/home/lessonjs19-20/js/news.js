
$(function() {
var news =[
{
  maintitle:'Latest news',
  manth: 'Jan',
  day: '24',
  image: 'img/news1.jpg',
  title: 'Advanced Machinery Helps Improve Quality',
  text:'Cum sociis natoque penatibus et magnis dis parturient ontesmus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur samomo enim ipsam voluptatem.',
  cometns: 25
},
{

  manth: 'Jan',
  day: '21',
  image: 'img/news2.jpg',
  title: 'Powerful Techniques for Advanced Service',
  text:'Cum sociis natoque penatibus et magnis dis parturient ontesmus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur samomo enim ipsam voluptatem.',
  cometns: 18
}

];



var $html = $('#news').html(); //.html() записує повнічтю html вміст
var $template = tmpl($html,{
    data: news
});

//tmpl - виклик шаблону
//в шаблон потрібно передавати обєет а не масив !масив не працює
$('.news').append($template);
})
