---
title: OnPlayerRequestDownload
description: Cette callback est appelée quand un joueur sollicite le téléchargement des custom models.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## Paramètres

Cette callback est appelée quand un joueur sollicite le téléchargement des custom models.

| Nom            | Description                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| `int` playerid | ID du joueur qui sollicite le téléchargement de custom models ID of the player that request custom model download |
| `int` type     | Type de requête (voir _infra_)                                                                                    |
| `int` crc      | Numéro CRC du fichier custom                                                                                      |

## Valeur de retour

**1** - Accepte la requête de téléchargement

**0** - Refuse la requête de téléchargement

## Exemple

```c
#define DOWNLOAD_REQUEST_EMPTY        (0)
#define DOWNLOAD_REQUEST_MODEL_FILE   (1)
#define DOWNLOAD_REQUEST_TEXTURE_FILE (2)

new baseurl[] = "https://files.open-mp.com/server";

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

## Callback connexe

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Appelée lorsqu'un joueur fini le téléchargement.
