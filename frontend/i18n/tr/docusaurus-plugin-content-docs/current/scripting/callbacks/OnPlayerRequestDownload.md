---
title: OnPlayerRequestDownload
sidebar_label: OnPlayerRequestDownload
description: Fonksiyon, bir oyuncu özel model indirmeleri istediğinde çağrılır.
tags: ["player"]
---

<VersionWarnTR name='callback' version='SA-MP 0.3.DL R1' />

## Açıklama

Fonksiyon, bir oyuncu özel model indirmeleri istediğinde çağrılır.

| Parametre | Açıklama                                                 |
| --------- | -------------------------------------------------------- |
| playerid  | Model indirmesi isteyen oyuncunun ID'si.                 |
| type      | İsteğin türü (aşağıya bakın).                            |
| crc       | Özel model dosyasının CRC sağlama toplamı.               |

## Çalışınca Vereceği Sonuçlar

0 - İndirme isteği reddedildi.

1 - İndirme isteği kabul edildi.

## Örnek

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

## Bağlantılı Fonksiyonlar

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Fonksiyon, oyuncu özel model dosyalarını indirdiğinde çağrılır.
