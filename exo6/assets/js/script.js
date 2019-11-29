function multiplication(){
  var shoesize = document.getElementById('shoesize').value;
  var birthday = document.getElementById('birthday').value;
  var result = ((shoesize *2+5)*50 - birthday + 1769)
  alert(result);
}
