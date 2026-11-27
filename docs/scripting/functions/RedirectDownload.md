---
title: "RedirectDownload | open.mp"
description: "Redirect a player custom AddCharModel or AddSimpleModel download to a specific HTTP webpage."
canonical: https://open.mp/docs/scripting/functions/RedirectDownload
language: en
---

# RedirectDownload

warning

This function was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

## Description

Redirect a player custom [AddCharModel](https://open.mp/docs/scripting/functions/AddCharModel) or [AddSimpleModel](https://open.mp/docs/scripting/functions/AddSimpleModel) download to a specific HTTP webpage.

## Parameters

| Name | Description |
| --- | --- |
| playerid | The ID of the player that requested custom models download. |
| const url\[\] | The URL to redirect download |

## Return Values

**1:** The function executed successfully.

**0:** The function failed to execute.

## Example Usage from dl\_redirect filterscript

```c
new baseurl[] = "https://assets.open.mp";

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

-   [AddCharModel](https://open.mp/docs/scripting/functions/AddCharModel): Adds a new custom character model for download.
-   [AddSimpleModel](https://open.mp/docs/scripting/functions/AddSimpleModel): Adds a new custom simple object model for download.
-   [AddSimpleModelTimed](https://open.mp/docs/scripting/functions/AddSimpleModelTimed): Adds a new custom simple object model for download.

## Related Callbacks

-   [OnPlayerFinishedDownloading](https://open.mp/docs/scripting/callbacks/OnPlayerFinishedDownloading): Called when a player finishes downloading custom models.
