---
title: fread
description: Read a single line from a file.
tags: ["file management"]
---

<LowercaseNote />

## Description

Read a single line from a file.

| Name                   | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| File:handle            | The handle of the file to read from (returned by fopen).       |
| string[]               | A string array to store the read text in, passed by reference. |
| size = sizeof (string) | The number of bytes to read.                                   |
| bool:pack              | Should the string be packed? (default: false).                 |

## Returns

The length of string (the read text) as an integer.

## Examples

```c
// Open "file.txt" in "read only" mode
new File:handle = fopen("file.txt", io_read);

// Initialize "buf"
new buf[128];

// Check, if the file is opened
if (handle)
{
    // Success

    // Read the whole file
    while(fread(handle, buf))
    {
        print(buf);
    }

    // Close the file
    fclose(handle);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

<br />

```c
// Open "file.txt" in "read and write" mode
new File:handle = fopen("file.txt");

// Initialize "buf"
new buf[128];

// Check, if file is open
if (handle)
{
    // Success

    // Read the whole file
    while(fread(handle, buf))
    {
        print(buf);
    }

    // Set the file pointer to the first byte
    fseek(handle, _, seek_begin);

    // Write "I just wrote here!" into this file
    fwrite(handle, "I just wrote here!");

    // Close the file
    fclose(handle);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
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
