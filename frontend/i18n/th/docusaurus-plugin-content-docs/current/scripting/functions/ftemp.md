---
title: ftemp
sidebar_label: ftemp
description: Creates a file in the "tmp", "temp" or root directory with random name for reading and writing.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Creates a file in the "tmp", "temp" or root directory with random name for reading and writing. The file is deleted after fclose() is used on the file.

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
// Create a temporary file stream
new File:t_handle = ftemp(),

    // Declare "handle"
    File:handle,

    // Declare "g_char"
    g_char;

// Check, if temporary file stream is open
if (t_handle)
{
    // Success

    // Open "file.txt" in "read only" mode and check, if the file is open
    if (handle = fopen("file.txt", io_read))
    {
        // Get all the characters from "file.txt"
        while((g_char = fgetchar(handle, 0, false)) != EOF)
        {
            // Write character in lowercase into the temporary file stream
            fputchar(t_handle, tolower(g_char), false);
        }

        // Close "file.txt"
        fclose(handle);

        // Set the file pointer of the temporary file stream to the first byte
        fseek(t_handle, _, seek_begin);

        // Open "file1.txt" in "write only" mode, and check, if the file is open
        if (handle = fopen("file1.txt", io_write))
        {
            // Success

            // Get all the characters from the temporary file stream
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // Write character into "file1.txt"
                fputchar(handle, g_char, false);
            }

            // Close "file1.txt"
            fclose(handle);

            // Set the file pointer of the temporary file stream to the first byte
            fseek(t_handle, _, seek_begin);
        }
        else
        {
            // Error
            print("Failed to open file \"file1.txt\".");
        }

        // Open "file2.txt" in "write only" mode, and check, if the file is open
        if (handle = fopen("file2.txt", io_write))
        {
            // Success

            // Get all the characters from the temporary file stream
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // Write character into "file2.txt"
                fputchar(handle, g_char, false);
            }

            // Close "file2.txt"
            fclose(handle);
        }
        else
        {
            // Error
            print("Failed to open file \"file2.txt\".");
        }
    }
    else
    {
        // Error
        print("Failed to open file \"file.txt\".");
    }

    // Close the temporary file stream
    fclose(t_handle);
}
else
{
    // Error
    print("Failed to create a temporary file stream.");
}
```

## บันทึก

:::warning

This function can crash the server when the right directory isn't created.

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
