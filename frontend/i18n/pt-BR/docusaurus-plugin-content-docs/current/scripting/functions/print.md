---
title: print
sidebar_label: print
description: "Imprime uma string no console do servidor (não no chat do jogo) e nos logs (log.txt)."
tags: ["console"]
---


<LowercaseNote />

## Descrição

Imprime uma string no console do servidor (não no chat do jogo) e nos logs (log.txt).

| Nome | Descrição |
| --------------------- | ----------------------------- | ----------------------------- |
| const string[] | A string a ser impressa.          |
| <!-- | primeiro plano (opcional) | A cor de primeiro plano a ser usada. |
| background (optional) | A cor de fundo a ser usada. | --> |

## Retornos

Esta função não retorna nenhum valor específico.

<!-- :::dica

Quando os códigos de cores são deixados em -1, as cores padrão do console do servidor são usadas.

:::

:::tip

Na maioria dos sistemas, os seguintes códigos de cores de primeiro plano e de fundo podem ser usados: preto (0), vermelho (1), verde (2), amarelo (3), azul (4), magenta (5), ciano (6) e branco (7).

:::

:::tip

A maioria dos sistemas também suporta versões brilhantes/negrito dessas cores. Os seguintes valores de destaque podem ser usados: regular (0) e claro/negrito (1).

::: -->

## Exemplos

```c
public OnGameModeInit()
{
    print("Gamemode started.");
    return 1;
}
```
## Funções Relacionadas

- [printf](printf): Imprime uma mensagem formatada nos logs do servidor e no console.
