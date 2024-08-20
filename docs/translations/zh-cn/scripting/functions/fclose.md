---
title: fclose
description: Closes a file.
tags: ["file management"]
---

<LowercaseNote />

## Description

Closes a file. Files should always be closed when the script no longer needs them (after reading/writing).

| Name        | Description                                           |
| ----------- | ----------------------------------------------------- |
| File:handle | The file handle to close. Returned by [fopen](fopen). |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The file could not be closed. It may already be closed.

## Examples

```c
// Open "file.txt" in "append only" mode
new File:handle = fopen("file.txt", io_append);

// Check, if file is open
if (handle)
{
    // Success

    // Write "Hi there!" into the file
    fwrite(handle, "Hi there!");

    // Close the file
    fclose(handle);
}
else
{
    // Error
    print("Failed to open file \"file.txt\".");
}
```

## Notes

:::warning

Using an invalid handle will crash your server! Get a valid handle by using [fopen](fopen) or [ftemp](ftemp).

:::

## Related Functions

- [fopen](fopen): Open a file.
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
