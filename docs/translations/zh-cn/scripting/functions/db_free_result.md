---
title: db_free_result
description: Frees result memory allocated from db_query.
keywords:
  - sqlite
---

<LowercaseNote />

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
    new DBResult:db_result_set = db_query(connectionHandle, "SELECT * FROM `entities`");

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
        EntityStorage_SpawnAll(gDBConnectionHandle);
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

## Related Functions

- [db_open](db_open): Open a connection to an SQLite database
- [db_close](db_close): Close the connection to an SQLite database
- [db_query](db_query): Query an SQLite database
- [db_num_rows](db_num_rows): Get the number of rows in a result
- [db_next_row](db_next_row): Move to the next row
- [db_num_fields](db_num_fields): Get the number of fields in a result
- [db_field_name](db_field_name): Returns the name of a field at a particular index
- [db_get_field](db_get_field): Get content of field with specified ID from current result row
- [db_get_field_assoc](db_get_field_assoc): Get content of field with specified name from current result row
- [db_get_field_int](db_get_field_int): Get content of field as an integer with specified ID from current result row
- [db_get_field_assoc_int](db_get_field_assoc_int): Get content of field as an integer with specified name from current result row
- [db_get_field_float](db_get_field_float): Get content of field as a float with specified ID from current result row
- [db_get_field_assoc_float](db_get_field_assoc_float): Get content of field as a float with specified name from current result row
- [db_get_mem_handle](db_get_mem_handle): Get memory handle for an SQLite database that was opened with db_open.
- [db_get_result_mem_handle](db_get_result_mem_handle): Get memory handle for an SQLite query that was executed with db_query.
- [db_debug_openfiles](db_debug_openfiles): The function gets the number of open database connections for debugging purposes.
- [db_debug_openresults](db_debug_openresults): The function gets the number of open database results.
