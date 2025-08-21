// Dynamically list all images and videos from the media folder
const mediaFiles = [
	// Images
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.jpg",
	"10.jpg",
	"11.jpg",
	"12.jpg",
	"13.jpg",
	"14.jpg",
	"15.jpg",
	"16.jpg",
	"17.jpg",
	"18.jpg",
	"19.jpg",
	"20.jpg",
	"21.jpg",
	"22.jpg",
	"23.jpg",
	"24.jpg",
	"25.jpg",
	"26.jpg",
	"27.jpg",
	"28.jpg",
	"29.jpg",
	"30.jpg",
	"31.jpg",
	"32.jpg",
	"33.jpg",
	"34.jpg",
	"35.jpg",
	"36.jpg",
	"37.jpg",
	"38.jpg",
	"39.jpg",
	"40.jpg",
	"41.jpg",
	"42.jpg",
	"43.jpg",
	"44.jpg",
	"45.jpg",
	// Videos
	"1.mp4",
	"2.mp4",
	"3.mp4",
	"4.mp4",
	"5.mp4",
	"6.mp4",
	"7.mp4",
	"8.mp4",
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
