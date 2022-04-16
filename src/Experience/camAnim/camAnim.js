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
        
        const startOrientation = this.camera.quaternion.clone();
        const targetOrientation = this.lighthouse.quaternion.clone().normalize();
        var camPos = new THREE.Vector3(0, 0, 0);       // Holds current camera position
        var targetPos = new THREE.Vector3(10, 10, -10);// Target position
        var origin = new THREE.Vector3(0, 0, 0);       // Optional origin
 

        


        this.setMoveCamera()


    }

    setMoveCamera() 
    {


        const aabb = new THREE.Box3().setFromObject( this.lighthouse )
        const center = aabb.getCenter( new THREE.Vector3() )
        const size = aabb.getSize(new THREE.Vector3() )
        this.controls.enabled = false
        gsap.to( this.camera.position, {
            duration: 2, 
            x: 0,
            y: 75,
            z: 0,
        })

        gsap.to(this.scene.fog, {
            duration: 2,
            near: 15,
            far: 250,
        })
        this.controls.enabled = true
    
        

        
    }









}