function addName() {
  var listName = [];
    for (var i = 0; i < 5; i++ ) {
      listName[i] = prompt('Enter some name № '+ [i+1]);
     }
  return listName;
};
var listName = addName();
var userName = prompt('Enter your name');
var isUserExist;
 for (var i = 0; i < listName.length; i++) {
   if  (userName.toLowerCase() === listName[i].toLowerCase()) {
       isUserExist = listName[i];
       alert(isUserExist  + ' You have successfully logged!');
       break;
   }
};
if (!isUserExist) {
  alert('Error: The name is not available');
}
