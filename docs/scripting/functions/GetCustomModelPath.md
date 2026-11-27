---
title: "GetCustomModelPath | open.mp"
description: "Get a custom model path."
canonical: https://open.mp/docs/scripting/functions/GetCustomModelPath
language: en
---

# GetCustomModelPath

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get a custom model path.

| Name | Description |
| --- | --- |
| modelid | The custom model id to get path from. |
| dffPath\[\] | An array in which to store the dffPath in, passed by reference. |
| dffSize | The length of the dffPath that should be stored. |
| txdPath\[\] | An array in which to store the txdPath in, passed by reference. |
| txdSize | The length of the txdPath that should be stored. |

## Examples

```c
new
    modelid = -2000,
    dffPath[64],
    txdPath[64];

GetCustomModelPath(modelid, dffPath, sizeof(dffPath), txdPath, sizeof(txdPath));

printf("[Custom model id %d path]\n\
    dff: %s\n\
    txd: %s",
    modelid, dffPath, txdPath);
```

## Related Functions

-   [AddSimpleModel](https://open.mp/docs/scripting/functions/AddSimpleModel): Adds a new custom simple object model.
-   [AddSimpleModelTimed](https://open.mp/docs/scripting/functions/AddSimpleModelTimed): Adds a new custom simple object model.
-   [IsValidCustomModel](https://open.mp/docs/scripting/functions/IsValidCustomModel): Checks if a custom model ID is valid.
