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

        
        
        this.setLabelLighthouse()
        this.setLabelDarkspeare()
        this.setLabelMidfair()
        this.setLabelShipsRest()
        this.setLabelMoonvale()
        this.setLabelWizard()
        
        
    }

    setLabelLighthouse()
    {
        
      this.lighthouse = this.scene.getObjectByName('_Lighthouse')
       this.modelDIV = document.createElement('div')
        this.modelDIV.classList.add('label')
        this.modelDIV.setAttribute('id', 'lighthouselabel')
        this.modelDIV.innerHTML = '<div class="icon-wrap" id="icon-wrap"><img src="/images/Pin_Icon1.svg" loading="lazy" class="icon" ></div>'
      this.modelLabel = new CSS2DObject(this.modelDIV)
      this.modelLabel.position.set(0, 10, 0)
      this.lighthouse.add ( this.modelLabel )
      console.log(this.lighthouse.name)
      this.modelDIV.addEventListener('mouseenter', () =>
      {
          this.labelTEXT = document.getElementById('caption-box')
          this.labelICON = document.getElementById('lighthouselabel')
          this.labelICON.classList.add('translate')
          this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3 class="captions-title">Vysmere Lighthouse</h3><p class="caption-text">The Vysmere Lighthouse illuminates Moonvale bay.</p></div>'
      })
        this.modelDIV.addEventListener('mouseleave', () => {
            this.labelTEXT = document.getElementById('caption-box')
            this.labelICON = document.getElementById('lighthouselabel')
            this.labelICON.classList.remove('translate')
            this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3 class="captions-title">Lore</h3><p class="caption-text">Hover over a red pin to view that places .</p></div>'
        })
        this.modelDIV.addEventListener('click', () => {
            new movePlayButton()
        })


      }
    setLabelDarkspeare() {

        this.darkspeare = this.scene.getObjectByName('Well003')
        this.modelDIV = document.createElement('div')
        this.modelDIV.classList.add('label')
        this.modelDIV.setAttribute('id', 'darkspearelabel')
        this.modelDIV.innerHTML = '<div class="icon-wrap" id="icon-wrap"><img src="/images/Pin_Icon1.svg" loading="lazy" class="icon" ></div>'
        this.modelLabel = new CSS2DObject(this.modelDIV)
        this.modelLabel.position.set(0, 1, 0)
        this.darkspeare.add(this.modelLabel)
        console.log(this.darkspeare.name)
        this.modelDIV.addEventListener('mouseenter', () => {
            this.labelTEXT = document.getElementById('caption-box')
            this.labelICON = document.getElementById('darkspearelabel')
            this.labelICON.classList.add('translate')
            this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3 class="captions-title">Lore</h3><p class="caption-text">Darkspeare is a small, secluded village bordering the Moonstone Forest. Mysteries abound in this eerie place.</p></div>'
        })
        this.modelDIV.addEventListener('mouseleave', () => {
            this.labelTEXT = document.getElementById('caption-box')
            this.labelICON = document.getElementById('darkspearelabel')
            this.labelICON.classList.remove('translate')
            this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3 class="captions-title">Lore</h3><p class="caption-text">Hover over a red pin to view that places lore.</p></div>'
        })
        this.modelDIV.addEventListener('click', () => {
            new moveDarkspeare()
        })



    }
    setLabelMidfair() {

        this.midfair = this.scene.getObjectByName('Well005')
        this.modelDIV = document.createElement('div')
        this.modelDIV.classList.add('label')
        this.modelDIV.setAttribute('id', 'midfairlabel')
        this.modelDIV.innerHTML = '<div class="icon-wrap" id="icon-wrap"><img src="/images/Pin_Icon1.svg" loading="lazy" class="icon" ></div>'
        this.modelLabel = new CSS2DObject(this.modelDIV)
        this.modelLabel.position.set(0, 10, 0)
        this.midfair.add(this.modelLabel)
        console.log(this.midfair.name)
        this.modelDIV.addEventListener('mouseenter', () => {
            this.labelTEXT = document.getElementById('caption-box')
            this.labelICON = document.getElementById('midfairlabel')
            this.labelICON.classList.add('translate')
            this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3 class="captions-title">Town of Midfair</h3><p class="caption-text">Midfair is the breadbasket of Karto. Its sprawling fields of wheat and corn feed the cravings of many Kartoans from bread to beer.</p></div>'
        })
        this.modelDIV.addEventListener('mouseleave', () => {
            this.labelTEXT = document.getElementById('caption-box')
            this.labelICON = document.getElementById('midfairlabel')
            this.labelICON.classList.remove('translate')
            this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3 class="captions-title">Lore</h3><p class="caption-text">Hover over a red pin to view that places lore.</p></div>'
        })
        this.modelDIV.addEventListener('click', () => {
            new moveMidfair()
        })



    }
    setLabelShipsRest() {

        this.shipsrest = this.scene.getObjectByName('Ships_Rest_Dock_House')
        this.modelDIV = document.createElement('div')
        this.modelDIV.classList.add('label')
        this.modelDIV.setAttribute('id', 'shipsrestlabel')
        this.modelDIV.innerHTML = '<div class="icon-wrap" id="icon-wrap"><img src="/images/Pin_Icon1.svg" loading="lazy" class="icon" ></div>'
        this.modelLabel = new CSS2DObject(this.modelDIV)
        this.modelLabel.position.set(0, 10, 0)
        this.shipsrest.add(this.modelLabel)
        console.log(this.shipsrest.name)
        this.modelDIV.addEventListener('mouseenter', () => {
            this.labelTEXT = document.getElementById('caption-box')
            this.labelICON = document.getElementById('shipsrestlabel')
            this.labelICON.classList.add('translate')
            this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3 class="captions-title">Ships Rest</h3><p class="caption-text">The port city of Ships Rest is known for its growing fishing industry... ...and the vibrant pirate community.</p></div>'
        })
        this.modelDIV.addEventListener('mouseleave', () => {
            this.labelTEXT = document.getElementById('caption-box')
            this.labelICON = document.getElementById('shipsrestlabel')
            this.labelICON.classList.remove('translate')
            this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3 class="captions-title">Lore</h3><p class="caption-text">Hover over a red pin to view that places lore.</p></div>'
        })
        this.modelDIV.addEventListener('click', () => {
            new moveShipsRest()
        })



    }
    setLabelMoonvale() {

        this.moonvale = this.scene.getObjectByName('Castle001')
        this.modelDIV = document.createElement('div')
        this.modelDIV.classList.add('label')
        this.modelDIV.setAttribute('id', 'moonvalelabel')
        this.modelDIV.innerHTML = '<div class="icon-wrap" id="icon-wrap"><img src="/images/Pin_Icon1.svg" loading="lazy" class="icon" ></div>'
        this.modelLabel = new CSS2DObject(this.modelDIV)
        this.modelLabel.position.set(0, 2, 0)
        this.moonvale.add(this.modelLabel)
        console.log(this.moonvale.name)
        this.modelDIV.addEventListener('mouseenter', () => {
            this.labelTEXT = document.getElementById('caption-box')
            this.labelICON = document.getElementById('moonvalelabel')
            this.labelICON.classList.add('translate')
            this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3>The Capitol of Moonvale</h3><p class="caption-text">Moonvale City is the capitol of Karto, and the epicenter of trade. Located on the southern shores of Moonstone Bay, the city rests in the shadows of the Moonstone Mountains. Its location is important do to its proximity to Graelons Gap and the southern Kartoan coast.</p></div>'
        })
        this.modelDIV.addEventListener('mouseleave', () => {
            this.labelTEXT = document.getElementById('caption-box')
            this.labelICON = document.getElementById('moonvalelabel')
            this.labelICON.classList.remove('translate')
            this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3 class="captions-title">Lore</h3><p class="caption-text">Hover over a red pin to view that places lore.</p></div>'
        })
        this.modelDIV.addEventListener('click', () => {
            new moveMoonvale()
        })



    }
    setLabelWizard() {

        this.wizard = this.scene.getObjectByName('Wizard_Tower')
        this.modelDIV = document.createElement('div')
        this.modelDIV.classList.add('label')
        this.modelDIV.setAttribute('id', 'wizardlabel')
        this.modelDIV.innerHTML = '<div class="icon-wrap" id="icon-wrap"><img src="/images/Pin_Icon1.svg" loading="lazy" class="icon" ></div>'
        this.modelLabel = new CSS2DObject(this.modelDIV)
        this.modelLabel.position.set(0, 6, 0)
        this.wizard.add(this.modelLabel)
        console.log(this.wizard.name)
        this.modelDIV.addEventListener('mouseenter', () => {
            this.labelTEXT = document.getElementById('caption-box')
            this.labelICON = document.getElementById('wizardlabel')
            this.labelICON.classList.add('translate')
            this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3>Illianth Tower</h3><p class="caption-text">The Tower of Illianth is the hope of Rythgar the Sorcerer. Located in Grimswood, the spellcaster brews potions conjours the spells through the magic that inhabits Karto.</p></div>'
        })
        this.modelDIV.addEventListener('mouseleave', () => {
            this.labelTEXT = document.getElementById('caption-box')
            this.labelICON = document.getElementById('wizardlabel')
            this.labelICON.classList.remove('translate')
            this.labelTEXT.innerHTML = '<div class="caption-text-wrap"><h3>Lore</h3><p class="caption-text">Hover over a red pin to view that places lore.</p></div>'
        })
        this.modelDIV.addEventListener('click', () => {
            new moveWizard()
        })



    }
     
    

    update() {
        this.labelRenderer.render(this.scene, this.camera.instance)
    }
}