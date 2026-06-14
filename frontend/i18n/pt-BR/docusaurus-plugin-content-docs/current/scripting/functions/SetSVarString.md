---
title: SetSVarString
sidebar_label: SetSVarString
description: "Defina uma variável de servidor de string."
tags: ["server variable", "svar"]
---


<VersionWarn version='SA-MP 0.3.7 R2' />

## Descrição

Defina uma variável de servidor de string.

| Nome | Descrição |
| ---------------- | ------------------------------------------ |
| const svar[] | O nome da variável do servidor.           |
| const value[] | A string a ser definida.                      |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O nome da variável é nulo ou tem mais de 40 caracteres.

## Exemplos

```c
// definir "Version"
SetSVarString("Version", "0.3.7");

// imprimirá a versão que o servidor possui
new string[5 + 1];
GetSVarString("Version", string, sizeof(string));
printf("Version: %s", string);
```
## Funções Relacionadas

- [SetSVarInt](SetSVarInt): Defina um número inteiro para uma variável do servidor.
- [GetSVarInt](GetSVarInt): Obtenha um servidor de jogador como um número inteiro.
- [GetSVarString](GetSVarString): Obtenha a string definida anteriormente de uma variável do servidor.
- [SetSVarFloat](SetSVarFloat): Defina um ponto flutuante para uma variável do servidor.
- [GetSVarFloat](GetSVarFloat): Obtenha o float definido anteriormente de uma variável do servidor.
- [DeleteSVar](DeleteSVar): Exclua uma variável de servidor.
