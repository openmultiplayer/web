---
title: OnPlayerEditObject
description: Ова функција се позива када играч заврши са уређивањем објекта (BeginObjectEditing/BeginPlayerObjectEditing).
tags: ["player", "object"]
---

## Опис

Ова функција се позива када играч заврши са уређивањем објекта ([BeginObjectEditing](../functions/BeginObjectEditing)/[BeginPlayerObjectEditing](../functions/BeginPlayerObjectEditing)).

| Име                    | Опис                                                            |
|------------------------|-----------------------------------------------------------------|
| playerid               | ID играча који едитује објекат.                                 |
| playerobject           | 0 if it is a global object or 1 if it is a playerobject.        |
| objectid               | ID уређеног објекта.                                            |
| EDIT_RESPONSE:response | Тип [одговора](../resources/objecteditionresponsetypes)         |
| Float:fX               | X помак за уређени објекат.                                     |
| Float:fY               | Y помак за уређени објекат.                                     |
| Float:fZ               | Z помак за уређени објекат.                                     |
| Float:fRotX            | X ротација за уређени објекат.                                  |
| Float:fRotY            | Y ротација за уређени објекат.                                  |
| Float:fRotZ            | Z ротација за уређени објекат.                                  |

## Враћа

**1** - Спречиће друге скрипте да приме овај позив.

**0** - Означава да ће овај позив бити прослеђен следећој скрипти.

Увек се прво позива у филтерскриптима.

## Пример

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
    
    if (!playerobject) // Ако је ово глобални објекат, синхронизујте позицију за остале играче.
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
            // Играч је кликнуо на икону за чување 
            // Урадите било шта овде да сачувате ажурирану позицију објекта (и ротацију)
        }

        case EDIT_RESPONSE_CANCEL:
        {
            // Играч је отказао, па вратите објекат на претходну позицију
            if (!playerobject) //Објекат није playerobject
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

## Notes

:::warning

Када користите 'EDIT_RESPONSE_UPDATE', будите свесни да ова функција неће бити позвана када се заврши уређивање у току, што резултира тиме да последње ажурирање 'EDIT_RESPONSE_UPDATE' може бити ван синхронизације са тренутном позицијом објекта.

:::

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [BeginPlayerObjectEditing](../functions/BeginPlayerObjectEditing): Едитуј играчев објекат.
- [BeginObjectEditing](../functions/BeginObjectEditing): Едитуј објекат.
- [CreateObject](../functions/CreateObject): Креирај објекат.
- [DestroyObject](../functions/DestroyObject): Уништи објекат.
- [MoveObject](../functions/MoveObject): Помери објекат.

## Повезани ресурси

- [Типови одговора на уређивање објеката](../resources/objecteditionresponsetypes)
