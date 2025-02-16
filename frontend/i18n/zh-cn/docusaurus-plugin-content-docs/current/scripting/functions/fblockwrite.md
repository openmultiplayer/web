---
title: fblockwrite
description: Write data to a file in binary format, while ignoring line brakes and encoding.
tags: ["file management"]
---

<LowercaseNote />

## Description

Write data to a file in binary format, while ignoring line brakes and encoding.

| Name                   | Description                                |
| ---------------------- | ------------------------------------------ |
| File:handle            | The File handle to use, opened by fopen(). |
| const buffer[]         | The data to write to the file.             |
| size = sizeof (buffer) | The number of cells to write.              |

## Returns

This function does not return any specific values.

## Examples

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

## Notes

:::warning

Using an invalid handle will crash your server! Get a valid handle by using [fopen](fopen) or [ftemp](ftemp).

:::

## Related Functions

- [fopen](fopen): Open a file.
- [fclose](fclose): Close a file.
- [ftemp](ftemp): Create a temporary file stream.
- [fremove](fremove): Remove a file.
- [fwrite](fwrite): Write to a file.
- [fread](fread): Read a file.
- [fputchar](fputchar): Put a character in a file.
- [fgetchar](fgetchar): Get a character from a file.
- [fblockread](fblockread): Read blocks of data from a file.
- [fseek](fseek): Jump to a specific character in a file.
- [flength](flength): Get the file length.
- [fexist](fexist): Check, if a file exists.
- [fmatch](fmatch): Check, if patterns with a file name matches.
- [ftell](ftell): Get the current position in the file.
- [fflush](fflush): Flush a file to disk (ensure all writes are complete).
- [fstat](fstat): Return the size and the timestamp of a file.
- [frename](frename): Rename a file.
- [fcopy](fcopy): Copy a file.
- [filecrc](filecrc): Return the 32-bit CRC value of a file.
- [diskfree](diskfree): Returns the free disk space.
- [fattrib](fattrib): Set the file attributes.
- [fcreatedir](fcreatedir): Create a directory.
