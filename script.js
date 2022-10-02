const cardArray = [
    {
        name: '1',
        img: 'images/1.jpg',
    },
    {
        name: '2',
        img: 'images/2.jpg',
    },
    {
        name: '3',
        img: 'images/3.jpg',
    },
    {
        name: '4',
        img: 'images/4.jpg',
    },
    {
        name: '5',
        img: 'images/5.jpg',
    },
    {
        name: '6',
        img: 'images/6.jpg',
    },
    {
        name: '7',
        img: 'images/7.jpg',
    },
    {
        name: '8',
        img: 'images/8.jpg',
    },
    {
        name: '9',
        img: 'images/9.jpg',
    },
    {
        name: '10',
        img: 'images/10.jpg',
    },
    {
        name: '11',
        img: 'images/11.jpg',
    },
    {
        name: '12',
        img: 'images/12.jpg',
    },
    {
        name: '1',
        img: 'images/1.jpg',
    },
    {
        name: '2',
        img: 'images/2.jpg',
    },
    {
        name: '3',
        img: 'images/3.jpg',
    },
    {
        name: '4',
        img: 'images/4.jpg',
    },
    {
        name: '5',
        img: 'images/5.jpg',
    },
    {
        name: '6',
        img: 'images/6.jpg',
    },
    {
        name: '7',
        img: 'images/7.jpg',
    },
    {
        name: '8',
        img: 'images/8.jpg',
    },
    {
        name: '9',
        img: 'images/9.jpg',
    },
    {
        name: '10',
        img: 'images/10.jpg',
    },
    {
        name: '11',
        img: 'images/11.jpg',
    },
    {
        name: '12',
        img: 'images/12.jpg',
    },
]

cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('#grid')
const result = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/frontCard.jpg')
        card.setAttribute('data-id', i )
        grid.appendChild(card)
        card.addEventListener('click', flipCard)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
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
    if (cardsWon.length == cardArray.length/2) {
        result.innerHTML = 'Congratulation, you found them all!'
    }

}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    if(cardsChosenIds == cardId) {
        return
    } else {
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
                setTimeout(checkMatch, 1200)
        } else if (cardsChosen.length > 2) {
            this.setAttribute('src', 'images/frontCard.jpg')
        }
    }
}
   