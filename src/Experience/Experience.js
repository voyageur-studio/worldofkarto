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
import moveMidfair from './camAnim/moveMidfair.js'
import moveWizard from './camAnim/moveWizard.js'
import moveStart from './camAnim/moveStart.js'
import movePlayButton from './camAnim/movePlayButton.js'
import TitleLottie from './Utils/TitleScreen.js'
import LoadingLottie from './Utils/LoadingLottie.js'
import { animate, stagger } from "motion"


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
       // this.movestart = new movePlayButton()
        this.title = new TitleLottie()
        this.loadinglottie = new LoadingLottie()
        
        //fog
        const color = 0x67D0FA;
        {
            const fogdensity = 0.008
            const near = 1;
            const far = 150;
            this.scene.fog = new THREE.FogExp2(color, fogdensity);
        }
        this.scene.background = new THREE.Color(color);
        
        //stats
        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(this.stats.dom);
 
        
        

        //anim
        this.playBox = document.getElementById('play')
        this.playBox.addEventListener("click", () => {
            new moveStart()
            animate('#site-logo',  { transform: "translateY(0)" }, { delay: 2 }, { duration: 1, easing: [.22, .03, .26, 1]})
            animate('#webgl', { borderWidth: "2em" }, { delay: 0.5 }, { duration: 1, easing: [.22, .03, .26, 1] })
            animate('.icon', { opacity: "1" }, { delay: stagger(.1), duration: 1, easing: [.22, .03, .26, 1] })
            animate('#title', { transform: "translateY(-200%)", opacity: 0 }, { duration: 3, easing: [.22, .03, .26, 1] })
            animate('.title-subtext', { transform: "scale(0.00001)", opacity: 0 }, { duration: 3, easing: [.22, .03, .26, 1] })
            animate('.title',  { display: "none" }, { delay: 5})
            animate('#play', { transform: "scale(0.00001)", opacity: 0 }, { delay: 0.3, duration: 3, easing: [.32, -0.26, .32, 1] })
            animate('.control-wrap', { opacity: "1", transform: "translateY(0)"}, { delay: .6, duration: 1 })
        } ),

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
            this.animMidfair = document.getElementById('midfair')
        this.animMidfair.addEventListener("click", function () {
            new moveMidfair()
        }),
            this.animWizard = document.getElementById('wizard')
        this.animWizard.addEventListener("click", function () {
            new moveWizard()
        }),
            this.animStart = document.getElementById('mapreset')
        this.animStart.addEventListener("click", function () {
            new moveStart()
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