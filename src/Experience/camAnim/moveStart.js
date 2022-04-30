//import * as THREE from 'three'
import Experience from "../Experience";
import gsap from "gsap";
export default class moveStart 
{

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.camera = this.experience.camera.instance
        this.controls = this.experience.camera.controls
        //camera position
        this.posX = -39.396
        this.posY = 6
        this.posZ = -9.614

        //target position
        this.targetX = 1.505
        this.targetY = 0
        this.targetZ = -7.607


        
        this.setMoveStart()


    }

    
    setMoveStart() {


       

        gsap.to(this.camera.position, {
            onStart: () => { this.controls.enabled = false },
            onComplete: () => { this.controls.enabled = true },
            duration: 5,
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

        gsap.to(this.scene.fog, {
            duration: 7,
            density: .01,
            ease: "sine.inOut",
            onComplete: () => { this.camera.far = 150}
        })

    





    }









}