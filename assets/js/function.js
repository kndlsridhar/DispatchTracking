     /* Popup */
     $('[data-popup="tooltip"]').tooltip();

     /* treeview */
     var toggler = document.getElementsByClassName("caret");
     var i;

     for (i = 0; i < toggler.length; i++) {
         toggler[i].addEventListener("click", function() {
             this.parentElement.querySelector(".nested").classList.toggle("active");
             this.classList.toggle("caret-down");
         });
     };


     /* Loader */
     $(window).on("load", function() {
         $(".loader").fadeOut("3000");
     });


     //Get the button
     var mybutton = document.getElementById("myBtn");
     window.onscroll = function() {
         scrollFunction()
     };

     function scrollFunction() {
         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
             mybutton.style.display = "block";
         } else {
             mybutton.style.display = "none";
         }
     }

     function topFunction() {
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
     }