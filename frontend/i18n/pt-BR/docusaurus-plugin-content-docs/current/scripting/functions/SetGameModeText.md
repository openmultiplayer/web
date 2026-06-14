---
title: SetGameModeText
sidebar_label: SetGameModeText
description: "Defina o nome do modo de jogo que aparece no navegador do servidor."
tags: []
---


## Descrição

Defina o nome do modo de jogo que aparece no navegador do servidor.

| Nome | Descrição |
| ---------------- | ------------------------------------------ |
| format[] | O nome do modo de jogo a ser exibido.              |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    SetGameModeText("Team Deathmatch");
    return 1;
}
```
<br />

```c
#define GAME_MODE_VERSION "1.5.0"

public OnGameModeInit()
{
    SetGameModeText("Roleplay v%s", GAME_MODE_VERSION);
    return 1;
}
```