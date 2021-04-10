AFRAME.registerComponent('accessories', {
    init: function () {
      this.el.addEventListener('click', function (evt) {
        var x = document.getElementById("snackbar")
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        // window.location="http://localhost:5000/categories"
      });
    },
  });


