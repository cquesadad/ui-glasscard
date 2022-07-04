 
function uiglasscard(option) {
    let cards = document.querySelectorAll('.ui-glasscard');

    if (options.glass_type === 'hard') {
        options.glass_type = '0px'
    } else {
        options.glass_type = '15px'
    }

    cards.forEach( card => {
        card.style.backdropFilter = `blur(${increasedLevel}px)`;
        card.style.bacgroundColor = `rgba(255,255,255,0.5)`;
        
        if(option.border) {
            card.style.border = "1px"
        }
    });

    //backdrop-filter: blur(5px);

};


module.exports = { uiglasscard };