---
title: "fflush | open.mp"
description: "Flush a file to disk (ensure all writes are complete)."
canonical: https://open.mp/docs/scripting/functions/fflush
language: en
---

# fflush

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Flush a file to disk (ensure all writes are complete). Actually just calls [flength](https://open.mp/docs/scripting/functions/flength) as that has to force a flush to be accurate.

| Name | Description |
| --- | --- |
| File:handle | The handle of the file. (returned by fopen). |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. (Invalid file handle)

## Examples

```c
// Open "file.txt" in "append only" mode
new File:handle = fopen("file.txt", io_append);

// Check, if the file is opened
if (handle)
{
    // Success

    // Append "This is a text.\r\n"
    fwrite(handle, "This is a text.\r\n");

    fflush(handle);

    // Close the file
    fclose(handle);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

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
-   [fstat](https://open.mp/docs/scripting/functions/fstat): Return the size and the timestamp of a file.
-   [frename](https://open.mp/docs/scripting/functions/frename): Rename a file.
-   [fcopy](https://open.mp/docs/scripting/functions/fcopy): Copy a file.
-   [filecrc](https://open.mp/docs/scripting/functions/filecrc): Return the 32-bit CRC value of a file.
-   [fattrib](https://open.mp/docs/scripting/functions/fattrib): Set the file attributes.
-   [fcreatedir](https://open.mp/docs/scripting/functions/fcreatedir): Create a directory.
