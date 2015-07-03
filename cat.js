



var i = 0;


/*
$('#my-elem').click(function(e) {
  //the element has been clicked... do stuff here
  i++;

  $('#Counter').append(i);

});
*/

var elem = document.getElementById('my-elem');
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here

  i++;
  console.log(i);
  document.getElementById( "catCount" ).innerHTML = i;



}, false);


