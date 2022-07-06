import './styles/glasscard.css';

function uiglasscard(options) {
    let cards = document.querySelectorAll('.ui-glasscard');
   
    //Options dark & light
    if (options.glass_type === 'hard') {
        options.glass_type = '12px';
    
    } else {
        options.glass_type = '10px';
    }

    if (options.glass_color === 'dark'){
        
        options.glass_color = 'linear-gradient(120deg, rgba(10, 10, 10, 0.30) 0%, rgba(30, 30, 30, 0.20) 49.28%, rgba(10, 10, 10, 0.30) 100%)'
        options.borderColor = 'rgb(105, 105, 105)'
        options.boxShadow_color = '2px 3px 25px -10px rgba(7, 4, 32, 0.4)'
        options.border_class = `<div class="glasscard-border-dark"></div>`
        
    } else {
        options.glass_color = 'linear-gradient(120deg, rgba(255, 255, 255, 0.30) -40%, rgba(255, 255, 255, 0.10) 49.28%, rgba(255, 255, 255, 0.30) 140%)!important'
        options.borderColor = 'rgba(255,255,255,1)'
        options.boxShadow_color = '2px 3px 25px -10px rgba(7, 4, 32, 0.2)'
        options.border_class =`<div class="glasscard-border"></div>`
    }

    if (options.glass_radius === '1'){
        options.glass_radius ='10px'

    } else if (options.glass_radius === '2'){
        options.glass_radius ='20px'

    } else if (options.glass_radius === '3') {
        options.glass_radius ='30px'
    }


    cards.forEach( card => {
        card.style.backdropFilter = `blur(${options.glass_type})`;
        card.style.background = `${options.glass_color}`;
        card.style.borderRadius = `${options.glass_radius}`;
        card.style.boxShadow = `${options.boxShadow_color}`;
        
        
        if(options.border) {

            card.innerHTML += `${options.border_class}`;

            let glassborders = document.querySelectorAll('.glasscard-border');
            

            glassborders.forEach( glassborder => { 
                glassborder.style.border = "1px solid";
                glassborder.style.borderRadius = `${options.glass_radius}`;
               
            });

            let darkglassborders = document.querySelectorAll('.glasscard-border-dark');

            darkglassborders.forEach( darkglassborder => { 
                darkglassborder.style.border = "1px solid ";
                darkglassborder.style.borderRadius = `${options.glass_radius}`;
            
            });
        };

    })

    //backdrop-filter: blur(5px);
};


module.exports = { uiglasscard };