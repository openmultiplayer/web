---
title: GetSVarsUpperIndex
sidebar_label: GetSVarsUpperIndex
description: "Cada SVar (variável de servidor) possui seu próprio número de identificação exclusivo para pesquisa, esta função retorna o ID mais alto."
tags: ["server variable", "svar"]
---


## Descrição

Cada SVar (variável de servidor) possui seu próprio número de identificação exclusivo para pesquisa, esta função retorna o ID mais alto.

## Exemplos

```c
// Armazene o índice superior na variável 'SVarUpperIndex' + 1
new SVarUpperIndex = GetSVarsUpperIndex() + 1;

// Esta variável sVarCount armazenará quantos sVars são definidos à medida que os contamos.
new sVarCount;

new sVarName[128];

for(new i = 0; i != sVarUpperIndex; i++) // Percorra todos os IDs sVar no índice superior
{
    // Primeiramente, precisamos obter o nome SVar
    GetSVarNameAtIndex(i, sVarName, sizeof(sVarName));

    // Se var estiver definido (tipo diferente de 0), aumente sVarCount.
    if (GetSVarType(sVarName) != 0)
    {
        sVarCount ++;
    }
}

printf("There are %i server-variables set. Upper index (highest ID): %i.", sVarCount, SVarUpperIndex-1);
```
## Funções Relacionadas

- [GetSVarNameAtIndex](GetSVarNameAtIndex): Obtenha o nome da variável do servidor a partir de seu índice.
- [GetSVarType](GetSVarType): Obtenha o tipo da variável do servidor.
