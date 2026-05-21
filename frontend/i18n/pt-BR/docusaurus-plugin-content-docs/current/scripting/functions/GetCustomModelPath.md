---
title: GetCustomModelPath
sidebar_label: GetCustomModelPath
description: "Obtenha um caminho de modelo personalizado."
tags: ["custom model", "custom skin", "simple model"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha um caminho de modelo personalizado.

| Nome | Descrição |
| --------- | --------------------------------------------------------------- |
| modelid | O ID do modelo personalizado do qual obter o caminho.                           |
| dffPath[] | Uma matriz na qual armazenar o dffPath, passada por referência. |
| dffSize | O comprimento do dffPath que deve ser armazenado.                |
| txdPath[] | Uma matriz na qual armazenar o txdPath, passado por referência. |
| txdSize | O comprimento do txdPath que deve ser armazenado.                |

## Exemplos

```c
new
    modelid = -2000,
    dffPath[64],
    txdPath[64];

GetCustomModelPath(modelid, dffPath, sizeof(dffPath), txdPath, sizeof(txdPath));

printf("[Custom model id %d path]\n\
    dff: %s\n\
    txd: %s",
    modelid, dffPath, txdPath);
```
## Funções Relacionadas

- [AddSimpleModel](AddSimpleModel): Adiciona um novo modelo de objeto simples personalizado.
- [AddSimpleModelTimed](AddSimpleModelTimed): Adiciona um novo modelo de objeto simples personalizado.
- [IsValidCustomModel](IsValidCustomModel): Verifica se um modelo customizado ID é válido.
