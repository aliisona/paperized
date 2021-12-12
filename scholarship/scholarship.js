function myFunction() {
  
  var input, filter, scholarshipList, li, a, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  scholarshipList = document.getElementById("scholarshipList");
  li = scholarshipList.getElementsByTagName("li");
  
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } 
      else {
        li[i].style.display = "none";
      }
  }
}