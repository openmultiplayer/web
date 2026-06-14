---
title: GetPVarsUpperIndex
sidebar_label: GetPVarsUpperIndex
description: "Cada PVar (variável do jogador) possui seu próprio número de identificação exclusivo para pesquisa, esta função retorna o conjunto ID mais alto para um jogador."
tags: ["player variable", "pvar"]
---


## Descrição

Cada PVar (variável do jogador) possui seu próprio número de identificação exclusivo para pesquisa, esta função retorna o conjunto ID mais alto para um jogador.

| Nome | Descrição |
| -------- | ---------------------------------------------------- |
| playerid | O ID do jogador para obter o índice PVar superior. |

## Retornos

O conjunto mais alto PVar ID.

## Exemplos

```c
// Armazene o índice superior na variável 'PVarUpperIndex' + 1
new PVarUpperIndex = GetPVarsUpperIndex(playerid) + 1;

// Esta variável pVarCount armazenará quantos pVars um jogador definiu enquanto os contamos.
new pVarCount;

new pVarName[128];

for(new i = 0; i != PVarUpperIndex; i++) // Percorra todos os IDs pVar no índice superior
{
    // Primeiramente, precisamos obter o nome do PVar
    GetPVarNameAtIndex(playerid, i, pVarName, sizeof(pVarName));

    // Se var estiver definido (tipo diferente de 0), aumente pVarCount.
    if (GetPVarType(playerid, pVarName) != 0)
    {
        pVarCount++;
    }
}

new szString[128];
format(szString, sizeof(szString), "You have %i player-variables set. Upper index (highest ID): %i.", pVarCount, PVarUpperIndex-1);
SendClientMessage(playerid, -1, szString);
```
## Funções Relacionadas

- [GetPVarNameAtIndex](GetPVarNameAtIndex): Obtenha o nome da variável do jogador em seu índice.
- [GetPVarType](GetPVarType): Obtenha o tipo da variável do jogador.
