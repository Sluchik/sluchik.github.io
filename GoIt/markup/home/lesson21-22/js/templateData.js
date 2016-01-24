(function( $ ) {
  $(function() {
  var $html = $('#tem').html();

  var person = [
{
  personName: 'Sloochik Andrii',
  avatar:'img/img_tmpl/Andrii-Sluchik.jpg',
  job: 'Front-end Developer',
  goal: 'I am looking for a job as a Junior Front End Developer.Technical education and good written English will help me to fulfill all the requirements.',
  skils:[
    'HTML',
    'CSS',
    'JS',
    'Git',
 ],
  phone:'+38(096)-92-68-236',
  email: 'sloochik89@gmail.com',
  fs: 'www.facebook.com/sloochik',
  skyp: 'sloochik',
  feedback: 'GoIT   awesome place where you can get knowledge about Web)!'
},

{
personName: 'Den Larson',
avatar:'img/img_tmpl/user.png',
job: 'QA engineer at Global Logik',
goal: 'I am looking for a job as a Junior QA engeenr.',
skils:[
 'Avtomation Testing',
 'Manual  Testing',
 'Test Case',
 'Test Plan',
 'Bug report',
 'javascript',

],
phone:'+38(096)-112-88-12',
email: 'larson@gmail.com',
fs: 'www.facebook.com/larson',
skyp: 'larson',
feedback: 'I like GoIT!'
},
{
personName: 'Terry White',
avatar:'img/img_tmpl/user.png',
job: 'UI/UX designer',
goal: 'I am looking for a job as a Senior UI/UX designer.',
skils:[
 'Adobe Photoshop',
 'Adobe Illustrator',
 'Mockup bilding',
],
phone:'+38(095)-112-78-10',
email: 'tery@gmail.com',
fs: 'www.facebook.com/terry',
skyp: 'larson',
feedback: 'Do the best my work '
}

];

var $template = tmpl($html, {
  data: person
});

$('.wraper').append($template);
});
})(jQuery );
