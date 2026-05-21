---
title: GetSVarFloat
sidebar_label: GetSVarFloat
description: "Obtém o valor de uma variável de servidor flutuante."
tags: ["server variable", "svar"]
---


<VersionWarn version='SA-MP 0.3.7 R2' />

## Descrição

Obtém o valor de uma variável de servidor flutuante.

| Nome | Descrição |
| ------------ | -------------------------------------------------------------------------------------------------- |
| const svar[] | O nome da variável do servidor (sem distinção entre maiúsculas e minúsculas).<br />Definida em [SetSVarFloat](SetSVarFloat). |

## Retornos

O valor flutuante da variável de servidor especificada.

Ele ainda retornará 0,0 se a variável não estiver definida.

## Exemplos

```c
// definir "Versão"
SetSVarFloat("Version", 0.37);

// imprimirá a versão que o servidor possui
printf("Version: %.2f", GetSVarFloat("Version"));
```
## Funções Relacionadas

- [SetSVarInt](SetSVarInt): Defina um número inteiro para uma variável do servidor.
- [GetSVarInt](GetSVarInt): Obtenha um servidor de jogador como um número inteiro.
- [SetSVarString](SetSVarString): Defina uma string para uma variável de servidor.
- [GetSVarString](GetSVarString): Obtenha a string definida anteriormente de uma variável de servidor.
- [SetSVarFloat](SetSVarFloat): Defina um ponto flutuante para uma variável do servidor.
- [DeleteSVar](DeleteSVar): Exclua uma variável de servidor.
