---
title: GetPlayerTargetPlayer
sidebar_label: GetPlayerTargetPlayer
description: "Verifique para quem o jogador está mirando."
tags: ["player"]
---


## Descrição

Verifique para quem o jogador está mirando.

| Nome | Descrição |
| -------- | ------------------------------------------ |
| playerid | O ID do jogador cujo alvo será atingido. |

## Retornos

O ID do jogador alvo ou `INVALID_PLAYER_ID` se não houver nenhum.

## Exemplos

```c
public OnPlayerUpdate(playerid)
{
    // Armazene o ID
    new playerTargetId = GetPlayerTargetPlayer(playerid);
    if (playerTargetId != INVALID_PLAYER_ID && GetPlayerTeam(playerTargetId) == GetPlayerTeam(playerid))
    {
        GameTextForPlayer(playerid, "~R~do not shoot at team-mates!", 5000, 3);
    }
}
```
## Notas

:::warning

Não funciona para joypads/controladores e após uma certa distância. Não funciona para o rifle de precisão, pois não trava em nada e, como tal, não pode e não irá devolver um jogador.

:::

## Funções Relacionadas

- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Obtenha o vetor frontal da câmera do jogador

## Callbacks Relacionadas

- [OnPlayerGiveDamage](../callbacks/OnPlayerGiveDamage): Este callback é chamado quando um jogador causa dano.
- [OnPlayerTakeDamage](../callbacks/OnPlayerTakeDamage): Este callback é chamado quando um jogador sofre dano.
