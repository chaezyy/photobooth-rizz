const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const snap = document.getElementById("snap");
const context = canvas.getContext("2d");

// Pastikan ukuran canvas sesuai video
canvas.width = 640;
canvas.height = 480;

// Fungsi untuk minta izin kamera
async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (error) {
    alert("⚠️ Gagal mengakses kamera. Pastikan sudah diizinkan di browser.");
    console.error("Error akses kamera:", error);
  }
}

// Saat tombol 'Take Photo' ditekan
snap.addEventListener("click", () => {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
});

// Jalankan kamera
startCamera();
