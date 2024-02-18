---
title: OnPlayerTakeDamage
description: Esta callback é chama quando algum jogador recebe dano.
tags: ["player"]
---

<VersionWarnPT name='callback' version='SA-MP 0.3d' />

## Descrição

Esta callback é chama quando algum jogador recebe dano.

| Nome            | Descreição                                                                                                                                                       |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| playerid        | O ID do jogador que recebeu determinado dano.                                                                                                                    |
| issuerid        | O ID do jogador que causou o dano. INVALID_PLAYER_ID se o dano for auto-infligido.                                                                               |
| Float:amount    | A quantidade de dano total que o jogador recebey (vida e colete combinados).                                                                                     |
| WEAPON:weaponid | O ID da arma/razão do determinado dano.                                                                                                                          |
| bodypart        | A [Parte do Corpo](../resources/bodyparts) que foi atingida. (NOTA: Este parâmetro foi adicionado na 0.3z. Não o utilize caso esteja em uma versão mais antiga!) |

## Retornos

1 - A Callback não será chamada em outros filterscripts.

0 - Permite que esta Callback seja chamada em outro filterscript.

Sempre é chamada primeiro em filterscripts, portanto retornar 1 bloqueará que outro filterscript a veja.


## Exemplos

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // Caso não seja auto-infligido
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s causou %.0f de dano ao jogador %s, arma: %s, parte do corpo: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
```

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // Um tiro na cabeça para eliminar o jogador
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## Notas

:::tip

O ID da arma retornará 37 (Lança Chamas) para qualquer fonte que utilize fogo (EX: Molotov). O ID da arma retornará 51 para qualquer fonte que utilize explosões (EX: RPG, granada). 'playerid' é o único que pode chamar esta callback. A quantidade (amount) sempre será o valor máximo do dano que tal arma (weaponid) pode causar, mesmo quando a vida restante é menor do que o dano máximo. Então quando alguém tem 100.0 de vida e é atingido por uma Desert Eagle, que possui um dano total de 46.2, será necessário 3 tiros para matar o jogador. Todos os 3 tiros causarão 46.2 de dano, mesmo que a vida restante do jogador seja apenas de 7.6 após dois tiros.

:::

:::warning

GetPlayerHealth e GetPlayerArmour retornarão as quantidades específicas anteriores a chamada desta callback. Sempre verifique se o ID do jogador que causou o dano (issuerid) é válido antes de usá-lo como index de uma array.

:::
