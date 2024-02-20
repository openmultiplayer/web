---
title: OnPlayerEditObject
description: Acest callback este apelat atunci când un jucător termină editarea unui obiect (EditObject/EditPlayerObject).
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3e' />

## Descriere

Acest callback este apelat atunci când un jucător termină editarea unui obiect (EditObject/EditPlayerObject).

| Nume                   | Descriere                                                      |
|------------------------|----------------------------------------------------------------|
| playerid               | ID-ul jucătorului care a editat un obiect                      |
| playerobject           | 0 dacă este un obiect global sau 1 dacă este un obiect player. |
| objectid               | ID-ul obiectului editat                                        |
| EDIT_RESPONSE:response | [type of response](../resources/objecteditionresponsetypes)    |
| Float:fX               | Decalajul X pentru obiectul care a fost editat                 |
| Float:fY               | Decalajul Y pentru obiectul care a fost editat                 |
| Float:fZ               | Decalajul Z pentru obiectul care a fost editat                 |
| Float:fRotX            | Rotația X pentru obiectul care a fost editat                   |
| Float:fRotY            | Rotația Y pentru obiectul care a fost editat                   |
| Float:fRotZ            | Rotația Z pentru obiectul care a fost editat                   |

## Returnări

1 - Va împiedica alte scripturi să primească acest callback.

0 - Indică faptul că acest callback va fi transmis următorului script.

Este întotdeauna numit primul în filterscript-uri.

## Exemple

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
    if (!playerobject) // Dacă acesta este un obiect global, sincronizați poziția pentru alți jucători
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
            // Jucătorul a făcut clic pe pictograma de salvare
            // Faceți orice aici pentru a salva poziția actualizată a obiectului (și rotația)
        }

        case EDIT_RESPONSE_CANCEL:
        {
            //Jucătorul a anulat, așa că puneți obiectul înapoi în vechea poziție
            if (!playerobject) //Obiectul nu este un obiect player
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

## Note

:::warning

Când utilizați „EDIT_RESPONSE_UPDATE”, rețineți că acest callback nu va fi apelat la eliberarea unei editări în curs, ceea ce duce la desincronizarea ultimei actualizări a „EDIT_RESPONSE_UPDATE” cu poziția curentă a obiectelor.

:::

## Related Functions

- [EditObject](../functions/EditObject): Editați un obiect.
- [CreateObject](../functions/CreateObject): Creați un obiect.
- [DestroyObject](../functions/DestroyObject): Distruge un obiect.
- [MoveObject](../functions/MoveObject): Mutați un obiect.