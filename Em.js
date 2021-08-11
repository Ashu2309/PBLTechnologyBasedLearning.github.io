const app = Vue.createApp({
    data() {
        return {
            idx: 0,
            selectedAnswer: '',
            correctAnswers: 0,
            wrongAnswers: 0,
            count: 10,
            questions: [
                {
                    question: 'Dividing the X-axis component and the Y-axis component of the of the vector making an angle with Y-axis α will give us.',
                    answers: { a: 'Cot α', b: 'Tan α', c: 'Sec α', d: '1' },
                    correctAnswer: 'b'
                },
                {
                    question: 'If two equal vector forces are mutually perpendicular then the resultant force is acting at which angle as compared to one of the vector?',
                    answers: { a: '45 degree', b: '90 degree', c: '180 degree', d: '0 degree' },
                    correctAnswer: 'a'
                },
                {
                    question: 'The resultant of three equal vectors having mutual angles being 120 degrees and being originated from a single point is zero.',
                    answers: { a: 'True', b: 'False' },
                    correctAnswer: 'a'
                },
                {
                    question: 'For two vectors A and B, what is A.B (if they have angle α between them)?',
                    answers: { a: '|A||B| cosα', b: '|A||B|', c: '√(|A||B|) cosα', d: '|A||B| sinα' },
                    correctAnswer: 'a'
                },
                {
                    question: 'Which statement is right?',
                    answers: { a: 'Communitive law: A.B =B.A', b: 'Multiplicative law: a(A.B) = Ax(aB)', c: 'Multiplicative law: A.(B+D) = (A.B) + (A.D)', d: 'Communitive law: a(A.B) = A.(aB)' },
                    correctAnswer: 'a'
                },
                {
                    question: 'Which is true for two vector A = A1i + A2j + A3k and B = B1i + B2j + B3k?',
                    answers: { a: 'A.B = A1B1 + A2B2 + A3B3', b: 'AxB = A1B1 + A2B2 + A3B3', c: 'A.B = A1B2 + A2B3 + A3B1', d: 'AxB = A1B2 + A2B3 + A3B1' },
                    correctAnswer: 'a'
                },
                {
                    question: ' α = cos-1(A.B/AB). What is the range of α?',
                    answers: { a: '0˚<α<90˚', b: '0˚<α<180˚', c: '90˚<α<180C', d: '0˚<α<45˚' },
                    correctAnswer: 'b'
                },
                {
                    question: ' If the force vector F is having its x-axis component being equal to Z N, y-axis component be X N and z-axis component be Y N then vector F is best represented by?',
                    answers: { a: 'Xi + Yj + Zk', b: 'Yi + Xj + Zk', c: ' Zi + Yj + Xk', d: ' Zi + Xj + Yk' },
                    correctAnswer: 'd'
                },
                {
                    question: 'The coordinate of the Force vector AB is A (2, 0, 2) and B (-2, 3.46, 3). What are its directions?',
                    answers: { a: ' -0.742i + 0.643j + 0.186k', b: '0.742i – 0.643j – 0.186k', c: '0.742i – 0.643j – 0.186k', d: '-0.742i + 0.643j – 0.186k' },
                    correctAnswer: 'a'
                },
                {
                    question: 'What is the sum of squares of the cosine angles made by the force vector with the coordinate axis?',
                    answers: { a: '1', b: '1/2', c: '2', d: '3' },
                    correctAnswer: 'a'
                },
                              
                        ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if (this.selectedAnswer == this.questions[this.idx].correctAnswer) {
                this.correctAnswers++
            } else {
                this.wrongAnswers++
            }
        },
        nextQuestion() {
            this.idx++
            this.selectedAnswer = ''
            document.querySelectorAll('input').forEach(el => el.checked = false)
        },
        showResults() {
            this.idx++
        },
        Exitquiz() {
            this.idx = 0
            this.selectedAnswer = ''
            this.correctAnswers = 0
            this.wrongAnswers = 0
        }
    }
})

app.mount('#app')