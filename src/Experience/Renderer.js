import * as THREE from 'three'
import Experience from './Experience.js'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
import LabelRenderer from './LabelRenderer.js'

export default class Renderer
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera


        
        this.setInstance()
        this.setLabelRendererInstance()
        
    }

    setInstance()
    {
        let pixelRatio = window.devicePixelRatio
        let AA = true
        if (pixelRatio > 1) {
            AA = false
        }
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            powerPreference: "high-performance"
        })
        this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = THREE.sRGBEncoding
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.25
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor('#BADFFF')
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 1))
        
       
    }
    setLabelRendererInstance()
    {
        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '0px';
        this.labelRenderer.domElement.className = 'label-wrap'
        document.getElementById('canvasparent').appendChild(this.labelRenderer.domElement);

        
    }
 

    resize()
    {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
        this.labelRenderer.setSize(this.sizes.width, this.sizes.height)
    }

    update()
    {
        this.instance.render(this.scene, this.camera.instance)
        
    }
}