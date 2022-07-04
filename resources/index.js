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


const calculateRating = () => {
    let rating = 0;

    return (criteria.finalRatingCounter * 0.25) + 1;
};

const handleClick = event => {
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
    document.getElementById('final-rating').children[1].innerHTML = calculateRating();
}



const buttons = document.querySelectorAll('.criterion button');
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
    button.addEventListener('touchstart', handleClick);
});
