---

title: db_num_fields
sidebar_label: db_num_fields
description: Obtém o número de campos do conjunto de resultados obtido com `db_query`.
keywords:
  - sqlite
tags: ["sqlite"]

---

## descrição

A função retorna o número de campos (colunas) do resultado obtido com [db_query](db_query).

| Nome               | Descrição                                      |
| ------------------ | ---------------------------------------------- |
| DBResult:dbresult | Resultado retornado por [db_query](db_query). |

## retorno

Número de campos no resultado.

## exemplo

```c
// examples.inc

static FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])
{
    new ret = -1;
    new field_count = db_num_fields(dbResultSet);
    new current_field_name[32];

    for (new field_index = 0; field_index < field_count; field_index++)
    {
        if (db_field_name(dbResultSet, field_index, current_field_name, sizeof current_field_name))
        {
            if (!strcmp(fieldName, current_field_name))
            {
                ret = field_index;
                break;
            }
        }
    }

    return ret;
}

Float:Examples_CalculateSum(DB:dbConnectionHandle)
{
    new Float:ret;
    new DBResult:db_result_set = db_query("SELECT `value` FROM `examples`");

    if (db_result_set)
    {
        new target_field_index = FindFieldIndexByName(db_result_set, "value");

        if (target_field_index >= 0)
        {
            do
            {
                ret += db_get_field_float(db_result_set, target_field_index);
            }
            while (db_next_row(db_result_set));
        }

        db_free_result(db_result_set);
    }

    return ret;
}
```

```c
// mode.pwn

#include <examples>

static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    gDBConnectionHandle = db_open("example.db");

    if (gDBConnectionHandle)
    {
        print("Conexão com banco \"example.db\" criada com sucesso.");
        printf("Soma calculada: %f", Examples_CalculateSum(gDBConnectionHandle));
    }
    else
    {
        print("Falha ao abrir conexão com banco \"example.db\".");
    }

    return 1;
}

public OnGameModeExit()
{
    if (db_close(gDBConnectionHandle))
    {
        gDBConnectionHandle = DB:0;
    }
    return 1;
}
```

## notas

## funções relacionadas

* [db_open](db_open): Abrir conexão com banco SQLite
* [db_close](db_close): Fechar conexão com banco SQLite
* [db_query](db_query): Executar consulta
* [db_free_result](db_free_result): Liberar resultado
* [db_num_rows](db_num_rows): Número de linhas no resultado
* [db_next_row](db_next_row): Avançar para próxima linha
* [db_field_name](db_field_name): Nome do campo por índice
* [db_get_field](db_get_field): Conteúdo do campo por índice
* [db_get_field_assoc](db_get_field_assoc): Conteúdo do campo por nome
* [db_get_field_int](db_get_field_int): Conteúdo do campo inteiro por índice
* [db_get_field_assoc_int](db_get_field_assoc_int): Conteúdo do campo inteiro por nome
* [db_get_field_float](db_get_field_float): Conteúdo do campo float por índice
* [db_get_field_assoc_float](db_get_field_assoc_float): Conteúdo do campo float por nome
* [db_get_mem_handle](db_get_mem_handle): Handle de memória do banco
* [db_get_result_mem_handle](db_get_result_mem_handle): Handle de memória do resultado
* [db_debug_openfiles](db_debug_openfiles): Número de conexões abertas
* [db_debug_openresults](db_debug_openresults): Número de resultados abertos
