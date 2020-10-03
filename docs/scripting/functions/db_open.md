---
id: db_open
title: db_open
description: This function is used to open a connection to a SQLite database file, which is inside the `/scriptfiles` folder.
keywords:
    - sqlite
---

:::warning

This function starts with a lowercase letter.

:::

## Description

This function is used to open a connection to a SQLite database, which is inside the "/scriptfiles" folder.

| Name   | Description               |
| ------ | ------------------------- |
| name[] | File name of the database |

## Returns

Returns index (starting at 1) of the database connection.

## Examples

```c
static DB:g_DBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    g_DBConnectionHandle = db_open("example.db");

    // If connection to the database exists
    if (g_DBConnectionHandle)
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
    if (db_close(g_DBConnectionHandle))
    {
        // Extra cleanup
        g_DBConnectionHandle = DB:0;
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

*Replace me*
