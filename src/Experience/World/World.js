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
import Trees from './modelscripts/Trees.js'


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
            
            this.fox = new Fox()
            this.land = new Land()
            this.lighthouse = new Lighthouse()
            this.lighthouselight = new LighthouseLight()
            this.darkspeare = new Darkspeare()
            this.crossroads = new Crossroads()
            this.midfair = new Midfair()
            this.windmill = new Windmill()
            this.trees = new Trees()
            this.environment = new Environment()
        })
    }

    update()
    {
        if(this.fox)
            this.fox.update()
        if (this.lighthouselight)
            this.lighthouselight.update()
        if (this.windmill)
            this.windmill.update()
    }
    
    
}