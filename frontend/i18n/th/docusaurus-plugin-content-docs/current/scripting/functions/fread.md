---
title: fread
sidebar_label: fread
description: Read a single line from a file.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Read a single line from a file.

| Name   | Description                                                    |
| ------ | -------------------------------------------------------------- |
| handle | The handle of the file to read from (returned by fopen).       |
| string | A string array to store the read text in, passed by reference. |
| size   | The number of bytes to read.                                   |
| pack   | Should the string be packed? True/false.                       |

## ส่งคืน

The length of string (the read text) as an integer.

## ตัวอย่าง

```c
// Open "file.txt" in "read only" mode
new File:handle = fopen("file.txt", io_read),

    // Initialize "buf"
    buf[128];

// Check, if the file is opened
if (handle)
{
    // Success

    // Read the whole file
    while(fread(handle, buf)) print(buf);

    // Close the file
    fclose(handle);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
// Open "file.txt" in "read and write" mode
new File:handle = fopen("file.txt"),

    // Initialize "buf"
    buf[128];

// Check, if file is open
if (handle)
{
    // Success

    // Read the whole file
    while(fread(handle, buf)) print(buf);

    // Set the file pointer to the first byte
    fseek(handle, _, seek_begin);

    // Write "I just wrote here!" into this file
    fwrite(handle, "I just wrote here!");

    // Close the file
    fclose(handle);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
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
