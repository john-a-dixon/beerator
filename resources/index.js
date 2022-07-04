/***************************************************Global criteria object***************************************************/
const criteria = {
    appearance: {
        rating: 0,
        options: ['No', 'Yes']
    },
    discernible: {
        rating: 0,
        options: ['Barely', 'Yes', 'Very']
    },
    good: {
        rating: 0,
        options: ['No', 'Meh', 'Yes', 'Very', 'Wow!']
    },
    standout: {
        rating: 0,
        options: ['No', 'Somewhat', 'Yes']
    },
    complex: {
        rating: 0,
        options: ['No', 'Somewhat', 'Yes']
    },
    mouthfeel: {
        rating: 0,
        options: ['No', 'Somewhat', 'Yes']
    },
    overall: {
        rating: 0,
        options: ['Bad', 'Meh', 'Liked', 'Loved']
    },
    finalRatingCounter: 0
}

/***************************************************Functions for the event handlers***************************************************/
const calculateRating = () => {
    let rating = 0;

    return (criteria.finalRatingCounter * 0.25) + 1;
};

const handleClick = event => {

    if(event.type === 'touchstart') //If the event is triggered by a touch, this small branch prevents the code from being triggered again as a click.
        event.preventDefault();

    const direction = event.target.getAttribute('class');
    const criterion = criteria[event.target.parentNode.id];

    if(direction === 'back' && criterion.rating > 0) {
        criterion.rating--;
        criteria.finalRatingCounter--;
    } else if(direction === 'forward' && criterion.rating < criterion.options.length - 1) {
        criterion.rating++;
        criteria.finalRatingCounter++;
    }

    document.querySelector(`#${event.target.parentNode.id} p`).innerHTML = criterion.options[criterion.rating];
    document.querySelector('#final-rating button').innerHTML = calculateRating();
}

const reset = () => {
    for(const [key, value] of Object.entries(criteria)) {
        if(key != 'finalRatingCounter') {
            value.rating = 0;
            document.querySelector(`#${key} p`).innerHTML = value.options[value.rating];
        } else {
            criteria[key] = 0;
        }
    }
    
    document.querySelector('#final-rating button').innerHTML = calculateRating();
}

/***************************************************Get the DOM elements***************************************************/
const buttons = document.querySelectorAll('.criterion button');
const resetButton = document.querySelector('#final-rating button');

/***************************************************Add event handlers to the DOM elements***************************************************/
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
    button.addEventListener('touchstart', handleClick);
});

resetButton.addEventListener('click', reset);
resetButton.addEventListener('touchstart', reset);