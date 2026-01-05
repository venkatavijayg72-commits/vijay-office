
// ===== Simple Slider =====
const track = document.querySelector(".marquee-track");
let isDown = false, startX, scrollX;

// Drag-to-scroll
track.addEventListener("mousedown", e => {
  isDown = true; startX = e.pageX; scrollX = track.scrollLeft;
});
track.addEventListener("mouseup", () => isDown = false);
track.addEventListener("mouseleave", () => isDown = false);
track.addEventListener("mousemove", e => {
  if (!isDown) return;
  track.scrollLeft = scrollX - (e.pageX - startX);
});

// ===== Video Modal =====
const modal = document.querySelector(".video-modal"),
      video = modal.querySelector("video"),
      close = modal.querySelector(".close-modal");

document.querySelectorAll(".video-card").forEach(card=>{
  card.onclick = () => {
    video.src = card.dataset.video;
    modal.style.display = "block";
    video.play();
  };
});

close.onclick = () => {
  modal.style.display = "none";
  video.pause(); video.src="";
};
