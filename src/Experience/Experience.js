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
        this.movestart = new moveStart()
        this.title = new TitleLottie()
        this.loadinglottie = new LoadingLottie()
        
        //fog
        const color = 0x67D0FA;
        {

            const near = 1;
            const far = 150;
            this.scene.fog = new THREE.Fog(color, near, far);
        }
        this.scene.background = new THREE.Color(color);
        
        //stats
        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(this.stats.dom);
 
        
        

        //anim
        this.controlbuttons = document.querySelector('.control-wrap')
        this.titlescreen = document.querySelector('.title')
        this.captions = document.querySelector('.captions')
        this.playBox = document.getElementById('play')
        this.playBox.addEventListener("click", () => {
            new movePlayButton()
            animate('#site-logo', {transform: "translateY(0)" }, {delay: 2}, {duration: 1})
            animate('.icon', { opacity: "1" }, { delay: stagger(.01), duration: 1, easing: [.22, .03, .26, 1] })
            this.playBox.classList.add('fade-out')
            this.controlbuttons.classList.add('fade-in')
            this.titlescreen.classList.add('fade-out')
            this.captions.classList.add('show')
            this.playBox.addEventListener('transitionstart', () => {
                this.captions.classList.add('fade-in')
            })
            
            
            this.playBox.addEventListener('transitionend', onTransitionEnd)
            this.titlescreen.addEventListener('transitionend', onTransitionEnd)
            function onTransitionEnd(event) {

                event.target.remove();
                
            }
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