---
title: OnPlayerRequestSpawn
description: Chamada quando um jogador tenta spawnar através da seleção de classe pressionando SHIFT ou clicando no botão 'Spawn'.
tags: ["player"]
---

## Descrição

Chamada quando um jogador tenta spawnar através da seleção de classe pressionando SHIFT ou clicando no botão 'Spawn'.

| Nome     | Descrição                              |
| -------- | -------------------------------------- |
| playerid | O ID do jogador que solicitou o spawn. |

## Retorno

Sempre é chamada primeiro em Filterscripts.

## Exemplos

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "Talvez você não spawne.");
        return 0;
    }
    return 1;
}
```

## Notas

<TipNPCCallbacksPT />

:::tip

Para previnir jogadores de spawnar em determinadas classes, a última classe vista deve ser salva em uma variavel em OnPlayerRequestClass.

:::

## Funções Relacionadas
