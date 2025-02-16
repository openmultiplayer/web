---
title: OnVehicleDeath
description: Essa callback é executada quando o veículo é destruído - seja explodindo ou submergindo na água.
tags: ["vehicle"]
---

## Descrição

Essa callback é executada quando o veículo é destruído - seja explodindo ou submergindo na água.

| Nome      | Descrição                                                                                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid | ID do veículo que foi destruído.                                                                                                                                      |
| killerid  | ID do jogador que causou (sincronizadamente) a destruição do veículo (não é 100% preciso). Geralmente o motorista, passageiro (caso tenha) ou o jogador mais próximo. |

## Retornos

Sempre executada primeiro nos filterscripts.

## Exemplos

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "O veículo %i foi destruído. Possivelmente por %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::tip

Essa callback também será executada quando o veículo entrar na água, mesmo podendo ser "recuperado" (salvo) utilizando teleporte ou dirigindo (aciona quando o veículo está pacialmenmte submergido). A callback não será executada novamente, nesse caso o veículo pode acabar desaparecendo quando o motorista sair do mesmo, ou após um curto período de tempo.

:::

## Funções Relacionadas

- [SetVehicleHealth](../functions/SetVehicleHealth): Define a vida do veículo.
