import { decode, encode} from "@googlemaps/polyline-codec";


const decode_polyline = (polyline) => {

    const encodedPolyline = polyline;
    // console.log(decode(encodedPolyline,5));

    return decode(encodedPolyline, 5);
};

export default decode_polyline;
