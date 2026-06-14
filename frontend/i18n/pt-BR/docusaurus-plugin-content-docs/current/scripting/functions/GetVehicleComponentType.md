---
title: GetVehicleComponentType
sidebar_label: GetVehicleComponentType
description: "Descubra que tipo de componente é um determinado ID."
tags: ["vehicle"]
---


## Descrição

Descubra que tipo de componente é um determinado ID.

| Nome | Descrição |
| --------- | -------------------------- |
| component | O componente ID a ser verificado. |

## Retornos

O slot do componente ID do componente especificado ou **-1** se o componente for inválido.

## Exemplos

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    new
        CARMODTYPE:componentType = GetVehicleComponentType(componentid);

    if (componentType != CARMODTYPE_NONE)
    {
        new
            string[64];

        format(string, sizeof(string), "You have modified your vehicle on slot %i", componentType);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    else
    {
        SendClientMessage(playerid, 0xFF0000FF, "The component is invalid.");
    }
    return 1;
}
```
## Funções Relacionadas

- [AddVehicleComponent](AddVehicleComponent): Adicione um componente a um veículo.
- [RemoveVehicleComponent](RemoveVehicleComponent): Remova um componente de um veículo.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Verifique quais componentes um veículo possui.

## Callbacks Relacionadas

- [OnVehicleMod](../callbacks/OnVehicleMod): Chamado quando um veículo é modificado.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Chamado quando um veículo entra ou sai de uma loja de mods.
