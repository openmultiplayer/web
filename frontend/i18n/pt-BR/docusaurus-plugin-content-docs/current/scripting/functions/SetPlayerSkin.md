---
title: SetPlayerSkin
sidebar_label: SetPlayerSkin
description: "Defina a skin de um jogador."
tags: ["player"]
---


## Descrição

Defina a skin de um jogador. A pele de um jogador é o modelo de seu personagem.

| Nome | Descrição |
| -------- | ----------------------------------------------------- |
| playerid | O ID do jogador cujo skin será definido.              |
| skinid | A [skin](../resources/skins) que o jogador deve usar. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

Observe que o 'sucesso' é relatado mesmo quando o skin ID é inválido (não 0-311 ou 74), mas o skin será definido como ID 0 (CJ).

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/fireman", true) == 0)
    {
        // Defina a skin do jogador como ID 277, que é um bombeiro.
        SetPlayerSkin(playerid, 277);
        return 1;
    }
    return 0;
}

SetPlayerSkinFix(playerid, skinid)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    // Caso o ID da skin seja inválido, menor que 0, maior que 311 ou igual a 74 (skin inválida), então não faça nada
    if (0 > skinid > 311 || skinid == 74)
    {
        return 0;
    }

    new
        Float:tmpPos[4],
        vehicleid = GetPlayerVehicleID(playerid),
        seatid = GetPlayerVehicleSeat(playerid);

    GetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
    GetPlayerFacingAngle(playerid, tmpPos[3]);

    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_DUCK)
    {
        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
        SetPlayerFacingAngle(playerid, tmpPos[3]);
        TogglePlayerControllable(playerid, true); // evita qualquer congelamento - opcional
        return SetPlayerSkin(playerid, skinid);
    }
    else if (IsPlayerInAnyVehicle(playerid))
    {
        new
            tmp;

        RemovePlayerFromVehicle(playerid);
        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
        SetPlayerFacingAngle(playerid, tmpPos[3]);
        TogglePlayerControllable(playerid, true); // evitando qualquer congelamento - importante! por causa de fazer animações de saída do veículo
        tmp = SetPlayerSkin(playerid, skinid);
        PutPlayerInVehicle(playerid, vehicleid, (seatid == 128) ? 0 : seatid);
        return tmp;
    }
    else
    {
        return SetPlayerSkin(playerid, skinid);
    }
}
```
## Notas

:::warning

Erros conhecidos:

- Se a skin de um jogador for definida quando ele estiver agachado, em um veículo ou executando certas animações, ele ficará congelado ou com falhas. Isso pode ser corrigido usando [TogglePlayerControllable](TogglePlayerControllable).
- Os jogadores podem ser detectados como agachados através de [GetPlayerSpecialAction](GetPlayerSpecialAction) (SPECIAL_ACTION_DUCK).
- Outros jogadores ao redor do jogador podem bater se ele estiver em um veículo ou se estiver entrando/saindo de um veículo.
- Definir a skin de um jogador quando ele está morto pode derrubar os jogadores ao seu redor.
- Pausas sentadas nas bicicletas.

:::

## Funções Relacionadas

- [GetPlayerSkin](GetPlayerSkin): Obtenha a skin atual de um jogador.
- [SetSpawnInfo](SetSpawnInfo): Defina a configuração de spawn para um jogador.

## Recursos relacionados

- [Pele IDs](../resources/skins)
