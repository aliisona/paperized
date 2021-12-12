function openSubject(evt, subject) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(subject).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();


var container = $(".container"); 

var submit= $(".submitBtn");
submit.on("click", addOn);

function addOn(){
  container.text("");
  var name= $(".name").val(); 
  var email= $(".email").val();
  var topic=$('.topic').val();
  var date=$('.date').val();
  var sources=$('.sources').val();
  var file=$('.file').val();

  console.log(`<div> <p> Thank you ${name} for contributing to our awesome community!</p> </div>`);
  container.append(`<div class="insideContainer"> <p> Thank you ${name} for contributing to our awesome community!</p> </div>`);
 
  event.preventDefault();
}