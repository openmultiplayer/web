---
title: fstat
description: Return the size and the timestamp of a file.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Description

Return the size and the timestamp of a file.

| Name             | Description                                                                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| const filename[] | The name of the file.                                                                                                                                                                                                                             |
| &size            | If the function is successful, this param-eter holds the size of the file on return.                                                                                                                                                              |
| &timestamp       | If the function is successful, this parameter holds the time of the last modification of the file on return.                                                                                                                                      |
| &attrib          | If the function is successful, this parameter holds the file attributes.                                                                                                                                                                          |
| &inode           | If the function is successful, this parameter holds inode number of the file.  An inode number is a number that uniquely identifies a file, and it usually indicates the physical position of (the start of) the file on the disk or memory card. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. (File doesn't exist)

## Examples

```c
new 
    size,
    timestamp,
    attrib,
    inode;

if (fstat("file.txt", size, timestamp, attrib, inode))
{
    // Success

    printf("size = %d, timestamp = %d, attrib = %d, inode = %d", size, timestamp, attrib, inode);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

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
- [frename](frename): Rename a file.
- [fcopy](fcopy): Copy a file.
- [filecrc](filecrc): Return the 32-bit CRC value of a file.
- [diskfree](diskfree): Returns the free disk space.
- [fattrib](fattrib): Set the file attributes.
- [fcreatedir](fcreatedir): Create a directory.
