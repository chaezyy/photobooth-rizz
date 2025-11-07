const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const snap = document.getElementById("snap");
const context = canvas.getContext("2d");

// Tombol tambahan buat mulai kamera
const startBtn = document.createElement("button");
startBtn.textContent = "Start Camera";
startBtn.style.margin = "10px";
document.body.insertBefore(startBtn, video);

// Ukuran canvas
canvas.width = 640;
canvas.height = 480;

// Fungsi buat mulai kamera
async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (error) {
    alert("⚠️ Gagal mengakses kamera. Pastikan sudah diizinkan di browser dan kamera tidak sedang digunakan aplikasi lain.");
    console.error("Error:", error);
  }
}

// Saat tombol Start Camera diklik
startBtn.addEventListener("click", startCamera);

// Saat tombol Take Photo diklik
snap.addEventListener("click", () => {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
});
