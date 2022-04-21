import * as THREE from 'three'
import * as fx from 'postprocessing'
import Debug from './Utils/Debug.js'
import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'
import camAnim from './camAnim/camAnim.js'
import Stats from 'stats.js'
import { CameraRig, StoryPointsControls, ThreeDOFControls, CameraHelper } from 'three-story-controls/dist/three-story-controls'

import sources from './sources.js'
import moveDarkspeare from './camAnim/moveDarkspeare.js'
import moveMoonvale from './camAnim/moveMoonvale.js'
import moveShipsRest from './camAnim/moveShipsRest.js'

let instance = null

export default class Experience
{
    constructor(_canvas)
    {
        // Singleton
        if(instance)
        {
            return instance
        }
        instance = this
        
        // Global access
        window.experience = this

        // Options
        this.canvas = _canvas

        // Setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()
        //this.camAnim = new camAnim()


        //fog
        const color = 0x67D0FA;
        {

            const near = 5;
            const far = 250;
            this.scene.fog = new THREE.Fog(color, near, far);
        }
        this.scene.background = new THREE.Color(color);
        
        //stats
        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(this.stats.dom);
        
        //anim
        
        this.playBox = document.getElementById('play')
        this.playBox.addEventListener("click", function () {
            new camAnim()
        }),

            this.animDarkspeare = document.getElementById('darkspeare')
        this.animDarkspeare.addEventListener("click", function () {
            new moveDarkspeare()
        }),

            this.animMoonvale = document.getElementById('moonvale')
        this.animMoonvale.addEventListener("click", function () {
            new moveMoonvale()
        }),

            this.animShipsRest = document.getElementById('shipsrest')
        this.animShipsRest.addEventListener("click", function () {
            new moveShipsRest()
        }),
        
        // Resize event
        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })
    }
    
    resize()
    {
        this.camera.resize()
        this.renderer.resize()
    }
    
    update()
    {
        this.camera.update()
        this.world.update()
        this.renderer.update()
        this.stats.update()
        
    }
    
    destroy()
    {
        this.sizes.off('resize')
        this.time.off('tick')

        // Traverse the whole scene
        this.scene.traverse((child) =>
        {
            // Test if it's a mesh
            if(child instanceof THREE.Mesh)
            {
                child.geometry.dispose()

                // Loop through the material properties
                for(const key in child.material)
                {
                    const value = child.material[key]

                    // Test if there is a dispose function
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose()
                    }
                }
            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()

        if(this.debug.active)
            this.debug.ui.destroy()
    }
}