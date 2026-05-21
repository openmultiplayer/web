---
title: OnNPCPlaybackStart
sidebar_label: OnNPCPlaybackStart
description: "Este callback é chamado quando um NPC inicia a reprodução de um arquivo gravado."
tags: ["npc", "playback", "recording"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Este callback é chamado quando um NPC inicia a reprodução de um arquivo gravado.

| Nome | Descrição |
| -------- | ----------------------------------------- |
| npcid | O ID do NPC que iniciou a reprodução |
| recordid | O ID do disco que começou a tocar |

## Exemplos

```c
public OnNPCPlaybackStart(npcid, recordid)
{
    printf("[NPC] NPC %d started playback (record: %d)", npcid, recordid);

    // Notifique os jogadores que estão rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d started playback (record ID: %d)", npcid, recordid);
        }
    }
    return 1;
}

```
## Notas

- Este callback é chamado imediatamente quando `NPC_StartPlayback` é executado com sucesso
- O `recordid` corresponde ao arquivo de registro carregado
- O NPC seguirá os movimentos gravados no arquivo

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_StartPlayback](../functions/NPC_StartPlayback): inicia a reprodução NPC de uma gravação
- [NPC_StopPlayback](../functions/NPC_StopPlayback): Interrompe a reprodução de NPC
- [NPC_PausePlayback](../functions/NPC_PausePlayback): Pausar/retomar a reprodução NPC
- [NPC_IsPlayingPlayback](../functions/NPC_IsPlayingPlayback): Verifique se NPC está reproduzindo uma gravação

## Callbacks Relacionadas

- [OnNPCPlaybackEnd](OnNPCPlaybackEnd): Chamado quando NPC termina de reproduzir uma gravação
