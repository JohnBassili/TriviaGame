
function check () {

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;


		if (question1 === "A bugs life") {
		correct++;
	}
		if (question2 === "sporty spice") {
			correct++;
	}

		if (question3 === "NewYork Knicks"){
			correct++;
		}

	document.getElementById('afer_submit').style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got" + correct + "correct.";

}




window.onload = function() {
  $("#done").on("click", stopwatch.done);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};

var intervalId;

 start: function() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
  },
  stop: function() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
     },

    count: function() {
    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};

