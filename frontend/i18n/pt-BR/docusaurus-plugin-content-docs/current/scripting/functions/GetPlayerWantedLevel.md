---
title: GetPlayerWantedLevel
sidebar_label: GetPlayerWantedLevel
description: "Obtém o nível desejado de um jogador."
tags: ["player"]
---


## Descrição

Obtém o nível desejado de um jogador.

| Nome | Descrição |
| -------- | -------------------------------------------------------------- |
| playerid | O ID do jogador cujo nível desejado você deseja obter. |

## Retornos

O nível de procurado do jogador.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/getmywantedlevel", true) == 0)
     {
          // Obtém o nível de procurado atual e salva-o na variável Wantlevel
          // e então informa ao jogador o nível de procurado em uma mensagem do cliente.

          new
               wantedLevel = GetPlayerWantedLevel(playerid),
               message[64];

          format(message, sizeof(message), "Your current wanted level is: %i", wantedlevel);
          SendClientMessage(playerid, 0xFF0000FF, message);

          return 1;
     }
    return 0;
}
```
## Funções Relacionadas

- [SetPlayerWantedLevel](SetPlayerWantedLevel): Defina o nível de procurado de um jogador.
- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): Reproduza uma denúncia de crime para um jogador.
