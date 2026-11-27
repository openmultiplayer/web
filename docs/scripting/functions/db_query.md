---
title: "db_query | open.mp"
description: "The function is used to execute an SQL query on an opened SQLite database."
canonical: https://open.mp/docs/scripting/functions/db_query
language: en
---

# db\_query

warning

This function is deprecated. Please see [DB\_ExecuteQuery](https://open.mp/docs/scripting/functions/DB_ExecuteQuery).

## Description

The function is used to execute an SQL query on an opened SQLite database.

| Name | Description |
| --- | --- |
| DB:db | The database handle to query. |
| query\[\] | The query to execute. |

## Returns

The query result index (**starting at 1**) if successful, otherwise 0.

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

## Notes

warning

**Always** free results by using [db\_free\_result](https://open.mp/docs/scripting/functions/db_free_result)!

## Related Functions

-   [db\_open](https://open.mp/docs/scripting/functions/db_open): Open a connection to an SQLite database
-   [db\_close](https://open.mp/docs/scripting/functions/db_close): Close the connection to an SQLite database
-   [db\_free\_result](https://open.mp/docs/scripting/functions/db_free_result): Free result memory from a db\_query
-   [db\_num\_rows](https://open.mp/docs/scripting/functions/db_num_rows): Get the number of rows in a result
-   [db\_next\_row](https://open.mp/docs/scripting/functions/db_next_row): Move to the next row
-   [db\_num\_fields](https://open.mp/docs/scripting/functions/db_num_fields): Get the number of fields in a result
-   [db\_field\_name](https://open.mp/docs/scripting/functions/db_field_name): Returns the name of a field at a particular index
-   [db\_get\_field](https://open.mp/docs/scripting/functions/db_get_field): Get content of field with specified ID from current result row
-   [db\_get\_field\_assoc](https://open.mp/docs/scripting/functions/db_get_field_assoc): Get content of field with specified name from current result row
-   [db\_get\_field\_int](https://open.mp/docs/scripting/functions/db_get_field_int): Get content of field as an integer with specified ID from current result row
-   [db\_get\_field\_assoc\_int](https://open.mp/docs/scripting/functions/db_get_field_assoc_int): Get content of field as an integer with specified name from current result row
-   [db\_get\_field\_float](https://open.mp/docs/scripting/functions/db_get_field_float): Get content of field as a float with specified ID from current result row
-   [db\_get\_field\_assoc\_float](https://open.mp/docs/scripting/functions/db_get_field_assoc_float): Get content of field as a float with specified name from current result row
-   [db\_get\_mem\_handle](https://open.mp/docs/scripting/functions/db_get_mem_handle): Get memory handle for an SQLite database that was opened with db\_open.
-   [db\_get\_result\_mem\_handle](https://open.mp/docs/scripting/functions/db_get_result_mem_handle): Get memory handle for an SQLite query that was executed with db\_query.
-   [db\_debug\_openfiles](https://open.mp/docs/scripting/functions/db_debug_openfiles): The function gets the number of open database connections for debugging purposes.
-   [db\_debug\_openresults](https://open.mp/docs/scripting/functions/db_debug_openresults): The function gets the number of open database results.
