---
title: fcopy
description: Copy a file.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Description

Copy a file.

| Name           | Description                                                                       |
| -------------- | --------------------------------------------------------------------------------- |
| const source[] | The name of the (existing) file that must be copied, optionally including a path. |
| const target[] | The name of the new file, optionally including a full path.                       |

## Returns

**true** on success, **false** on failure.

## Examples

```c
if (fcopy("example.txt", "file.txt"))
{
    // Success
    printf("The file \"example.txt\" copied to \"file.txt\" successfully.");
}
else
{
    // Error
    print("The file \"example.txt\" does not exists, or can't be opened.");
}
```

## Notes

:::warning

If the target file already exists, it is overwritten.

:::

## Related Functions

- [fopen](fopen): Open a file.
- [fclose](fclose): Close a file.
- [ftemp](ftemp): Create a temporary file stream.
- [fremove](fremove): Remove a file.
- [fwrite](fwrite): Write to a file.
- [fputchar](fputchar): Put a character in a file.
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
- [filecrc](filecrc): Return the 32-bit CRC value of a file.
- [diskfree](diskfree): Returns the free disk space.
- [fattrib](fattrib): Set the file attributes.
- [fcreatedir](fcreatedir): Create a directory.
