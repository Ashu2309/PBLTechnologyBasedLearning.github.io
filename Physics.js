const app = Vue.createApp({
    data() {
        return {
            idx: 0,
            selectedAnswer: '',
            correctAnswers: 0,
            wrongAnswers: 0,
            count: 15,
            questions: [
                {
                    question: 'For a PN junction diode, the current in reverse bias may be',
                    answers: { a: 'Few miliamperes', b: 'Between 0.2 A and 15 A', c: 'Few amperes', d: 'Few micro or nanoamperes' },
                    correctAnswer: 'd'
                },
                {
                    question: 'The capacitance of a reverse biased PN junction',
                    answers: { a: 'Increases as reverse bias is increased', b: 'Decreases as reverse bias is increased', c: 'Increases as reverse bias is decreased', d: 'Is insignificantly low' },
                    correctAnswer: 'c'
                },
                {
                    question: 'In a reverse biased PN junction, the current through the junction increases abruptly at',
                    answers: { a: '0.5 V', b: '1.1 V', c:'0.72 V', d:'Breakdown voltage' },
                    correctAnswer: 'd'
                },
                {
                    question: ' The total energy of a particle performing simple harmonic motion depends on',
                    answers: { a: 'k, a, m', b: 'k, a', c: ' k, a, x', d: ' k, x' },
                    correctAnswer: 'b'
                },
                {
                    question: ' The potential energy of a simple harmonic oscillation when the article is halfway to its end point is ',
                    answers: { a: ' 2/3 E', b: '1/8 E', c: '1/4 E', d: '1/2 E' },
                    correctAnswer: 'c'
                },
                {
                    question: 'In a simple harmonic motion, when the displacement is one half the amplitude, what fraction of the total energy is kinetic?',
                    answers: { a: '1/2', b: '3/4', c: 'Zero', d: '1/4' },
                    correctAnswer: 'b'
                },
                {
                    question: 'A loaded vertical spring executes simple harmonic motion with a time period of 4 sec. The difference between the kinetic energy and potential energy of this system varies with a period of?',
                    answers: { a: '2 sec', b: '1 sec', c: '8 sec', d: '4 sec' },
                    correctAnswer: 'a'
                },
                {
                    question: 'A mass m is vertically suspended from a spring of negligible mass; the system oscillates with a frequency n. What will be the frequency of the system, if a mass 4m is suspended from the same spring?',
                    answers: { a: 'n/2', b: '4n', c: 'n/4', d: '2n' },
                    correctAnswer: 'a'
                },
               
                {
                    question: 'A simple pendulum performs simple harmonic motion about x = 0 with an amplitude a and time period T. The speed of the pendulum at x = a/2 will be ________',
                    answers: { a: '(πa√3)/T', b: '(πa√3)/2T', c: 'πa/T', d: '(3π2 a)/T' },
                    correctAnswer: 'a'
                }, {
                    question: 'If the diameter of the earth becomes half its present value but its average density remains unchanged then how would be the weight of an object on the surface of the earth affected?',
                    answers: { a: 'The weight of the object remains unchanged', b: 'The weight is doubled', c: 'The weight will become one-fourth of the present value', d: 'The weight is halved' },
                    correctAnswer: 'd'
                }, {
                    question: ' The orbital speed of Jupiter is ______',
                    answers: { a: 'Greater than the orbital speed of earth', b: 'Less than the orbital speed of earth', c: 'Equal to the orbital speed of the earth', d: 'Proportional to the distance from the earth' },
                    correctAnswer: 'b'
                }, {
                    question: 'If the distance between the earth and the sun were half its present value, the number of days in year would have been ______',
                    answers: { a: '64.5', b: '129', c: '182.5', d: '730' },
                    correctAnswer: 'b'
                }, {
                    question: ' What is the mass of a body that weighs 1N at a [place where g = 9.80m/s]?',
                    answers: { a: '0kg', b: ' 1.02kg', c: '0.102kg', d: '102kg' },
                    correctAnswer: 'b'
                }, {
                    question: 'The centre of mass of a body is often called ____',
                    answers: { a: 'Centre of attraction', b: 'Centre of repulsion', c: 'Centre of gravity', d: 'Centre of acceleration' },
                    correctAnswer: 'd'
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