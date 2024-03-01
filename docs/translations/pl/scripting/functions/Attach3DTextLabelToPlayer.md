---
title: Attach3DTextLabelToPlayer
description: Przyczepia tekst 3D do gracza.
tags: ["player", "3dtextlabel"]
---

## Opis

Przyczepia tekst 3D do gracza.

| Nazwa     | Opis                                                             |
| --------- | ---------------------------------------------------------------- |
| Text3D:id | ID tekstu 3D do przyczepienia. Zwracane przez Create3DTextLabel. |
| playerid  | ID gracza, do którego tekst 3D ma zostać przyczepiony.           |
| OffsetX   | Offset X gracza.                                                 |
| OffsetY   | Offset Y gracza.                                                 |
| OffsetZ   | Offset Z gracza.                                                 |

## Zwracane wartości

1: Funkcja wykonała się prawidłowo.

0: Funkcja nie wykonała się prawidłowo. Oznacza to, że gracz i/lub tekst 3D nie istnieją.

## Przykłady

```c
public OnPlayerConnect(playerid)
{
    new Text3D:textLabel = Create3DTextLabel("Hej, jestem tu nowy!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);
    return 1;
}
```

## Powiązane funkcje

- [Create3DTextLabel](Create3DTextLabel.md): Tworzy tekst 3D.
- [Delete3DTextLabel](Delete3DTextLabel.md): Kasuje tekst 3D.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle.md): Przyczepia tekst 3D do pojazdu.
- [Update3DTextLabelText](Update3DTextLabelText.md): Zmienia treść tekstu 3D.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel.md): Tworzy tekst 3D dla konkretnego gracza.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel.md): Kasuje tekst 3D danego gracza.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabel.md): Zmienia treść tekstu 3D danego gracza.
