---
title: fexist
description: Checks if a specific file exists in the scriptfiles directory.
tags: ["file management"]
---

<LowercaseNote />

## Description

Checks if a specific file exists in the scriptfiles directory.

| Name             | Description           |
| ---------------- | --------------------- |
| const filename[] | The name of the file. |

## Returns

The number of files that match the pattern.

## Examples

```c
// Check, if "file.txt" exists
if (fexist("file.txt"))
{
    // Success

    // Print the success
    print("\"file.txt\" exists.");
}
else
{
    // Error
    print("\"file.txt\" does not exist.");
}
```

## Related Functions

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
