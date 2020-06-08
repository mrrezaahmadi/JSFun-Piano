const WHITE_KEYS = ["z", "x", "c", "v", "b", "n"];
const BLACK_KEYS = ["s", "d", "f", "g", "h"];

const whiteKeys = $(".key.white");
const blackKeys = $(".key.black");

$(".key").each((index, key) => {
	$(key).on("click", () => {
		playNote(key);
	});
});

$(this).on("keydown", (e) => {
	const key = e.key;

	const whiteKeyIndex = WHITE_KEYS.indexOf(key);
	const blackKeyIndex = BLACK_KEYS.indexOf(key);

	if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
	if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

const playNote = (key) => {
	const noteAudio = $(`#${key.dataset.note}`);
	noteAudio.trigger('play').prop('currentTime', 0)
	$(key).addClass("active");
	noteAudio.on("ended", () => {
		$(key).removeClass("active");
	});
};
