---
title: OnPlayerRequestDownload
description: This callback is called when a player request for custom model downloads.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## Description

This callback is called when a player request for custom model downloads.

| Name     | Description                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| playerid | The ID of the player that request custom model download.                     |
| type     | The type of the request ([see below](OnPlayerRequestDownload#request-type)). |
| crc      | The CRC checksum of custom model file.                                       |

## Returns

0 - Deny the download request

1 - Accept the download request

## Request Type

```c
#define DOWNLOAD_REQUEST_EMPTY        (0)
#define DOWNLOAD_REQUEST_MODEL_FILE   (1)
#define DOWNLOAD_REQUEST_TEXTURE_FILE (2)
```

## Examples

```c
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

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): This callback is called when a player finishes downloading custom models.
