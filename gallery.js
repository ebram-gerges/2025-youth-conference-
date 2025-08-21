// Dynamically list all images and videos from the media folder
const mediaFiles = [
	// Images
	"IMG-20250821-WA0001.jpg",
	"IMG-20250821-WA0002.jpg",
	"IMG-20250821-WA0003.jpg",
	"IMG-20250821-WA0004.jpg",
	"IMG-20250821-WA0005.jpg",
	"IMG-20250821-WA0006.jpg",
	"IMG-20250821-WA0007.jpg",
	"IMG-20250821-WA0008.jpg",
	"IMG-20250821-WA0009.jpg",
	"IMG-20250821-WA0010.jpg",
	"IMG-20250821-WA0011.jpg",
	"IMG-20250821-WA0012.jpg",
	"IMG-20250821-WA0014.jpg",
	"IMG-20250821-WA0016.jpg",
	"IMG-20250821-WA0017.jpg",
	"IMG-20250821-WA0019.jpg",
	"IMG-20250821-WA0020.jpg",
	"IMG-20250821-WA0028.jpg",
	"IMG-20250821-WA0029.jpg",
	"IMG-20250821-WA0030.jpg",
	"IMG-20250821-WA0031.jpg",
	"IMG-20250821-WA0032.jpg",
	"IMG-20250821-WA0033.jpg",
	"IMG-20250821-WA0036.jpg",
	"IMG-20250821-WA0038.jpg",
	"IMG-20250821-WA0039.jpg",
	"IMG-20250821-WA0040.jpg",
	"IMG-20250821-WA0041.jpg",
	"IMG-20250821-WA0042.jpg",
	"IMG-20250821-WA0043.jpg",
	"IMG-20250821-WA0044.jpg",
	"IMG-20250821-WA0045.jpg",
	"IMG-20250821-WA0046.jpg",
	"IMG-20250821-WA0047.jpg",
	"IMG-20250821-WA0048.jpg",
	"IMG-20250821-WA0049.jpg",
	"IMG-20250821-WA0050.jpg",
	"IMG-20250821-WA0051.jpg",
	"IMG-20250821-WA0052.jpg",
	"IMG-20250821-WA0053.jpg",
	"IMG-20250821-WA0054.jpg",
	"IMG-20250821-WA0058.jpg",
	// Videos
	"VID-20250821-WA0022.mp4",
	"VID-20250821-WA0023.mp4",
	"VID-20250821-WA0024.mp4",
	"VID-20250821-WA0025.mp4",
	"VID-20250821-WA0026.mp4",
	"VID-20250821-WA0027.mp4",
	"VID-20250821-WA0055.mp4",
	"VID-20250821-WA0056.mp4",
	"VID-20250821-WA0057.mp4",
];

const gallery = document.getElementById("gallery");

mediaFiles.forEach((file) => {
	const ext = file.split(".").pop().toLowerCase();
	const item = document.createElement("div");
	item.className = "media-item";
	if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) {
		const img = document.createElement("img");
		img.src = `media/${file}`;
		img.alt = file;
		item.appendChild(img);
	} else if (["mp4", "webm", "ogg"].includes(ext)) {
		const video = document.createElement("video");
		video.src = `media/${file}`;
		video.setAttribute("playsinline", "");
		video.preload = "metadata";
		video.style.width = "100%";
		video.style.background = "#101218";
		video.controls = false;
		const controls = document.createElement("div");
		controls.className = "custom-video-controls";
		const playBtn = document.createElement("button");
		playBtn.className = "custom-video-btn";
		playBtn.innerHTML = "&#9654;";
		playBtn.onclick = function () {
			if (video.paused) {
				video.play();
				playBtn.innerHTML = "&#10073;&#10073;";
			} else {
				video.pause();
				playBtn.innerHTML = "&#9654;";
			}
		};
		video.onplay = function () {
			playBtn.innerHTML = "&#10073;&#10073;";
		};
		video.onpause = function () {
			playBtn.innerHTML = "&#9654;";
		};
		const muteBtn = document.createElement("button");
		muteBtn.className = "custom-video-btn";
		muteBtn.innerHTML = "&#128263;";
		muteBtn.onclick = function () {
			video.muted = !video.muted;
			muteBtn.innerHTML = video.muted ? "&#128263;" : "&#128266;";
		};
		controls.appendChild(playBtn);
		controls.appendChild(muteBtn);
		item.appendChild(video);
		item.appendChild(controls);
	}
	gallery.appendChild(item);
});
