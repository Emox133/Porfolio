import './../sass/main.scss'
import {displayMap} from './../js/app/utils/mapbox'
import './app/components/switchPanel'

function requireAll(r) {
  r.keys().forEach(r);
}

window.addEventListener('load', () => {
  displayMap()
  requireAll(require.context('./../assets/icons', true, /\.svg$/));
})

