Attach3DTextLabelToPlayer.md
---
title: Attach3DTextLabelToPlayer
description: Attach a 3D text label to a player.
tags: ["player", "3dtextlabel"]
---

Esta função foi implementada no SA-MP 0.3a e não funcionará em versões anteriores.

## Descrição

Attach a 3D text label to a player.

| Nome      | Descrição                                                             |
| --------- | --------------------------------------------------------------------- |
| Text3D:id | The ID of the 3D text label to attach. Returned by Create3DTextLabel. |
| playerid  | The ID of the player to attach the label to.                          |
| OffsetX   | The X offset from the player.                                         |
| OffsetY   | The Y offset from the player.                                         |
| OffsetZ   | The Z offset from the player.                                         |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou ao ser executada. Isso significa que o jogador e/ou This means the player and/or label do not exist.

Isso significa que o player e / ou rótulo não existem.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    new Text3D:textLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);
    return 1;
}
```

## Funções Relacionadas

- [Create3DTextLabel](Create3DTextLabel.md): Create a 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel.md): Delete a 3D text label.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle.md): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](Update3DTextLabelText.md): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel.md): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel.md): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText.md): Change the text of a player's 3D text label.
