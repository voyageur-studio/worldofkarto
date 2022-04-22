import Lottie from "lottie-web"

export default class TitleLottie 
{
    constructor()
    {
        this.files = './documents/KartoTitle.json'
        this.animation = new Lottie.loadAnimation({
            container: document.getElementById('title'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: this.files,
        })
        
    }
}