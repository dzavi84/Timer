const durationInput = document.querySelector('#duration');
const stratButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, stratButton, pauseButton, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute(
			'stroke-dashoffset',
			(perimeter * timeRemaining) / duration - perimeter
		);
	},
	onComplete() {
		console.log('on complete!');
	},
});
