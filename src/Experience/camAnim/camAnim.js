import * as THREE from 'three'
import Experience from "../Experience";
import gsap from "gsap";
export default class camAnim 
{

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.camera = this.experience.camera.instance
        this.lighthouse = this.experience.world.lighthouse.model
        this.controls = this.experience.camera.controls
        

 

        this.targetX = 0
        this.targetY = 0
        this.targetZ = 0


        this.setMoveCamera()
        


    }

    setMoveCamera() 
    {

        
        gsap.to( this.camera.position, {
            onStart: () => { this.controls.enabled = false },
            onComplete: () => { this.controls.enabled = true },
            duration: 2, 
            x: 0,
            y: 50,
            z: 0,
        })

        gsap.to(this.controls.target, {
            duration: 2,
            x: this.targetX,
            y: this.targetY,
            z: this.targetZ,
            ease: "sine.inOut",
            onUpdate: () => { this.controls.update() }


        })

        gsap.to(this.scene.fog, {
            duration: 2,
            near: 25,
            far: 150,
            
        })
       
    
        

        
    }
    









}