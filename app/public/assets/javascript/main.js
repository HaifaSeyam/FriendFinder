$(document).ready(function(){ //Start of Document Ready Function
  
  //Parallax Initialization
  $(".parallax").parallax();

  var options = ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)"];
  //For loop to fill the select form options
  for (var i = 0 ; i < options.length ; i++) {
    var option = $("<option>");
    option.attr("value", i+1);
    option.text(options[i]);
    $(".options").append(option);
    }
  //Select Form initialization
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);

  })//End of Document Ready Function

  $(".submitBtn").on("click", function(event) {
    event.preventDefault();

    var userName = $("#userName").val().trim();
    var userImg = $("#userImg").val().trim();
    //Variables to store the selected values of each select form
    var q1_value = parseInt($("#q1").val());
    var q2_value = parseInt($("#q2").val());
    var q3_value = parseInt($("#q3").val());
    var q4_value = parseInt($("#q4").val());
    var q5_value = parseInt($("#q5").val());
    var q6_value = parseInt($("#q6").val());
    var q7_value = parseInt($("#q7").val());
    var q8_value = parseInt($("#q8").val());
    var q9_value = parseInt($("#q9").val());
    var q10_value = parseInt($("#q10").val());

function validation() {

    let valid = true;
				// Check if user entered yourName
				if ($("#userName").val() === "") {
					// If a value is empty, validation is incorrect
					valid = false;
				}
				// Check if user entered yourImg
				if ($("#userImg").val() === "") {
					// If a value is empty, validation is incorrect
					valid = false;
				}
				// Check if yourImg begins with "http://" or "https://"
				if ($("#userImg").val().charAt(4) !== ":" && $("#userImg").val().charAt(5) !== ":") {
					// If yourImg isn't "http://" or "https://", validation is incorrect
					valid = false;
				}
				// Check dropdown boxes for empty values (top values are always empty)
				$(".options").each(function() {
					if ($(this).val() === "") {
						// If a valid option has not been selected, validation is incorrect
						valid = false;
					}
				});
				// This function will return true if validation is correct, false if not
        return valid;
        
}
    console.log(validation());

    if (validation()) {
      $("#errorDiv").hide();
      var friend = {
        name: userName,
        photo: userImg,
        scores: [
          q1_value,
          q2_value,
          q3_value,
          q4_value,
          q5_value,
          q6_value,
          q7_value,
          q8_value,
          q9_value,
          q10_value
        ]
      };

        $.post("api/friends", friend,
          function(data) {

            // Clear the form when submitting
            $("#userName").val("");
            $("#userImg").val("");
            $("q1").val("");
            $("#q2").val("");
            $("#q3").val("");
            $("#q4").val("");
            $("#q5").val("");
            $("#q6").val("");
            $("#q7").val("");
            $("#q8").val("");
            $("#q9").val("");
            $("#q10").val("");
        });
    } else {
      $("#errorDiv").show();
    }
    
    });