---
title: OnPlayerKeyStateChange
description: This callback is called when the state of any supported key is changed (pressed/released).
tags: ["player"]
---

## คำอธิบาย

This callback is called when the state of any supported key is changed (pressed/released). Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right).

| Name     | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| playerid | The ID of the player that pressed or released a key.                     |
| newkeys  | A map (bitmask) of the keys currently held - see here.                   |
| oldkeys  | A map (bitmask) of the keys held prior to the current change - see here. |

## ส่งคืน

มันถูกเรียกในเกมโหมดก่อนเสมอ

## ตัวอย่าง

```c
if (newkeys == KEY_FIRE)
if (newkeys & KEY_FIRE)
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE))
if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE))
if ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE) && (newkeys & KEY_CROUCH) && !(oldkeys & KEY_CROUCH))
if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))
// HOLDING(keys)
#define HOLDING(%0) \
    ((newkeys & (%0)) == (%0))
if (HOLDING( KEY_FIRE ))
if (HOLDING( KEY_FIRE | KEY_CROUCH ))
// PRESSED(keys)
#define PRESSED(%0) \
    (((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0)))
if (PRESSED( KEY_FIRE ))
if (PRESSED( KEY_FIRE | KEY_CROUCH ))
// PRESSING(keyVariable, keys)
#define PRESSING(%0,%1) \
    (%0 & (%1))
if (PRESSING( newkeys, KEY_FIRE ))
if (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))
// RELEASED(keys)
#define RELEASED(%0) \
    (((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0)))
if (RELEASED( KEY_FIRE ))
if (RELEASED( KEY_FIRE | KEY_CROUCH ))
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if (PRESSED(KEY_FIRE))
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            AddVehicleComponent(GetPlayerVehicleID(playerid), 1010);
        }
    }
    return 1;
}
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if (PRESSED(KEY_JUMP))
    {
        new
            Float:x,
            Float:y,
            Float:z;
        GetPlayerPos(playerid, x, y, z);
        SetPlayerPos(playerid, x, y, z + 10.0);
    }
    return 1;
}
new
    Float:gPlayerHealth[MAX_PLAYERS];

#if !defined INFINITY
    #define INFINITY (Float:0x7F800000)
#endif

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if (PRESSED(KEY_ACTION))
    {
        // They just pressed the action key, save their
        // old health for restoration.
        GetPlayerHealth(playerid, gPlayerHealth[playerid]);
        SetPlayerHealth(playerid, INFINITY);
    }
    else if (RELEASED(KEY_ACTION))
    {
        // They just let go of action - restore
        // their old health again.
        SetPlayerHealth(playerid, gPlayerHealth[playerid]);
    }
    return 1;
}
```

```
0b00001000

0b00100000

0b00101000

newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000

newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000

newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000

newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

:::tip

Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right). They can only be detected with GetPlayerKeys (in OnPlayerUpdate or a timer).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerKeys](../../scripting/functions/GetPlayerKeys.md): Check what keys a player is holding.
