---
título: OnPlayerRequestDownload
descripción: Este callback se llama cuando un jugador solicita por descargas de modelos personalizados. 
tags: ["player"]
---

<VersionWarnES name='callback' version='SA-MP 0.3.DL R1' />

## Descripción

Este callback se llama cuando un jugador solicita por descargas de modelos personalizados.

| Nombre   | Descripción                                              |
| -------- | -------------------------------------------------------- |
| playerid | El ID del jugador que solicita descargar modelos custom. |
| type     | El tipo de solicitud (ver abajo).                        |
| crc      | La suma de comprobación CRC del archivo del modelo.      |

## Devoluciones

0 - Denegar la solicitud de descarga

1 - Aceptar la solicitud de descarga

## Ejemplos

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

## Funciones Relacionadas

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Se llama cuando un jugador termina de descargar modelos personalizados.
