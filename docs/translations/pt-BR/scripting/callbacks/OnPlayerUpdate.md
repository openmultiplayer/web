---
title: OnPlayerUpdate
description: Essa callback é executada quando o cliente/player faz o update do seu status para o servidor.
tags: ["player"]
---

## Descrição

Essa callback é executada quando o cliente/player faz o update do seu status para o servidor. É geralmente utilizada para criar callbacks customizadas para o cliente, das quais não são ativas no lado do servidor, tais como vida, colete, ou até mesmo troca de armas.

| Nome     | Descrição                                  |
| -------- | ------------------------------------------ |
| playerid | ID do jogador que está enviando o pacote.  |

## Retornos

0 - Update do jogador não será replicado para os outros.

1 - Indica que o update do jogador deve ser processado e eviado para os outros jogadores.

É sempre executada primeiro nos filterscripts.

## Exemplos

```c
public OnPlayerUpdate(playerid)
{
    new iCurWeap = GetPlayerWeapon(playerid); // Retorna a arma atual do jogador
    if (iCurWeap != GetPVarInt(playerid, "iCurrentWeapon")) // Caso o mesmo tenha trocado de arma após o último update
    {
        // Vamos chamar a callback OnPlayerChangeWeapon
        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);
        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);//Atualiza a váriavel da arma
    }
    return 1; // Envia o update para os outros jogadores.
}

stock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)
{
    new     s[128],
        oWeapon[24],
        nWeapon[24];

    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));
    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));

    format(s, sizeof(s), "Você trocou sua arma de %s para %s!", oWeapon, nWeapon);

    SendClientMessage(playerid, 0xFFFFFFFF, s);
}
public OnPlayerUpdate(playerid)
{
    new Float:fHealth;

    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // A vida do jogador mudou desde o último update -> server, então obviamente foi atualizada.
        // Vamos fazer uma checagem mais profunda para ver se o mesmo esta ganhando ou perdendo vida, anti-health cheat? ;)

        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            /* Ele ganhou vida! Xitando? Escreva seu próprio script para saber como o player esta ganhando vida... */
        }
        else
        {
            /* Ele perdeu vida! */
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## Notas

<TipNPCCallbacksPT />

:::warning

Essa callback é executada, aproximadamente, 30 vezes por segundo, por jogador; Use a mesma somente caso saiba o que está fazendo (ou talvez seja mais importante saber para que ela NÃO DEVE SER USADA). A frequência que essa callback é executada varia dependendo da situação e do que o player está fazendo. Dirigir ou participar de um tiroteio vai fazer com que os updates aumentem drasticamente, diferente se o jogador estiver parado...

:::
