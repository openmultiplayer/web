---
title: db_open
sidebar_label: db_open
description: A função é usada para abrir uma conexão com um arquivo de banco de dados SQLite, que está dentro da pasta `../scriptfiles`.
tags: ["sqlite"]
---

<LowercaseNote />

## Descrição

A função é usada para abrir uma conexão com um arquivo de banco de dados SQLite, que está dentro da pasta `../scriptfiles`.

| Nome   | Descrição                            |
| ------ | ------------------------------------ |
| name[] | O nome do arquivo do banco de dados. |

## Retorno

Retorna o índice (começando em 1) da conexão com o banco de dados.

## Exemplos

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // Criar uma conexão com um banco de dados
    gDBConnectionHandle = db_open("exemplo.db");

    // Se a conexão com o banco de dados existir
    if(gDBConnectionHandle)
    {
        // Envia uma mensagem no console dizendo que uma conexão com o banco de dados foi criada com sucesso
        print("Conexão com o banco de dados \"exemplo.db\" criada com sucesso.");
    }
    else
    {
        // Se não, retorna uma mensagem no console dizendo que falhou ao criar uma conexão com o banco de dados
        print("Falha ao abrir uma conexão com o banco de dados \"exemplo.db\".");
    }
    return 1;
}

public OnGameModeExit()
{
    // Feche a conexão com o banco de dados se a conexão estiver aberta
    if(db_close(gDBConnectionHandle))
    {
        // Limpeza extra
        gDBConnectionHandle = DB:0;
    }

    // ...
    return 1;
}
```

## Notas

:::warning

Ele criará um novo arquivo de banco de dados SQLite, se não houver nenhum arquivo de banco de dados SQLite com o mesmo nome de arquivo disponível. Feche sua conexão com o banco de dados SQLite com [db_close](db_close)!

:::

## Funções relacionadas

- [db_close](db_close): Feche a conexão com um banco de dados SQLite.
- [db_query](db_query): Consulta um banco de dados SQLite.
- [db_free_result](db_free_result): Liberar memória de resultado de uma db_query.
- [db_num_rows](db_num_rows): Obtenha o número de linhas em um resultado.
- [db_next_row](db_next_row): Mover para a próxima linha.
- [db_num_fields](db_num_fields): Obtenha o número de campos em um resultado.
- [db_field_name](db_field_name): Retorna o nome de um campo em um determinado índice.
- [db_get_field](db_get_field): Obtém o conteúdo do campo com o ID especificado da linha de resultado atual.
- [db_get_field_assoc](db_get_field_assoc): Obtém o conteúdo do campo com o nome especificado da linha de resultado atual.
- [db_get_field_int](db_get_field_int): Obtém o conteúdo do campo como um número inteiro com ID especificado da linha de resultado atual.
- [db_get_field_assoc_int](db_get_field_assoc_int): Obtém o conteúdo do campo como um número inteiro com o nome especificado da linha de resultado atual.
- [db_get_field_float](db_get_field_float): Obtém o conteúdo do campo como um float com ID especificado da linha de resultado atual.
- [db_get_field_assoc_float](db_get_field_assoc_float): Obtém o conteúdo do campo como um float com o nome especificado da linha de resultado atual.
- [db_get_mem_handle](db_get_mem_handle): Obtenha o identificador de memória para um banco de dados SQLite que foi aberto com db_open.
- [db_get_result_mem_handle](db_get_result_mem_handle): Obtenha o identificador de memória para uma consulta SQLite que foi executada com db_query.
- [db_debug_openfiles](db_debug_openfiles): A função obtém o número de conexões de banco de dados abertas para fins de depuração.
- [db_debug_openresults](db_debug_openresults): A função obtém o número de resultados do banco de dados aberto.
