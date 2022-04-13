import * as THREE from 'three'
import Experience from '../../Experience.js'

export default class Crossroads
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Crossroads')
        }

        // Resource
        this.resource = this.resources.items.crossroadsModel

        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(1, 1, 1)
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Object3D)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        console.log(this.model)
    }

}