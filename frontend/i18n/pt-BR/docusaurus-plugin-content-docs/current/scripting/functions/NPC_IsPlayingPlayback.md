---
title: NPC_IsPlayingPlayback
sidebar_label: NPC_IsPlayingPlayback
description: "Verifica se um NPC está reproduzindo uma gravação."
tags: ["npc", "recording", "playback"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está reproduzindo uma gravação.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC estiver reproduzindo uma reprodução, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkplayingplayback", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isPlayingPlayback = NPC_IsPlayingPlayback(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is playing playback: %s", npcid, isPlayingPlayback ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna true quando NPC está reproduzindo ativamente uma gravação

## Funções Relacionadas

- [NPC_StartPlayback](NPC_StartPlayback): Comece a reproduzir a gravação
- [NPC_StopPlayback](NPC_StopPlayback): Parar a reprodução
- [NPC_PausePlayback](NPC_PausePlayback): pausar/retomar a reprodução
- [NPC_IsPlaybackPaused](NPC_IsPlaybackPaused): Verifique se está pausado

## Callbacks Relacionadas

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Chamado quando a reprodução começa
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Chamado quando a reprodução termina
