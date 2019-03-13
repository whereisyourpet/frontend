<template>
<div id="location">
       <div id="chartdiv" style="width: 600px; height: 450px;"></div>
</div>
</template>

<script>
 import "../../../../../build/ammap.js";
  import "../../../../../build/malaysiaLow.js";

export default {
  name: 'location',
  data() {
    return {
      msg: ''
    }
  },
   mounted() {
    console.log(this);
    AmCharts.makeChart("chartdiv",
      // {
      //   "type": "serial",
      //   "categoryField": "type",
      //   "chartCursor": {},
      //   "graphs": [
      //     {
      //       "type": "column",
      //       "title": "Pizza types",
      //       "valueField": "sold",
      //       "fillAlphas": 0.8
      //     }
      //   ],

      //   "dataProvider": [
      //     { "type": "Margherita", "sold": 120 },
      //     { "type": "Funghi", "sold": 82 },
      //     { "type": "Capricciosa", "sold": 78 },
      //     { "type": "Quattro Stagioni", "sold": 71 }
      //   ]
      // }

      {
					"type": "map",
					"pathToImages": "http://www.amcharts.com/lib/3/images/",
					"addClassNames": true,
					"fontSize": 15,
					"color": "#FFFFFF",
					"projection": "mercator",
					"backgroundAlpha": 1,
					"backgroundColor": "rgba(80,80,80,1)",
					"dataProvider": {
						"map": "malaysiaLow",
						"getAreasFromMap": true,
						"images": [
							{
								"top": 40,
								"left": 60,
								"width": 80,
								"height": 40,
								"pixelMapperLogo": true,
							}
						],
						"areas": [
							{
								"id": "MY-01",
								"title": "Johor",
								"color": "rgba(201,194,255,0.8)"
							},
							{
								"id": "MY-02",
								"title": "Kedah",
								"color": "rgba(111,92,255,0.8)"
							},
							{
								"id": "MY-03",
								"title": "Kelantan",
								"color": "rgba(219,214,255,0.8)"
							},
							{
								"id": "MY-04",
								"title": "Melaka",
								"color": "rgba(29,0,245,0.8)"
							},
							{
								"id": "MY-05",
								"title": "Negeri Sembilan",
								"color": "rgba(57,32,255,0.8)"
							},
							{
								"id": "MY-06",
								"title": "Pahang",
								"color": "rgba(237,235,255,0.8)"
							},
							{
								"id": "MY-07",
								"title": "Pulau Pinang",
								"color": "rgba(93,71,255,0.8)"
							},
							{
								"id": "MY-08",
								"title": "Perak",
								"color": "rgba(75,51,255,0.8)"
							},
							{
								"id": "MY-10",
								"title": "Selangor",
								"color": "rgba(183,173,255,0.8)"
							},
							{
								"id": "MY-11",
								"title": "Terengganu",
								"color": "rgba(129,112,255,0.8)"
							},
							{
								"id": "MY-12",
								"title": "Sabah",
								"color": "rgba(147,133,255,0.8)"
							},
							{
								"id": "MY-13",
								"title": "Sarawak",
								"color": "rgba(26,0,224,1)"
							},
							{
								"id": "MY-14",
								"title": "Kuala Lumpur",
								"color": "rgba(165,153,255,0.8)"
							},
							{
								"id": "MY-15",
								"title": "Labuan",
								"color": "rgba(39,10,255,0.8)"
							}
						]
					},
					"balloon": {
						"horizontalPadding": 15,
						"borderAlpha": 0,
						"borderThickness": 1,
						"verticalPadding": 15
					},
					"areasSettings": {
						"color": "rgba(129,129,129,1)",
						"outlineColor": "rgba(80,80,80,1)",
						"rollOverOutlineColor": "rgba(80,80,80,1)",
						"rollOverBrightness": 20,
						"selectedBrightness": 20,
						"selectable": true,
						"unlistedAreasAlpha": 0,
						"unlistedAreasOutlineAlpha": 0
					},
					"imagesSettings": {
						"alpha": 1,
						"color": "rgba(129,129,129,1)",
						"outlineAlpha": 0,
						"rollOverOutlineAlpha": 0,
						"outlineColor": "rgba(80,80,80,1)",
						"rollOverBrightness": 20,
						"selectedBrightness": 20,
						"selectable": true
					},
					"linesSettings": {
						"color": "rgba(129,129,129,1)",
						"selectable": true,
						"rollOverBrightness": 20,
						"selectedBrightness": 20
					},
					"zoomControl": {
						"zoomControlEnabled": true,
						"homeButtonEnabled": false,
						"panControlEnabled": false,
						"right": 38,
						"bottom": 30,
						"minZoomLevel": 0.25,
						"gridHeight": 100,
						"gridAlpha": 0.1,
						"gridBackgroundAlpha": 0,
						"gridColor": "#FFFFFF",
						"draggerAlpha": 1,
						"buttonCornerRadius": 2
					}
				}
    );
  }
}
</script>