---
title: fmatch
sidebar_label: fmatch
description: Find a filename matching a pattern.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Find a filename matching a pattern.

| Name          | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| name          | The string to hold the result in, returned as a packed string. |
| const pattern | The pattern that should be matched. May contain wildcards.     |
| index         | The number of the file, in case there are multiple matches.    |
| size          | The maximum size of parameter name                             |

## ส่งคืน

true on success, false on failure

## บันทึก

:::warning

This function does not work in the current SA:MP version!

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [fopen](../functions/fopen): Open a file.
- [fclose](../functions/fclose): Close a file.
- [ftemp](../functions/ftemp): Create a temporary file stream.
- [fremove](../functions/fremove): Remove a file.
- [fwrite](../functions/fwrite): Write to a file.
- [fread](../functions/fread): Read a file.
- [fputchar](../functions/fputchar): Put a character in a file.
- [fgetchar](../functions/fgetchar): Get a character from a file.
- [fblockwrite](../functions/fblockwrite): Write blocks of data into a file.
- [fblockread](../functions/fblockread): Read blocks of data from a file.
- [fseek](../functions/fseek): Jump to a specific character in a file.
- [flength](../functions/flength): Get the file length.
- [fexist](../functions/fexist): Check, if a file exists.
- [fmatch](../functions/fmatch): Check, if patterns with a file name matches.
