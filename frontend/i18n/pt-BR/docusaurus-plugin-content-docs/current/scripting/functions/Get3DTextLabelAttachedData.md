---
title: Get3DTextLabelAttachedData
sidebar_label: Get3DTextLabelAttachedData
description: "Obtém os dados anexados do rótulo de texto 3D."
tags: ["3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém os dados anexados do rótulo de texto 3D.

| Nome | Descrição |
| ---------------- | ------------------------------------------------------------------------ |
| Text3D:textid | O ID do rótulo de texto 3D do qual obter os dados anexados.                 |
| &parentPlayerid | Uma variável na qual armazenar o parentPlayerid, passado por referência.  |
| &parentVehicleid | Uma variável na qual armazenar o parentVehicleid, passado por referência. |

## Exemplos

Um exemplo para **parentPlayerid**:

```c
new Text3D:gMyLabel;
new parentPlayerid;
new parentVehicleid;

gMyLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, false);
Attach3DTextLabelToPlayer(gMyLabel, playerid, 0.0, 0.0, 0.7);

Get3DTextLabelAttachedData(gMyLabel, parentPlayerid, parentVehicleid);
```
Um exemplo para **parentVehicleid**:

```c
new Text3D:gVehicle3dText[MAX_VEHICLES];
new gVehicleId;

new parentPlayerid;
new parentVehicleid;

gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120);
gVehicle3dText[gVehicleId] = Create3DTextLabel("Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, false);
Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], gVehicleId, 0.0, 0.0, 2.0);

Get3DTextLabelAttachedData(gVehicle3dText[gVehicleId], parentPlayerid, parentVehicleid);
// O `parentVehicleid` será o valor de 'gVehicleId'
```
## Funções Relacionadas

- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Anexe uma etiqueta de texto 3D a um jogador.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Anexa uma etiqueta de texto 3D a um veículo específico.
- [GetPlayer3DTextLabelAttachedData](GetPlayer3DTextLabelAttachedData): Obtém os dados anexados à etiqueta de texto 3D do jogador.
