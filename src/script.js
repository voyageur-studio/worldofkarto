import './style.css'
import './css/normalize.css'
import './css/webflow.css'

import Lottie from 'lottie-web'

import Experience from './Experience/Experience.js'
import { Loading } from './Experience/Utils/LoadingScreen.js'

const experience = new Experience(document.getElementById('webgl'));
const startloading = new Loading();




