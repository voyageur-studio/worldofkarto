//import * as THREE from 'three'
import Experience from "../Experience";
import gsap from "gsap";
export default class moveDarkspeare 
{

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.camera = this.experience.camera.instance
        this.darkspeare = this.experience.world.darkspeare.model
        this.controls = this.experience.camera.controls
 
      
        this.targetX = 33.066
        this.targetY = 0.194
        this.targetZ = -10.588


        
        this.setMoveDarkspeare()


    }

    
    setMoveDarkspeare() {


       

        gsap.to(this.camera.position, {
            onStart: () => { this.controls.enabled = false },
            onComplete: () => { this.controls.enabled = true },
            duration: 2,
            x: 21.140,
            y: 5.617,
            z: -13.438,
            ease: "sine.inOut",
        })

        gsap.to(this.controls.target, {
            duration: 2,
            x: this.targetX,
            y: this.targetY,
            z: this.targetZ,
            ease: "sine.inOut",
            onUpdate: () => { this.controls.update()}
            

        })





    }









}