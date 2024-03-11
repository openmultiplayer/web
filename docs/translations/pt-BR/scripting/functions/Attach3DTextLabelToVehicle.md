---
title: Attach3DTextLabelToVehicle
description: Anexa uma Text Label 3D a um veículo específico.
tags: ["vehicle", "3dtextlabel"]
---

## Descrição

Anexa uma Text Label 3D a um veículo específico.

| Nome      | Descrição                                                                    |
| --------- | ---------------------------------------------------------------------------- |
| Text3D:textid | O ID da 3D text label a ser anexada.                                         |
| vehicleid | O ID do veículo ao qual deseja anexar a 3D text label.                       |
| OffsetX   | O deslocamento (offset) da coordenada X do veículo (O veículo é 0.0,0.0,0.0) |
| OffsetY   | O deslocamento (offset) da coordenada Y do veículo (O veículo é 0.0,0.0,0.0) |
| OffsetZ   | O deslocamento (offset) da coordenada Z do veículo (O veículo é 0.0,0.0,0.0) |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new
    Text3D:gVehicle3dText[MAX_VEHICLES], // Criando a TextLabel para usar depois
    gVehicleId;

public OnGameModeInit ( )
{
    gVehicleId = CreateVehicle(510, 0.0. 0.0, 15.0, 5, 0, 120); // Criando o veículo.
    gVehicle3dText[gVehicleId] = Create3DTextLabel("Exemplo Texto", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1);
    Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], vehicle_id, 0.0, 0.0, 2.0); // Anexando a TextLabel ao veículo.
}

public OnGameModeExit ( )
{
    Delete3DTextLabel(gVehicle3dText[gVehicleId]);
    return true;
}
```

## Funções Relacionadas

- [Create3DTextLabel](Create3DTextLabel.md): Cria uma text label 3D.
- [Delete3DTextLabel](Delete3DTextLabel.md): Apaga uma text label 3D.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer.md): Anexa uma text label 3D a um jogador.
- [Update3DTextLabelText](Update3DTextLabelText.md): Muda o texto de uma 3D text label 3D.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel.md): Cria uma text label 3D para um jogador.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel.md): Apaga uma text label 3D de um jogador.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText.md): Muda o texto de uma text label 3D de um jogador.
