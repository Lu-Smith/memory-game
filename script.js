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
const cardsChosen = []
const cardsChosenIds = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/frontCard.jpg')
        card.setAttribute('data-id', i )
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    console.log('check for match')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You got a match')
        cards[cardsChosenIds[0].setAttribute('src', 'images/guessedCard')]
        cards[cardsChosenIds[1].setAttribute('src', 'images/guessedCard')]
        cards[cardsChosenIds[0].removeEventListener('click', flipCard )]
        cards[cardsChosenIds[1].removeEventListener('click', flipCard )]
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}