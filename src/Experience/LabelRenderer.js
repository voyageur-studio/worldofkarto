import * as THREE from 'three'
import Experience from './Experience.js'
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { CubeReflectionMapping, StaticDrawUsage } from 'three'
import Lighthouse from './World/modelscripts/Lighthouse.js'
import moveDarkspeare from './camAnim/moveDarkspeare.js'
import movePlayButton from './camAnim/movePlayButton.js'
import moveMidfair from './camAnim/moveMidfair.js'
import moveShipsRest from './camAnim/moveShipsRest.js'
import moveMoonvale from './camAnim/moveMoonvale.js'
import moveWizard from './camAnim/moveWizard.js'
import { timeline } from 'motion'
import { LabelLighthouse } from './Labels/LabelLighthouse.js'
import { LabelDarkspeare } from './Labels/LabelDarkspeare.js'
import { LabelMidfair } from './Labels/LabelMidfair.js'
import { LabelShipsRest } from './Labels/LabelShipsRest.js'
import { LabelWizard } from './Labels/LabelWizard.js'
import { LabelMoonvale } from './Labels/LabelMoonvale.js'
import { LabelGraelon } from './Labels/LabelGraelon.js'

export class LabelRenderer
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.resources = this.experience.resources
        this.labelRenderer = this.experience.renderer.labelRenderer
        this.labelLighthouse = new LabelLighthouse()
        this.labelDarkspeare = new LabelDarkspeare()
        this.labelMidfair = new LabelMidfair()
        this.lavelShipsRest - new LabelShipsRest()
        this.labelWizard = new LabelWizard()
        this.labelMoonvale = new LabelMoonvale()
        this.labelgraelon = new LabelGraelon()
        
        
    }

    

    update() {
        this.labelRenderer.render(this.scene, this.camera.instance)
    }
}