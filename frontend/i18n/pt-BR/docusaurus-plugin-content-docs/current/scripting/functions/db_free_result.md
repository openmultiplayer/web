---
title: db_free_result
sidebar_label: db_free_result
description: Libera a memória do resultado alocada de db_query.
keywords:
  - sqlite
tags: ["sqlite"]
---

<LowercaseNote />

## Descrição

Libera a memória do resultado alocada de db_query.

| Nome              | Descrição                                                |
| ----------------- | -------------------------------------------------------- |
| DBResult:dbresult | O conjunto de resultados para liberar alocado por [db_query](db_query) |

## Retorno

Retorna 1 se o handle do conjunto de resultados é válido, caso contrário 0.

## Exemplos

```c
// entity_storage.inc

EntityStorage_SpawnAll(DB:connectionHandle)
{
    // Seleciona todas as entradas na tabela "entities"
    new DBResult:db_result_set = db_query(connectionHandle, "SELECT * FROM `entities`");

    // Se o handle do conjunto de resultados do banco de dados é válido
    if (db_result_set)
    {
        // Faz alguma coisa...

        // Libera o conjunto de resultados
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

    // Cria uma conexão com um banco de dados
    gDBConnectionHandle = db_open("example.db");

    // Se a conexão com o banco de dados existe
    if (gDBConnectionHandle)
    {
        // Criou com sucesso uma conexão com o banco de dados
        print("Criou com sucesso uma conexão com o banco de dados \"example.db\".");
        EntityStorage_SpawnAll(gDBConnectionHandle);
    }
    else
    {
        // Falhou ao criar uma conexão com o banco de dados
        print("Falhou ao abrir uma conexão com o banco de dados \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // Fecha a conexão com o banco de dados se a conexão estiver aberta
    if (db_close(gDBConnectionHandle))
    {
        // Limpeza extra
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Funções Relacionadas

- [db_open](db_open): Abre uma conexão com um banco de dados SQLite
- [db_close](db_close): Fecha a conexão com um banco de dados SQLite
- [db_query](db_query): Consulta um banco de dados SQLite
- [db_num_rows](db_num_rows): Obtém o número de linhas em um resultado
- [db_next_row](db_next_row): Move para a próxima linha
- [db_num_fields](db_num_fields): Obtém o número de campos em um resultado
- [db_field_name](db_field_name): Retorna o nome de um campo em um índice específico
- [db_get_field](db_get_field): Obtém o conteúdo do campo com ID especificado da linha de resultado atual
- [db_get_field_assoc](db_get_field_assoc): Obtém o conteúdo do campo com nome especificado da linha de resultado atual
- [db_get_field_int](db_get_field_int): Obtém o conteúdo do campo como um inteiro com ID especificado da linha de resultado atual
- [db_get_field_assoc_int](db_get_field_assoc_int): Obtém o conteúdo do campo como um inteiro com nome especificado da linha de resultado atual
- [db_get_field_float](db_get_field_float): Obtém o conteúdo do campo como um float com ID especificado da linha de resultado atual
- [db_get_field_assoc_float](db_get_field_assoc_float): Obtém o conteúdo do campo como um float com nome especificado da linha de resultado atual
- [db_get_mem_handle](db_get_mem_handle): Obtém o handle de memória para um banco de dados SQLite que foi aberto com db_open.
- [db_get_result_mem_handle](db_get_result_mem_handle): Obtém o handle de memória para uma consulta SQLite que foi executada com db_query.
- [db_debug_openfiles](db_debug_openfiles): A função obtém o número de conexões de banco de dados abertas para fins de depuração.
- [db_debug_openresults](db_debug_openresults): A função obtém o número de resultados de banco de dados abertos.