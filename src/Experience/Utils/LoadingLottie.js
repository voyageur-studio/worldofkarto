import Lottie from "lottie-web"

export default class LoadingLottie 
{
    constructor()
    {
        this.file = './documents/Loader.json'
        this.loadanim = new Lottie.loadAnimation({
            container: document.getElementById('loader'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: this.file,
        })
        this.loadanim.setSpeed(.5)
        
    }
}