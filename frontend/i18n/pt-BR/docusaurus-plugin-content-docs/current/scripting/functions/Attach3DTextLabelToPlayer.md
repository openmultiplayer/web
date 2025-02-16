---
title: Attach3DTextLabelToPlayer
description: Anexa uma text label 3D a um jogador.
tags: ["player", "3dtextlabel"]
---

## Descrição

Anexa uma text label 3D a um jogador.

| Nome      | Descrição                                                             |
| --------- | --------------------------------------------------------------------- |
| Text3D:textid | O ID da text label 3D a ser anexada. Retornado por Create3DTextLabel. |
| playerid  | O ID do jogador ao qual deseja anexar a text label 3D.                |
| OffsetX   | O deslocamento (offset) X da text label 3D até ao jogador.            |
| OffsetY   | O deslocamento (offset) Y da text label 3D até ao jogador.            |
| OffsetZ   | O deslocamento (offset) Z da text label 3D até ao jogador.            |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou ao ser executada. Isso significa que o jogador e/ou TextLabel 3D não existe.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    new Text3D:textLabel = Create3DTextLabel("Olá, eu sou novo aqui!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);
    return 1;
}
```

## Funções Relacionadas

- [Create3DTextLabel](Create3DTextLabel.md): Cria uma text label 3D.
- [Delete3DTextLabel](Delete3DTextLabel.md): Apaga uma text label 3D.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle.md): Anexa uma text label 3D a um veículo.
- [Update3DTextLabelText](Update3DTextLabelText.md): Muda o texto de uma text label 3D.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel.md): Cria uma text label 3D para um jogador.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel.md): Apaga uma text label 3D de um jogador.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText.md): Muda o texto de uma text label 3D de um jogador.
