var slideNum = 0;
        showSlide();
        
        function showSlide() {
          var i;
          var slides = document.getElementsByClassName("slide"); //snappar här upp elementet genom dom trädet
          for (i = 0; i < slides.length; i++) { // när 2.5 sekunder gått körs functionen igen och bilden byts genom att ändra display till none för dem som ska gömmas
            slides[i].style.display = "none";
          }
          slideNum++; //slideNum inkrementeras vilket gör att en bild får display: none medans nästa får display: block så den syns.
          if (slideNum > slides.length) {slideNum = 1}
          slides[slideNum-1].style.display = "block"; //ändrar display till block så bilden syns
          setTimeout(showSlide, 2500); //kör om funktionen när 2.5 sekunder gått.
        }
        