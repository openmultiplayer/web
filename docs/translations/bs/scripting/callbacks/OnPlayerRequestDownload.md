---
title: OnPlayerRequestDownload
description: Ovaj callback je pozvan kada igrač zatraži preuzimanje custom modela.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.DL R1 i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback je pozvan kada igrač zatraži preuzimanje custom modela.

| Ime      | Deskripcija                                           |
| -------- | ----------------------------------------------------- |
| playerid | ID igrača koji je zatražio preuzimanje custom modela. |
| type     | Tip zahtjevaThe type of the request (pogledaj ispod). |
| crc      | CRC kontrolna suma datoteke prilagođenog modela.      |

## Returns

0 - Odbij zahtjev za preuzimanje

1 - Prihvati zahtjev za preuzimanje

## Primjeri

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

## Srodne Funkcije

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading.md): Pozvano kada igrač završi sa preuzimanjem custom modela.
