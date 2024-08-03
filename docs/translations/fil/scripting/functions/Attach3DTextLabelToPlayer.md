---
title: Attach3DTextLabelToPlayer
description: Mag-attach ng 3D text label sa isang player.
tags: ["player", "3dtextlabel"]
---

## Description

Mag-attach ng 3D text label sa isang player.

| Name      | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| Text3D:textid | Ang ID ng 3D text label na isasama. Ibinalik ng Create3DTextLabel.    |
| playerid  | Ang ID ng player kung saan kalakip ang label.                         |
| OffsetX   | Ang X offset mula sa player.                                          |
| OffsetY   | Ang Y offset mula sa player.                                          |
| OffsetZ   | Ang Z offset mula sa player.                                          |

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa. Nangangahulugan ito na ang player at/o label ay wala.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new Text3D:textLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);
    return 1;
}
```

## Related Functions

- [Create3DTextLabel](Create3DTextLabel): Gumawa ng 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel): Magtanggal ng 3D text label.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Maglakip ng 3D text label sa isang sasakyan.
- [Update3DTextLabelText](Update3DTextLabelText): Baguhin ang text ng isang 3D text label.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Gumawa ng 3D text label para sa isang player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Tanggalin ang 3D text label ng player.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Baguhin ang text ng 3D text label ng player.