---
title: FindTextureFileNameFromCRC
description: Find an existing custom skin or simple object texture file.
tags: []
---

:::warning

This function was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

:::

## คำอธิบาย

Find an existing custom skin or simple object texture file. The model files are located in models server folder by default (artpath setting).

| Name        | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| crc         | The CRC checksum of custom model file.                                |
| retstr[]    | An array into which to store the .txd file name, passed by reference. |
| retstr_size | The length of the string that should be stored.                       |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute.

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Called when a player finishes downloading custom models.
