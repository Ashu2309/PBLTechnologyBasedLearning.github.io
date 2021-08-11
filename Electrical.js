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
                    question: 'In a series circuit, which of the parameters remain constant across all circuit elements such as resistor, capacitor and inductor etcetera?',
                    answers: { a: 'Voltage', b: 'Current', c: 'Both voltage and current', d: 'Neither voltage nor current' },
                    correctAnswer: 'b'
                },
                {
                    question: 'If there are two bulbs connected in series and one blows out, what happens to the other bulb?',
                    answers: { a: 'The other bulb continues to glow with the same brightness', b: 'The other bulb stops glowing', c: ' The other bulb glows with increased brightness', d: 'The other bulb also burns out' },
                    correctAnswer: 'b'
                },
                {
                    question: 'A voltage across a series resistor circuit is proportional to?',
                    answers: { a: 'The amount of time the circuit was on for', b: 'The value of the resistance itself', c: 'The value of the other resistances in the circuit', d: 'The value of the other resistances in the circuit' },
                    correctAnswer: 'b'
                },
                {
                    question: ' What is the voltage measured across a series short?',
                    answers: { a: 'Infinite', b: 'Zero', c: 'The value of the source voltage', d: 'Null' },
                    correctAnswer: 'b'
                },
                {
                    question: 'What happens to the current in the series circuit if the resistance is doubled?',
                    answers: { a: ' It becomes half its original value', b: ' It becomes double its original value', c: 'It becomes zero', d: ' It becomes infinity' },
                    correctAnswer: 'a'
                },
                {
                    question: 'What is the magnetic field outside a solenoid?',
                    answers: { a: 'Infinity', b: 'Half the value of the field inside', c: 'Double the value of the field inside', d: 'Zero' },
                    correctAnswer: 'd'
                },
                {
                    question: 'Which, among the following qualities, is not affected by the magnetic field?',
                    answers: { a: 'Moving charge', b: 'Change in magnetic flux', c: 'Current flowing in a conductor', d: 'Stationary charge' },
                    correctAnswer: 'd'
                },
                {
                    question: 'The ratio of magnetic force to electric force on a charged particle getting undeflected in a field is?',
                    answers: { a: '1', b: '0', c: '2', d: '4' },
                    correctAnswer: 'a'
                },
                {
                    question: ' What is the strength of magnetic field known as ________',
                    answers: { a: 'Flux', b: 'Density', c: 'Magnetic strength', d: 'Magnetic flux density' },
                    correctAnswer: 'd'
                },
                {
                    question: ' Magnetic Field lines move from _______',
                    answers: { a: 'North to south', b: 'South to north', c: ' West to east', d: ' East to west' },
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