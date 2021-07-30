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
                    question: 'Soluble sutures are prepared from?',
                    answers: { a: 'Any polymer', b: 'Polyhydroxy butyrate', c: 'Polycarbonate', d: 'oligomer' },
                    correctAnswer: 'b'
                },
                {
                    question: 'Relationship between optical density and Transmittance is',
                    answers: { a: 'A α -log T', b: 'A α - T', c: 'A α log T', d: 'A α -log (1/T)' },
                    correctAnswer: 'a'
                },
                {
                    question: '1 ppm CaC03 equivalent hardness is meant by',
                    answers: { a: '10 mg CaC03 equiv. Per litre', b: '100 mg CaC03 equiv. Per litre', c: '1 mg CaC03 equiv. Per litre', d: '103 mg CaC03 equiv. Per litre' },
                    correctAnswer: 'c'
                },
                {
                    question: 'Which of the following methods use ion selective membranes?Which of the following methods use ion selective membranes?',
                    answers: { a: 'reverse osmosis', b: 'electrodialysis', c: 'ultra filtration', d: 'ion exchange' },
                    correctAnswer: 'b'
                },
               
                {
                    question: 'Useful range of degree of polymerization for commercial polymers is',
                    answers: { a: '300 – 3000', b: '100 – 1000', c: '200 – 2000', d: '600 - 6000' },
                    correctAnswer: 'c'
                },
                {
                    question: 'Which of the following comes under the wet corrosion?',
                    answers: { a: 'Concentration cell corrosion', b: 'Oxidation corrosion', c: 'Liquid metal corrosion', d: 'Corrosion by other gases' },
                    correctAnswer: 'a'
                },
                {
                    question: '____ is a catalyst used for free radical polymerization mechanism.',
                    answers: { a: 'HCl', b: 'H2O2', c: 'BF3', d: 'Zeigler - Natta' },
                    correctAnswer: 'b'
                },
                {
                    question: 'Sludges deposition in boiler tube is minimized by',
                    answers: { a: 'frequent blow down operation', b: 'addition of EDTA in feed water', c: 'addition of sodium phosphate in feed water', d: 'adjusting pH of water in boiler suitably' },
                    correctAnswer: 'a'
                },
                {
                    question: '_____ is the odorant added to LPG for detection of leakage',
                    answers: { a: 'Ether', b: 'Esters', c: 'Mercaptans', d: 'Formaldehyde' },
                    correctAnswer: 'c'
                },  {
                    question: 'The highest amount of energy required for electronic transition______',
                    answers: { a: 'π to π*', b: 'π to σ*', c: 'an to π', d: 'σ to σ*' },
                    correctAnswer: 'd'
                },  {
                    question: 'As H+ concentration decreases, EMF of the cell',
                    answers: { a: 'Decreases', b: 'Increases', c: 'Remains zero', d: 'Remains constant' },
                    correctAnswer: 'b'
                },  {
                    question: 'Tinning is the example of',
                    answers: { a: 'Anodic coatings', b: 'Cathodic coatings', c: 'Neither anode nor cathode', d: 'Both anode and cathode' },
                    correctAnswer: 'b'
                },  
                {
                    question: 'Ratio of volumes of metal oxides to metal is known as',
                    answers: { a: 'Specific mass ratio', b: 'Volume ratio', c: 'Specific ratio', d: 'Specific volume ratio' },
                    correctAnswer: 'b'
                }, {
                    question: 'Polymers used in cold countries should have',
                    answers: { a: 'Lower Tg', b: 'Higher Tg', c: 'Tg = 0', d: 'None of these' },
                    correctAnswer: 'b'
                }, {
                    question: 'Which of the following oxide film is protective?',
                    answers: { a: 'Porous', b: 'Non porous', c: 'Volitile', d: 'None of above' },
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