
import 'ol/ol.css';
import { Style} from 'ol/style';
import {Feature} from 'ol/index';
import { Vector as VectorSource} from 'ol/source';
import {Vector as VectorLayer} from 'ol/layer';
import LineString from 'ol/geom/LineString';
import Stroke from 'ol/style/Stroke';

const LineLayer = (coordiantes, next, confiance, colors)=>{
    
    const points = [coordiantes, next]
    var featureLine = new Feature({ geometry: new LineString(points) });
    var sourceLine = new VectorSource({ features: [featureLine] });

    var LineStyle = new Style({
        stroke: new Stroke({
            color: colors[1],
            width: confiance
        }),
    });
    var LineLayer = new VectorLayer({ 
        source: sourceLine,
        style: LineStyle
    });
    return LineLayer;
}

export default  LineLayer;