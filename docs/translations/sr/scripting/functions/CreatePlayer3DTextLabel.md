---
title: CreatePlayer3DTextLabel
description: Kreira 3D Text Label samo za posebnog igraca.
tags: ["player", "3dtextlabel"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3d i ne radi u nizim verzijama!

:::

## Opis

Kreira 3D Text Label samo za posebnog igraca.

| Ime             | Opis                                                                   |
| --------------- | ---------------------------------------------------------------------- |
| playerid        | Igrac koji treba da vidi novokreirani 3D label.                        |
| text[]          | Tekst koji ce se prikazati                                             |
| color           | Boja teksta                                                            |
| x               | X koordinata                                                           |
| y               | Y koordinata                                                           |
| z               | Z koordinata                                                           |
| DrawDistance    | Distance sa koje igrac moze videti label                               |
| attachedplayer  | Igrac za koga zelimo zakaciti 3D label. (Nijedan: INVALID_PLAYER_ID)   |
| attachedvehicle | Vozilo za koga zelimo zakaciti 3D label. (Nijedno: INVALID_VEHICLE_ID) |
| testLOS         | 0/1 Opcija da se tekst labela ne moze videti kroz zidove               |

## Vracanje

ID od novokreiranog 3D labela, ili INVALID_3DTEXT_ID ako smo presli ogranicenje 3D Player Text Labela (MAX_3DTEXT_PLAYER).

## Primeri

```c
if (strcmp(cmd, "/playerlabel", true) == 0)
{
    new
        PlayerText3D: playerTextId,
        Float: X, Float: Y, Float: Z;

    GetPlayerPos(playerid, X, Y, Z);
    playerTextId = CreatePlayer3DTextLabel(playerid, "Zdravo\nJa sam na tvojoj poziciji!", 0x008080FF, X, Y, Z, 40.0);
    return 1;
}
```

## Beleske

:::tip

DrawDistance izgleda kao da je manji u spectate modu.

:::

:::warning

Ako je text[] prazan, igraci blizu labela mogu da crash-aju.

:::

## Related Functions

- [Create3DTextLabel](Create3DTextLabel.md): Kreira 3D Text Label.
- [Delete3DTextLabel](Delete3DTextLabel.md): Brise 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer.md): Zakaci 3D text label za igraca.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle.md): Zakaci 3D text label za vozilo.
- [Update3DTextLabelText](Update3DTextLabelText.md): Promeni tekst 3D text labela.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel.md): Prise Player 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText.md): Promeni tekst Player 3D text labela.
