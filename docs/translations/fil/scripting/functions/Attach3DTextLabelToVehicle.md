---
title: Attach3DTextLabelToVehicle
description: Naglalagay ng 3D Text Label sa isang partikular na sasakyan.
tags: ["vehicle", "3dtextlabel"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Naglalagay ng 3D Text Label sa isang partikular na sasakyan.

| Name      | Description                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| Text3D:id | Ang 3D Text Label na gusto mong ilagay.                                      |
| vehicleid | Ang sasakyan kung saan mo gustong ilagay ang 3D Text Label.                  |
| OffsetX   | Ang Offset-X coordinate ng player na sasakyan (ang sasakyan ay 0.0,0.0,0.0)..|
| OffsetY   | Ang Offset-Y coordinate ng player na sasakyan (ang sasakyan ay 0.0,0.0,0.0)..|
| OffsetZ   | Ang Offset-Z coordinate ng player na sasakyan (ang sasakyan ay 0.0,0.0,0.0)..|

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
new
    Text3D:gVehicle3dText[MAX_VEHICLES], // Pag gawa ng  para sa paggamit mamaya
    gVehicleId;

public OnGameModeInit ( )
{
    gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120); // Paggawa ng Sasakyan.
    gVehicle3dText[gVehicleId] = Create3DTextLabel("Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1);
    Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], vehicle_id, 0.0, 0.0, 2.0); // Paglalagay ng Text Label sa Sasakyan.
}

public OnGameModeExit ( )
{
    Delete3DTextLabel(gVehicle3dText[gVehicleId]);
    return true;
}
```

## Related Functions

- [Create3DTextLabel](Create3DTextLabel): Gumawa ng 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel): Magtanggal ng 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Mag-attach ng 3D text label sa isang player.
- [Update3DTextLabelText](Update3DTextLabelText): Baguhin ang text ng isang 3D text label.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Gumawa ng 3D text label para sa isang player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Tanggalin ang 3D text label ng player.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Baguhin ang text ng 3D text label ng player.