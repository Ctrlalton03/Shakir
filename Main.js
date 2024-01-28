document.getElementById('myVideo').addEventListener('ended',myHandler,false);
        function myHandler(e) {
            if(!e) { e = window.event; }
            // What you want to do after the event
            document.getElementById('myVideo').style.display="none";
            document.getElementById('videoEnd').style.display="block";
        };

document.addEventListener("visibilitychange", function() {
            if (document.visibilityState === 'visible') {
              // Tab is now visible, play the video
              playVideo();
            } else {
              // Tab is not visible, pause the video
              playVideo();
            }
          });
        
