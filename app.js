const quizDB = [
  {
    question: 'Q1: What is the full form of NITRA? ',
    a: 'North India Textile Research Association',
    b: 'Northern India Textile Research Association',
    c: 'Northern India Testing Research Association',
    d: 'Northern India Textile Research Authority',
    ans: 'ans2',
  },
  {
    question: 'Q2: Who is the Director Genral of NITRA?',
    a: 'ARINDAM BASU',
    b: 'K K DEWAN',
    c: 'NEERAJ AGRAWAL',
    d: 'NITIN SHARMA',
    ans: 'ans1',
  },
  {
    question: 'Q3: Who is the Prime Minister of India?',
    a: 'Yogi Adityanath',
    b: 'Narendra Modi',
    c: 'Mamata Banerjee',
    d: 'Arvind Kejriwal',
    ans: 'ans2',
  },
  {
    question: 'Q4: Who is the Chief Minister of Delhi?',
    a: 'Yogi Adityanath',
    b: 'Mamata Banerjee',
    c: 'Narendra Modi',
    d: 'Arvind Kejriwal',
    ans: 'ans4',
  },
]

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')

const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore')

let questionCount = 0
let score = 0

const loadQuestion = () => {
  const questionList = quizDB[questionCount]

  question.innerText = questionList.question

  option1.innerText = questionList.a
  option2.innerText = questionList.b
  option3.innerText = questionList.c
  option4.innerText = questionList.d
}

loadQuestion()

const getCheckAnswer = () => {
  let answer

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id
    }
  })
  return answer
}

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false))
}

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer()
  console.log(checkedAnswer)

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++
  }
  questionCount++

  deselectAll()

  if (questionCount < quizDB.length) {
    loadQuestion()
  } else {
    showScore.innerHTML = `
    <h3> You scored ${score}/${quizDB.length} </h3>
    <button class="btn" onclick="location.reload()">Play Again</button>
    `
    showScore.classList.remove('scoreArea')
  }
})
