---
title: MoveObject
description: Memindahkan Object ke posisi baru dengan kecepatan yang ditentukan.
tags: []
---

## Deskripsi

Memindahkan Object ke posisi baru dengan kecepatan yang ditentukan. Pemain/kendaraan akan 'menjelajah' Object saat bergerak.

| Name        | Description                                |
| ----------- | ------------------------------------------ |
| objectid    | ID Object yang akan di pindahkan.          |
| Float:X     | Koordinat X untuk memindahkan Object ke.   |
| Float:Y     | Koordinat Y untuk memindahkan Object ke.   |
| Float:Z     | Koordinat Z untuk memindahkan Object ke.   |
| Float:Speed | Kecepatan gerak Object (satuan per detik). |
| Float:RotX  | Rotasi FINAL X (opsional).                 |
| Float:RotY  | Rotasi FINAL Y (opsional).                 |
| Float:RotZ  | Rotasi FINAL Z (opsional).                 |

## Returns

Waktu yang diperlukan benda untuk bergerak dalam milidetik.

## Contoh

```c
new gAirportGate; //Di suatu tempat di bagian atas skrip Anda

public OnGameModeInit()
{
    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/moveobject", true) == 0)
    {
        new
            string[50],
            moveTime = MoveObject(gAirportGate, 0, 0, 10, 2.00);

        format(string, sizeof(string), "0bject akan selesai bergerak dalam %d milidetik", moveTime);
        SendClientMessage(playerid, 0xFF000000, string);
        return 1;
    }
    return 0;
}
```

## Catatan

:::warning

Function ini dapat digunakan untuk membuat Object berputar dengan lancar. Namun untuk mencapai ini, Object juga harus dipindahkan. Rotasi yang ditentukan adalah rotasi yang akan dimiliki Object setelah gerakan. Oleh karena itu Object tidak akan berputar ketika tidak ada gerakan yang diterapkan. Untuk contoh skrip, lihat skrip filter ferriswheel.pwn yang dibuat oleh Kye yang disertakan dalam paket server (SA-MP 0.3d ke atas). Untuk memahami sepenuhnya catatan di atas, Anda dapat (tetapi tidak terbatas pada) menaikkan posisi z sebesar (+0,001) dan kemudian (-0,001) setelah memindahkannya lagi, karena tidak mengubah X,Y atau Z tidak akan memutar Object.

:::

## Fungsi Terkait

- [CreateObject](CreateObject): Membuat suatu Object.
- [DestroyObject](DestroyObject): Menghapus suatu Object.
- [IsValidObject](IsValidObject): Memeriksa apakah Object tertentu valid.
- [IsObjectMoving](IsObjectMoving): Memeriksa apakah Object tersebut bergerak.
- [StopObject](StopObject): Menghentikan suatu Object agar tidak bergerak.
- [SetObjectPos](SetObjectPos): Mengatur posisi suatu Object.
- [SetObjectRot](SetObjectRot): Mengatur rotasi suatu Object.
- [GetObjectPos](GetObjectPos): Mencari Object.
- [GetObjectRot](GetObjectRot): Memeriksa rotasi suatu Object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Menambahkan Object ke Player.
- [CreatePlayerObject](CreatePlayerObject): Membuat Object hanya untuk satu Player.
- [DestroyPlayerObject](DestroyPlayerObject): Menghapus suatu Object dari Player.
- [IsValidPlayerObject](IsValidPlayerObject): Memeriksa apakah Object Player tertentu valid.
- [MovePlayerObject](MovePlayerObject): Memindahkan Object Player.
- [StopPlayerObject](StopPlayerObject): Menghentikan Object Player agar tidak bergerak.
- [IsPlayerObjectMoving](IsPlayerObjectMoving): Memeriksa apakah Object Player bergerak.
- [SetPlayerObjectPos](SetPlayerObjectPos): Mengatur posisi Object Player.
- [SetPlayerObjectRot](SetPlayerObjectRot): Mengatur rotasi Object Player.
- [GetPlayerObjectPos](GetPlayerObjectPos): Mencari Object Player.
- [GetPlayerObjectRot](GetPlayerObjectRot): Memeriksa rotasi Object Player.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Menambahkan Object pemain ke Player.
