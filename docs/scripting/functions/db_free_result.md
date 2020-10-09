---
id: db_free_result
title: db_free_result
description: Frees result memory allocated from db_query.
keywords:
  - sqlite
---

:::warning

The function starts with a lowercase letter.

:::

## Description

Frees result memory allocated from db_query.

| Name              | Description                                              |
| ----------------- | -------------------------------------------------------- |
| DBResult:dbresult | The result set to free allocated by [db_query](db_query) |

## Returns

Returns 1 if result set handle is valid, otherwise 0.

## Examples

```c
// entity_storage.inc

EntityStorage_SpawnAll(DB:connectionHandle)
{
    // Select all entries in table "entities"
    new DBResult:db_result_set = db_query(db_handle, "SELECT * FROM `entities`");

    // If database result set handle is valid
    if (db_result_set)
    {
        // Do something...

        // Free the result set
        db_free_result(db_result_set);
    }
}
```

```c
// mode.pwn

#include <entity_storage>

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
        EntityStorage_SpawnAll();
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

Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using [db_query](db_query).

:::

## Related Functions

_Replace me_
