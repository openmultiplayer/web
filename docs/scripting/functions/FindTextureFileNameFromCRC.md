---
title: "FindTextureFileNameFromCRC | open.mp"
description: "Find an existing custom skin or simple object texture file."
canonical: https://open.mp/docs/scripting/functions/FindTextureFileNameFromCRC
language: en
---

# FindTextureFileNameFromCRC

warning

This function was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

## Description

Find an existing custom [skin](https://open.mp/docs/scripting/functions/AddCharModel) or simple [object](https://open.mp/docs/scripting/functions/AddSimpleModel) texture file. The model files are located in `models` server folder by default ([artpath setting](https://open.mp/docs/server/server.cfg#custom-models)).

| Name | Description |
| --- | --- |
| crc | The [CRC](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) checksum of custom model file. |
| output\[\] | An array into which to store the **.txd** file name, passed by reference. |
| size = sizeof (output) | The length of the string that should be stored. |

## Returns

**1:** The function executed successfully.

**0:** The function failed to execute.

## Related Functions

-   [OnPlayerFinishedDownloading](https://open.mp/docs/scripting/callbacks/OnPlayerFinishedDownloading): Called when a player finishes downloading custom models.
