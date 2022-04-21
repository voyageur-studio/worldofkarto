//import * as THREE from 'three'
import Experience from "../Experience";
import gsap from "gsap";
export default class moveShipsRest 
{

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.camera = this.experience.camera.instance
        this.controls = this.experience.camera.controls
 
        this.posX = 16.229
        this.posY = 4.777
        this.posZ = -21.240
        
        
        this.targetX = 9.441
        this.targetY = -0.008
        this.targetZ = -28.364


        
        this.setMoveShipsRest()


    }

    
    setMoveShipsRest() {


       

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