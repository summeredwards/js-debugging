function quiz(){
	let score = 0;
	let num = 0;
	let question = '';
  	let answer = 0;
	let quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'
	];

	let quiz_answers = [1, 82, 0];
	
	//get total number of questions
	let totalQuestion = quiz_questions.length;
	
	//generate random number for question
	num = Math.floor(Math.random() * 3);
	console.log(num);
		
	for(count = 0; count < totalQuestion; count++){
		question = quiz_questions[num];
		answer = prompt(question);
		console.log(answer);
		console.log(quiz_answers[num]);
		if (answer == quiz_answers[num]) {
			score++;
			alert("Correct!");
		} else {
			alert("Wrong");
		}
		num++;
		if (num === totalQuestion) {
			num = 0;
		}
	}

  document.write(`<p>You got ${score} out of ${totalQuestion} questions correct.</p>`);
}