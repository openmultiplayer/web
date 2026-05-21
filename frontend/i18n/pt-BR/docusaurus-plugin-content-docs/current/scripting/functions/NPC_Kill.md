---
title: NPC_Kill
sidebar_label: NPC_Kill
description: "Mata um NPC com uma arma/motivo específico."
tags: ["npc", "death", "kill"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Mata um NPC com uma arma/motivo específico.

| Nome | Descrição |
| -------- | --------------------------------------------------------------------------------------- |
| npcid | O ID do NPC para matar |
| killerid | O ID do jogador que matou o NPC (opcional, use INVALID_PLAYER_ID para nenhum assassino) |
| reason | A arma ID ou motivo da morte (padrão: 255 para suicídio) |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npckill", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        NPC_Kill(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has been killed.", npcid);
        return 1;
    }
    return 0;
}
```
## Notas

- Use `INVALID_PLAYER_ID` para killerid se não houver assassino
- O parâmetro razão usa a arma IDs (WEAPON enum)
- Isso aciona o callback [OnNPCDeath](../callbacks/OnNPCDeath)

## Funções Relacionadas

- [NPC_SetHealth](NPC_SetHealth): Definir integridade de NPC
- [NPC_GetHealth](NPC_GetHealth): Obtenha saúde de NPC
- [NPC_IsDead](NPC_IsDead): Verifique se NPC está morto
- [NPC_Respawn](NPC_Respawn): Reaparece um NPC

## Callbacks Relacionadas

- [OnNPCDeath](../callbacks/OnNPCDeath): Chamado quando NPC morre
- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Chamado quando NPC sofre dano
