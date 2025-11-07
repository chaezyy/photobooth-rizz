const video = document.getElementById("camera");
const canvas = document.getElementById("snapshot");
const captureButton = document.getElementById("capture");
const downloadButton = document.getElementById("download");
const context = canvas.getContext("2d");

// Aktifkan kamera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    alert("Gagal mengakses kamera 😢: " + err);
  });

// Ambil foto
captureButton.addEventListener("click", () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  downloadButton.disabled = false;
});

// Download hasil foto
downloadButton.addEventListener("click", () => {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "princess_photobooth.png";
  link.click();
});
