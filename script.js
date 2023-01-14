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
        var isPlaying = false;
        var isMuted = false;
        playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
      
        song1Button.addEventListener("click", function() {
          player.src = "Baby-Pluto.mp3";
          player.play();
          playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
        });
        song2Button.addEventListener("click", function() {
          player.src = "Futsal-Shuffle.mp3";
          player.play();
          playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
        });
        song3Button.addEventListener("click", function() {
          player.src = "Lo-Mein.mp3";
          player.play();
          playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
        });
        song4Button.addEventListener("click", function() {
            player.src = "Im-Sorry.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song5Button.addEventListener("click", function() {
            player.src = "Venetia.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song6Button.addEventListener("click", function() {
            player.src = "P2.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song7Button.addEventListener("click", function() {
            player.src = "Yessirskiii.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song8Button.addEventListener("click", function() {
            player.src = "Myron.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song9Button.addEventListener("click", function() {
            player.src = "XO-Tour-Llif3.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song10Button.addEventListener("click", function() {
            player.src = "20-Min.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song11Button.addEventListener("click", function() {
            player.src = "The-Way-Life-Goes.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song12Button.addEventListener("click", function() {
            player.src = "Sauce-It-Up.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song13Button.addEventListener("click", function() {
            player.src = "Dark-Queen.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song14Button.addEventListener("click", function() {
            player.src = "Neon-Guts.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song15Button.addEventListener("click", function() {
            player.src = "No-Sleep-Leak.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
        updateTimeDisplay();
          });
          song16Button.addEventListener("click", function() {
            player.src = "For-Real.mp3";
            player.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
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
              playButton.innerHTML = "Play";
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

player.volume = volumeSlider.value / 2;

function setVolume() {
    player.volume = volumeSlider.value / 2;
}