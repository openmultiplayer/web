---
title: fgetchar
sidebar_label: fgetchar
description: Reads a single character from a file.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Reads a single character from a file.

| Name   | Description                                                      |
| ------ | ---------------------------------------------------------------- |
| handle | The file handle to use; returned by fopen.                       |
| value  | This parameter has no use, just keep it "0".                     |
| utf8   | If true, read a character as UTF-8, otherwise as extended ASCII. |

## ส่งคืน

If succeed, it returns the extended ASCII or UTF-8 value of the character at the current position in the file, otherwise EOF (end of file).

## ตัวอย่าง

```c
// Open "file.txt" in "read only" mode
new File:handle = fopen("file.txt", io_read),

    // Declare "g_char"
    g_char;

// Check, if "file.txt" is open
if (handle)
{
    // Read all characters, while ignoring UTF-8.
    while((g_char = fgetchar(handle, 0, false)) != EOF)
    {
        // Print the character
        printf("[ \"file.txt\" ] 0x%x", g_char);
    }

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
