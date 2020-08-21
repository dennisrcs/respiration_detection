$(document).ready(function(){
	const part_id = sessionStorage.getItem("part_id");
	const date = sessionStorage.getItem("date");
	const time = sessionStorage.getItem("time");
	
	$(".session-info-div #part_id_span").text(part_id);
	$(".session-info-div #date_span").text(date);
	$(".session-info-div #time_span").text(time);
	
	let output = "";
	for (i = 1; i <= 4; i++) {
		const startTime = sessionStorage.getItem("start_time_session" + i);
		output += "Start time Session " + i + ": " + startTime + "\n";
	}
	
	output += "-------------------------------------------------------\n"
	
	for (i = 1; i <= 4; i++) {
		const sessionText = sessionStorage.getItem("text_session_" + i);
		output += "Text from Session " + i + ": \n" + sessionText + "\n";
	}
	
	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI(output);
	hiddenElement.target = '_blank';
	hiddenElement.download = "Participant " + part_id + ".txt";
	hiddenElement.click();
	
});