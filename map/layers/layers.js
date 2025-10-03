var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'BaseMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_InfoPoints_1 = new ol.format.GeoJSON();
var features_InfoPoints_1 = format_InfoPoints_1.readFeatures(json_InfoPoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfoPoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfoPoints_1.addFeatures(features_InfoPoints_1);
var lyr_InfoPoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfoPoints_1, 
                style: style_InfoPoints_1,
                popuplayertitle: 'Info Points',
                interactive: true,
                title: '<img src="styles/legend/InfoPoints_1.png" /> Info Points'
            });

lyr_BaseMap_0.setVisible(true);lyr_InfoPoints_1.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_InfoPoints_1];
lyr_InfoPoints_1.set('fieldAliases', {'Title': 'Title', 'Content': 'Content', 'Image': 'Image', });
lyr_InfoPoints_1.set('fieldImages', {'Title': 'TextEdit', 'Content': 'TextEdit', 'Image': 'TextEdit', });
lyr_InfoPoints_1.set('fieldLabels', {'Title': 'header label - always visible', 'Content': 'inline label - always visible', 'Image': 'inline label - always visible', });
lyr_InfoPoints_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});