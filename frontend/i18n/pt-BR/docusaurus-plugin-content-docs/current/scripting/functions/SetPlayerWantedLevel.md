---
title: SetPlayerWantedLevel
sidebar_label: SetPlayerWantedLevel
description: "Defina o nível de procurado de um jogador (6 estrelas marrons em HUD)."
tags: ["player"]
---


## Descrição

Defina o nível de procurado de um jogador (6 estrelas marrons em HUD).

| Nome | Descrição |
| -------- | ------------------------------------------------ |
| playerid | O ID do jogador para definir o nível desejado. |
| level | O nível desejado a ser definido para o jogador (0-6).    |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/turnuptheheat", true) == 0)
    {
        SetPlayerWantedLevel(playerid, 6);
        SendClientMessage(playerid, 0xFF0000FF, "Wanted Level: 6");
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [GetPlayerWantedLevel](GetPlayerWantedLevel): Verifica o nível de procurado de um jogador.
- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): Reproduza uma denúncia de crime para um jogador.
