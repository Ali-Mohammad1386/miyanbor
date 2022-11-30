const Buttons = () => {

  function playsound() {
    const music = new Audio('../static/welcome voice.mp3');
    music.play();
  }

  //گرفتن لوکیشن
  var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    x.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  }

  return (
    <div className="d-flex justify-content-between me-5 ms-5">
      <p id="demo"></p>
      <button className="p-3 rounded-5 btn-speaker" onClick={playsound}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40pt"
          height="40pt"
          fill="currentColor"
          class="bi bi-volume-up"
          viewBox="0 0 16 16"
        >
          <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
          <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
          <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" />
        </svg>
      </button>
      <button className="p-3 rounded-5 btn-location" onClick={getLocation}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35pt"
          height="35pt"
          fill="currentColor"
          class="bi bi-compass"
          viewBox="0 0 16 16"
        >
          <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
          <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
        </svg>
      </button>
      <button className="p-3 rounded-5 btn-location" onClick={getLocation}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35pt"
          height="35pt"
          fill="currentColor"
          class="bi bi-compass-fill"
          viewBox="0 0 16 16"
        >
          <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
        </svg>
      </button>
    </div>
  );
};

export default Buttons;
