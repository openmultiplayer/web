---
title: OnPlayerEditAttachedObject
description: Callback ini terpanggil ketika player sudah selesai mengedit attached object dengan edit mode.
tags: ["player"]
---

## Deskripsi

Callback ini terpanggil ketika player sudah selesai mengedit attached object dengan edit mode.

| Name                   | Description                                                      |
|------------------------|------------------------------------------------------------------|
| playerid               | ID player yang telah selesai mengedit attached object            |
| EDIT_RESPONSE:response | 0 jika mereka membatalkan (ESC) atau 1 jika mereka mengklik save |
| index                  | The index of the attached object (0-9)                           |
| modelid                | Model/object yang diedit oleh player tersebut                    |
| boneid                 | 'bone' yang sedang diedit di attached object                     |
| Float:fOffsetX         | Offset X untuk objek yang telah diedit                           |
| Float:fOffsetY         | Offset Y untuk objek yang telah diedit                           |
| Float:fOffsetZ         | Offset Z untuk objek yang telah diedit                           |
| Float:fRotX            | Rotasi X untuk objek yang telah diedit                           |
| Float:fRotY            | Rotasi Y untuk objek yang telah diedit                           |
| Float:fRotZ            | Rotasi Z untuk objek yang telah diedit                           |
| Float:fScaleX          | Skala X untuk objek yang telah diedit                            |
| Float:fScaleY          | Skala Y untuk objek yang telah diedit                            |
| Float:fScaleZ          | Skala Z untuk objek yang telah diedit                            |

## Returns

1 - Akan mencegah skrip lain untuk memanggil callback ini.

0 - Mengindikasi bahwa callback ini akan terpanggil di script lain.

Selalu terpanggil pertama kali di filterscripts.

## Contoh

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

// Semua data akan tersimpan pada array diatas.

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response)
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
    else
    {
        SendClientMessage(playerid, COLOR_RED, "Attached object edition not saved.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Notes

:::warning

Edit harus dibatalkan jika responsenya 0. Ini harus dilakukan dengan menyimpan offset dll. dalam array SEBELUM menggunakan EditAttachedObject.

:::

## Related Functions

- [EditAttachedObject](../functions/EditAttachedObject): Mengedit object yang sudah diattach.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): Attach sebuah objek ke player.
