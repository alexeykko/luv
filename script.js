        var song1Button = document.getElementById("1");
        var song2Button = document.getElementById("2");
        var song3Button = document.getElementById("3");
        var song4Button = document.getElementById("4");
        var song5Button = document.getElementById("5");
        var song6Button = document.getElementById("6");
        var song7Button = document.getElementById("7");
        var song8Button = document.getElementById("8");
        var song9Button = document.getElementById("9");
        var song10Button = document.getElementById("10");
        var song11Button = document.getElementById("11");
        var song12Button = document.getElementById("12");
        var song13Button = document.getElementById("13");
        var song14Button = document.getElementById("14");
        var song15Button = document.getElementById("15");
        var song16Button = document.getElementById("16");
        
        

        var player = document.getElementById("player");
        var playButton = document.getElementById("play-pause");
        var volumeSlider = document.getElementById("volume");
        var muteButton = document.getElementById("mute");
        var seekBar = document.getElementById("seek-bar");
        var timeDisplay = document.getElementById("time-display");
        var currentTime = document.getElementById("current-time");
        var duration = document.getElementById("duration");
        var songTitle = document.getElementById("song-title");

        var previousButton = document.getElementById("previous-song");
        var nextButton = document.getElementById("next-song");
        var sources = player.getElementsByTagName("source");
        //initialize index of current song
        var currentIndex = 0;
        
        var isPlaying = false;
        var isMuted = false;
        playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
      
        song1Button.addEventListener("click", function() {
          player.src = "Baby-Pluto.mp3";
          player.play();
          playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 0;
        updateTimeDisplay();
        });
        song2Button.addEventListener("click", function() {
          player.src = "Futsal-Shuffle.mp3";
          player.play();
          playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 1;
        updateTimeDisplay();
        });
        song3Button.addEventListener("click", function() {
          player.src = "Lo-Mein.mp3";
          player.play();
          playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 2;
        updateTimeDisplay();
        });
        song4Button.addEventListener("click", function() {
            player.src = "Im-Sorry.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 3;
        updateTimeDisplay();
          });
          song5Button.addEventListener("click", function() {
            player.src = "Venetia.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 4;
        updateTimeDisplay();
          });
          song6Button.addEventListener("click", function() {
            player.src = "P2.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 5;
        updateTimeDisplay();
          });
          song7Button.addEventListener("click", function() {
            player.src = "Yessirskiii.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 6;
        updateTimeDisplay();
          });
          song8Button.addEventListener("click", function() {
            player.src = "Myron.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 7;
        updateTimeDisplay();
          });
          song9Button.addEventListener("click", function() {
            player.src = "XO-Tour-Llif3.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 8;
        updateTimeDisplay();
          });
          song10Button.addEventListener("click", function() {
            player.src = "20-Min.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 9;
        updateTimeDisplay();
          });
          song11Button.addEventListener("click", function() {
            player.src = "The-Way-Life-Goes.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 10;
        updateTimeDisplay();
          });
          song12Button.addEventListener("click", function() {
            player.src = "Sauce-It-Up.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 11;
        updateTimeDisplay();
          });
          song13Button.addEventListener("click", function() {
            player.src = "Dark-Queen.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 12;
        updateTimeDisplay();
          });
          song14Button.addEventListener("click", function() {
            player.src = "Neon-Guts.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 13;
        updateTimeDisplay();
          });
          song15Button.addEventListener("click", function() {
            player.src = "No-Sleep-Leak.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 14;
        updateTimeDisplay();
          });
          song16Button.addEventListener("click", function() {
            player.src = "For-Real.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        currentIndex = 15;
        updateTimeDisplay();
          });
        function playPause() {
          if(isPlaying) {
            player.pause();
            playButton.innerHTML = '<i class="bi bi-play-fill"></i>';
          } else {
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
          }
          isPlaying = !isPlaying;
        }
        function setVolume() {
          player.volume = volumeSlider.value;
        }
        function mute() {
          if(isMuted) {
            player.muted = false;
            muteButton.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
          } else {
            player.muted = true;
            muteButton.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
          }
          isMuted = !isMuted;
        }
        
        function setSeek() {
          player.currentTime = seekBar.value;
          if (Math.abs(player.currentTime - seekBar.value) > 1) {
            player.currentTime = seekBar.value;
        }
        }
        player.addEventListener("loadedmetadata", function(){
            seekBar.max = player.duration;
          });
          player.addEventListener("timeupdate", function(){
            seekBar.value = player.currentTime;
            if(player.currentTime === player.duration){
              player.pause();
              playButton.innerHTML = '<i class="bi bi-play-fill"></i>';
              isPlaying = false;
            }
            seekBar.max = player.duration;
          });
          player.addEventListener("timeupdate", function(){
            seekBar.value = player.currentTime;
            currentTime.innerHTML = "" + formatTime(player.currentTime);
          });
          player.addEventListener("durationchange", function(){
            duration.innerHTML = "" + formatTime(player.duration);
          });
          function formatTime(time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            if(seconds < 10) {
              seconds = "0" + seconds;
            }
            return minutes + ":" + seconds;
          }
          player.volume = volumeSlider.value / 1;
          function setVolume() {
              player.volume = volumeSlider.value / 1;
          }

previousButton.addEventListener("click", function() {
  currentIndex--;
  if(currentIndex < 0) {
      currentIndex = sources.length-1;
  }
  player.src = sources[currentIndex].src;
  player.play();
  playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
  songTitle.innerHTML = songTitles[currentIndex];
        isPlaying = true;
});

nextButton.addEventListener("click", function() {
  currentIndex++;
  if(currentIndex === sources.length) {
      currentIndex = 0;
  }
  player.src = sources[currentIndex].src;
  player.play();
  playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
  songTitle.innerHTML = songTitles[currentIndex];
        isPlaying = true;
});
var songTitles = ["Lil Uzi Vert - Baby Pluto",
"Lil Uzi Vert - Futsal Shuffle",
"Lil Uzi Vert - Lo Main",
"Lil Uzi Vert - I'm Sorry",
"Lil Uzi Vert - Venetia",
"Lil Uzi Vert - P2",
"Lil Uzi Vert - Yessirskiii(ft. 21 Savage)",
"Lil Uzi Vert - Myron",
"Lil Uzi Vert - XO Tour Llif3",
"Lil Uzi Vert - 20 min",
"Lil Uzi Vert - The Way Life Goes(ft. Oh Wonder)",
"Lil Uzi Vert - Sauce it up",
"Lil Uzi Vert - Dark Queen",
"Lil Uzi Vert - Neon Guts(ft. Pharrell Williams)",
"Lil Uzi Vert - No Sleep Leak",
"Lil Uzi Vert - For Real"];
song1Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - Baby Pluto";
});
song2Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - Futsal Shuffle";
});
song3Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - Lo Main";
});
song4Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - I'm Sorry";
});
song5Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - Venetia";
});
song6Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - P2";
});
song7Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - Yessirskiii(ft. 21 Savage)";
});
song8Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - Myron";
});
song9Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - XO Tour Llif3";
});
song10Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - 20 min";
});
song11Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - The Way Life Goes(ft. Oh Wonder)";
});
song12Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - Sauce it up";
});
song13Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - Dark Queen";
});
song14Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - Neon Guts(ft. Pharrell Williams)";
});
song15Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - No Sleep Leak";
});
song16Button.addEventListener("click", function() {
  songTitle.innerHTML = "Lil Uzi Vert - For Real";
});

var timeDisplay = document.getElementById("time-display");
function showTime(event) {
  var cursorPosition = event.clientX - seekBar.getBoundingClientRect().left;
  var seekBarWidth = seekBar.offsetWidth;
  var seekBarPercent = cursorPosition / seekBarWidth;
  var songDuration = player.duration;
var hoverTime = seekBarPercent * songDuration;

timeDisplay.innerHTML = convertTime(hoverTime);
timeDisplay.style.top = "60px";
timeDisplay.style.marginLeft  = `${cursorPosition}px`;
timeDisplay.style.display = "block";
}

function convertTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}
seekBar.addEventListener("mouseout", function(){
  timeDisplay.style.display = "none";
});