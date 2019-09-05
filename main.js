// get the buttons
var buttons = document.getElementsByClassName('item');
var vp = document.getElementsByClassName('viewport');

for (var i = 0; i < buttons.length; i++) {
  buttons.item(i).addEventListener('click', function(){
    console.log(this.innerHTML);
    if (this.innerHTML != '+' || '-' || '*' || '/' || '='){
      vp[0].innerHTML += this.innerHTML;
    }
  });
}