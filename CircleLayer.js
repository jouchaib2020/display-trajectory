
import 'ol/ol.css';
import {Circle, Fill, Style} from 'ol/style';
import {Feature} from 'ol/index';
import { Vector as VectorSource} from 'ol/source';
import {Point} from 'ol/geom';
import {Vector as VectorLayer} from 'ol/layer';

const CircleLayer = (coordiantes, colors)=>{
    const place = [coordiantes[0], coordiantes[1]];
    const point = new Point(place);
    var featurePoint = new Feature(point);
    var sourcePoint = new VectorSource({ features: [featurePoint]});

    var CircleImage = new Circle({
        radius: 4,
        fill: new Fill({color: colors[0]})
    })
    var CircleStyle = new Style({ image: CircleImage}); 

    var CircleLayer = new VectorLayer({
        source: sourcePoint,
        style: CircleStyle
    });
    return CircleLayer;
}

export default  CircleLayer;