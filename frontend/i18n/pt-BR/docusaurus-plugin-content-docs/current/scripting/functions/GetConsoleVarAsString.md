---
title: GetConsoleVarAsString
sidebar_label: GetConsoleVarAsString
description: "Obtenha o valor da string de uma variável de console."
tags: []
---


## Descrição

Obtenha o valor da string de uma variável de console.

| Nome | Descrição |
| --------------------- | ------------------------------------------------------------ |
| const cvar[] | O nome da variável de string da qual obter o valor.         |
| buffer[] | Uma matriz na qual armazenar o valor, passado por referência. |
| len = sizeof (buffer) | O comprimento da string que deve ser armazenada.              |

## Retornos

O comprimento da string retornada.

0 se a variável de console especificada não for uma string ou não existir.

## Exemplos

```c
public OnGameModeInit()
{
    new hostname[64];
    GetConsoleVarAsString("hostname", hostname, sizeof(hostname));
    printf("Hostname: %s", hostname);
}
```
## Notas

:::tip

Quando filterscripts ou plugins são especificados como varname, esta função retorna apenas o nome do primeiro filterscript ou plugin especificado.

:::

:::tip

Digite 'varlist' no console do servidor para exibir uma lista de variáveis de console disponíveis e seus tipos.

:::

:::warning

- Usar esta função com qualquer coisa que não seja uma string (inteira, booleana ou flutuante) fará com que seu servidor trave. (Corrigido em open.mp)
- Usá-lo com uma variável de console inexistente também fará com que seu servidor trave. (Corrigido em open.mp)

:::

## Funções Relacionadas

- [GetConsoleVarAsInt](GetConsoleVarAsInt): recupera uma variável de servidor como um número inteiro.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): recupera uma variável de servidor como um booleano.
