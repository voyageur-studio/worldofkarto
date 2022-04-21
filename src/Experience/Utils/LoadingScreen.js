
import lottieWeb from "lottie-web";
import * as THREE from 'three'

export class Loading {

    constructor()
    {
        this.loadingManager = new THREE.LoadingManager(() => {

            
            this.loadingScreen = document.getElementById('loading-screen')
            this.loadingScreen.classList.add('fade-out')

            // optional: remove loader from DOM via event listener
           this.loadingScreen.addEventListener('transitionend', onTransitionEnd)

        })
        function onTransitionEnd(event) {

            event.target.remove();

        }

        
    }

    

}