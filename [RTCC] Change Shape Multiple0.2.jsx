var selectedLayers = getSelectedLayers(app.activeDocument);

var newWidth = prompt("New width Size:" ,"");
var newHeight = prompt("New height Size" ,"");

var layer = activeDocument.activeLayer; //Grab the currently selected layer

for (i = 0; i < selectedLayers.length; i++){
    resizeLayer();
}

function resizeLayer(){
    
    // Calculate height and width based on the rectangular bounds of the selected layer
    var height = selectedLayers[i].bounds[3]-selectedLayers[i].bounds[1]; //Grab the width
    var width = selectedLayers[i].bounds[2]-selectedLayers[i].bounds[0]; //Grab the height

    var differenceWidthpercent = ((newWidth - width)/width * 100 ) * -1; //calculate the difference of width by percent
    var differenceHeightpercent = ((newHeight - height)/height * 100 ) * -1; //calculate the difference of height by percent

    var totalnewWidth = 100 + differenceWidthpercent; //define width difference increase
    var totalnewHeight = 100 + differenceHeightpercent; //define height difference increase

    selectedLayers[i].resize(totalnewWidth, totalnewHeight, AnchorPosition.TOPLEFT); //apply.
}


function getSelectedLayers(){
  var resultLayers=new Array();
  try{
    var idGrp = stringIDToTypeID( "groupLayersEvent" );
    var descGrp = new ActionDescriptor();
    var refGrp = new ActionReference();
    refGrp.putEnumerated(charIDToTypeID( "Lyr " ),charIDToTypeID( "Ordn" ),charIDToTypeID( "Trgt" ));
    descGrp.putReference(charIDToTypeID( "null" ), refGrp );
    executeAction( idGrp, descGrp, DialogModes.NO );
    for (var ix=0;ix<app.activeDocument.activeLayer.layers.length;ix++){resultLayers.push(app.activeDocument.activeLayer.layers[ix])}
    var id8 = charIDToTypeID( "slct" );
    var desc5 = new ActionDescriptor();
    var id9 = charIDToTypeID( "null" );
    var ref2 = new ActionReference();
    var id10 = charIDToTypeID( "HstS" );
    var id11 = charIDToTypeID( "Ordn" );
    var id12 = charIDToTypeID( "Prvs" );
    ref2.putEnumerated( id10, id11, id12 );
    desc5.putReference( id9, ref2 );
    executeAction( id8, desc5, DialogModes.NO );
  } catch (err) { }
  return resultLayers;
}   