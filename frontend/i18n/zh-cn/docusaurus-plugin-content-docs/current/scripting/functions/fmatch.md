---
title: fmatch
sidebar_label: fmatch
description: Find a filename matching a pattern.
tags: ["file management"]
---

<LowercaseNote />

## Description

Find a filename matching a pattern.

| Name                     | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| const filename[]         | The string to hold the result in, returned as a packed string.           |
| const pattern[]          | The pattern that should be matched. May contain wildcards.               |
| index                    | The number of the file, in case there are multiple matches. (default: 0) |
| size = sizeof (filename) | The maximum size of parameter name                                       |

## Returns

**true** - Success (the file matches the pattern)

**false** - Failure (the file does not exist or the pattern does not match)

## Examples

```c
if (fmatch("file.txt", "*.txt"))
{
    print("The file matches the pattern.");
}
else
{
    print("The file \"file.txt\" does not exists, or pattern does not match.");
}
```

## Notes

:::warning

This function works on open.mp server but not on SA:MP server.

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
- [fblockwrite](fblockwrite): Write blocks of data into a file.
- [fblockread](fblockread): Read blocks of data from a file.
- [fseek](fseek): Jump to a specific character in a file.
- [flength](flength): Get the file length.
- [fexist](fexist): Check, if a file exists.
- [ftell](ftell): Get the current position in the file.
- [fflush](fflush): Flush a file to disk (ensure all writes are complete).
- [fstat](fstat): Return the size and the timestamp of a file.
- [frename](frename): Rename a file.
- [fcopy](fcopy): Copy a file.
- [filecrc](filecrc): Return the 32-bit CRC value of a file.
- [diskfree](diskfree): Returns the free disk space.
- [fattrib](fattrib): Set the file attributes.
- [fcreatedir](fcreatedir): Create a directory.
