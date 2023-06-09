const imageUrls = ["./images/blue.png", "./images/snoopy.png", "./images/frog.png", "./images/sheep.png"];
const names = ["임근호", "이영서", "공윤배", "유현주"];
let start = 0;
let end = 3;
const LEN = 4;

const nextBtn = document.querySelector("button#next");
const prevBtn = document.querySelector("button#prev");
const imgContainer = document.querySelector("div#imgContainer");

nextBtn.addEventListener("click", movePrev);
prevBtn.addEventListener("click", moveNext);

function moveNext() {
	imgContainer.querySelector("div.five").remove();
	const divEls = imgContainer.querySelectorAll("div");
	divEls.forEach((divEl) => {
		divEl.classList.replace("four", "five");
		divEl.classList.replace("three", "four");
		divEl.classList.replace("two", "three");
		divEl.classList.replace("one", "two");
		divEl.classList.replace("zero", "one");
	})

	start = (start - 1 + LEN) % LEN;
	end = (end - 1 + LEN) % LEN;

	imgContainer.appendChild(getDivEl("zero", imageUrls[end], names[end]));
}

function movePrev() {
	imgContainer.querySelector("div.zero").remove();
	const divEls = imgContainer.querySelectorAll("div");
	divEls.forEach((divEl) => {
		divEl.classList.replace("one", "zero");
		divEl.classList.replace("two", "one");
		divEl.classList.replace("three", "two");
		divEl.classList.replace("four", "three");
		divEl.classList.replace("five", "four");
	});

	start = (start + 1) % LEN;
	end = (end + 1) % LEN;

	imgContainer.appendChild(getDivEl("five", imageUrls[start], names[start]));
}

setInterval(movePrev, 1000);


// bottom js
const bigImg = document.querySelector("img#big");
const smallImgs = document.querySelectorAll("div#side > img");
smallImgs.forEach((imgEl) => {
	imgEl.addEventListener("click", (event) => {
		bigImg.src = event.target.src;
	})
})

function getDivEl(className, imgSrc, name) {
	const divEl = document.createElement("div");
	divEl.classList.add(className);

	const imgEl = document.createElement("img");
	imgEl.width = 200;
	imgEl.height = 200;
	imgEl.src = imgSrc;
	divEl.appendChild(imgEl);

	const pEl = document.createElement("p");
	pEl.textContent = name;
	divEl.appendChild(pEl);

	return divEl;
}
