---
id: db_close
title: db_close
description: Closes a SQLite database connection that was opened with `db_open`.
keywords:
  - sqlite
---

:::warning

The function starts with a lowercase letter.

:::

## Description

Closes a SQLite database connection that was opened with [db_open](db_open).

| Name  | Description                                                                      |
| ----- | -------------------------------------------------------------------------------- |
| DB:db | The handle of the database connection to close (returned by [db_open](db_open)). |

## Returns

1: The function executed successfully.

0: The function failed to execute. This could mean that the database connection handle is invalid.

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

Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using [db_open](db_open).

:::

## Related Functions

_Replace me_
