---
title: NPC_MeleeAttack
sidebar_label: NPC_MeleeAttack
description: "Faz um NPC realizar um ataque corpo a corpo."
tags: ["npc", "combat", "melee"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Faz com que um NPC execute um ataque corpo a corpo por um período especificado.

| Nome | Descrição |
| --------------- | ------------------------------------------------ |
| npcid | O ID do NPC |
| time | A duração do ataque |
| secondaryAttack | Se deve usar ataque secundário (padrão: false) |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcmeleeattack", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new time = 1000;
        if (strlen(cmdtext) > 16)
            time = strval(cmdtext[16]);

        new bool:success = NPC_MeleeAttack(npcid, time, false);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d melee attack for %dms: %s", npcid, time, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}

forward ComboStep2(playerid);
public ComboStep2(playerid)
{
    NPC_MeleeAttack(0, 700, true);  // Ataque secundário
    SendClientMessage(playerid, 0xFF8000FF, "Combo: Step 2!");
}

forward ComboStep3(playerid);
public ComboStep3(playerid)
{
    NPC_MeleeAttack(0, 900, false);  // Movimento final
    SendClientMessage(playerid, 0xFF4000FF, "Combo: Finishing move!");
}
```
## Notas

- O NPC deve possuir arma branca ou usar punhos para o ataque
- A duração afeta quanto tempo a animação do ataque é reproduzida
- Os ataques secundários geralmente têm animações e efeitos diferentes
- Use estilos de luta para alterar as animações e a eficácia do ataque

## Funções Relacionadas

- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): Pare de atacar corpo a corpo
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): Verifique se está atacando
- [NPC_SetFightingStyle](NPC_SetFightingStyle): Definir estilo de luta
- [NPC_GetFightingStyle](NPC_GetFightingStyle): Obtenha estilo de luta

## Callbacks Relacionadas

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Chamado quando NPC causa dano ao jogador
