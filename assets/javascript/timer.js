$(document).ready(function () {
	var index = 0;

	var countdownTimer = {
		time: 30,
		reset: function () {
			this.time = 30;
			$('#timer').html('<h3>' + this.time + '</h3>');
		},

		start: function () {
			counter = setInterval(countdownTimer.count, 1000);
		},

		stop: function () {
			clearInterval(counter);
		},

		count: function () {
			countdownTimer.time--;
			console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('#timer').html('<h3>' + countdownTimer.time + '</h3>');
			}

			else {
				index++;
				answerWrong();
				countdownTimer.reset();

				if (index < questionArray.length) {
					loadQuestion(index);

				} else {
					$('#choice').hide();
					showScore();
				}
			}
		}
	}
});
