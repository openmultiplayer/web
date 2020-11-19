---
title: fremove
description: Delete a file.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Delete a file.

| Name   | Description                                               |
| ------ | --------------------------------------------------------- |
| name[] | The path of the file to delete. (NOTE: NOT a file handle) |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The file doesn't exist, or you don't have permission to delete it.

## ตัวอย่าง

```c
fremove("Example.txt");
```

## บันทึก

:::tip

Files that are currently open (fopen) must be closed first (fclose) to be deleted.

:::

:::warning

The file path must be valid.

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
