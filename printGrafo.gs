function printGrafo() {
  var html = HtmlService.createHtmlOutputFromFile('index').setHeight(1080).setWidth(1500);
  var nome = "LesMis Network";
  SpreadsheetApp.getUi().showModelessDialog(html, nome);
}
