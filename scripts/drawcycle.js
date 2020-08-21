const sessionDurationString = sessionStorage.getItem("session_duration");
const sessionDuration = parseInt(sessionDurationString) * 1000;

function setDrawing() {
	const sessionNumber = sessionStorage.getItem("session_number");
	
	let firstRow = $(".first-row .in-out-wrapper");
	let secondRow = $(".second-row .in-out-wrapper");
	switch (sessionNumber) {
		case "1": 
			playAudio("6");;
			draw6bpm(firstRow, secondRow);
			break;
		case "2": 
			playAudio("8");
			draw8bpm(firstRow, secondRow);
			break;
		case "3": 
			playAudio("10");
			draw10bpm(firstRow, secondRow);
			break;
		case "4": 
			playAudio("12");
			draw12bpm(firstRow, secondRow);
			break;
	}
}

function playAudio(br) {
	$("#" + br + "bpm")[0].play();
}

// CHANGE PARAMETERS HERE
function drawCycle6bpm(row){
	const latencyIn = 1000;
	const latencyOut = 2000;
	for (i = 0; i < 4; i++) {
		setTimeout(() => drawIn(row, latencyIn), 1000 * i);
	}
	setTimeout(() => drawOut(row, latencyOut), 5000);
	setTimeout(() => drawOut(row, latencyOut), 7000);
}

function drawCycle8bpm(row){
	const latencyIn = 1000;
	const latencyOut = 1500;
	for (i = 0; i < 3; i++) {
		setTimeout(() => drawIn(row, latencyIn), 1000 * i);
	}
	setTimeout(() => drawOut(row, latencyOut), 4000);
	setTimeout(() => drawOut(row, latencyOut), 5500);
}

function drawCycle10bpm(row){
	const latencyIn = 1000;
	const latencyOut = 1500;
	for (i = 0; i < 3; i++) {
		setTimeout(() => drawIn(row, latencyIn), 800 * i);
	}
	setTimeout(() => drawOut(row, latencyOut), 3600);
}

function drawCycle12bpm(row){
	const latencyIn = 1000;
	const latencyOut = 1500;
	for (i = 0; i < 2; i++) {
		setTimeout(() => drawIn(row, latencyIn), 1000 * i);
	}
	setTimeout(() => drawOut(row, latencyOut), 3000);
}
// END PARAMETERS

function draw6bpm(firstRow, secondRow) {
	const cycle = 10000;
	drawCycle6bpm(firstRow);
	setTimeout(() => drawCycle6bpm(secondRow), cycle);
	setTimeout(() => playBell(), cycle * 2);
	setTimeout(() => playBell(), sessionDuration - cycle * 2);
	setInterval(function(){
		removeAllChildren();
		drawCycle6bpm(firstRow);
		setTimeout(() => drawCycle6bpm(secondRow), cycle);		
	}, cycle * 2);
}

function draw8bpm(firstRow, secondRow) {
	const cycle = 7500;
	drawCycle8bpm(firstRow);
	setTimeout(() => drawCycle8bpm(secondRow), cycle);
	setTimeout(() => playBell(), cycle * 2);
	setTimeout(() => playBell(), sessionDuration - cycle * 2);
	setInterval(function(){
		removeAllChildren();
		drawCycle8bpm(firstRow);
		setTimeout(() => drawCycle8bpm(secondRow), cycle);		
	}, cycle * 2);
}

function draw10bpm(firstRow, secondRow) {
	const cycle = 7500;
	drawCycle10bpm(firstRow);
	setTimeout(() => drawCycle10bpm(secondRow), cycle);
	setTimeout(() => playBell(), cycle * 2);
	setTimeout(() => playBell(), sessionDuration - cycle * 2);
	setInterval(function(){
		removeAllChildren();
		drawCycle10bpm(firstRow);
		setTimeout(() => drawCycle10bpm(secondRow), cycle);		
	}, cycle * 2);
}

function draw12bpm(firstRow, secondRow) {
	const cycle = 5000;
	drawCycle12bpm(firstRow);
	setTimeout(() => drawCycle12bpm(secondRow), cycle);
	setTimeout(() => playBell(), cycle * 2);
	setTimeout(() => playBell(), sessionDuration - cycle * 2);
	setInterval(function(){
		removeAllChildren();
		drawCycle12bpm(firstRow);
		setTimeout(() => drawCycle12bpm(secondRow), cycle);		
	}, cycle * 2);
}

function playBell() {
	$("#bell")[0].play();
}

function drawIn(row, latency){
	const newItem = $("<h2 class='mt-4 in-out'>IN</h2>").hide();
	newItem.appendTo(row).fadeIn(latency);
}

function drawOut(row, latency){
	const newItem = $("<h2 class='mt-4 in-out'>OUT</h2>").hide();
	newItem.appendTo(row).fadeIn(latency);
}
	
function removeAllChildren() {
	let firstRow = $(".first-row .in-out-wrapper");
	let secondRow = $(".second-row .in-out-wrapper");
	removeRow(firstRow);
	removeRow(secondRow);
}

function removeRow(parent) {
	parent.children().detach();
}
