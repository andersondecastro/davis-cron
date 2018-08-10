import davisNetwork from '../entity/davis/DavisNetwork.mjs'
import DavisModel from '../entity/davis/DavisModel.mjs'

import xpath from 'xpath'
import xmldom from 'xmldom'

export default class DavisCrawler {
    async execute() {
        try {

            let davisUrl = 'http://www.weatherlink.com/user/fazendaestrela/index.php?view=summary&headers=0'
            
            const options = {
                url: davisUrl,
                timeout: 20000
            }

            const weatherLinkHTML = await davisNetwork.requestWeatherlinkData(options)
            this.getDavisObjectFromResponse(weatherLinkHTML.data)
                .then( (result) => {
                    result.platformId = '5b6ca643b4bb778436101023'
                    result.propertyId = '1234'
                    davisNetwork.sendWeatherLinkData(result)
                    console.log(result)
                })
                .catch( (err) => {
                    throw new Error(err)
                })

        } catch (err) {
            console.log(err)
        }
    }

    getDavisObjectFromResponse(body){

        return new Promise( (resolve, reject) => {
        let dom = xmldom.DOMParser
        var xml = body;
        var doc = new dom().parseFromString(xml);
        console.log("Parsing...");
        try{
            var nodes = xpath.select("//table/tr/td/table/tr/td/table/tr/td", doc);
            var i = 0;
            var davisModel = DavisModel;

            for(i = 0; i < nodes.length; i++){
                // console.log(nodes[i].firstChild.data);
                var value = nodes[i].firstChild.data;
                if(value === "Outside Temp"){
                    // console.log(value);
                    davisModel.outside_temperature.current = nodes[i+1].firstChild.data.split(" ")[0];
                    davisModel.outside_temperature.high = nodes[i+2].firstChild.data.split(" ")[0];
                    davisModel.outside_temperature.high_time = nodes[i+3].firstChild.data;
                    davisModel.outside_temperature.lows = nodes[i+4].firstChild.data.split(" ")[0];
                    davisModel.outside_temperature.lows_time = nodes[i+5].firstChild.data;
                }
                if(value === "Inside Temp"){
                    // console.log(value);
                    davisModel.inside_temperature.current = nodes[i+1].firstChild.data.split(" ")[0];
                    davisModel.inside_temperature.high = nodes[i+2].firstChild.data.split(" ")[0];
                    davisModel.inside_temperature.high_time = nodes[i+3].firstChild.data;
                    davisModel.inside_temperature.lows = nodes[i+4].firstChild.data.split(" ")[0];
                    davisModel.inside_temperature.lows_time = nodes[i+5].firstChild.data;
                }
                if(value === "Outside Humidity"){
                    // console.log(value);
                    davisModel.outside_humidity.current = nodes[i+1].firstChild.data.split("%")[0];
                    davisModel.outside_humidity.high = nodes[i+2].firstChild.data.split("%")[0];
                    davisModel.outside_humidity.high_time = nodes[i+3].firstChild.data;
                    davisModel.outside_humidity.lows = nodes[i+4].firstChild.data.split("%")[0];
                    davisModel.outside_humidity.lows_time = nodes[i+5].firstChild.data;
                }
                if(value === "Inside Humidity"){
                    // console.log(value);
                    davisModel.inside_humidity.current = nodes[i+1].firstChild.data.split("%")[0];
                    davisModel.inside_humidity.high = nodes[i+2].firstChild.data.split("%")[0];
                    davisModel.inside_humidity.high_time = nodes[i+3].firstChild.data;
                    davisModel.inside_humidity.lows = nodes[i+4].firstChild.data.split("%")[0];
                    davisModel.inside_humidity.lows_time = nodes[i+5].firstChild.data;
                }
                if(value === "Barometer"){
                    // console.log(value);
                    davisModel.barometer.current = nodes[i+1].firstChild.data.split("hPa")[0];
                    davisModel.barometer.high = nodes[i+2].firstChild.data.split("hPa")[0];
                    davisModel.barometer.high_time = nodes[i+3].firstChild.data;
                    davisModel.barometer.lows = nodes[i+4].firstChild.data.split("hPa")[0];
                    davisModel.barometer.lows_time = nodes[i+5].firstChild.data;
                }
                if(value === "Wind Speed"){
                    // console.log(value);
                    davisModel.wind_speed.current = nodes[i+1].firstChild.data;
                    davisModel.wind_speed.high = nodes[i+2].firstChild.data.split(" ")[0];
                    davisModel.wind_speed.high_time = nodes[i+3].firstChild.data;
                }
                if(value === "Rain"){
                    // console.log(value);
                    davisModel.rain.rate = nodes[i+1].firstChild.data.split("mm/")[0];
                    davisModel.rain.day = nodes[i+2].firstChild.data.split("mm")[0];
                    davisModel.rain.storm = nodes[i+3].firstChild.data.split("mm")[0];
                    davisModel.rain.month = nodes[i+4].firstChild.data.split("mm")[0];
                    davisModel.rain.year = nodes[i+5].firstChild.data.split("mm")[0];
                }
                if(value === "Last Hour Rain"){
                    // console.log(value);
                    davisModel.last_hour_rain.rate = nodes[i+1].firstChild.data.split("mm")[0];
                }
                if(value === "Soil Temp 1"){
                    // console.log(value);
                    davisModel.soil_temperature_1.current = nodes[i+1].firstChild.data.split(" ")[0];
                    davisModel.soil_temperature_1.high = nodes[i+2].firstChild.data.split(" ")[0];
                    davisModel.soil_temperature_1.high_time = nodes[i+3].firstChild.data;
                    davisModel.soil_temperature_1.lows = nodes[i+4].firstChild.data.split(" ")[0];
                    davisModel.soil_temperature_1.lows_time = nodes[i+5].firstChild.data;
                }
                if(value === "Soil Temp 2"){
                    // console.log(value);
                    davisModel.soil_temperature_2.current = nodes[i+1].firstChild.data.split(" ")[0];
                    davisModel.soil_temperature_2.high = nodes[i+2].firstChild.data.split(" ")[0];
                    davisModel.soil_temperature_2.high_time = nodes[i+3].firstChild.data;
                    davisModel.soil_temperature_2.lows = nodes[i+4].firstChild.data.split(" ")[0];
                    davisModel.soil_temperature_2.lows_time = nodes[i+5].firstChild.data;
                }
                if(value === "Soil Temp 3"){
                    // console.log(value);
                    davisModel.soil_temperature_3.current = nodes[i+1].firstChild.data.split(" ")[0];
                    davisModel.soil_temperature_3.high = nodes[i+2].firstChild.data.split(" ")[0];
                    davisModel.soil_temperature_3.high_time = nodes[i+3].firstChild.data;
                    davisModel.soil_temperature_3.lows = nodes[i+4].firstChild.data.split(" ")[0];
                    davisModel.soil_temperature_3.lows_time = nodes[i+5].firstChild.data;
                }
                if(value === "Soil Moisture 1"){
                    // console.log(value);
                    davisModel.soil_moisture_1.current = nodes[i+1].firstChild.data.split(" ")[0];
                    davisModel.soil_moisture_1.high = nodes[i+2].firstChild.data.split(" ")[0];
                    davisModel.soil_moisture_1.high_time = nodes[i+3].firstChild.data;
                    davisModel.soil_moisture_1.lows = nodes[i+4].firstChild.data.split(" ")[0];
                    davisModel.soil_moisture_1.lows_time = nodes[i+5].firstChild.data;
                }
                if(value === "Soil Moisture 2"){
                    // console.log(value);
                    davisModel.soil_moisture_2.current = nodes[i+1].firstChild.data.split(" ")[0];
                    davisModel.soil_moisture_2.high = nodes[i+2].firstChild.data.split(" ")[0];
                    davisModel.soil_moisture_2.high_time = nodes[i+3].firstChild.data;
                    davisModel.soil_moisture_2.lows = nodes[i+4].firstChild.data.split(" ")[0];
                    davisModel.soil_moisture_2.lows_time = nodes[i+5].firstChild.data;
                }
                if(value === "Soil Moisture 3"){
                    // console.log(value);
                    davisModel.soil_moisture_3.current = nodes[i+1].firstChild.data.split(" ")[0];
                    davisModel.soil_moisture_3.high = nodes[i+2].firstChild.data.split(" ")[0];
                    davisModel.soil_moisture_3.high_time = nodes[i+3].firstChild.data;
                    davisModel.soil_moisture_3.lows = nodes[i+4].firstChild.data.split(" ")[0];
                    davisModel.soil_moisture_3.lows_time = nodes[i+5].firstChild.data;
                }
            }
            davisModel.createdAt = new Date();
            resolve(davisModel)
            }catch(e){
                reject(new Error(e))
            }
        })
    }
}
