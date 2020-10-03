---
id: RedirectDownload
title: RedirectDownload
description: Redirect a player custom AddCharModel or AddSimpleModel download to a specific HTTP webpage.
tags: []
---

:::note

This function was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

:::

## Description

Redirect a player custom AddCharModel or AddSimpleModel download to a specific HTTP webpage.

## Parameters

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player that requested custom models download. |
| url[]    | The URL to redirect download                                |

## Return Values

- 1: The function executed successfully.
- 0: The function failed to execute.

## Example Usage from dl_redirect filterscript

```c
new baseurl[] = "https://files.sa-mp.com/server";

public OnPlayerRequestDownload(playerid, type, crc)
{
    new fullurl[256+1];
    new dlfilename[64+1];
    new foundfilename=0;

    if(!IsPlayerConnected(playerid)) return 0;

    if(type == DOWNLOAD_REQUEST_TEXTURE_FILE) {
        foundfilename = FindTextureFileNameFromCRC(crc,dlfilename,64);
    }
    else if(type == DOWNLOAD_REQUEST_MODEL_FILE) {
        foundfilename = FindModelFileNameFromCRC(crc,dlfilename,64);
    }

    if(foundfilename) {
        format(fullurl,256,"%s/%s",baseurl,dlfilename);
        RedirectDownload(playerid,fullurl);
    }

    return 0;
}
```

## Related Functions

- [AddCharModel](AddCharModel): Adds a new custom character model for download.
- [AddSimpleModel](AddSimpleModel): Adds a new custom simple object model for download.
- [AddSimpleModelTimed](AddSimpleModelTimed): Adds a new custom simple object model for download.
- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Called when a player finishes downloading custom models.
