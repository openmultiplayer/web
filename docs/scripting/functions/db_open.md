---
id: db_open
title: db_open
description: The function is used to open a connection to a SQLite database file, which is inside the `/scriptfiles` folder.
keywords:
  - sqlite
---

:::warning

The function starts with a lowercase letter.

:::

## Description

The function is used to open a connection to a SQLite database, which is inside the "/scriptfiles" folder.

| Name   | Description               |
| ------ | ------------------------- |
| name[] | File name of the database |

## Returns

Returns index (starting at 1) of the database connection.

## Examples

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    gDBConnectionHandle = db_open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Successfully created a connection to the database
        print("Successfully created a connection to database \"example.db\".");
    }
    else
    {
        // Failed to create a connection to the database
        print("Failed to open a connection to database \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // Close the connection to the database if connection is open
    if (db_close(gDBConnectionHandle))
    {
        // Extra cleanup
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Notes

:::warning

It will create a new SQLite database file, if there is no SQLite database file with the same file name available.
Close your SQLite database connection with [db_close](db_close)!

:::

## Related Functions

_Replace me_
