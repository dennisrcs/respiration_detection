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
		window.location.href = "transition.html"
		sessionStorage.setItem("task", "writing");
	}, sessionDurationMilliseconds);
});