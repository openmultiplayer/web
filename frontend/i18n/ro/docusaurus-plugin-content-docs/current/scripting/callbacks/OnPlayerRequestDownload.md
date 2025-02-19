---
title: OnPlayerRequestDownload
sidebar_label: OnPlayerRequestDownload
description: Acest callback este apelat atunci când un jucător solicită descărcarea unui model personalizat.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## Descriere

Acest callback este apelat atunci când un jucător solicită descărcarea unui model personalizat.

| Nume     | Descriere                                                           |
| -------- | ------------------------------------------------------------------- |
| playerid | ID-ul jucătorului care solicită descărcarea modelului personalizat. |
| type     | Tipul cererii (vezi mai jos).                                       |
| crc      | Suma de control CRC a fișierului model personalizat.                |

## Returnări

0 - Respinge solicitarea de descărcare

1 - Acceptați cererea de descărcare

## Exemple

```c
#define DOWNLOAD_REQUEST_EMPTY        (0)
#define DOWNLOAD_REQUEST_MODEL_FILE   (1)
#define DOWNLOAD_REQUEST_TEXTURE_FILE (2)
new baseurl[] = "https://files.sa-mp.com/server";

public OnPlayerRequestDownload(playerid, type, crc)
{
    new fullurl[256+1];
    new dlfilename[64+1];
    new foundfilename=0;

    if (!IsPlayerConnected(playerid)) return 0;

    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE) {
        foundfilename = FindTextureFileNameFromCRC(crc,dlfilename,64);
    }
    else if (type == DOWNLOAD_REQUEST_MODEL_FILE) {
        foundfilename = FindModelFileNameFromCRC(crc,dlfilename,64);
    }

    if (foundfilename) {
        format(fullurl,256,"%s/%s",baseurl,dlfilename);
        RedirectDownload(playerid,fullurl);
    }

    return 0;
}
```

## Funcții similare

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Apelat când un jucător termină descărcarea modelelor personalizate.