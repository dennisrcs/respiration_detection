$(document).ready(function(){
	sessionStorage.clear();
	const btn_submit = $("#session-info-form #submit");
	btn_submit.click(function(){
		const id = $("#session-info-form #participant_id").val();
		const date = $("#session-info-form #date").val();
		const time = $("#session-info-form #time").val();
		const duration = $("#session-info-form #session_duration").val();
		
		sessionStorage.setItem("part_id", id);
		sessionStorage.setItem("date", date);
		sessionStorage.setItem("time", time);
		sessionStorage.setItem("session_duration", duration);
		
		sessionStorage.setItem("session_number", 0);
		
		instructions_typing = [];
		instructions_typing[0] = "Typing using the Keyboard";
		instructions_typing[1] = "Please be prepared to use the keyboard for the next activity";
		instructions_typing[2] = "Wait until you hear a bell and then start your activity";
		instructions_typing[3] = "Continue your activity until you hear the next bell and then stop and relax";
		
		instructions_tapping = [];
		instructions_tapping[0] = "Typing using the Mobile Device";
		instructions_tapping[1] = "Please be prepared to use the mobile device for the next activity";
		instructions_tapping[2] = "Wait until you hear a bell and then start your activity";
		instructions_tapping[3] = "Continue your activity until you hear the next bell and then stop and relax";
		
		instructions_writing = [];
		instructions_writing[0] = "Writing on a Piece of Paper";
		instructions_writing[1] = "Please be prepared to use the pen and paper for the next activity";
		instructions_writing[2] = "Wait until you hear a bell and then start your activity";
		instructions_writing[3] = "Continue your activity until you hear the next bell and then stop and relax";
		
		sessionStorage.setItem("instructions_typing", JSON.stringify(instructions_typing));
		sessionStorage.setItem("instructions_tapping", JSON.stringify(instructions_tapping));
		sessionStorage.setItem("instructions_writing", JSON.stringify(instructions_writing));
	});	
});