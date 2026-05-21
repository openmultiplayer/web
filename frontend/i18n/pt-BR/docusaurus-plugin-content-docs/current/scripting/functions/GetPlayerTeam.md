---
title: GetPlayerTeam
sidebar_label: GetPlayerTeam
description: "Obtenha o ID do time em que o jogador está."
tags: ["player"]
---


## Descrição

Obtenha o ID do time em que o jogador está.

| Nome | Descrição |
| -------- | ---------------------------------------- |
| playerid | O ID do jogador do qual obter o time. |

## Retornos

**0-254:** A equipe do jogador. (0 é uma equipe válida)

**255:** Definido como NO_TEAM. O jogador não está em nenhum time.

**-1:** A função não foi executada. O jogador não está conectado.

## Exemplos

```c
enum
{
    TEAM_ONE = 1,
    TEAM_TWO
};

public OnPlayerSpawn(playerid)
{
    // Os jogadores que estão na equipe 1 devem aparecer no aeroporto de Las Venturas.

    if (GetPlayerTeam(playerid) == TEAM_ONE)
    {
        SetPlayerPos(playerid, 1667.8909, 1405.5618, 10.7801);
    }
    return 1;
}
```
## Funções Relacionadas

- [SetPlayerTeam](SetPlayerTeam): Defina a equipe de um jogador.
- [SetTeamCount](SetTeamCount): Defina o número de equipes disponíveis.
