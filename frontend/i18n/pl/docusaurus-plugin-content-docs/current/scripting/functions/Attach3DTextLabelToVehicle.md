---
title: Attach3DTextLabelToVehicle
sidebar_label: Attach3DTextLabelToVehicle
description: Przyczepia tekst 3D do konkretnego pojazdu.
tags: ["vehicle", "3dtextlabel"]
---

## Opis

Przyczepia tekst 3D do konkretnego pojazdu.

| Nazwa     | Opis                                                              |
| --------- | ----------------------------------------------------------------- |
| Text3D:textid | Tekst 3D, który chcesz przyczepić.                                |
| vehicleid | Pojazd, do którego chcesz przyczepić tekst 3D.                    |
| OffsetX   | Offset X od koordynatów pojazdu gracza (pojazd to 0.0, 0.0, 0.0). |
| OffsetY   | Offset Y od koordynatów pojazdu gracza (pojazd to 0.0, 0.0, 0.0). |
| OffsetZ   | Offset Z od koordynatów pojazdu gracza (pojazd to 0.0, 0.0, 0.0). |

## Zwracane wartości

Ta funkcja nie zwraca żadnych konkretnych wartości.

## Przykłady

```c
new
    Text3D:gVehicle3dText[MAX_VEHICLES], // Tworzymy tekst 3D do późniejszego użytku
    gVehicleId;

public OnGameModeInit ( )
{
    gVehicleId = CreateVehicle(510, 0.0. 0.0, 15.0, 5, 0, 120); // Tworzymy pojazd.
    gVehicle3dText[gVehicleId] = Create3DTextLabel("Przykładowy tekst", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1);
    Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], vehicle_id, 0.0, 0.0, 2.0); // Przyczepiamy tekst 3D do pojazdu.
}

public OnGameModeExit ( )
{
    Delete3DTextLabel(gVehicle3dText[gVehicleId]);
    return true;
}
```

## Powiązane funkcje

- [Create3DTextLabel](Create3DTextLabel): Tworzy tekst 3D.
- [Delete3DTextLabel](Delete3DTextLabel): Kasuje tekst 3D.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Przyczepia tekst 3D do gracza.
- [Update3DTextLabelText](Update3DTextLabelText): Zmienia treść tekstu 3D.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Tworzy tekst 3D dla jednego gracza.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Kasuje tekst 3D danego gracza.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabel): Zmienia treść tekstu 3D danego gracza.
