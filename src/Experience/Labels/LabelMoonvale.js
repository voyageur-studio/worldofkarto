import * as THREE from 'three'
import Experience from '../Experience.js'
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
import moveMoonvale from '../camAnim/moveMoonvale.js'
import { animate, timeline } from 'motion'

export class LabelMoonvale
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

        this.placeName = '#Moonvale'
        this.placeHead = 'Moonvale City'
        this.placeBody = 'Moonvale is the capital city of Karto. Its proximity to Graelon\'s Gap and its location along the shores of Moonstone Bay allowed the city to become the economic center of Karto.'
        this.setLabelMoonvale()
        
        
    }

    setLabelMoonvale()
    {
        
        this.enterSequence = [
            ["#default-tooltip", { opacity: 0 }, { duration: 0.2 }],
            ["#pinmoonvale", { opacity: 1 }, { duration: .2 }, { at: "-0.2" }],

        ]
        this.leaveSequence = [
            ["#pinmoonvale", { opacity: 0 }, { duration: .2 },],
            ["#default-tooltip", { opacity: 1 }, { duration: 0.2 }, { at: "-0.2" }],

        ]
        this.defaultToolTip = document.getElementById('default-tooltip')
        this.captionBox = document.getElementById('caption-box')
        this.pinToolTip = document.createElement('div')
        this.pinToolTip.id = "pinmoonvale"
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
        this.modelname = this.scene.getObjectByName('Castle001') //insert model name here to place pin
       this.modelDIV = document.createElement('div')
        this.modelDIV.classList.add('label')
        this.iconWrapper = document.createElement('div')
        this.iconWrapper.classList.add('icon-wrap')
        this.modelDIV.appendChild(this.iconWrapper)
        this.iconImg = document.createElement("img")
        this.iconImg.src = "/images/Pin_Icon1.svg"
        this.iconImg.id = this.placeName
        this.iconImg.className = "icon"
        this.iconWrapper.appendChild(this.iconImg)
        //this.modelDIV.setAttribute('id', 'darkspearelabel')
        this.modelLabel = new CSS2DObject(this.modelDIV)
      this.modelLabel.position.set(0, 7, 0)
      this.modelname.add ( this.modelLabel )


      this.modelDIV.addEventListener('mouseenter', () =>
      {
          
              
              timeline(this.enterSequence)
        
          
          //'<div class="caption-text-wrap"><h3 class="captions-title">Vysmere Lighthouse</h3><p class="caption-text">The Vysmere Lighthouse illuminates Moonvale bay.</p></div>'
      })
        this.modelDIV.addEventListener('mouseleave', () => {
            
            timeline(this.leaveSequence)
        })
        this.modelDIV.addEventListener('click', () => {
            new moveMoonvale()
        })


      }
  /*
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
    setLabelMoonvale() {

        this.moonvale = this.scene.getObjectByName('Wizard_Tower')
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