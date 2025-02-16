---
title: OnPlayerEditAttachedObject
sidebar_label: OnPlayerEditAttachedObject
description: Ова функција се позива када играч заврши режим уређивања прикључених објеката.
tags: ["player", "object", "attachment"]
---

## Опис

Ова функција се позива када играч заврши режим уређивања прикључених објеката.

| Име                    | Опис                                                             |
|------------------------|----------------------------------------------------------------- |
| playerid               | ID играча који је завршио режим уређивања                        |
| EDIT_RESPONSE:response | 0 ако су отказали (ESC) или 1 ако су кликнули на икону за чување |
| index                  | Индекс прикљученог објекта (0-9)                                 |
| modelid                | Модел прикљученог објекта који је уређен                         |
| boneid                 | Кост која је уређена на прикљученом објекту                      |
| Float:fOffsetX         | X помак за прикључени објекат који је уређен                     |
| Float:fOffsetY         | Y помак за прикључени објекат који је уређен                     |
| Float:fOffsetZ         | Z помак за прикључени објекат који је уређен                     |
| Float:fRotX            | X ротација за прикључени објекат који је уређен                  |
| Float:fRotY            | Y ротација за прикључени објекат који је уређен                  |
| Float:fRotZ            | Z ротација за прикључени објекат који је уређен                  |
| Float:fScaleX          | X скала за прикључени објекат који је уређен                     |
| Float:fScaleY          | Y скала за прикључени објекат који је уређен                     |
| Float:fScaleZ          | Z скала за прикључени објекат који је уређен                     |

## Враћа

**1** - Спречиће друге скрипте да приме овај позив.

**0** - Означава да ће овај позив бити прослеђен следећој скрипти.

Увек се прво позива у филтерскриптама.

## Пример

```c
enum attached_object_data
{
    Float:ao_x,
    Float:ao_y,
    Float:ao_z,
    Float:ao_rx,
    Float:ao_ry,
    Float:ao_rz,
    Float:ao_sx,
    Float:ao_sy,
    Float:ao_sz
}

new ao[MAX_PLAYERS][MAX_PLAYER_ATTACHED_OBJECTS][attached_object_data];

// Податке треба чувати у горњем низу када су прикључени објекти прикључени.

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response == EDIT_RESPONSE_FINAL)
    {
        SendClientMessage(playerid, COLOR_GREEN, "Attached object edition saved.");

        ao[playerid][index][ao_x] = fOffsetX;
        ao[playerid][index][ao_y] = fOffsetY;
        ao[playerid][index][ao_z] = fOffsetZ;
        ao[playerid][index][ao_rx] = fRotX;
        ao[playerid][index][ao_ry] = fRotY;
        ao[playerid][index][ao_rz] = fRotZ;
        ao[playerid][index][ao_sx] = fScaleX;
        ao[playerid][index][ao_sy] = fScaleY;
        ao[playerid][index][ao_sz] = fScaleZ;
    }
    else if (response == EDIT_RESPONSE_CANCEL)
    {
        SendClientMessage(playerid, COLOR_RED, "Attached object edition not saved.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Белешке

:::warning

Уређивања треба да буду одбачена ако је одговор био '0' (отказано). Ово треба да се уради чувањем помака итд. у низу ПРЕ него што се користи [EditAttachedObject](../functions/EditAttachedObject).

:::

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [EditAttachedObject](../functions/EditAttachedObject): Уреди прикључени објекат.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): Прилепи објекат на играча.
