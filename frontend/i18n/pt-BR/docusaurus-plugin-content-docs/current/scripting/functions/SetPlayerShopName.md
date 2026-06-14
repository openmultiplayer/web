---
title: SetPlayerShopName
sidebar_label: SetPlayerShopName
description: "Carrega ou descarrega um script interno para um jogador (por exemplo, o menu de munição)."
tags: ["player"]
---


## Descrição

Carrega ou descarrega um script interno para um jogador (por exemplo, o menu de munição).

| Nome | Descrição |
| ---------------- | -------------------------------------------------------------------------------------- |
| playerid | O ID do jogador para o qual carregar o script interno.                                  |
| const shopname[] | O [script de compras](../resources/shopnames) a ser carregado. Deixe em branco ("") para descarregar scripts. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/enter", cmdtext))
    {
        SetPlayerInterior(playerid, 5);
        SetPlayerPos(playerid, 372.5565, -131.3607, 1001.4922);
        SetPlayerShopName(playerid, "FDPIZA");
        SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Pizza Stack!");
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

Esta função não suporta scripts de cassino.

:::

## Funções Relacionadas

- [DisableInteriorEnterExits](DisableInteriorEnterExits): Desative os marcadores amarelos das portas.
- [SetPlayerInterior](SetPlayerInterior): Defina o interior de um jogador.

## Recursos relacionados

- [Nomes de lojas](../resources/shopnames)
