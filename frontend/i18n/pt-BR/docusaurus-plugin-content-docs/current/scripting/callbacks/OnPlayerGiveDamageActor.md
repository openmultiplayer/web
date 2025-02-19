---
title: OnPlayerGiveDamageActor
sidebar_label: OnPlayerGiveDamageActor
description: Esta callback é chamada quando o jogador causa dano a um ator.
tags: ["player"]
---

<VersionWarnPT name='callback' version='SA-MP 0.3.7' />

## Descrição

Esta callback é chamada quando o jogador causa dano a um ator.

| Nome            | Descrição                                                 |
|-----------------|-----------------------------------------------------------|
| playerid        | ID do jogador que realizou o dano.                        |
| damaged_actorid | ID do ator que recebeu o dano.                            |
| Float:amount    | A quantidade de vida/colete que o damaged_actorid perdeu. |
| WEAPON:weaponid | O motivo que causou o dano.                               |
| bodypart        | A parte do corpo que foi acertada                         |

## Retorno

1 - Callback não será chamada em outros fillterscripts.

0 - Permite que essa callback seja chamada em outros filterscripts.

É sempre chamada primeiro em filterscripts então ao retornar 1 bloqueia outros filterscripts de vê-la.

## Exemplos

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetWeaponName(weaponid, weaponname, sizeof (weaponname));

    format(string, sizeof(string), "%s realizou %.0f de dano no ator de id %d, arma: %s", attacker, amount, damaged_actorid, weaponname);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::tip

Esta função não é chamada se o ator é posto como vulnerável (QUE É O PADRÃO). Veja a função [SetActorInvulnerable](../functions/SetActorInvulnerable).

:::

## Funções relacionadas

- [CreateActor](../functions/CreateActor): Cria um ator (NPC estático).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): Coloca o actor como invulnerável.
- [SetActorHealth](../functions/SetActorHealth): Informa a vida de um ator.
- [GetActorHealth](../functions/GetActorHealth): Obtém a vida de um ator.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): Verifica se um ator é invulnerável.
- [IsValidActor](../functions/IsValidActor): Verifica se o ID de um ator é válido.

## Callbacks relacionadas

- [OnActorStreamOut](OnActorStreamOut): Chamada quando um ator é removido da área visível por um jogador.
- [OnPlayerStreamIn](OnPlayerStreamIn): Chamada quando um jogador aparece na área visível de outro jogador.
