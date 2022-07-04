 
function uiglasscard(options) {
    let cards = document.querySelectorAll('.ui-glasscard');

    if (options.glass_type === 'hard') {
        options.glass_type = '5px';
    } else {
        options.glass_type = '2px';
    }

    if (options.glass_color === 'dark'){
        
        options.glass_color = 'rgba( 3, 3, 22, 0.7 )'
        options.borderColor = 'rgba(3, 3, 22,0.8)'
        options.boxShadow_color = 'rgba(255, 255, 255, .20)'
    } else {
        options.glass_color = 'rgba(255,255,255,0.25)'
        options.borderColor = 'rgba(255,255,255,0.35)'
        options.boxShadow_color = 'rgba(0, 0, 0, 0.30)'
    }

    cards.forEach( card => {
        card.style.backdropFilter = `blur(${options.glass_type})`;
        card.style.backgroundColor = `${options.glass_color}`;
        card.style.borderRadius = `10px`;
        card.style.boxShadow = `2px 2px 25px -10px ${options.boxShadow_color}`;
        
        
        if(options.border) {
            card.style.border = "2px solid",
            card.style.borderColor = `${options.borderColor}`;
        }
    })

    //backdrop-filter: blur(5px);
};


module.exports = { uiglasscard };