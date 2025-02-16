---
title: GetCustomModelPath
sidebar_label: GetCustomModelPath
description: Get a custom model path.
tags: ["custom model", "custom skin", "simple model"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get a custom model path.

| Name      | Description                                                     |
| --------- | --------------------------------------------------------------- |
| modelid   | The custom model id to get path from.                           |
| dffPath[] | An array in which to store the dffPath in, passed by reference. |
| dffSize   | The length of the dffPath that should be stored.                |
| txdPath[] | An array in which to store the txdPath in, passed by reference. |
| txdSize   | The length of the txdPath that should be stored.                |

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

- [AddSimpleModel](AddSimpleModel): Adds a new custom simple object model.
- [AddSimpleModelTimed](AddSimpleModelTimed): Adds a new custom simple object model.
- [IsValidCustomModel](IsValidCustomModel): Checks if a custom model ID is valid.
