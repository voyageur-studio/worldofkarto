import * as bodymovin from 'bodymovin/build/player/bodymovin.js'


export default class Bodymovin 
{
    constructor ()
    {
        

        setBodymovin()
        
    }
    setBodymovin()
    {
        this.animation = bodymovin.loadAnimation({
            container: document.getElementById('lottie'), // Required
            path: 'src/documents/Karto_Logo_Animation5.json', // Required
            renderer: 'svg/canvas/html', // Required
            loop: true, // Optional
            autoplay: true, // Optional
            name: "Hello World", // Name for future reference. Optional.
        })
    }
    
}
