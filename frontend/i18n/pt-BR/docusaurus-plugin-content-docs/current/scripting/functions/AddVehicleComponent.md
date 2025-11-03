---
title: AddVehicleComponent
sidebar_label: AddVehicleComponent
description: Adiciona um 'componente' (frequentemente chamado de 'mod' (modificação)) a um veículo.
tags: ["vehicle"]
---

## Descrição

Adiciona um 'componente' (frequentemente chamado de 'mod' (modificação)) a um veículo. Componentes válidos podem ser encontrados aqui.

| Name                                       | Descrição                                                               |
| ------------------------------------------ | ----------------------------------------------------------------------- |
| vehicleid                                  | O ID do veículo a adicionar um componente. Não confundir com o modelid. |
| [componentid](../resources/carcomponentid) | O ID do componente a adicionar ao veículo.                              |

## Retorno

0 - O componente não foi adicionar porque o veículo não existe.

1 - O componente foi adicionar com sucesso ao veículo.

## Exemplos

```c
new gTaxi;

public OnGameModeInit()
{
    gTaxi = AddStaticVehicle(420, -2482.4937, 2242.3936, 4.6225, 179.3656, 6, 1); // Taxi
    return 1;
}

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && oldstate == PLAYER_STATE_ONFOOT)
    {
        if (GetPlayerVehicleID(playerid) == gTaxi)
        {
            AddVehicleComponent(gTaxi, 1010); // Nitro
            SendClientMessage(playerid, 0xFFFFFFAA, "Nitro foi adicionado ao Taxi.");
        }
    }
    return 1;
}
```

## Notas

:::warning

Usar um ID de componente inválido causa um crash no jogador. Não existe verificação interna para isso.

:::

## Funções Relacionadas

- [RemoveVehicleComponent](RemoveVehicleComponent): Remove um componente de um veículo.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Verifica quais componentes o veículo tem.
- [GetVehicleComponentType](GetVehicleComponentType): Verifica o tipo de componente pelo ID.
- [OnVehicleMod](../callbacks/OnVehicleMod): É chamado quando o veículo é modificado/tem componentes.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): É chamado quando um veículo entra ou sai de uma loja de tunning.
