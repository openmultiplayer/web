---
title: OnPlayerRequestDownload
sidebar_label: OnPlayerRequestDownload
description: Deze callback wordt aangeroepen wanneer een speler vraagt om aangepaste modellen te downloaden.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler vraagt om aangepaste modellen te downloaden.

| Naam                  | Beschrijving                                                 |
| --------------------- | ----------------------------------------------------------- |
| playerid              | Het ID van de speler die om de download van aangepaste modellen vroeg. |
| DOWNLOAD_REQUEST:type | Het [type](../resources/download-requests) van de aanvraag. |
| crc                   | De CRC-checksum van het aangepaste modelfile.              |

## Returns

0 - Weiger de downloadaanvraag

1 - Accepteer de downloadaanvraag

## Voorbeelden

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

## Gerelateerde Callbacks

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Deze callback wordt aangeroepen wanneer een speler klaar is met het downloaden van aangepaste modellen.

## Gerelateerde Resources

- [Download Request Types](../resources/download-requests)


