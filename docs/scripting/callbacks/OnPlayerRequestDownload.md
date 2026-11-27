---
title: "OnPlayerRequestDownload | open.mp"
description: "This callback is called when a player request for custom model downloads."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerRequestDownload
language: en
---

# OnPlayerRequestDownload

warning

This callback was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

## Description

This callback is called when a player request for custom model downloads.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that request custom model download. |
| DOWNLOAD\_REQUEST:type | The [type](https://open.mp/docs/scripting/resources/download-requests) of the request. |
| crc | The [CRC](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) checksum of custom model file. |

## Returns

0 - Deny the download request

1 - Accept the download request

## Examples

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

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerFinishedDownloading](https://open.mp/docs/scripting/callbacks/OnPlayerFinishedDownloading): This callback is called when a player finishes downloading custom models.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [FindModelFileNameFromCRC](https://open.mp/docs/scripting/functions/FindModelFileNameFromCRC): Find an existing custom skin or simple object model file.
-   [FindTextureFileNameFromCRC](https://open.mp/docs/scripting/functions/FindTextureFileNameFromCRC): Find an existing custom skin or simple object texture file.
-   [RedirectDownload](https://open.mp/docs/scripting/functions/RedirectDownload): Redirect a player's custom AddCharModel or AddSimpleModel download to a specific HTTP webpage.

## Related Resources

-   [Download Request Types](https://open.mp/docs/scripting/resources/download-requests)
