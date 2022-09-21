const body = document.querySelector('body')
const rangeSlider = document.querySelector('.range_slider')
const progressBar = document.querySelector('.progress_bar')

function setProgressBar(percent) {
	progressBar.style.width = `${percent}%`
	progressBar.querySelector('span').innerText = `${percent}%`
	body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
}

setProgressBar(40)

rangeSlider.addEventListener('mousemove', function (e) {
	const process = e.pageX - this.offsetLeft
	let percent = (process / this.offsetWidth) * 100

	percent = Math.ceil(percent)
	setProgressBar(percent)
}) 