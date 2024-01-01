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

- [fopen](fopen): Open a file.
- [fclose](fclose): Close a file.
- [ftemp](ftemp): Create a temporary file stream.
- [fremove](fremove): Remove a file.
- [fwrite](fwrite): Write to a file.
- [fread](fread): Read a file.
- [fputchar](fputchar): Put a character in a file.
- [fgetchar](fgetchar): Get a character from a file.
- [fblockwrite](fblockwrite): Write blocks of data into a file.
- [fblockread](fblockread): Read blocks of data from a file.
- [fseek](fseek): Jump to a specific character in a file.
- [flength](flength): Get the file length.
- [fexist](fexist): Check, if a file exists.
- [fmatch](fmatch): Check, if patterns with a file name matches.
