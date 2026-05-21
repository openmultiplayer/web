---
title: GetServerVarAsString
sidebar_label: GetServerVarAsString
description: "Obtenha o valor da string de uma variável de servidor."
tags: []
---


:::warning

Esta função, a partir de 0.3.7 R2, está obsoleta. Consulte GetConsoleVarAsString

:::

## Descrição

Obtenha o valor da string de uma variável de servidor.

| Nome | Descrição |
| --------------- | ------------------------------------------------------------ |
| const varname[] | O nome da variável de string da qual obter o valor.         |
| buffer[] | Uma matriz na qual armazenar o valor, passado por referência. |
| len | O comprimento da string que deve ser armazenada.              |

## Retornos

O comprimento da string retornada. 0 se a variável de servidor especificada não for uma string ou não existir.

## Exemplos

```c
public OnGameModeInit()
{
    new hostname[64];
    GetServerVarAsString("hostname", hostname, sizeof(hostname));
    printf("Hostname: %s", hostname);
}
```
## Notas

:::tip

Quando filterscripts ou plugins são especificados como varname, esta função retorna apenas o nome do primeiro filterscript ou plugin especificado. Isso é um bug.

:::

:::tip

Digite 'varlist' no console do servidor para exibir uma lista de variáveis de servidor disponíveis e seus tipos.

:::

:::warning

Usar esta função em qualquer coisa que não seja uma string (int, bool ou float) ou uma variável de servidor inexistente irá travar seu servidor! Isso é um bug.

:::

## Funções Relacionadas

- [GetServerVarAsInt](GetServerVarAsInt): recupera uma variável de servidor como um número inteiro.
- [GetServerVarAsBool](GetServerVarAsBool): recupera uma variável de servidor como um booleano.
