---
title: OnPlayerEditObject
sidebar_label: OnPlayerEditObject
description: Ovaj callback je pozvan kada igrač dovrši uređivanje objekta (EditObject/EditPlayerObject).
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač dovrši uređivanje objekta (EditObject/EditPlayerObject).

| Ime                    | Deskripcija                                                |
|------------------------|------------------------------------------------------------|
| playerid               | ID igrača koji je uredi objekat                            |
| playerobject           | 0 ako je globalni objekat 1 ako je playerobject.           |
| objectid               | ID uređenog objekta                                        |
| EDIT_RESPONSE:response | [Tip odgovora](../resources/objecteditionresponsetypes.md) |
| Float:fX               | Ofset X prikvačenog objekta koji je editovan               |
| Float:fY               | Ofset Y prikvačenog objekta koji je editovan               |
| Float:fZ               | Ofset Z prikvačenog objekta koji je editovan               |
| Float:fRotX            | Rotacija X prikvačenog objekta koji je editovan            |
| Float:fRotY            | Rotacija Y prikvačenog objekta koji je editovan            |
| Float:fRotZ            | Rotacija Z prikvačenog objekta koji je editovan            |

## Returns

1 - Spriječiti će da druge skripte primaju ovaj callback.

0 - Označava da će ovaj callback biti proslijeđen narednoj skripti.

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerEditObject(playerid, playerobject, objectid, EDIT_RESPONSE:response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)
{
    new
        Float: oldX,
        Float: oldY,
        Float: oldZ,
        Float: oldRotX,
        Float: oldRotY,
        Float: oldRotZ;

    GetObjectPos(objectid, oldX, oldY, oldZ);
    GetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
    if (!playerobject) // Ako je ovo globalni objekat, azurirati poziciju objekta za sve igrace
    {
        if (!IsValidObject(objectid))
        {
            return 1;
        }
        SetObjectPos(objectid, fX, fY, fZ);
        SetObjectRot(objectid, fRotX, fRotY, fRotZ);
    }

    switch (response)
    {
        case EDIT_RESPONSE_FINAL:
        {
            // Igrac je kliknuo na save dugme
            // Uradite bilo sta ovdje da sacuvate azuriranu poziciju i rotaciju objekta
        }

        case EDIT_RESPONSE_CANCEL:
        {
            // Igrac je odustao promjene, vracamo objekat u staru poziciju (prije edita)
            if (!playerobject) // Objekat nije "privatni objekat" (aka player object)
            {
                SetObjectPos(objectid, oldX, oldY, oldZ);
                SetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
            }
            else
            {
                SetPlayerObjectPos(playerid, objectid, oldX, oldY, oldZ);
                SetPlayerObjectRot(playerid, objectid, oldRotX, oldRotY, oldRotZ);
            }
        }
    }
    return 1;
}
```

## Zabilješke

:::warning

Kada koristite 'EDIT_RESPONSE_UPDATE' budite svjesni da ovaj callback neče biti pozvan kada se uređivanje pušta u progres što rezultuje da posljednje ažuriranje 'EDIT_RESPONSE_UPDATE' ne bude usklađen sa trenutnom pozicijom objekata.

:::

## Srodne Funkcije

- [EditObject](../functions/EditObject.md): UrRedi objekat.
- [CreateObject](../functions/CreateObject.md): Kreiraj objekat.
- [DestroyObject](../functions/DestroyObject.md): Uništi objekat.
- [MoveObject](../functions/MoveObject.md): Pomjeri objekat.
