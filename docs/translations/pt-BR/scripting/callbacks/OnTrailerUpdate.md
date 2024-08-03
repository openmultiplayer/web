---
title: OnTrailerUpdate
description: Essa callback é executada quando o jogador envia um update para um trailer.
tags: []
---

## Descrição

Essa callback é executada quando o jogador envia um update para um trailer.

| Nome      | Descrição                                         |
| --------- | ------------------------------------------------- |
| playerid  | ID do jogador que enviou o update para o trailer. |
| vehicleid | ID do trailer que sofreu o update.                |

## Retornos

0 - Cancela o update ser transmitido para outros jogadores. O update continua a ser processado pelo jogador que enviou.

1 - Processa o update do trailer normalmente e sincroniza com todos os jogadores.

Sempre executada primeiro em filterscripts.

## Exemplos

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## Notas

:::warning

Essa callback é executada com frequência por segundo e por trailer. Você deve evitar realizar grandes operações de gravação e leitura de arquivos.

:::

## Funções Relacionadas

- [GetVehicleTrailer](../functions/GetVehicleTrailer): Verifica qual trailer está engatado no veículo.
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): Verifica se há um trailer engatado ao veículo.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): Engata o trailer ao veículo.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): Desengata o trailer do veículo.
