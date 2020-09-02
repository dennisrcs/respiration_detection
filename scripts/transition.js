$(document).ready(function(){	
	const task = sessionStorage.getItem("task");
	const instructions = JSON.parse(sessionStorage.getItem("instructions_" + task));
	
	$("#activity-title").text(instructions[0]);
	$("#first-inst").text(instructions[1]);
	$("#second-inst").text(instructions[2]);
	$("#third-inst").text(instructions[3]);
	
	setTimeout(() => window.location.href = task + ".html", 5000);
});