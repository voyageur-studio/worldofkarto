import Experience from '../Experience.js'
import Environment from './Environment.js'
import Lighthouse from './modelscripts/Lighthouse.js'
import LighthouseLight from './modelscripts/Lighthouse_light.js'
import Fox from './modelscripts/Fox.js'
import Land from './modelscripts/Land.js'
import Darkspeare from './modelscripts/Darkspeare.js'
import Crossroads from './modelscripts/Crossroads.js'
import Midfair from './modelscripts/Midfair.js'
import Windmill from './modelscripts/Windmill.js'
import Gargadok from './modelscripts/Gargadok.js'
import Beerbog from './modelscripts/Beerbog.js'

import Trees from './modelscripts/Trees.js'
import Moonvale from './modelscripts/Moonvale.js'
import ShipsRest from './modelscripts/ShipsRest.js'
import Wizard from './modelscripts/Wizard.js'
import {LabelRenderer} from '../LabelRenderer.js'
import Graelon from './modelscripts/Graelon.js'
import Blackwater from './modelscripts/Blackwater.js'


export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            
            //this.fox = new Fox()
            this.land = new Land()
            this.lighthouse = new Lighthouse()
            this.lighthouselight = new LighthouseLight()
            this.darkspeare = new Darkspeare()
            this.crossroads = new Crossroads()
            this.midfair = new Midfair()
            this.windmill = new Windmill()
            this.gargadok = new Gargadok()
            this.beerbog = new Beerbog()
            this.trees = new Trees()
            this.moonvale = new Moonvale()
            this.shipsrest = new ShipsRest()
            this.wizard = new Wizard()
            this.graelon = new Graelon()
            this.blackwater = new Blackwater()
            this.environment = new Environment()
            this.label = new LabelRenderer()
        })
    }

    update()
    {
        /* if(this.fox)
            this.fox.update() */
        if (this.lighthouselight)
            this.lighthouselight.update()
        if (this.windmill)
            this.windmill.update()
        if (this.gargadok)
            this.gargadok.update()
        if (this.wizard)
            this.wizard.update()
        if (this.label)
            this.label.update()
    }
    
    
}