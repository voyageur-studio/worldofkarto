//import * as THREE from 'three'
import Experience from "../Experience";
import gsap from "gsap";
export default class moveGraelon 
{

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.camera = this.experience.camera.instance
        this.controls = this.experience.camera.controls
 
        this.posX = 3.341
        this.posY = 8.874
        this.posZ = -1.600
        
        
        this.targetX = 11.746
        this.targetY = 0
        this.targetZ = 23.176


        
        this.setMoveGraelon()


    }

    
    setMoveGraelon() {


       

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