$(document).ready(function(){	
	let map = new Map();
	map.set("1", "6");
	map.set("2", "8");
	map.set("3", "10");
	map.set("4", "12");
	
	const sessionNumber = sessionStorage.getItem("session_number");
	const breathingRate = map.get(sessionNumber);
	const sessionDuration = sessionStorage.getItem("session_duration");
	const sessionDurationMilliseconds = parseInt(sessionDuration) * 1000;

	$("#session-number-span").text(sessionNumber);
	$("#breathing-rate-span").text(breathingRate);
	
	setDrawing();
	
	setTimeout(() => {
		if (parseInt(sessionNumber) < 4) {
			window.location.href = "main.html";
			sessionStorage.setItem("task", "resting");
		} else {
			window.location.href = "end.html"
		}
	}, sessionDurationMilliseconds);
});