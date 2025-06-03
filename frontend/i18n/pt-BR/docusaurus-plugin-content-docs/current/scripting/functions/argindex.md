---
title: argindex
sidebar_label: argindex
description: Obter o nome do argumento no índice fornecido após --.
tags: ["arguments", "args"]
---

## Descrição

Obter o nome do argumento no índice fornecido após **--**.

| Nome                  | Descrição                                       |
| --------------------- | ----------------------------------------------- |
| index                 | O deslocamento baseado em zero para o argumento do script. |
| value[]               | O destino da string de saída.                   |
| size = sizeof (value) | O tamanho do destino.                           |
| bool:pack = false     | O valor de retorno deve ser empacotado?         |

## Retorno

**true** - o argumento foi encontrado, **false** - não foi.

## Notas

Parâmetros separados também contam para o índice aqui.
Por exemplo, com `--load test --run` o argumento `--run` é o índice `2`.

## Funções Relacionadas

- [argcount](argcount): Obter o número de argumentos passados para o script (aqueles após --).
- [argstr](argstr): Obter o valor string de um argumento por nome.
- [argvalue](argvalue): Obter o número de argumentos passados para o script (aqueles após --).
