---
title: NPC_MoveToPlayer
sidebar_label: NPC_MoveToPlayer
description: "Faz um movimento NPC em direção e segue um jogador."
tags: ["npc", "movement", "player", "follow"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Faz um movimento NPC em direção e segue um jogador.

| Nome | Descrição |
| ---------------------- | ------------------------------------------------------------ |
| npcid | O ID do NPC.                                           |
| playerid | O ID do jogador para o qual se mover.                         |
| NPC_MOVE_TYPE:moveType | Tipo de movimento (padrão: `NPC_MOVE_TYPE_JOG`).                |
| Float:moveSpeed | Velocidade de movimento (padrão: `NPC_MOVE_SPEED_AUTO`).             |
| Float:stopRange | Distância até parar do jogador (padrão: 0,2) |
| updateDelayMS | Atraso de atualização da verificação de posição em milissegundos (padrão: 500).  |
| bool:autoRestart | Se deseja reiniciar automaticamente o seguinte (padrão: false). |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcmovetoplayer", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        NPC_MoveToPlayer(npcid, playerid, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_AUTO, 0.2, 500, false);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d now following you", npcid);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- NPCs seguirá continuamente o jogador alvo até ser interrompido.
- O parâmetro `updateDelayMS` controla a frequência com que o NPC atualiza sua posição alvo.
- Valores mais baixos de `updateDelayMS` fornecem acompanhamento mais suave, mas usam mais recursos.
- O parâmetro `autoRestart` determina se o seguimento é retomado após interrupções.
- Seguir para quando o jogador alvo se desconecta.

:::

## Funções Relacionadas

- [NPC_Move](NPC_Move): Mova NPC para uma posição específica.
- [NPC_StopMove](NPC_StopMove): Interrompe o movimento NPC.
- [NPC_IsMoving](NPC_IsMoving): Verifique se NPC está se movendo.
- [NPC_MoveByPath](NPC_MoveByPath): Mova NPC ao longo de um caminho predefinido.

## Callbacks Relacionadas

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC atinge o destino (não chamado para seguimento contínuo).
