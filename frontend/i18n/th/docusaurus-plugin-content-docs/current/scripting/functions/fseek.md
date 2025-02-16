---
title: fseek
sidebar_label: fseek
description: Change the current position in the file.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Change the current position in the file. You can either seek forward or backward through the file.

| Name         | Description                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------- |
| handle       | The file handle to use. Returned by fopen.                                                                            |
| position     | The new position in the file, relative to the parameter whence (see below).                                           |
| whence       | The starting position to which parameter position relates.                                                            |
| seek_start   | Set the file position relative to the start of the file (the position parameter must be positive).                    |
| seek_current | Set the file position relative to the current file position: the position parameter is added to the current position. |
| seek_end     | Set the file position relative to the end of the file (parameter position must be zero or negative).                  |

## ส่งคืน

The new position; relative to the start of the file.

## ตัวอย่าง

```c
// Open "file.txt" in "read only" mode
new File:handle = fopen("file.txt", io_read);

// If "file.txt" is open
if (handle)
{
    // Success

    // Jump to the 1st byte of "file.txt", and print its position
    printf("Begin of file position: %d", fseek(handle, 0, seek_start));

    // Jump to the last byte of "file.txt", and print its position
    printf("End of file position: %d", fseek(handle, 0, seek_end));

    // Jump to the same byte of "file.txt", and print its position
    printf("Currrent file position: %d", fseek(handle, 0, seek_current));

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
