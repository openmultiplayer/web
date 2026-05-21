---
title: RemovePlayerMapIcon
sidebar_label: RemovePlayerMapIcon
description: "Remove um ícone de mapa definido anteriormente para um jogador usando SetPlayerMapIcon."
tags: ["player"]
---


## Descrição

Remove um ícone de mapa definido anteriormente para um jogador usando SetPlayerMapIcon.

| Nome | Descrição |
| -------- | ------------------------------------------------------------------------------- |
| playerid | O ID do jogador cujo ícone será removido.                                      |
| iconid | O ID do ícone a ser removido. Este é o segundo parâmetro de SetPlayerMapIcon. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função.

## Exemplos

```c
SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0);

// Mais tarde
RemovePlayerMapIcon(playerid, 12);
```
## Funções Relacionadas

- [SetPlayerMapIcon](SetPlayerMapIcon): Crie um ícone de mapa para um jogador.
