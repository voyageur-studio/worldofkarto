import * as THREE from 'three'
import Experience from './Experience.js'
import { MapControls } from 'three/examples/jsm/controls/OrbitControls.js'


import World from './World/World.js'
import Lighthouse from './World/modelscripts/Lighthouse.js'
import Resources from './Utils/Resources.js'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.world = new World()
        this.setInstance()
        this.setControls()

    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 200)
        this.instance.position.set(0, 300, 0)
        //this.instance.target = new THREE.Vector3(0, 0, 0)
        this.scene.add(this.instance)
    }

    setControls()
    {
        this.controls = new MapControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.dampingFactor = 0.05
        this.controls.screenSpacePanning= false
        this.controls.minDistance = 6
        this.controls.maxDistance = 200
        this.controls.maxPolarAngle = Math.PI / 2.35
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.controls.update()
        
    }
}