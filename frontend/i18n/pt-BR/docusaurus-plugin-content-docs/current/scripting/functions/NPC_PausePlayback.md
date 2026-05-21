---
title: NPC_PausePlayback
sidebar_label: NPC_PausePlayback
description: "Pausa ou retoma a reprodução da gravação de um NPC."
tags: ["npc", "recording", "playback"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Pausa ou retoma a reprodução da gravação de um NPC.

| Nome | Descrição |
| ----- | ----------------------------------------- |
| npcid | O ID do NPC |
| pause | Seja pausar (true) ou retomar (false) |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/pauseplayback ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:pause = strval(cmdtext[15]) ? true : false;

        NPC_PausePlayback(npcid, pause);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d playback %s.", npcid, pause ? "paused" : "resumed");
        return 1;
    }
    return 0;
}
```
## Notas

- Funciona apenas quando NPC está reproduzindo ativamente uma gravação
- A reprodução pausada pode ser retomada chamando com pause = false
- Use NPC_IsPlaybackPaused para verificar o estado de pausa atual

## Funções Relacionadas

- [NPC_IsPlaybackPaused](NPC_IsPlaybackPaused): Verifique se está pausado
- [NPC_StartPlayback](NPC_StartPlayback): Iniciar a reprodução
- [NPC_StopPlayback](NPC_StopPlayback): Parar a reprodução
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): Verifique se está jogando

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
