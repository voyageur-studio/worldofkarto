//import * as THREE from 'three'
import Experience from "../Experience";
import gsap from "gsap";
export default class moveMoonvale 
{

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.camera = this.experience.camera.instance
        this.controls = this.experience.camera.controls
 
        this.posX = 13.482
        this.posY = 6.155
        this.posZ = -12.926
        
        
        this.targetX = 23.528
        this.targetY = 0
        this.targetZ = 2.130


        
        this.setMoveMoonvale()


    }

    
    setMoveMoonvale() {


       

        gsap.to(this.camera.position, {
            onStart: () => { this.controls.enabled = false },
            onComplete: () => { this.controls.enabled = true },
            duration: 2,
            x: this.posX,
            y: this.posY,
            z: this.posZ,
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