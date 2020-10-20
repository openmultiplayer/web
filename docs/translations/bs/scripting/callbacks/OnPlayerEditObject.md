---
id: OnPlayerEditObject
title: OnPlayerEditObject
description: Ovaj callback je pozvan kada igrač dovrši uređivanje objekta (EditObject/EditPlayerObject).
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback je pozvan kada igrač dovrši uređivanje objekta (EditObject/EditPlayerObject).

| Ime          | Deskripcija                                                |
| ------------ | ---------------------------------------------------------- |
| playerid     | ID igrača koji je uredi objekat                            |
| playerobject | 0 ako je globalni objekat 1 ako je playerobject.           |
| objectid     | ID uređenog objekta                                        |
| response     | [Tip odgovora](../resources/objecteditionresponsetypes.md) |
| Float:fX     | Ofset X prikvačenog objekta koji je editovan               |
| Float:fY     | Ofset Y prikvačenog objekta koji je editovan               |
| Float:fZ     | Ofset Z prikvačenog objekta koji je editovan               |
| Float:fRotX  | Rotacija X prikvačenog objekta koji je editovan            |
| Float:fRotY  | Rotacija Y prikvačenog objekta koji je editovan            |
| Float:fRotZ  | Rotacija Z prikvačenog objekta koji je editovan            |

## Returns

1 - Spriječiti će da druge skripte primaju ovaj callback.

0 - Označava da će ovaj callback biti proslijeđen narednoj skripti.

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerEditObject(playerid, playerobject, objectid, response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)
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
    if (!playerobject) // If this is a global object, sync the position for other players
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
            // The player clicked on the save icon
            // Do anything here to save the updated object position (and rotation)
        }

        case EDIT_RESPONSE_CANCEL:
        {
            //The player cancelled, so put the object back to it's old position
            if (!playerobject) //Object is not a playerobject
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
