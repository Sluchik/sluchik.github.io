function addName() {
  var listName = [];
    for (var i = 0; i < 5; i++ ) {
      listName[i] = prompt('Enter some name № '+ [i+1]);
      listName[i] =   listName[i].toUpperCase();
     }
  return listName;
};

var listName = addName();
console.log(listName);

var userName = prompt('Enter your name');
var user;

userName =  userName.toUpperCase();
 for (var i = 0; i < listName.length; i++) {
   if  (userName == listName[i]) {
       user = listName[i];
      alert(user + ' You have successfully logged!');
   }
};
if (user  == undefined) {
  alert('Error: The name is not available');
}
