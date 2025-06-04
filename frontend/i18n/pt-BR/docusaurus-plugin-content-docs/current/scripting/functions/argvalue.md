---
title: argvalue
sidebar_label: argvalue
description: Obter o número de argumentos passados para o script (aqueles após --).
tags: ["arguments", "args"]
---

## Descrição

Obter o número de argumentos passados para o script (aqueles após **--**).

| Nome                  | Descrição                                                         |
| --------------------- | ----------------------------------------------------------------- |
| skip = 0              | O número de argumentos (com potencialmente o mesmo nome) para pular. |
| const argument[] = "" | O nome do argumento, incluindo `-`s e `/`s.                      |
| &value = cellmin      | O destino da saída.                                               |

## Retorno

**true** - o argumento foi encontrado com valor, **false** - não foi.

## Notas

Parâmetros separados também contam para o índice aqui.
Por exemplo, com `--load test --run` o argumento `--run` é o índice `2`.

## Funções Relacionadas

- [argcount](argcount): Obter o número de argumentos passados para o script (aqueles após --).
- [argindex](argindex): Obter o nome do argumento no índice fornecido após --.
- [argstr](argstr): Obter o valor string de um argumento por nome.