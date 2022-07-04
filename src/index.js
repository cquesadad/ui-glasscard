 
function uiglasscard(option) {
    let cards = document.querySelectorAll('.ui-glasscard');

    if (options.glass_type === 'hard') {
        options.glass_type = '5px'
    } else {
        options.glass_type = '2px'
    }

    if (options.glass_color === 'dark'){
        options.glass_color = 'rgba(255,255,255,0.25)'
        options.borderColor = 'rgba(255,255,255,0.45)'
    } else {
        options.glass_color = 'rgba( 3, 3, 22, 0.7 )'
        options.borderColor = 'rgba(3, 3, 22, 0.4)'
    }

    cards.forEach( card => {
        card.style.backdropFilter = `blur(${options.glass_type})`;
        card.style.backgroundColor = `${options.glass_color}`;
        card.style.borderRadius = `10px`;
        card.style.borderColor = `${options.borderColor}`;
        
        if(option.border) {
            card.style.border = "1px"
        }
    })

    //backdrop-filter: blur(5px);
};


module.exports = { uiglasscard };