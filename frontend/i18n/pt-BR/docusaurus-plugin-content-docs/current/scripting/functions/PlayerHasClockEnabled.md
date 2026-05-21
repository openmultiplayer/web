---
title: PlayerHasClockEnabled
sidebar_label: PlayerHasClockEnabled
description: "Verifica se o jogador está com o relógio do jogo ativado."
tags: ["player"]
---


## Descrição

Verifica se o jogador está com o relógio do jogo ativado. ([TogglePlayerClock](TogglePlayerClock))

| Nome | Descrição |
| -------- | ----------------------------------------- |
| playerid | O jogador cujo relógio você deseja verificar. |

## Retornos

**true** - O relógio está habilitado.

**false** – O relógio não está habilitado ou o jogador especificado não existe.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    TogglePlayerClock(playerid, true); // Mostrar o relógio

    if (PlayerHasClockEnabled(playerid))
    {
        SendClientMessage(playerid, COLOR_WHITE, "The clock is enabled.");
    }
    return 1;
}
```
## Notas

:::tip

O tempo não está sincronizado com outros jogadores! A hora pode ser sincronizada usando [SetPlayerTime](SetPlayerTime).

:::

## Funções Relacionadas

- [SetPlayerTime](SetPlayerTime): Defina o tempo de um jogador.
- [SetWorldTime](SetWorldTime): Defina a hora global do servidor.
- [TogglePlayerClock](TogglePlayerClock): Alterne o relógio no canto superior direito.
