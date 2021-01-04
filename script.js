function myFunction() {
  console.log("check me man");
  var x = document.getElementsByClassName("buttons"); // x = [<div class=buttons >...</div>, <div buttons >...</div>]

  for (var i = 0; i < x.length; i++) {

    if (x[i].className == "buttons") {
      x[i].className += " responsive"
    } else {
      x[i].className = "buttons";
    }
  }
}
