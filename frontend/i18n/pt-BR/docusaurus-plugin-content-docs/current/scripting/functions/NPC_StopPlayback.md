---
title: NPC_StopPlayback
sidebar_label: NPC_StopPlayback
description: "Impede que um NPC reproduza uma gravação."
tags: ["npc", "playback", "recording"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Impede que um NPC reproduza a gravação atual.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopplayback", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_StopPlayback(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d playback stopped: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```
## Notas

- O NPC irá parar na posição atual quando a reprodução terminar
- Se o NPC não estiver reproduzindo uma gravação, esta função não terá efeito
- Use `NPC_IsPlayingPlayback` para verificar se um NPC está reproduzindo uma gravação
- O arquivo de gravação permanece carregado e pode ser usado novamente

## Funções Relacionadas

- [NPC_StartPlayback](NPC_StartPlayback): inicia a reprodução de NPC
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): Verifique se está reproduzindo
- [NPC_LoadRecord](NPC_LoadRecord): Carregar um arquivo de gravação
- [NPC_UnloadRecord](NPC_UnloadRecord): Descarregue uma gravação

## Callbacks Relacionadas

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Chamado quando a reprodução termina
