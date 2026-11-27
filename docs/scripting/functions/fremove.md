---
title: "fremove | open.mp"
description: "Delete a file."
canonical: https://open.mp/docs/scripting/functions/fremove
language: en
---

# fremove

## Description

Delete a file.

| Name | Description |
| --- | --- |
| const filename\[\] | The **path** of the file to delete. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The file doesn't exist, or you don't have permission to delete it.

## Examples

**Delete a file:**

```c
if (fremove("example.txt"))
{
    print("The file \"example.txt\" removed.");
}
else
{
    print("The file \"example.txt\" does not exists.");
}
```

**Delete a directory:**

```c
if (fremove("logs"))
{
    print("The directory \"logs\" removed.");
}
else
{
    print("The directory \"logs\" does not exists, or it is not empty.");
}
```

## Notes

note

Files that are currently open ([fopen](https://open.mp/docs/scripting/functions/fopen)) must be closed first ([fclose](https://open.mp/docs/scripting/functions/fclose)) to be deleted.

warning

The file path must be valid.

## Related Functions

-   [fopen](https://open.mp/docs/scripting/functions/fopen): Open a file.
-   [fclose](https://open.mp/docs/scripting/functions/fclose): Close a file.
-   [ftemp](https://open.mp/docs/scripting/functions/ftemp): Create a temporary file stream.
-   [fwrite](https://open.mp/docs/scripting/functions/fwrite): Write to a file.
-   [fread](https://open.mp/docs/scripting/functions/fread): Read a file.
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
