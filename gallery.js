// Create modal elements
const modal = document.createElement("div");
modal.id = "media-modal";
modal.style.display = "none";
modal.innerHTML = `
	<div id="modal-content"></div>
	<button id="modal-close" class="modal-close">&times;</button>
	<a id="modal-download" class="modal-download" style="display:none;position:absolute;bottom:2vw;left:2vw;background:#23263a;color:#fff;padding:0.5em;border-radius:50%;text-decoration:none;z-index:10001;box-shadow:0 2px 12px rgba(0,0,0,0.18);font-size:2em;align-items:center;justify-content:center;display:flex;width:2.5em;height:2.5em;"><span style='display:inline-block;'>&#128229;</span></a>
`;
// Add Download All button above gallery
const galleryHeader = document.createElement("div");
galleryHeader.style.textAlign = "right";
galleryHeader.style.marginBottom = "1rem";
galleryHeader.innerHTML = `<button id="download-all" class="custom-video-btn download-all-btn" style="font-size:1.1em;padding:0.6em 1.4em;background:#3a3e5a;color:#fff;border-radius:8px;border:none;box-shadow:0 2px 12px rgba(0,0,0,0.18);cursor:pointer;transition:background 0.2s;"><span style='font-size:1.2em;margin-right:0.5em;'>&#128190;</span>Download All</button>`;
document
	.querySelector(".gallery")
	.parentElement.insertBefore(
		galleryHeader,
		document.querySelector(".gallery")
	);

document.getElementById("download-all").onclick = function () {
	const zip = new JSZip();
	let count = 0;
	mediaFiles.forEach((file) => {
		fetch(`media/${file}`)
			.then((response) => response.blob())
			.then((blob) => {
				zip.file(file, blob);
				count++;
				if (count === mediaFiles.length) {
					zip.generateAsync({ type: "blob" }).then(function (content) {
						const link = document.createElement("a");
						link.href = URL.createObjectURL(content);
						link.download = "مؤتمر الشباب 2025.zip";
						document.body.appendChild(link);
						link.click();
						document.body.removeChild(link);
					});
				}
			});
	});
};
document.body.appendChild(modal);

const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");
modalClose.onclick = () => {
	modal.style.display = "none";
	modalContent.innerHTML = "";
	document.getElementById("modal-download").style.display = "none";
};

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
		// Popup modal for image
		img.style.cursor = "pointer";
		img.onclick = function () {
			modalContent.innerHTML = `<img src='media/${file}' alt='${file}' style='max-width:90vw;max-height:90vh;display:block;margin:auto;border-radius:16px;' />`;
			modal.style.display = "flex";
			const downloadBtn = document.getElementById("modal-download");
			downloadBtn.href = `media/${file}`;
			downloadBtn.download = file;
			downloadBtn.style.display = "flex";
		};
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
		// Popup modal for video
		video.style.cursor = "pointer";
		video.onclick = function (e) {
			e.preventDefault();
			modalContent.innerHTML = `
						<div style='display:flex;flex-direction:column;align-items:center;width:100%;height:100%;'>
							<video id='modal-video' src='media/${file}' controls autoplay style='max-width:90vw;max-height:70vh;border-radius:16px;background:#101218;'></video>
							<div style='margin-top:1rem;display:flex;gap:1rem;'>
								<button id='back10' class='custom-video-btn'>-10s</button>
								<button id='fwd10' class='custom-video-btn'>+10s</button>
							</div>
						</div>
					`;
			modal.style.display = "flex";
			const downloadBtn = document.getElementById("modal-download");
			downloadBtn.href = `media/${file}`;
			downloadBtn.download = file;
			downloadBtn.style.display = "block";
			// Add skip controls
			setTimeout(() => {
				const modalVideo = document.getElementById("modal-video");
				document.getElementById("back10").onclick = () => {
					modalVideo.currentTime = Math.max(0, modalVideo.currentTime - 10);
				};
				document.getElementById("fwd10").onclick = () => {
					modalVideo.currentTime = Math.min(
						modalVideo.duration,
						modalVideo.currentTime + 10
					);
				};
			}, 100);
		};
	}
	gallery.appendChild(item);
});
