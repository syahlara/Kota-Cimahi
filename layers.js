var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KelurahanCimahi_1 = new ol.format.GeoJSON();
var features_KelurahanCimahi_1 = format_KelurahanCimahi_1.readFeatures(json_KelurahanCimahi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelurahanCimahi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanCimahi_1.addFeatures(features_KelurahanCimahi_1);
var lyr_KelurahanCimahi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanCimahi_1, 
                style: style_KelurahanCimahi_1,
                popuplayertitle: "Kelurahan Cimahi",
                interactive: true,
                title: '<img src="styles/legend/KelurahanCimahi_1.png" /> Kelurahan Cimahi'
            });
var format_KecCimahi_2 = new ol.format.GeoJSON();
var features_KecCimahi_2 = format_KecCimahi_2.readFeatures(json_KecCimahi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecCimahi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecCimahi_2.addFeatures(features_KecCimahi_2);
var lyr_KecCimahi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecCimahi_2, 
                style: style_KecCimahi_2,
                popuplayertitle: "Kec Cimahi",
                interactive: true,
                title: '<img src="styles/legend/KecCimahi_2.png" /> Kec Cimahi'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KelurahanCimahi_1.setVisible(true);lyr_KecCimahi_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KelurahanCimahi_1,lyr_KecCimahi_2];
lyr_KelurahanCimahi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_KecCimahi_2.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'SUMBER': 'SUMBER', 'Data DBD Kec Cimahi. 2023_LAKI-LAKI': 'Data DBD Kec Cimahi. 2023_LAKI-LAKI', 'Data DBD Kec Cimahi. 2023_PEREMPUAN': 'Data DBD Kec Cimahi. 2023_PEREMPUAN', 'Data DBD Kec Cimahi. 2023_TOTAL': 'Data DBD Kec Cimahi. 2023_TOTAL', });
lyr_KelurahanCimahi_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_KecCimahi_2.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'SUMBER': '', 'Data DBD Kec Cimahi. 2023_LAKI-LAKI': 'Range', 'Data DBD Kec Cimahi. 2023_PEREMPUAN': 'Range', 'Data DBD Kec Cimahi. 2023_TOTAL': 'Range', });
lyr_KelurahanCimahi_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_KecCimahi_2.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'SUMBER': 'no label', 'Data DBD Kec Cimahi. 2023_LAKI-LAKI': 'no label', 'Data DBD Kec Cimahi. 2023_PEREMPUAN': 'no label', 'Data DBD Kec Cimahi. 2023_TOTAL': 'no label', });
lyr_KecCimahi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});