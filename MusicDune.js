class MusicDune {
    constructor() {
        this.instruments = ["Mbira", "Djembe", "Bell", "Kundi", "Kora"];
        this.score = 0;
        this.currentRound = 0;
        this.musicSequence = [];
        this.positions = {};
        this.playerAnswers = [];
        this.inputIndex = 0;
    }

    generateSequence(round) {
        const manualDirections = [
            ["left", "middle", "right"],
            ["right", "middle", "left"],
            ["middle", "left", "right"],
            ["left", "right", "middle"]
        ];
        const directions = manualDirections[round];
        this.instruments = this.instruments.sort(() => 0.5 - Math.random());

        this.musicSequence = [];
        this.positions = {};

        for (let i = 0; i < 3 && i < this.instruments.length; ++i) {
            this.musicSequence.push(this.instruments[i]);
            this.positions[this.instruments[i]] = directions[i];
        }

        console.log("Positions:", this.positions);
    }

    async displaySequence() {
        const gameContainer = document.getElementById("gameContainer");
        gameContainer.innerHTML = ''; 

        for (let i = 0; i < this.musicSequence.length; ++i) {
            const instrument = this.musicSequence[i];
            const position = this.positions[instrument];
            const card = document.createElement("div");
            card.className = `card ${position}`;
            const img = document.createElement("img");
            img.src = `${instrument}.png`; 
            img.alt = instrument;
            img.className = "instrument-img";
            card.appendChild(img);

            const instrumentName = document.createElement("div");
            instrumentName.textContent = instrument; 
            instrumentName.className = "instrument-name"; 
            card.appendChild(instrumentName); 

            gameContainer.appendChild(card);

            await new Promise(resolve => setTimeout(resolve, 1000));
            card.remove(); 
        }
    }

    showButtons() {
        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "button-container";

        const directions = ["left", "middle", "right"]; 

        for (let i = 0; i < directions.length; ++i) {
            const button = document.createElement("button");
            button.textContent = directions[i];
            button.onclick = () => this.handleButtonClick(directions[i]);
            buttonsContainer.appendChild(button);
        }

        document.getElementById("gameContainer").appendChild(buttonsContainer);
    }

    async playRound(round) {
        this.generateSequence(round);
        await this.displaySequence();
        this.showButtons(round);
    }

    async play() {
        await this.playRound(this.currentRound);
    }

    handleButtonClick(answer) {
        const button = event.target;
        const expectedSequences = [
            ["left", "middle", "right"],
            ["right", "middle", "left"],
            ["middle", "left", "right"],
            ["left", "right", "middle"]
        ];

        const isCorrect = answer === expectedSequences[this.currentRound][this.inputIndex];

        if (isCorrect) {
            this.score++; 
            button.style.backgroundColor = '#8dc14d';
        } else {
            button.style.backgroundColor = '#d65c5c';
        }

        //

        setTimeout(() => {
            button.style.backgroundColor = ''; 
            if (this.inputIndex === this.musicSequence.length - 1) {
                if (this.currentRound < 3) {
                    this.currentRound++;
                    this.playRound(this.currentRound);
                } else {
                    document.getElementById("gameContainer").innerHTML = `<h2>Final Score: ${this.score}</h2>`;
                    window.location.href = "Drama11.html"
                }
                this.inputIndex = 0; 
                this.playerAnswers = []; 
               
                setTimeout(() => {
                    const buttons = document.querySelectorAll('.button-container button');
                    buttons.forEach(btn => {
                        btn.disabled = false;
                    });
                }, 1000);
            } else {
                this.inputIndex++;
            }
        }, 1000);
    }
}

const musicDuneGame = new MusicDune();
musicDuneGame.play();