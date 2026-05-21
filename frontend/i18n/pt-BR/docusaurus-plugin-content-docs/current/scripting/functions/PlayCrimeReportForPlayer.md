---
title: PlayCrimeReportForPlayer
sidebar_label: PlayCrimeReportForPlayer
description: "Esta função reproduz uma denúncia de crime para um jogador - assim como no modo single player, quando CJ comete um crime."
tags: ["player"]
---


## Descrição

Esta função reproduz uma denúncia de crime para um jogador - assim como no modo single player, quando CJ comete um crime.

| Nome | Descrição |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador que ouvirá a denúncia do crime.                                                                     |
| suspectid | O ID do jogador suspeito que será descrito na denúncia do crime.                                                  |
| crime | O [crime ID](../resources/crimelist), que será relatado como um código 10 (ou seja, 10-16 se 16 foi passado como o crimeid). |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/suspect"))
    {
        PlayCrimeReportForPlayer(playerid, 0, 16);
        SendClientMessage(playerid, 0xFFFFFFFF, "ID 0 committed a crime (10-16).");
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [PlayerPlaySound](PlayerPlaySound): Reproduz um som para um jogador.

## Recursos relacionados

- [Crime IDs](../resources/crimelist)
