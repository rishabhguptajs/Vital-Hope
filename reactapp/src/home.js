  // Get the video element
  var video = document.getElementById("myVideo");
  
  // Check if the video playback time is stored in localStorage
  if (localStorage.getItem("videoPlaybackTime")) {
    // Resume playback from the stored time
    video.currentTime = localStorage.getItem("videoPlaybackTime");
  } else {
    // Start playback from the beginning
    video.play();
  }
  
  // Store the current playback time in localStorage when the video is paused or ends
  video.addEventListener("pause", function() {
    localStorage.setItem("videoPlaybackTime", video.currentTime);
  });
  video.addEventListener("ended", function() {
    localStorage.removeItem("videoPlaybackTime");
  });
  
  // Autoplay the video when the tab becomes visible
  document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'visible') {
      setTimeout(function() {
        video.play();
      }, 200); // add a delay to allow time for the video to load
    } else {
      video.pause();
    }
  });
