const cardArrayNextLevel = [
    {
        name: '20',
        img: 'images/20.jpg',
    },
    {
        name: '21',
        img: 'images/21.jpg',
    },
    {
        name: '22',
        img: 'images/22.jpg',
    },
    {
        name: '23',
        img: 'images/23.jpg',
    },
    {
        name: '24',
        img: 'images/24.jpg',
    },
    {
        name: '25',
        img: 'images/25.jpg',
    },
    {
        name: '26',
        img: 'images/26.jpg',
    },
    {
        name: '27',
        img: 'images/27.jpg',
    },
    {
        name: '28',
        img: 'images/28.jpg',
    },
    {
        name: '29',
        img: 'images/29.jpg',
    },
    {
        name: '30',
        img: 'images/30.jpg',
    },
    {
        name: '31',
        img: 'images/31.jpg',
    },
    {
        name: '32',
        img: 'images/32.jpg',
    },
    {
        name: '33',
        img: 'images/33.jpg',
    },
    {
        name: '34',
        img: 'images/34.jpg',
    },
    {
        name: '35',
        img: 'images/35.jpg',
    },
    {
        name: '36',
        img: 'images/36.jpg',
    },
    {
        name: '37',
        img: 'images/37.jpg',
    },
    {
        name: '38',
        img: 'images/38.jpg',
    },
    {
        name: '39',
        img: 'images/39.jpg',
    },
    {
        name: '40',
        img: 'images/40.jpg',
    },
    {
        name: '41',
        img: 'images/41.jpg',
    },
    {
        name: '42',
        img: 'images/42.jpg',
    },
    {
        name: '43',
        img: 'images/43.jpg',
    },
    {
        name: '44',
        img: 'images/44.jpg',
    },
    {
        name: '20',
        img: 'images/20.jpg',
    },
    {
        name: '21',
        img: 'images/21.jpg',
    },
    {
        name: '22',
        img: 'images/22.jpg',
    },
    {
        name: '23',
        img: 'images/23.jpg',
    },
    {
        name: '24',
        img: 'images/24.jpg',
    },
    {
        name: '25',
        img: 'images/25.jpg',
    },
    {
        name: '26',
        img: 'images/26.jpg',
    },
    {
        name: '27',
        img: 'images/27.jpg',
    },
    {
        name: '28',
        img: 'images/28.jpg',
    },
    {
        name: '29',
        img: 'images/29.jpg',
    },
    {
        name: '30',
        img: 'images/30.jpg',
    },
    {
        name: '31',
        img: 'images/31.jpg',
    },
    {
        name: '32',
        img: 'images/32.jpg',
    },
    {
        name: '33',
        img: 'images/33.jpg',
    },
    {
        name: '34',
        img: 'images/34.jpg',
    },
    {
        name: '35',
        img: 'images/35.jpg',
    },
    {
        name: '36',
        img: 'images/36.jpg',
    },
    {
        name: '37',
        img: 'images/37.jpg',
    },
    {
        name: '38',
        img: 'images/38.jpg',
    },
    {
        name: '39',
        img: 'images/39.jpg',
    },
    {
        name: '40',
        img: 'images/40.jpg',
    },
    {
        name: '41',
        img: 'images/41.jpg',
    },
    {
        name: '42',
        img: 'images/42.jpg',
    },
    {
        name: '43',
        img: 'images/43.jpg',
    },
    {
        name: '44',
        img: 'images/44.jpg',
    }
]

cardArrayNextLevel.sort(() => 0.5 - Math.random())
const gridNextLevel = document.querySelector('#gridNextLevel')
const result = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArrayNextLevel.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/frontCard.jpg')
        card.setAttribute('data-id', i )
        gridNextLevel.appendChild(card)
        card.addEventListener('click', flipCard)
    }
}

createBoard()

function timeCount() {
    const timer = document.querySelector('#time')
    const start = Date.now();
    let check = null
    if (check === null) {
        check = setInterval(function() {
            const delta = Date.now() - start; 
            timer.innerHTML = Math.floor(delta / 1000)
            if(result.innerHTML === 'Congratulation, you found them all!') {
                timer.innerHTML = Math.floor(delta / 1000) - 1
                clearInterval(check);
            }
        }, 1000); 
    }  
    }  

function checkMatch() {
    const cards = document.querySelectorAll('#gridNextLevel img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/guessedCard.jpg')
        cards[optionTwoId].setAttribute('src', 'images/guessedCard.jpg')
        cards[optionOneId].removeEventListener('click', flipCard )
        cards[optionTwoId].removeEventListener('click', flipCard )
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/frontCard.jpg')
        cards[optionTwoId].setAttribute('src', 'images/frontCard.jpg')
    }
   
    result.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []
    if (cardsWon.length == cardArrayNextLevel.length/2) {
        result.innerHTML = 'Congratulation, you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    
 
    if(cardsChosenIds == cardId) {
        return
    } else {
        cardsChosen.push(cardArrayNextLevel[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArrayNextLevel[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 1200)
            
        } else if (cardsChosen.length > 2) {
            this.setAttribute('src', 'images/frontCard.jpg')
        } else {
            startTimer(); // "do something" happens
        }
    }
}
   
const startTimer = (function() {
    let executed = false;
    return function() {
        if (!executed) {
            executed = true;
            timeCount()
        }
    };
})();
