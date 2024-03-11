---
title: RedirectDownload
description: Redirect a player custom AddCharModel or AddSimpleModel download to a specific HTTP webpage.
tags: ["custom model", "custom skin", "simple model"]
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Description

Redirect a player custom AddCharModel or AddSimpleModel download to a specific HTTP webpage.

## Parameters

| Name        | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| playerid    | The ID of the player that requested custom models download. |
| const url[] | The URL to redirect download                                |

## Return Values

**1:** The function executed successfully.

**0:** The function failed to execute.

## Example Usage from dl_redirect filterscript

```c
new baseurl[] = "https://files.sa-mp.com/server";

public OnPlayerRequestDownload(playerid, type, crc)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new
        fullURL[256],
        fileName[64],
        foundFileName = 0;

    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE)
    {
        foundFileName = FindTextureFileNameFromCRC(crc, fileName, sizeof fileName);
    }
    else if (type == DOWNLOAD_REQUEST_MODEL_FILE)
    {
        foundFileName = FindModelFileNameFromCRC(crc, fileName, sizeof fileName);
    }

    if (foundFileName)
    {
        format(fullURL, sizeof fullURL, "%s/%s", baseurl, fileName);
        RedirectDownload(playerid, fullURL);
    }

    return 0;
}
```

## Related Functions

- [AddCharModel](AddCharModel): Adds a new custom character model for download.
- [AddSimpleModel](AddSimpleModel): Adds a new custom simple object model for download.
- [AddSimpleModelTimed](AddSimpleModelTimed): Adds a new custom simple object model for download.

## Related Callbacks

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Called when a player finishes downloading custom models.
