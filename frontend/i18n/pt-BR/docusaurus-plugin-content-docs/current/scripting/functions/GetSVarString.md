---
title: GetSVarString
sidebar_label: GetSVarString
description: "Obtém o valor de uma variável de servidor de string."
tags: ["server variable", "svar"]
---


<VersionWarn version='SA-MP 0.3.7 R2' />

## Descrição

Obtém o valor de uma variável de servidor de string.

| Nome | Descrição |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| const svar[] | O nome da variável do servidor (sem distinção entre maiúsculas e minúsculas).<br />Definida em [SetSVarString](SetSVarString). |
| output[] | A matriz na qual armazenar o valor da string, passada por referência.                                |
| len = sizeof (output) | O comprimento máximo da string retornada.                                                           |

## Retornos

O comprimento da string.

## Exemplos

```c
// definir "Versão"
SetSVarString("Version", "0.3.7");

// imprimirá a versão que o servidor possui
new string[5 + 1];
GetSVarString("Version", string, sizeof(string));
printf("Version: %s", string);
```
## Funções Relacionadas

- [SetSVarInt](SetSVarInt): Defina um número inteiro para uma variável do servidor.
- [GetSVarInt](GetSVarInt): Obtenha um servidor de jogador como um número inteiro.
- [SetSVarString](SetSVarString): Defina uma string para uma variável de servidor.
- [SetSVarFloat](SetSVarFloat): Defina um ponto flutuante para uma variável do servidor.
- [GetSVarFloat](GetSVarFloat): Obtenha o float definido anteriormente de uma variável do servidor.
- [DeleteSVar](DeleteSVar): Exclua uma variável de servidor.
