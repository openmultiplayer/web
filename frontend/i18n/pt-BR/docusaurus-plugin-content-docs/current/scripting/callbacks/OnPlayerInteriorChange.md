---
title: OnPlayerInteriorChange
sidebar_label: OnPlayerInteriorChange
description: Chamada quando um jogador muda de interior.
tags: ["player"]
---

## Descrição

Chamada quando um jogador muda de interior. Pode ser chamada pela função SetPlayerInterior ou quando um jogador entre/sai de uma construção.

| Nome          | Descrição                             |
| ------------- | ------------------------------------- |
| playerid      | O ID do jogador que mudou de interior |
| newinteriorid | O ID do atual interior do jogador     |
| oldinteriorid | O ID do antigo interior do jogador    |

## Retorno

É sempre chamado primeiro no gamemode.

## Exemplos

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "Você foi do interior %d para o interior %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## Funções Relacionadas

- [SetPlayerInterior](../functions/SetPlayerInterior.md): Define o interior do jogador.
- [GetPlayerInterior](../functions/GetPlayerInterior.md): Obtém o atual interior do jogador.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior.md): Muda o interior do qual um veículo é visto.
- [OnPlayerStateChange](OnPlayerStateChange.md): Chamado quando um jogador muda de estado.
