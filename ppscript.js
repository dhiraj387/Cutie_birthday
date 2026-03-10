function openVideoGift() {
  const audio = document.getElementById("bgMusic");
  if (audio) {
    audio.pause();
  }
  window.open('https://anshu3219867.github.io/birthday/', '_blank');
}

function openGoogle() {
  window.open('https://flowerbyprit.netlify.app/', '_blank');
}
  // Autoplay workaround (in case autoplay is blocked)

    window.addEventListener('click', function enableAudioOnce() {

      const audio = document.getElementById("bgMusic");
      if (audio.paused) {
        audio.play().catch(() => {});
      }
      window.removeEventListener('click', enableAudioOnce);
    });