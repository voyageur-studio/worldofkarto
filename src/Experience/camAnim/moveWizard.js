//import * as THREE from 'three'
import Experience from "../Experience";
import gsap from "gsap";
export default class moveWizard 
{

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.camera = this.experience.camera.instance
        this.controls = this.experience.camera.controls
 
        this.posX = 62.939
        this.posY = 7.561
        this.posZ = -24.521
        
        
        this.targetX = 65.210
        this.targetY = 3.472
        this.targetZ = -12.992


        
        this.setMoveWizard()


    }

    
    setMoveWizard() {


       

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