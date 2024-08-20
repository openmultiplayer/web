---
title: fputchar
description: Write one character to a file.
tags: ["file management"]
---

<LowercaseNote />

## Description

Write one character to a file.

| Name        | Description                                                                   |
| ----------- | ----------------------------------------------------------------------------- |
| File:handle | The File handle to use, earlier opened by fopen().                            |
| value       | The character to write into the file.                                         |
| bool:utf8   | If `true`, write in UTF8 mode, otherwise in extended ASCII. (default: `true`) |

## Returns

This function does not return any specific values.

## Examples

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
- [fgetchar](fgetchar): Get a character from a file.
- [fblockwrite](fblockwrite): Write blocks of data into a file.
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
