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
        var song17Button = document.getElementById("17");
        var song18Button = document.getElementById("18");
        var song19Button = document.getElementById("19");
        var song20Button = document.getElementById("20");
        var song21Button = document.getElementById("21");
        var song22Button = document.getElementById("22");
        var song23Button = document.getElementById("23");
        var song24Button = document.getElementById("24");

        var player = document.getElementById("player");
        var playButton = document.getElementById("play-pause");
        var volumeSlider = document.getElementById("volume");
        var muteButton = document.getElementById("mute");
        var seekBar = document.getElementById("seek-bar");
        var timeDisplay = document.getElementById("time-display");
        var currentTime = document.getElementById("current-time");
        var duration = document.getElementById("duration");
        var songTitle = document.getElementById("song-title");
        var footer = document.getElementById("footer")

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
          songTitle.innerHTML = "Lil Uzi Vert - Baby Pluto";
        isPlaying = true;
        currentIndex = 0;
        footer.style.display = "flex";
        updateTimeDisplay();
        });
        song2Button.addEventListener("click", function() {
          player.src = "Futsal-Shuffle.mp3";
          player.play();
          playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
          songTitle.innerHTML = "Lil Uzi Vert - Futsal Shuffle";
        isPlaying = true;
        currentIndex = 1;
        footer.style.display = "flex";
        updateTimeDisplay();
        });
        song3Button.addEventListener("click", function() {
          player.src = "Lo-Mein.mp3";
          player.play();
          playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
          songTitle.innerHTML = "Lil Uzi Vert - Lo Main";
        isPlaying = true;
        currentIndex = 2;
        footer.style.display = "flex";
        updateTimeDisplay();
        });
        song4Button.addEventListener("click", function() {
            player.src = "Im-Sorry.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - I'm Sorry";
        isPlaying = true;
        currentIndex = 3;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song5Button.addEventListener("click", function() {
            player.src = "Venetia.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - Venetia";
        isPlaying = true;
        currentIndex = 4;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song6Button.addEventListener("click", function() {
            player.src = "P2.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - P2";
        isPlaying = true;
        currentIndex = 5;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song7Button.addEventListener("click", function() {
            player.src = "Celebration-Station.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - Celebration Station";
        isPlaying = true;
        currentIndex = 6;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song8Button.addEventListener("click", function() {
            player.src = "That-Way.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - That Way";
        isPlaying = true;
        currentIndex = 7;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song9Button.addEventListener("click", function() {
            player.src = "XO-Tour-Llif3.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - XO Tour Llif3";
        isPlaying = true;
        currentIndex = 8;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song10Button.addEventListener("click", function() {
            player.src = "20-Min.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - 20 min";
        isPlaying = true;
        currentIndex = 9;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song11Button.addEventListener("click", function() {
            player.src = "The-Way-Life-Goes.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - The Way Life Goes(ft. Oh Wonder)";
        isPlaying = true;
        currentIndex = 10;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song12Button.addEventListener("click", function() {
            player.src = "Sauce-It-Up.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - Sauce it up";
        isPlaying = true;
        currentIndex = 11;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song13Button.addEventListener("click", function() {
            player.src = "Dark-Queen.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - Dark Queen";
        isPlaying = true;
        currentIndex = 12;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song14Button.addEventListener("click", function() {
            player.src = "Neon-Guts.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - Neon Guts(ft. Pharrell Williams)";
        isPlaying = true;
        currentIndex = 13;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song15Button.addEventListener("click", function() {
            player.src = "No-Sleep-Leak.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - No Sleep Leak";
        isPlaying = true;
        currentIndex = 14;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song16Button.addEventListener("click", function() {
            player.src = "For-Real.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - For Real";
        isPlaying = true;
        currentIndex = 15;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song17Button.addEventListener("click", function() {
            player.src = "7am.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - 7AM";
        isPlaying = true;
        currentIndex = 16;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song18Button.addEventListener("click", function() {
            player.src = "Top.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - Top";
        isPlaying = true;
        currentIndex = 17;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song19Button.addEventListener("click", function() {
            player.src = "You-Was-Right.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - You Was Right";
        isPlaying = true;
        currentIndex = 18;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song20Button.addEventListener("click", function() {
            player.src = "Money-Longer.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - Money Longer";
        isPlaying = true;
        currentIndex = 19;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song21Button.addEventListener("click", function() {
            player.src = "Erase-Your-Social.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - Erase Your Social";
        isPlaying = true;
        currentIndex = 20;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song22Button.addEventListener("click", function() {
            player.src = "Do-What-I-Want.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - Do What I Want";
        isPlaying = true;
        currentIndex = 21;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song23Button.addEventListener("click", function() {
            player.src = "Yessirskiii.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - Yessirskiii(ft. 21 Savage)";
        isPlaying = true;
        currentIndex = 22;
        footer.style.display = "flex";
        updateTimeDisplay();
          });
          song24Button.addEventListener("click", function() {
            player.src = "Myron.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            songTitle.innerHTML = "Lil Uzi Vert - Myron";
        isPlaying = true;
        currentIndex = 23;
        footer.style.display = "flex";
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
"Lil Uzi Vert - Celebration Station",
"Lil Uzi Vert - That Way",
"Lil Uzi Vert - XO Tour Llif3",
"Lil Uzi Vert - 20 min",
"Lil Uzi Vert - The Way Life Goes(ft. Oh Wonder)",
"Lil Uzi Vert - Sauce it up",
"Lil Uzi Vert - Dark Queen",
"Lil Uzi Vert - Neon Guts(ft. Pharrell Williams)",
"Lil Uzi Vert - No Sleep Leak",
"Lil Uzi Vert - For Real",
"Lil Uzi Vert - 7AM",
"Lil Uzi Vert - Top",
"Lil Uzi Vert - You Was Right",
"Lil Uzi Vert - Money Longer",
"Lil Uzi Vert - Erase Your Social",
"Lil Uzi Vert - Do What I Whant",
"Lil Uzi Vert - Yessirskiii(ft. 21 Savage)",
"Lil Uzi Vert - Myron"];

var timeDisplay = document.getElementById("time-display");
function showTime(event) {
  var cursorPosition = event.clientX - seekBar.getBoundingClientRect().left;
  var seekBarWidth = seekBar.offsetWidth;
  var seekBarPercent = cursorPosition / seekBarWidth;
  var songDuration = player.duration;
var hoverTime = seekBarPercent * songDuration;

timeDisplay.innerHTML = convertTime(hoverTime);

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
var repeatButton = document.getElementById("repeat");

var isRepeating = false;
repeatButton.addEventListener("click", function() {
  if (isRepeating) {
      repeatButton.innerHTML = '<i class="bi bi-arrow-right"></i>';
      isRepeating = false;
  } else {
      repeatButton.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i>';
      isRepeating = true;
    }
  });
  player.addEventListener("ended", function(){
    if (isRepeating) {
        player.currentTime = 0;
        player.play();
        playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
    } else {
        currentIndex++;
        songTitle.innerHTML = songTitles[currentIndex];
        playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        if (currentIndex === sources.length) {
            currentIndex = 0;
        }
        player.src = sources[currentIndex].src;
        player.play();
        songTitle.innerHTML = songTitles[currentIndex];
    }
});