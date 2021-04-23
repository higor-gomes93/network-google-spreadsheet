# Grafos em Google Sheets
Este algoritmo tem o intuito de gerar um grafo dentro da própria interface do Google Planilhas, sendo composto por 3 arquivos:
1. dataGenerator.gs: contém as funções `doGet()` e `pegador()`. A função `doGet()` é responsável por obter a saída do script HTML, enquanto a função `pegador()` coleta os dados da planilha para a construção do grafo.
2. printGrafo.gs: contém a função `printGrafo()`, responsável pela renderização da rede dentro de uma dialog box na prórpia UI do Google Sheets.
3. index.html: contém o script HTML responsável pela criação do output, utilizando a biblioteca cytoscape.js para a construção do grafo.
