import * as THREE from 'three'
import Experience from './Experience.js'
import { MapControls } from 'three/examples/jsm/controls/OrbitControls.js'


export default class Camera {
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        //this.world = new World()
        this.setInstance()
        this.setControls()

    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 250)
        this.instance.position.set(1.505, 225, 10)
        this.instance.target = new THREE.Vector3(1.505, 0, -7.607)
        this.scene.add(this.instance)
    }

    setControls() {
        this.controls = new MapControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.dampingFactor = 0.1
        this.controls.screenSpacePanning = false
        this.controls.minDistance = 6
        this.controls.maxDistance = 200
        this.controls.maxPolarAngle = Math.PI / 2.2
        this.controls.rotateSpeed = 2
        this.controls.panSpeed = 1.5

    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        this.controls.update()

    }
}