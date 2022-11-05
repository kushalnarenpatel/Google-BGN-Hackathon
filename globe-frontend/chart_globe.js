//var name_c = ''
am5.ready(function() {
// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
    am5themes_Animated.new(root),
]);


// Create the map chart
// https://www.amcharts.com/docs/v5/charts/map-chart/
var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "rotateX",
    panY: "rotateY",
    projection: am5map.geoOrthographic(),
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
}));


// Create main polygon series for countries
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow 
}));

polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    toggleKey: "active",
    interactive: true,
    fill: am5.color(0xFF5F1F) //country colour
});

polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color(0xFFBF00)
});

polygonSeries.mapPolygons.template.states.create("active", {
    fill: am5.color(0xFFBF00)
});


var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
backgroundSeries.mapPolygons.template.setAll({
  fill: am5.color(0xFF5F1F) ,
  fillOpacity: 0.4,
  strokeOpacity: 0,
  shadowColor: am5.color(0xFF5F1F),
  shadowBlur: 90,
  shadowOffsetX: 30,
  shadowOffsetY: 30,
  shadowOpacity: 0.8
});
backgroundSeries.data.push({
  geometry: am5map.getGeoRectangle(90, 180, -90, -180)
});

polygonSeries.mapPolygons.template.events.on("click", function(ev) {
    nm = ev.target.dataItem.dataContext.name
    url = `http://localhost:3000/${nm}`
    setTimeout(function(){
        window.location.replace(url);
    },2000)
});

// polygonSeries.mapPolygons.template.events.on("click", function(ev) {
//     polygonSeries.zoomToDataItem(ev.target.dataItem);
// });

// Set up events
    var previousPolygon;

polygonSeries.mapPolygons.template.on("active", function (active, target) {
    if (previousPolygon && previousPolygon != target) {
    previousPolygon.set("active", false);
    }
    if (target.get("active")) {
    var centroid = target.geoCentroid();
    if (centroid) {
        chart.animate({ key: "rotationX", to: -centroid.longitude, duration: 1500, easing: am5.ease.inOut(am5.ease.cubic) });
        chart.animate({ key: "rotationY", to: -centroid.latitude, duration:1500, easing: am5.ease.inOut(am5.ease.cubic) });
    }
    }
    previousPolygon = target;
});


// Make stuff animate on load
chart.appear(1, 0);
return

}); // end am5.ready()
