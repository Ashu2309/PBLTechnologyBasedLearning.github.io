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
                    question: 'Which of the following motors is used in ceiling fan?',
                    answers: { a: 'Universal motor', b: 'Synchronous motor', c: 'Series motor', d: ' Induction motor' },
                    correctAnswer: 'd'
                }
                {
                    question: 'Number of parallel path in wave winding is',
                    answers: { a: '2', b: '3', c: '4', d: '6' },
                    correctAnswer: 'a'
                },
                {
                    question: 'CT is used for measuring',
                    answers: { a: 'Voltage', b: 'Frequency', c: 'Power factor', d: 'Alternating current' },
                    correctAnswer: 'd'
                },
                {
                    question: 'Active power in 3 phase circuit is:',
                    answers: { a: '√3 VLIL Cosφ', b: '3 VLIL Cosφ', c: '√2 VLIL Cosφ', d: '2 VLIL Cosφ' },
                    correctAnswer: 'a'
                },
                {
                    question: 'Zener diodes are commonly used as',
                    answers: { a: 'Rectifier', b: 'Amplifier', c: 'Voltage regulator', d: 'Filter' },
                    correctAnswer: 'c'
                },
                {
                    question: 'Unit of reluctance',
                    answers: { a: 'Ampere Turns/Weber', b: 'Weber Turns', c: 'Henry', d: 'Weber Turns/Ampere' },
                    correctAnswer: 'a'
                },
                {
                    question: 'Unit of luminous intensity is',
                    answers: { a: 'Lumen', b: 'Lux', c: 'Lumen/m2', d: 'Candela' },
                    correctAnswer: 'd'
                },
                {
                    question: 'Which of the following is secondary cell?',
                    answers: { a: ' Dry cell', b: 'Leclanche cell', c: 'Voltaic cell', d: 'Lead acid cell' },
                    correctAnswer: 'd'
                },
                {
                    question: 'Energy stored in inductor is',
                    answers: { a: 'W = (1/4)LI2', b: ' W = (1/2)LI2', c: 'W = (1/2)L2I', d: 'W = (1/2)L2I2' },
                    correctAnswer: 'b'
                },
                {
                    question: 'The power factor of pure resistive circuit is',
                    answers: { a: ' Zero', b: 'Leading', c: 'Lagging', d: 'Unity' },
                    correctAnswer: 'd'
                }, {
                    question: 'The time taken by an alternating quantity to complete one cycle',
                    answers: { a: ' Time period', b: 'Frequency', c: 'Angular velocity', d: 'Time constant' },
                    correctAnswer: 'a'
                }, {
                    question: 'Specific gravity of a fully charged lead acid cell is approximately',
                    answers: { a: ' 1.18', b: '1.21', c: '1.17', d: '1.16' },
                    correctAnswer: 'b'
                }, {
                    question: 'Illumination of a surface is inversely proportional to',
                    answers: { a: ' Luminous intensity', b: ' Distance from the source', c: 'Square of the distance from the source', d: 'Total Lumen' },
                    correctAnswer: 'c'
                }, {
                    question: 'Speed of dc motor is directly proportional to ___ and inversely proportional to____',
                    answers: { a: ' flux, back emf', b: 'current, back emf', c: 'back emf, flux', d: 'back emf, voltage' },
                    correctAnswer: 'c'
                }, {
                    question: 'Inductive reactance of a coil having inductance 4 H',
                    answers: { a: ' 796 x 10-6 Ω', b: '1256 Ω', c: '314 Ω', d: '628 Ω' },
                    correctAnswer: 'b'
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