# existproperty

## Description

Check if a property exist.

| Name   | Description                                                                    |
| ------ | ------------------------------------------------------------------------------ |
| id     | The virtual machine to use, you should keep this zero.                         |
| name[] | The property's name, you should keep this "".                                  |
| value  | The property's unique ID. Use the hash-function to calculate it from a string. |

## Returns

True if the property exists and false otherwise.

## Examples

```c
if ( existproperty(0, "", 123984334) )
{
    //the property exists, do something
}
```

## Related Functions

- Setproperty: Set a property.
- Getproperty: Get the value of a property.
- Deleteproperty: Delete a property.
