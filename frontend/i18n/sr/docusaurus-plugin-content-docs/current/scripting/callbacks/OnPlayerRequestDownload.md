---
title: OnPlayerRequestDownload
description: Ова повратна функција се позива када играч затражи преузимање прилагођеног модела.
tags: ["player"]
---

<VersionWarnSR name='повратна функција' version='SA-MP 0.3.DL R1' />

## Опис

Ова повратна функција се позива када играч затражи преузимање прилагођеног модела.

| Име                   | Опис                                                         |
|-----------------------|--------------------------------------------------------------|
| playerid              | ID играча који је затражио преузимање прилагођеног модела.   |
| DOWNLOAD_REQUEST:type | [Тип](../resources/download-requests) захтева.               |
| crc                   | CRC чексума датотеке прилагођеног модела.                    |

## Враћа

**0** - Одбиј захтев за преузимање

**1** - Прихватио захтев за преузимање

## Пример

```c
#define DOWNLOAD_REQUEST_EMPTY        (DOWNLOAD_REQUEST:0)
#define DOWNLOAD_REQUEST_MODEL_FILE   (DOWNLOAD_REQUEST:1)
#define DOWNLOAD_REQUEST_TEXTURE_FILE (DOWNLOAD_REQUEST:2)

new baseUrl[] = "https://assets.open.mp";

public OnPlayerRequestDownload(playerid, DOWNLOAD_REQUEST:type, crc)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new fullUrl[256 + 1];
    new dlFileName[64 + 1];
    new foundFileName = 0;

    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE)
    {
        foundFileName = FindTextureFileNameFromCRC(crc, dlFileName, 64);
    }
    else if (type == DOWNLOAD_REQUEST_MODEL_FILE)
    {
        foundFileName = FindModelFileNameFromCRC(crc, dlFileName, 64);
    }

    if (foundFileName)
    {
        format(fullUrl, sizeof(fullUrl), "%s/%s", baseUrl, dlFileName);
        RedirectDownload(playerid, fullUrl);
    }

    return 0;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Позива се када играч заврпи са преузимањем прилагођених модела.

## Повезани ресурси

- [Типови захтева за преузимање](../resources/download-requests)
