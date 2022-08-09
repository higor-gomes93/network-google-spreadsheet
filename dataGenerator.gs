function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function pegador(){
  // Definição das colunas com os dados
  const elements = [];
  const nodeId = SpreadsheetApp.getActive().getSheetByName("Dataset").getRange(3, 1, 77, 1).getValues();
  const nodeColor = SpreadsheetApp.getActive().getSheetByName("Dataset").getRange(3, 2, 77, 1).getValues();
  const nodeSize = SpreadsheetApp.getActive().getSheetByName("Dataset").getRange(3, 3, 77, 1).getValues();
  const nodeFont = SpreadsheetApp.getActive().getSheetByName("Dataset").getRange(3, 4, 77, 1).getValues();
  const edgeSource = SpreadsheetApp.getActive().getSheetByName("Dataset").getRange(3, 6, 254, 1).getValues();
  const edgeTarget = SpreadsheetApp.getActive().getSheetByName("Dataset").getRange(3, 7, 254, 1).getValues();
  const edgeWeight = SpreadsheetApp.getActive().getSheetByName("Dataset").getRange(3, 8, 254, 1).getValues();

  // Escrevendo os nós
  for(let i = 0; i < 77; i++){
    let node = { data: { id: nodeId[i][0] }, style: {'background-color': nodeColor[i][0], 'width': nodeSize[i][0], 'height': nodeSize[i][0], 'background-opacity': 0.5, 'font-size': nodeFont[i][0]} };
    elements.push(node);
  } 

  // Escrevendo os vértices
  for(let i = 0; i < 254; i++){
    let edge = { data: { id: i, source: edgeSource[i][0], target: edgeTarget[i][0]}, style: {'line-opacity': edgeWeight[i][0]}};
    elements.push(edge);
  }


  // Convertendo para json
  var dataFinal = JSON.stringify(elements);
  var jsonData = JSON.parse(dataFinal);

  return jsonData;
}
