---
title: GetVehicleComponentInSlot
sidebar_label: GetVehicleComponentInSlot
description: "Recupera o componente instalado ID (modshop mod(ification)) em um veículo em um slot específico."
tags: ["vehicle"]
---


## Descrição

Recupera o componente instalado ID (modshop mod(ification)) em um veículo em um slot específico.

| Nome | Descrição |
| --------------- | -------------------------------------------------------------------------- |
| vehicleid | O ID do veículo para verificar o componente.                          |
| CARMODTYPE:slot | O [slot de componente](../resources/componentslots) para verificar componentes. |

## Retornos

O ID do componente instalado no slot especificado.

Retorna **0** se nenhum componente estiver no slot especificado do veículo ou se o veículo não existir.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/myspoiler", cmdtext, true))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new
            component = GetVehicleComponentInSlot(GetPlayerVehicleID(playerid), CARMODTYPE_SPOILER);

        if (component == 1049)
        {
            SendClientMessage(playerid, -1, "You have an Alien spoiler installed in your Elegy!");
        }
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

Erros conhecidos:

- Não funciona para CARMODTYPE_STEREO.
- Tanto as barras frontais quanto os componentes do pára-choque dianteiro são salvos no slot CARMODTYPE_FRONT_BUMPER. Se um veículo tiver os dois instalados, esta função retornará apenas aquele que foi instalado por último.
- Tanto as barras de proteção traseiras quanto os componentes do pára-choque traseiro são salvos no slot CARMODTYPE_REAR_BUMPER. Se um veículo tiver os dois instalados, esta função retornará apenas aquele que foi instalado por último.
- Tanto a saia lateral esquerda quanto a saia lateral direita são salvas no slot CARMODTYPE_SIDESKIRT. Se um veículo tiver os dois instalados, esta função retornará apenas aquele que foi instalado por último.

:::

## Funções Relacionadas

- [AddVehicleComponent](AddVehicleComponent): Adicione um componente a um veículo.
- [GetVehicleComponentType](GetVehicleComponentType): Verifique o tipo de componente através do ID.

## Callbacks Relacionadas

- [OnVehicleMod](../callbacks/OnVehicleMod): Chamado quando um veículo é modificado.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Chamado quando um veículo entra ou sai de uma loja de mods.

## Recursos relacionados

- [Slots de componentes de veículos](../resources/componentslots)
