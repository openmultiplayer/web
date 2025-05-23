---
title: OnPlayerEditObject
sidebar_label: OnPlayerEditObject
description: This callback is called when a player finishes editing an object (EditObject/EditPlayerObject).
tags: ["player"]
---

## คำอธิบาย

This callback is called when a player finishes editing an object (EditObject/EditPlayerObject).

| Name                   | Description                                                        |
|------------------------|--------------------------------------------------------------------|
| playerid               | The ID of the player that edited an object                         |
| playerobject           | 0 if it is a global object or 1 if it is a playerobject.           |
| objectid               | The ID of the edited object                                        |
| EDIT_RESPONSE:response | The [type of response](../resources/objecteditionresponsetypes.md) |
| Float:fX               | The X offset for the object that was edited                        |
| Float:fY               | The Y offset for the object that was edited                        |
| Float:fZ               | The Z offset for the object that was edited                        |
| Float:fRotX            | The X rotation for the object that was edited                      |
| Float:fRotY            | The Y rotation for the object that was edited                      |
| Float:fRotZ            | The Z rotation for the object that was edited                      |

## ส่งคืน

1 - Will prevent other scripts from receiving this callback.

0 - Indicates that this callback will be passed to the next script.

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerEditObject(playerid, playerobject, objectid, EDIT_RESPONSE:response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)
{
    new Float:oldX, Float:oldY, Float:oldZ, Float:oldRotX, Float:oldRotY, Float:oldRotZ;
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

    if (response == EDIT_RESPONSE_FINAL)
    {
        // The player clicked on the save icon
        // Do anything here to save the updated object position (and rotation)
    }

    if (response == EDIT_RESPONSE_CANCEL)
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
    return 1;
}
```

## บันทึก

:::warning

When using 'EDIT_RESPONSE_UPDATE' be aware that this callback will not be called when releasing an edit in progress resulting in the last update of 'EDIT_RESPONSE_UPDATE' being out of sync of the objects current position.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [EditObject](../../scripting/functions/EditObject.md): Edit an object.
- [CreateObject](../../scripting/functions/CreateObject.md): Create an object.
- [DestroyObject](../../scripting/functions/DestroyObject.md): Destroy an object.
- [MoveObject](../../scripting/functions/MoveObject.md): Move an object.
