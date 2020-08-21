$(document).ready(function(){	
	const part_id = sessionStorage.getItem("part_id");
	const date = sessionStorage.getItem("date");
	const time = sessionStorage.getItem("time");
	const sessionNumber = sessionStorage.getItem("session_number");
	const sessionNumberInt = parseInt(sessionNumber) + 1;
	sessionStorage.setItem("session_number", sessionNumberInt);
	
	$(".session-info-div #part_id_span").text(part_id);
	$(".session-info-div #date_span").text(date);
	$(".session-info-div #time_span").text(time);
	
	for (i = 1; i <= 4; i++) {
		let btn = $("#btn_session" + i);
		if (i <= sessionNumberInt) {
			btn.css("visibility", "visible");
			if (i < sessionNumberInt) {
				btn.removeClass("btn-primary");
				btn.addClass("btn-secondary");
				btn.prop('disabled', true);
			} else {
				btn.removeClass("btn-secondary");
				btn.addClass("btn-primary");
				btn.prop('disabled', false);
			}
		}
	}
	
	$(".buttons-wrapper button").click(function(){
		window.location.href = "resting.html"
		sessionStorage.setItem("task", "resting");
		
		const sessionStartTime = getFormattedDate();
		sessionStorage.setItem("start_time_session" + sessionNumberInt, sessionStartTime);
	});
	
	function getFormattedDate() {
		var today = new Date();
		var date = today.getFullYear()+'-'+(pad2(today.getMonth()+1))+'-'+pad2(today.getDate());
		var time = pad2(today.getHours()) + ":" + pad2(today.getMinutes()) + ":" + pad2(today.getSeconds()) + "." + pad3(today.getMilliseconds());
		var dateTime = date+' '+time;
		return dateTime;
	}
	
	function pad2(input) {
		return ('0'+input).slice(-2);
	}
	
	function pad3(input) {
		return ('00'+input).slice(-3);
	}
});