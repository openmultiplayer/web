---
title: fblockwrite
description: Write data to a file in binary format, while ignoring line brakes and encoding.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Write data to a file in binary format, while ignoring line brakes and encoding.

| Name                 | Description                                |
| -------------------- | ------------------------------------------ |
| handle               | The File handle to use, opened by fopen(). |
| const buffer[]       | The data to write to the file.             |
| size = sizeof buffer | The number of cells to write.              |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
// Define "some_enum"
enum _:some_enum
{
    some_data1,
    some_data2[20],
    Float:some_data3
}

// Declare "some_data"
new some_data[some_enum];

// ...

// Open "file.bin" in "write only" mode
new File:handle = fopen("file.bin", io_write);

// Check, if "file.bin" is open
if (handle)
{
    // Success

    // Write "some_data" into "file.bin"
    fblockwrite(handle, some_data);

    // Close "file.bin"
    fclose(handle);
}
else
{
    // Error
    print("Failed to open \"file.bin\".");
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
