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
                    question: ' Among the following, which is the right formula for inductance?',
                    answers: { a: ' L=emf*t/I', b: 'L=emf/t*I', c: ' L=emf*I/t', d: 'L=emf*t*I' },
                    correctAnswer: 'a'
                },
                {
                    question: 'Among the following, which is the right formula for inductance of N turns?',
                    answers: { a: ' L=et/Ni', b: 'L=N*i *e*t', c: 'L=Ni/et', d: 'L=N/iet' },
                    correctAnswer: 'a'
                },
                {
                    question: ' For a coil having a magnetic circuit of constant reluctance, the flux is ___________ to the current.',
                    answers: { a: 'Directly proportional', b: ' Inversely proportional', c: 'Not related', d: 'Very large compared to' },
                    correctAnswer: 'a'
                },
                {
                    question: 'For a coil having a magnetic circuit of constant reluctance, if the flux increases, what happens to the current?',
                    answers: { a: 'Increases', b: 'Decreases', c: 'Remains constant', d: 'Becomes zero' },
                    correctAnswer: 'a'
                },
                {
                    question: ' If the current changes from 5A to 3A in 2 seconds and the inductance is 10H, calculate the emf.',
                    answers: { a: '5V', b: '10V', c: '15V', d: '20V' },
                    correctAnswer: 'b'
                },
                {
                    question: 'If the current changes from 3A to 5A in 2s and the emf is 10V. Calculate the inductance.',
                    answers: { a: '10H', b: '20H', c: '30H', d: '40H' },
                    correctAnswer: 'a'
                },
                {
                    question: 'For a coil having a magnetic circuit of constant reluctance, the flux is ___________ to the current.',
                    answers: { a: 'Directly proportional', b: 'Inversely proportional', c: 'Not related', d: 'Very large compared to' },
                    correctAnswer: 'a'
                },
                {
                    question: 'The unit for inductance is ___________',
                    answers: { a: 'Ohm', b: 'Henry', c: 'A/m', d: 'A/s' },
                    correctAnswer: 'b'
                },
                {
                    question: 'If either the inductance or the rate of change of current is doubled, the induced e.m.f?',
                    answers: { a: 'Remains constant', b: 'Becomes zero', c: 'Doubles', d: 'Becomes half' },
                    correctAnswer: 'c'
                },
                {
                    question: ' If the current changes from 5A to 3A in x sec and inductance is 10H. The emf is 10V, calculate the value of x.',
                    answers: { a: '2s', b: '3s', c: '4s', d: '5s' },
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