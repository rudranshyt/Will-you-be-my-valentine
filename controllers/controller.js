function showPopup(message, param) {
  const container = document.getElementById("popup-container");

  if (!container) {
    console.error("Could not find popup-container");
    return;
  }

  let popUpTemplate = "";

  if (param === "blush") {
    // Logic for the blush message
    popUpTemplate = `
    <div class="pop-up">
        <p>${message}</p>
        <button onclick="closePopup()">Close</button>
    </div>`;
  } else if (param === "yes") {
    // Logic for the song selection (message is an array here)
    const songButtons = message
      .map(
        (song) => `
        <button class="song-option" onclick="selectSong('${encodeURIComponent(song)}')">
          ${song}
        </button>
      `,
      )
      .join("");

    popUpTemplate = `
      <div class="pop-up">
          <h2>Pick our song:</h2>
          <div class="song-list">
            ${songButtons}
          </div>
          <button onclick="closePopup()" style="margin-top:10px;">Cancel</button>
      </div>`;
  }

  container.innerHTML = popUpTemplate;
}

// Redirect function
function selectSong(songName) {
  // This sends the name to your player page via URL
  window.location.href = `player.html?song=${songName}`;
}

function blushAlert() {
  showPopup("Awww you are blushing!!!!", "blush");
}

function askSong() {
  const songs = ["Mera Mann Kehne Laga", "Tu Hi Mera", "Pehli Dafa"];
  showPopup(songs, "yes");
}

function closePopup() {
  document.getElementById("popup-container").innerHTML = "";
}
