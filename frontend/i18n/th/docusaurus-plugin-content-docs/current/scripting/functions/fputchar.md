---
title: fputchar
description: Write one character to a file.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Write one character to a file.

| Name   | Description                                              |
| ------ | -------------------------------------------------------- |
| handle | The File handle to use, earlier opened by fopen().       |
| value  | The character to write into the file.                    |
| utf8   | If true, write in UTF8 mode, otherwise in extended ASCII |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
// Open "file.txt" in "write only" mode
new File:handle = fopen("file.txt", io_write);
if (handle)
{
    // Success

    // Write character "e" into "file.txt"
    fputchar(handle, 'e', false);

    // Close "file.txt"
    fclose(handle);
}
else
{
    // Error
    print("Failed to open \"file.txt\".");
}
```

## บันทึก

:::warning

Using an invalid handle will crash your server! Get a valid handle by using fopen or ftemp.

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
