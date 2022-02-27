import CircleLayer from "./CircleLayer";
import LineLayer from "./LineLayer";

const getLayers = (trajectory, colors)=>{
    const circles = [];
    const lines = [];
    for(var i=0; i<trajectory.length-1;i++ ){
        var coordinates = [trajectory[i]['lng'], trajectory[i]['lat']];
        var next = [trajectory[i+1]['lng'], trajectory[i+1]['lat']];
        var confiance = trajectory[i]['confiance']/30;

        var circle = CircleLayer(coordinates, colors);
        var line = LineLayer(coordinates, next, confiance, colors);

        circles.push(circle);
        lines.push(line);
    }
    return [circles, lines];
}
export default getLayers;