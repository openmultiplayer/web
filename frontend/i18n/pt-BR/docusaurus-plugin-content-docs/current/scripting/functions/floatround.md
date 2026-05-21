---
title: floatround
sidebar_label: floatround
description: "Arredonde um número de ponto flutuante para um valor inteiro."
tags: ["math", "floating-point"]
---


<LowercaseNote />

## Descrição

Arredonde um número de ponto flutuante para um valor inteiro.

| Nome | Descrição |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| Float:value | O valor a ser arredondado.                                                                             |
| floatround_method:method | O [modo floatround](../resources/floatroundmodes) a ser usado.<br />By padrão: `floatround_round` |

## Retornos

O valor arredondado como um número inteiro.

## Exemplos

```c
new value = floatround(3.3, floatround_ceil);
printf("3.3 rounded to %d", value); // 3.3 arredondado para 4
```
<br />

```c
new value = floatround(50.996229);
printf("50.996229 rounded to %d", value); // 50.996229 arredondado para 51
```
<br />

```c
new value = floatround(270.0034);
printf("270.0034 rounded to %d", value); // 270.0034 arredondado para 270
```
## Funções Relacionadas

- [float](float): Converte um número inteiro em float.
- [floatstr](floatstr): Converte uma string em um float.

## Recursos relacionados

- [Modos flutuantes](../resources/floatroundmodes)
