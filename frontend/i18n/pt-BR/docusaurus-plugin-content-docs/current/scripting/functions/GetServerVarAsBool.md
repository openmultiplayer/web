---
title: GetServerVarAsBool
sidebar_label: GetServerVarAsBool
description: "Obtenha o valor booleano de uma variável de servidor."
tags: []
---


:::warning

Esta função, a partir de 0.3.7 R2, está obsoleta. Consulte GetConsoleVarAsBool

:::

## Descrição

Obtenha o valor booleano de uma variável de servidor.

| Nome | Descrição |
| --------------- | ----------------------------------------------------- |
| const varname[] | O nome da variável booleana da qual obter o valor. |

## Retornos

O valor da variável de servidor especificada. 0 se a variável de servidor especificada não for booleana ou não existir.

## Exemplos

```c
public OnGameModeInit()
{
    new queryEnabled = GetServerVarAsBool("query");
    if (!queryEnabled)
    {
        print("WARNING: Querying is disabled. The server will appear offline in the server browser.");
    }
    return 1;
}
```
## Notas

:::tip

Digite 'varlist' no console do servidor para exibir uma lista de variáveis de servidor disponíveis e seus tipos.

:::

## Funções Relacionadas

- [GetServerVarAsString](GetServerVarAsString): recupera uma variável de servidor como uma string.
- [GetServerVarAsInt](GetServerVarAsInt): recupera uma variável de servidor como um número inteiro.
