let currentAudio = null;

function getSongs() {
  const selectedSong = new URLSearchParams(window.location.search).get("song");
  let songLink;

  if (selectedSong === "Pehli Dafa") {
    songLink = "../songs/Atif Aslam： Pehli Dafa Song.mp3";
  } else if (selectedSong === "Mera Mann Kehne Laga") {
    songLink =
      "../songs/Mera Mann Kehne Laga Full Song with Lyrics ｜ Nautanki Saala ｜ Ayushmann Khurrana,Kunaal Roy Kapur.mp3";
  } else if (selectedSong === "Tu Hi Mera") {
    songLink =
      "../songs/🌟 Tu Hi Mera ｜ 4K Video ｜ Jannat 2 ｜ Emraan Hashmi, Esha Gupta ｜ Shafqat Amanat Ali ｜ Pritam 🎶.mp3";
  } else {
    return null;
  }
  return songLink;
}

function initPlayer() {
  const filePath = getSongs();

  if (filePath) {
    currentAudio = new Audio(filePath);
    currentAudio.volume = 0.5;
    currentAudio.loop = true;
    currentAudio.play().catch(() => {
      document.addEventListener(
        "click",
        () => {
          currentAudio.play();
        },
        { once: true },
      );
    });
  }
}

function pauseSong() {
  if (currentAudio) currentAudio.pause();
}

function resumeSong() {
  if (currentAudio) currentAudio.play();
}
function toggleControl() {
  const btn = document.getElementById("ctrl-btn");
  if (!currentAudio) return;

  if (currentAudio.paused) {
    resumeSong();
    btn.innerHTML = "Pause ⏸️";
    btn.classList.add("playing");
  } else {
    pauseSong();
    btn.innerHTML = "Play ▶️";
    btn.classList.remove("playing");
  }
}
window.onload = initPlayer;
