import * as THREE from 'three'
import Experience from '../Experience.js'
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
import moveWizard from '../camAnim/moveWizard.js'
import { animate, timeline } from 'motion'

export class LabelWizard
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

        this.placeName = '#Wizard'
        this.placeHead = 'Rythgard'
        this.placeBody = 'Rythgard is the home of the formidable wizard, Sylvik Tonitruum. The spellcaster is rarely seen outside of his tower. '
        this.setLabelWizard()
        
        
    }

    setLabelWizard()
    {
        
        this.enterSequence = [
            ["#default-tooltip", { opacity: 0 }, { duration: 0.2 }],
            ["#pinwizard", { opacity: 1 }, { duration: .2 }, { at: "-0.2" }],

        ]
        this.leaveSequence = [
            ["#pinwizard", { opacity: 0 }, { duration: .2 },],
            ["#default-tooltip", { opacity: 1 }, { duration: 0.2 }, { at: "-0.2" }],

        ]
        this.defaultToolTip = document.getElementById('default-tooltip')
        this.captionBox = document.getElementById('caption-box')
        this.pinToolTip = document.createElement('div')
        this.pinToolTip.id = "pinwizard"
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
        this.modelname = this.scene.getObjectByName('Wizard_Tower') //insert model name here to place pin
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
            new moveWizard()
        })


      }
  
    

    update() {
        this.labelRenderer.render(this.scene, this.camera.instance)
    }
}