---
title: SetPlayerTeam
sidebar_label: SetPlayerTeam
description: "Defina a equipe de um jogador."
tags: ["player"]
---


## Descrição

Defina a equipe de um jogador.

| Nome | Descrição |
| -------- | ------------------------------------------------------------------------------ |
| playerid | O ID do jogador cujo time você deseja definir.                              |
| teamid | A equipe para colocar o jogador. Use NO_TEAM para remover o jogador de qualquer equipe. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    // Defina a equipe de um jogador como 4 quando ele aparecer
    SetPlayerTeam(playerid, 4);
    return 1;
}
```
## Notas

:::tip

- Os jogadores não podem danificar/matar jogadores do mesmo time, a menos que usem uma faca para cortar a garganta.

- Os jogadores também não podem danificar veículos dirigidos por um jogador do mesmo time. Isso pode ser habilitado com [EnableVehicleFriendlyFire](EnableVehicleFriendlyFire).

- 255 (ou `NO_TEAM`) é o time padrão para poder atirar em outros jogadores, não 0.

:::

## Funções Relacionadas

- [GetPlayerTeam](GetPlayerTeam): Verifique em qual time um jogador está.
- [SetTeamCount](SetTeamCount): Defina o número de equipes disponíveis.
- [EnableVehicleFriendlyFire](EnableVehicleFriendlyFire): Habilita fogo amigo para veículos da equipe.
