//import * as THREE from 'three'
import Experience from "../Experience";
import gsap from "gsap";
import moveDarkspeare from "./moveDarkspeare";
import moveMidfair from "./moveMidfair";
export default class movePlayButton 
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
        this.posX = -7.1
        this.posY = 4
        this.posZ = -2.35
        
        //target position
        this.targetX = 1.505
        this.targetY = 1.502
        this.targetZ = -7.607


        
        this.setMovePlayButton()


    }

    
    setMovePlayButton() {


       

        gsap.to(this.camera.position, {
            //onStart: () => { this.controls.enabled = false },
            onComplete: () => { this.controls.enabled = true },
            duration: 5,
            x: this.posX,
            y: this.posY,
            z: this.posZ,
            ease: "sine.inOut",
        })

        gsap.to(this.controls.target, {
            duration: 5,
            x: this.targetX,
            y: this.targetY,
            z: this.targetZ,
            ease: "sine.inOut",
            onUpdate: () => { this.controls.update()}

        })

        gsap.to(this.scene.fog, {
            duration: 5,
            near: 5,
            far: 100,
            ease: "sine.inOut",
        })




    }









}