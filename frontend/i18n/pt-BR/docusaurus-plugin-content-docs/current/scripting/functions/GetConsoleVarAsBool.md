---
title: GetConsoleVarAsBool
sidebar_label: GetConsoleVarAsBool
description: "Obtenha o valor booleano de uma variável de console."
tags: []
---


## Descrição

Obtenha o valor booleano de uma variável de console.

| Nome | Descrição |
| ------------ | ----------------------------------------------------- |
| const cvar[] | O nome da variável booleana da qual obter o valor. |

## Retornos

O valor da variável de console especificada. 0 se a variável de console especificada não for booleana ou não existir.

## Exemplos

```c
public OnGameModeInit()
{
    new queryEnabled = GetConsoleVarAsBool("enable_query");
    if (!queryEnabled)
    {
        print("WARNING: Querying is disabled. The server will appear offline in the server browser.");
    }
    return 1;
}
```
## Notas

:::tip

Digite 'varlist' no console do servidor para exibir uma lista de variáveis de console disponíveis e seus tipos.

:::

## Funções Relacionadas

- [GetConsoleVarAsString](GetConsoleVarAsString): recupera uma variável de servidor como uma string.
- [GetConsoleVarAsInt](GetConsoleVarAsInt): recupera uma variável de servidor como um número inteiro.
