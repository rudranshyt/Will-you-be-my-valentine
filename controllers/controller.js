function showPopup(message, param) {
  const container = document.getElementById("popup-container");

  if (!container) {
    console.error("Could not find popup-container");
    return;
  }

  let popUpTemplate = "";

  if (param === "blush") {
    popUpTemplate = `
    <div class="pop-up">
        <p>${message}</p>
        <div class="inner-button"><button onclick="closePopup()">Close</button></div>
    </div>`;
  } else if (param === "yes") {
    const songButtons = message
      .map(
        (song) => `
        <div class="inner-button"> <button onclick="selectSong('${encodeURIComponent(song)}')">
          ${song}
        </button></div>
      `,
      )
      .join("");

    popUpTemplate = `
      <div class="pop-up">
          <h2>Pick our song:</h2>
          <div class="song-list">
            ${songButtons}
          </div>
          <div class="inner-button"><button onclick="closePopup()" style="margin-top:10px;">Cancel</button></div>
      </div>`;
  }

  container.innerHTML = popUpTemplate;
}

function selectSong(songName) {
  window.location.href = `../templates/player.html?song=${songName}`;
}

function heartBurst() {
  const scalar = 3;
  const heart = confetti.shapeFromText({ text: "❤️", scalar });

  confetti({
    shapes: [heart],
    particleCount: 80,
    spread: 100,
    origin: { y: 0.6 },
    scalar,
  });
}

function blushAlert() {
  heartBurst();
  showPopup("Awww you are blushing!!!!", "blush");
}

function askSong() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#ff758c", "#ffb3c1", "#ffffff", "#ff9770"],
  });

  const songs = ["Mera Mann Kehne Laga", "Tu Hi Mera", "Pehli Dafa"];
  showPopup(songs, "yes");
}

function closePopup() {
  document.getElementById("popup-container").innerHTML = "";
}
