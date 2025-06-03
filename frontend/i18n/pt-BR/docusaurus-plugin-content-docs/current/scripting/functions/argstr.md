---
title: argstr
sidebar_label: argstr
description: Obter o valor string de um argumento por nome.
tags: ["arguments", "args"]
---

## Descrição

Obter o valor string de um argumento por nome.

| Nome                  | Descrição                                                         |
| --------------------- | ----------------------------------------------------------------- |
| skip = 0              | O número de argumentos (com potencialmente o mesmo nome) para pular. |
| const argument[] = "" | O nome do argumento, incluindo `-`s e `/`s.                      |
| value[] = ""          | O destino da string de saída.                                     |
| size = sizeof (value) | O tamanho do destino.                                             |
| bool:pack = false     | O valor de retorno deve ser empacotado?                           |

## Retorno

**true** - o argumento foi encontrado, **false** - não foi.

## Funções Relacionadas

- [argcount](argcount): Obter o número de argumentos passados para o script (aqueles após --).
- [argindex](argindex): Obter o nome do argumento no índice fornecido após --.
- [argvalue](argvalue): Obter o número de argumentos passados para o script (aqueles após --).