---
title: OnClientCheckResponse
description: This callback is called when a SendClientCheck request completes
tags: []
---

## Description

This callback is called when a SendClientCheck request completes.

| Name          | Description                       |
| ------------- | --------------------------------- |
| playerid      | ID player yang dicek.             |
| actionid      | Tipe cek yang dilakukan.          |
| memaddr       | 'address' yang diminta.           |
| retndata      | Hasil dari cek tersebut.          |

## Returns

Selalu terpanggil pertama kali di filterscripts.

## Contoh

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48) // or 72
    {
        print("The player is connecting using the PC client.");
    }
    return 1;
}
```

## Catatan

:::warning

Callback ini hanya terpanggil di filterscripts.

:::

## Fungsi Terkait

- [SendClientCheck](../functions/SendClientCheck): Melakukan memory check kepada client.
