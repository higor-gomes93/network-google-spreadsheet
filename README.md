# [PT-BR] Grafos em Google Sheets
Este algoritmo tem o intuito de gerar um grafo dentro da própria interface do Google Planilhas, sendo composto por 3 arquivos:
1. dataGenerator.gs: contém as funções `doGet()` e `pegador()`. A função `doGet()` é responsável por obter a saída do script HTML, enquanto a função `pegador()` coleta os dados da planilha para a construção do grafo.
2. printGrafo.gs: contém a função `printGrafo()`, responsável pela renderização da rede dentro de uma dialog box na prórpia UI do Google Sheets.
3. index.html: contém o script HTML responsável pela criação do output, utilizando a biblioteca cytoscape.js para a construção do grafo.

Para testar, basta acessar o link abaixo, criar uma cópia, e clicar no botão "Network". Na primeira vez, serão solicitadas algumas permissões (do prórpio Google). Após concedê-las, basta clicar em "Network" novamente.

Link para a planilha exemplo: https://docs.google.com/spreadsheets/d/1w6DhXZwvRJgbQOXG1anW13ImxLhmGN7TRJQjwzzuSzI/edit#gid=0


# [EN-US] Graphs in Google Sheets
This algorithm is intended to generate a graph within the Google Sheets interface, consisting of 3 files:
1. dataGenerator.gs: contains the `doGet()` and `catcher()` functions. The `doGet()` function is responsible for getting the output of the HTML script, while the `catcher()` function collects the data from the spreadsheet for the construction of the graph.
2. printGrafo.gs: contains the `printGrafo()` function, responsible for rendering the network inside a dialog box in the Google Sheets UI.
3. index.html: contains the HTML script responsible for creating the output, using the cytoscape.js library to build the graph.

To try it out, just go to the link below, create a copy, and click on the "Network" button. The first time, you will be asked for some permissions (from Google itself). After granting them, just click on "Network" again.

Link to example spreadsheet: https://docs.google.com/spreadsheets/d/1w6DhXZwvRJgbQOXG1anW13ImxLhmGN7TRJQjwzzuSzI/edit#gid=0
