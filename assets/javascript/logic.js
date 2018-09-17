$(document).ready(function () {

  //Start Button
  function setup() {
    index = 0;
    $('#start').append('<button id="startBtn">Start</button>');
    $('#startBtn').on('click', function() {
      $(this).hide();
      countDown.start();
      loadQuestion(index);
    });
  }

  var correct = 0;
  var wrong = 0;

  //Questions 
  var q1 = {
    question: 'Where is Wakanda located?',
    answers: [
      'choice1. Australia',
      'choice2. South America',
      'choice3. Africa',
      'choice4. Antartica'
    ],
    answer: 'choice3. Africa'
  };

  var q2 = {
    question: 'What is the name of the Marvel legend who has made an apperance in all of the Marvel movies?',
    answers: [
      'choice1. Stan Lee',
      'choice2. Steve Rogers',
      'choice3. Jack Kirby',
      'choice4. Hugh Hefner'
    ],
    answer: 'choice1. Stan Lee'
  };

  var q3 = {
    question: 'Which two actors have played the Incredible Hulk in the Marvel Cinematic Universe?',
    answers: [
      'choice1. Edward Norton & Eric Bana',
      'choice2. Mark Ruffalo & Eric Bana',
      'choice3. Lou Ferrigno & Mark Ruffalo',
      'choice4. Edward Norton & Mark Ruffalo'
    ],
    answer: 'choice4. Edward Norton & Mark Ruffalo'
  };

  var q4 = {
    question: 'What power source fuels Tony Stark\'s Iron Man suit?',
    answers: [
      'choice1. The Tesseract ',
      'choice2. ARC Reactor',
      'choice3. Lithium Ion Battery',
      'choice4. The Arkenstone'
    ],
    answer: 'choice2. LARC Reactor'
  };

  var q5 = {
    question: 'In which Marvel movie did Samuel L. Jackson first appear as Nick Fury?',
    answers: [
      'choice1. Iron Man 2',
      'choice2. Thor',
      'choice3. The Incredible Hulk',
      'choice4. Iron Man'
    ],
    answer: 'choice4. Iron Man'
  };

  var questionArray = [q1, q2, q3, q4, q5];

  function loadQuestion(questionSelection) {
    console.log(questionSelection);
    countdownTimer.reset();
    $('#question').html("<h3>" + questionArray[questionSelection].question + "</h3>");
    $('#btn0').text(questionArray[questionSelection].possibleAnswers[0]).show();
    $('#btn1').text(questionArray[questionSelection].possibleAnswers[1]).show();
    $('#btn2').text(questionArray[questionSelection].possibleAnswers[2]).show();
    $('#btn3').text(questionArray[questionSelection].possibleAnswers[3]).show();

  }

  function getAnswer() {
    $('#choice').on('click', function () {
      console.log('alert', index);
      index++;
      console.log('click', index);
      $('#question').text('');
      $('#btn1').text('');
      $('#btn2').text('');
      $('#btn3').text('');
      $('#btn4').text('');
      loadQuestion();
    })
  }

  function answerCorrect() {
    correct++;
    alert("Correct!");
    console.log("correct");
  }

  function answerWrong() {
    wrong++;
    alert("Incorrect!");
    console.log("wrong");
  }

  function showScore() {
    $('#question').empty();
    $('#question').append("<h2><p>" + correct + " correct</p></h2>");
    $('#question').append("<h2><p>" + wrong + " incorrect</p></h2>");
    countdownTimer.stop();
    $('#timer').empty();

    setup();
    $('choice').on('click', function () {
      console.log($(this));
      if (this.id == 'btn0') {
        answerChosen = '0';
      } else if (this.id == 'btn1') {
        answerChosen = '1';
      } else if (this.id == 'btn2') {
        answerChosen = '2';
      } else if (this.id == 'btn3') {
        answerChosen = '3';
      }

      if ((answerChosen === '0') && (questionArray[index].[0] === true)) {
        answerCorrect();
      }

      else {
        answerWrong();
      };

      if ((answerChosen === '1') && (questionArray[index].[1] === true)) {
        answerCorrect();
      }

      else {
        answerWrong();
      };

      if ((answerChosen === '2') && (questionArray[index].[2] === true)) {
        answerCorrect();
      }

      else {
        answerWrong();
      };

      if ((answerChosen === '3') && (questionArray[index].[3] === true)) {
        answerCorrect();
      }

      else {
        answerWrong();
      };
      
      $('#question').text('');
      $('#btn0').text('');
      $('btn1').text('');
      $('btn2').text('');
      $('btn3').text('');
      index++;
      if (index < questionArray.length) {
        loadQuestion(index);
      } else {
        $('choice').hide();
        showScore();
      }
    });