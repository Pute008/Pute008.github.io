// Array med videofilene
const videos = [
  "bilder/british museum.mp4", // Første video
  // 'videos/video_2.mp4'  // Andre video
];

// Finn videospilleren i DOM
const videoElement = document.getElementById("headerVideo2");

// Start med den første videoen
let currentVideoIndex = 0;

// Funksjon for å spille neste video
function playNextVideo() {
  // Sett videokilde til gjeldende video fra arrayet
  videoElement.src = videos[currentVideoIndex];

  // Spill videoen
  videoElement.play();

  // Forhåndslast neste video
  preloadNextVideo();
}

// Funksjon for å forhåndslaste neste video
function preloadNextVideo() {
  const nextIndex = (currentVideoIndex + 1) % videos.length; // Beregn neste indeks
  const nextVideo = document.createElement("video"); // Opprett et nytt videoelement
  nextVideo.src = videos[nextIndex]; // Sett kilde til neste video
  nextVideo.preload = "auto"; // Forhåndslast videoen
  nextVideo.load(); // Last inn videoen
}

// Når videoen er ferdig, bytt til neste video
videoElement.addEventListener("ended", function () {
  // Oppdater index til neste video
  currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Loop til starten
  playNextVideo(); // Spill neste video
});

// Start første video og forhåndslast neste video
videoElement.src = videos[currentVideoIndex];
videoElement.load();
videoElement.play();
preloadNextVideo(); // Forhåndslast neste video
