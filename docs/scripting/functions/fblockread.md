---
title: "fblockread | open.mp"
description: "This function allows you to read data from a file, without encoding and line terminators."
canonical: https://open.mp/docs/scripting/functions/fblockread
language: en
---

# fblockread

## Description

This function allows you to read data from a file, without encoding and line terminators

| Name | Description |
| --- | --- |
| File:handle | File handle to use, opened by [fopen](https://open.mp/docs/scripting/functions/fopen). |
| buffer | The buffer to save the read data in. |
| size = sizeof (buffer) | The number of cells to read. |

## Returns

The number of cells read. Zero, if the file end has been reached.

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

// Open "file.bin" in "read only" mode
new File:handle = fopen("file.bin", io_read);

// Declare "file_len"
new file_len;

// Check, if "file.bin" is open
if (handle)
{
    // Success

    // Get the file length of "file.bin"
    file_len = flength(handle);

    // If file is equally larger than the array
    if (file_len == (some_enum * 4))
    {
        // Success

        // Read from "file.bin" into "some_data"
        fblockread(handle, some_data);
    }
    else
    {
        // Error
        print("\"file.bin\" is not compatible with the array.");
    }

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

warning

Using an **invalid handle** will crash your server! Get a **valid handle** by using [fopen](https://open.mp/docs/scripting/functions/fopen) or [ftemp](https://open.mp/docs/scripting/functions/ftemp).

## Related Functions

-   [fopen](https://open.mp/docs/scripting/functions/fopen): Open a file.
-   [fclose](https://open.mp/docs/scripting/functions/fclose): Close a file.
-   [ftemp](https://open.mp/docs/scripting/functions/ftemp): Create a temporary file stream.
-   [fremove](https://open.mp/docs/scripting/functions/fremove): Remove a file.
-   [fwrite](https://open.mp/docs/scripting/functions/fwrite): Write to a file.
-   [fread](https://open.mp/docs/scripting/functions/fread): Read a file.
-   [fputchar](https://open.mp/docs/scripting/functions/fputchar): Put a character in a file.
-   [fgetchar](https://open.mp/docs/scripting/functions/fgetchar): Get a character from a file.
-   [fblockwrite](https://open.mp/docs/scripting/functions/fblockwrite): Write blocks of data into a file.
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
