---
title: "fread | open.mp"
description: "Read a single line from a file."
canonical: https://open.mp/docs/scripting/functions/fread
language: en
---

# fread

## Description

Read a single line from a file.

| Name | Description |
| --- | --- |
| File:handle | The handle of the file to read from (returned by [fopen](https://open.mp/docs/scripting/functions/fopen)). |
| string\[\] | A string array to store the read text in, passed by reference. |
| size = sizeof (string) | The number of bytes to read. |
| bool:pack | Should the string be packed? (default: false). |

## Returns

The length of **string** (the read text) as an integer.

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
    while (fread(handle, buf))
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
    while (fread(handle, buf))
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

warning

Using an **invalid handle** will crash your server! Get a **valid handle** by using [fopen](https://open.mp/docs/scripting/functions/fopen) or [ftemp](https://open.mp/docs/scripting/functions/ftemp).

## Related Functions

-   [fopen](https://open.mp/docs/scripting/functions/fopen): Open a file.
-   [fclose](https://open.mp/docs/scripting/functions/fclose): Close a file.
-   [ftemp](https://open.mp/docs/scripting/functions/ftemp): Create a temporary file stream.
-   [fremove](https://open.mp/docs/scripting/functions/fremove): Remove a file.
-   [fwrite](https://open.mp/docs/scripting/functions/fwrite): Write to a file.
-   [fputchar](https://open.mp/docs/scripting/functions/fputchar): Put a character in a file.
-   [fgetchar](https://open.mp/docs/scripting/functions/fgetchar): Get a character from a file.
-   [fblockwrite](https://open.mp/docs/scripting/functions/fblockwrite): Write blocks of data into a file.
-   [fblockread](https://open.mp/docs/scripting/functions/fblockread): Read blocks of data from a file.
-   [fseek](https://open.mp/docs/scripting/functions/fseek): Jump to a specific character in a file.
-   [flength](https://open.mp/docs/scripting/functions/flength): Get the file length.
-   [fexist](https://open.mp/docs/scripting/functions/fexist): Check, if a file exists.
-   [fmatch](https://open.mp/docs/scripting/functions/fmatch): Check, if patterns with a file name matches.
-   [ftell](https://open.mp/docs/scripting/functions/ftell): Get the current position in the file.
-   [fflush](https://open.mp/docs/scripting/functions/fflush): Flush a file to disk (ensure all writes are complete).
-   [fstat](https://open.mp/docs/scripting/functions/fstat): Return the size and the timestamp of a file.
-   [frename](https://open.mp/docs/scripting/functions/frename): Rename a file.
-   [fcopy](https://open.mp/docs/scripting/functions/fcopy): Copy a file.
-   [filecrc](https://open.mp/docs/scripting/functions/filecrc): Return the 32-bit CRC value of a file.
-   [fattrib](https://open.mp/docs/scripting/functions/fattrib): Set the file attributes.
-   [fcreatedir](https://open.mp/docs/scripting/functions/fcreatedir): Create a directory.
