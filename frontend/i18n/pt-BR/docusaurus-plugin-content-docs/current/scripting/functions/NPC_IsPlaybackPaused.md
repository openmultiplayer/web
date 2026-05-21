---
title: NPC_IsPlaybackPaused
sidebar_label: NPC_IsPlaybackPaused
description: "Verifica se a reprodução de um NPC está pausada."
tags: ["npc", "recording", "playback"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se a reprodução de um NPC está pausada no momento.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a reprodução estiver pausada, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkplaybackpaused", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isPlaybackPaused = NPC_IsPlaybackPaused(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d playback paused: %s", npcid, isPlaybackPaused ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Somente retorna true se o NPC estiver reproduzindo uma gravação e estiver pausado
- NPCs que não reproduz gravações sempre retornará false

## Funções Relacionadas

- [NPC_PausePlayback](NPC_PausePlayback): Pausar/retomar a reprodução
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): Verifique se está jogando
- [NPC_StartPlayback](NPC_StartPlayback): Iniciar a reprodução
- [NPC_StopPlayback](NPC_StopPlayback): Parar a reprodução

## Callbacks Relacionadas

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Chamado quando a reprodução começa
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Chamado quando a reprodução termina
