

// Funktionen der viser brugeren hvor langt de er på siden
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Her fader den første sticky video
const checkpoint = 5000;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".vidO").style.opacity = opacity;
});


// Her er der fadein animationer 
//på messenger teksten når der scrolles
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 2000) {
      $('.andenbesked').fadeIn();
    } else {
      $('.andenbesked').fadeOut();
    }
  });

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 2500) {
      $('.firstbesked').fadeIn();
    } else {
      $('.firstbesked').fadeOut();
    }
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 3000) {
      $('.thirdbesked').fadeIn();
    } else {
      $('.thirdbesked').fadeOut();
    }
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 3500) {
      $('.fjerdebesked').fadeIn();
    } else {
      $('.fjerdebesked').fadeOut();
    }
  });

  // Her er der fadeout animationer på boblen 
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 3600) {
      $('.bubble-chat').fadeOut();
    } else {
      $('.bubble-chat').fadeIn();
    }
  });

  // Video og lyd

    window.addEventListener("scroll", function() { // detect scroll event

      let mySound = document.getElementById("myaudio"); // select audio id
      let lyd = document.getElementById("lyd");
      
      console.log("Is the #lyd visible or not? " + elFllVsbl(lyd)); // test
  
  // Below: start and stop audio 
      if (elFllVsbl(lyd)) { // if the #lyd div is visible then
      if (!(mySound.curentTime > 0)) {
          mySound.play(); // play audio
      }
      } else {
      mySound.pause();
      mySound.currentTime = 0; // rewind the sound
      }
  })
  
  // this function will check whether a tag is visible
  function elFllVsbl( el ) {
      return (
          el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
  }


  //Link til tutorial: 
  //https://www.youtube.com/watch?v=DdwNHFWVzO4
//tal der tæller op
$(document).ready(function(){
  $(".Mnumbers").counterUp({
    delay: 10,
    time: 1200,
  });	
});




// Piano
const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);



