import * as THREE from 'three'
import Experience from '../Experience.js'
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
import Lighthouse from '../World/modelscripts/Lighthouse.js'
import moveDarkspeare from '../camAnim/moveDarkspeare.js'
import movePlayButton from '../camAnim/movePlayButton.js'
import moveMidfair from '../camAnim/moveMidfair.js'
import moveShipsRest from '../camAnim/moveShipsRest.js'
import moveMoonvale from '../camAnim/moveMoonvale.js'
import moveWizard from '../camAnim/moveWizard.js'
import { timeline } from 'motion'

export class LabelLighthouse
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

        this.placeName = '#Vysmere'
        this.placeHead = 'Vysmere Light'
        this.placeBody = 'The lighthouse stands on Vysmere Isle, a small island in Moonstone Bay. The lighthouse took 15 years to construct due to its remote location. Fuldor the Lighthouse keeper lives in isolation on the island, keeping the light running day and night.'
        this.setLabelLighthouse()
        
        
    }

    setLabelLighthouse()
    {
        
        this.enterSequence = [
            ["#default-tooltip", { opacity: 0 }, { duration: 0.2 }],
            [this.placeName, { opacity: 1 }, { duration: .2 }, { at: "-0.2" }],

        ]
        this.leaveSequence = [
            [this.placeName, { opacity: 0 }, { duration: .2 },],
            ["#default-tooltip", { opacity: 1 }, { duration: 0.2 }, { at: "-0.2" }],

        ]
        this.defaultToolTip = document.getElementById('default-tooltip')
        this.captionBox = document.getElementById('caption-box')
        this.pinToolTip = document.createElement('div')
        this.pinToolTip.id = "Vysmere"
        this.pinToolTip.classList.add("captions-text-wrap")
        this.captionBox.appendChild(this.pinToolTip)
        this.ttHead = document.createElement('h3')
        this.ttHead.textContent = this.placeHead
        this.ttBody = document.createElement("p")
        this.ttBody.textContent = this.placeBody
        this.ttBody.classList.add("caption-text")
        this.pinToolTip.appendChild(this.ttHead)
        this.pinToolTip.appendChild(this.ttBody)


        //pin
        this.modelname = this.scene.getObjectByName('Lighthouse')
        this.modelDIV = document.createElement('div')
        this.modelDIV.classList.add('label')
        this.iconWrapper = document.createElement('div')
        this.iconWrapper.classList.add('icon-wrap')
        this.modelDIV.appendChild(this.iconWrapper)
        this.iconImg = document.createElement("img")
        this.iconImg.src = "/images/Pin_Icon1.svg"
        this.iconImg.className = "icon"
        this.iconWrapper.appendChild(this.iconImg)
        //this.modelDIV.setAttribute('id', 'darkspearelabel')
        this.modelLabel = new CSS2DObject(this.modelDIV)
        this.modelLabel.position.set(0, 10, 0)
        this.modelname.add(this.modelLabel)


        this.modelDIV.addEventListener('mouseenter', () => {


            timeline(this.enterSequence)


            //'<div class="caption-text-wrap"><h3 class="captions-title">Vysmere Darkspeare</h3><p class="caption-text">The Vysmere Darkspeare illuminates Moonvale bay.</p></div>'
        })
        this.modelDIV.addEventListener('mouseleave', () => {

            timeline(this.leaveSequence)
        })
        this.modelDIV.addEventListener('click', () => {
            new movePlayButton()
        })


      }
   /*  setLabelDarkspeare() {

        this.darkspeare = this.scene.getObjectByName('Well003')
        this.modelDIV = document.createElement('div')
        this.modelDIV.classList.add('label')
        this.modelDIV.setAttribute('id', 'darkspearelabel')
        this.modelDIV.innerHTML = '<div class="icon-wrap" id="icon-wrap"><img src="/images/Pin_Icon1.svg" loading="lazy" class="icon" ></div>'
        this.modelLabel = new CSS2DObject(this.modelDIV)
        this.modelLabel.position.set(0, 1, 0)
        this.darkspeare.add(this.modelLabel)
        console.log(this.darkspeare.name)


        this.defaultSequence = [

            ["#default-tooltip", { opacity: 0 }, { duration: 0.2 }],
            ["#default-tooltip", { display: "none" }]

        ]
        this.enterSequence = [
            ["#caption-box", { height: "17rem" }, { duration: 0.5 }],
            ["#pin-tooltip", { transform: "translateY(0)" }, { duration: .2 }, { at: "-0.3" }],
            ["#pin-tooltip", { opacity: 1 }, { duration: .3 }, { at: "-0.1" }],
            // This will start 0.2 seconds before the end of the previous animation:

        ]
        this.leaveSequence = [

            ["#default-tooltip", { opacity: 0, display: "block" }],
            ["#default-tooltip", { opacity: 1 }, { duration: 0.1, at: "+0.1" }],
            ["#pin-tooltip", { opacity: 0 }, { duration: .5 }, { at: "-0.3" }],
            ["#pin-tooltip", { transform: "translateY(100%)" }, { duration: 0.5, at: "-0.3" }],
            // This will start 0.2 seconds after the previous animation:

            // This will start 0.2 seconds before the end of the previous animation:

            ["#caption-box", { height: "10rem", minHeight: "5rem" }, { duration: 0.2, at: "-0.3" }],

        ]
        this.defaultToolTip = document.getElementById('default-tooltip')
        this.captionBox = document.getElementById('caption-box')
        this.pinToolTip = document.createElement('div')
        this.pinToolTip.id = "pin-tooltip-darkspeare"
        this.pinToolTip.classList.add("caption-text-wrap")
        this.ttHead = document.createElement('h3')
        this.ttHead.textContent = this.darkspeareHead
        this.ttBody = document.createElement("p")
        this.ttBody.textContent = this.darkspeareBody
        this.pinToolTip.appendChild(this.ttHead)
        this.pinToolTip.appendChild(this.ttBody)

        this.modelDIV.addEventListener('mouseenter', () => {
            timeline(this.defaultSequence).finished.then(() => {
                this.captionBox.appendChild(this.pinToolTip)
                timeline(this.enterSequence)
            })


            //'<div class="caption-text-wrap"><h3 class="captions-title">Vysmere Lighthouse</h3><p class="caption-text">The Vysmere Lighthouse illuminates Moonvale bay.</p></div>'
        })
        this.modelDIV.addEventListener('mouseleave', () => {

            timeline(this.leaveSequence).finished.then(() => {
                this.captionBox.removeChild(this.pinToolTip)
            })

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
      */
    

    update() {
        this.labelRenderer.render(this.scene, this.camera.instance)
    }
}