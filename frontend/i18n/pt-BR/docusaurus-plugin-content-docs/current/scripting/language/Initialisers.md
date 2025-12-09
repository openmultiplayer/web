---
title: "Palavras-chave: inicializadores"
sidebar_label: "Palavras-chave: inicializadores"
---

## `const`

```c
new const
    MY_CONSTANT[] = {1, 2, 3};
```

`const` não é muito usado, mas serve para declarar variáveis que não podem ser alteradas em tempo de execução. Em funções, parâmetros de array marcados como `const` podem ser otimizados, e você pode criar algo parecido com um `#define`, só que baseado em arrays. Como `const` é um modificador, ele deve acompanhar `new` ou outro declarador de variável. Se tentar modificar uma variável constante, o compilador reclamará.

## `enum`

Enums são úteis para agrupar dados relacionados, substituir longas listas de `#define`s e criar novas tags. Também facilitam o controle de índices de arrays.

Definição mais comum:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

Isso cria dois slots por jogador. Sem enum, ficaria:

```c
new
    gPlayerData[MAX_PLAYERS][2];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][0] = 0;
    gPlayerData[playerid][1] = 5;
}
```

Funciona, mas é menos legível. Se quiser inserir um slot entre 0 e 1, teria de renumerar tudo. Com enum basta adicionar o novo campo:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    E_MY_ARRAY_GUN
}
```

Ao recompilar, o compilador ajusta todos os índices.

A forma completa de um enum é:

```c
enum NAME (modificador)
{
    NAME_ENTRY_1 = valor,
    ...
}
```

Se você não definir um modificador, o padrão é `+= 1`. Ou seja, cada item vale o item anterior + 1. Exemplo:

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

Aqui temos 0, 1, 2 e o valor do enum (`E_EXAMPLE`) é 3. Mudando o modificador para `+= 5` os valores passam a ser 0, 5, 10 e 15. Declarar um array com `gEnumArray[E_EXAMPLE]` reservá 15 células, mas os índices simbólicos atingem apenas 0, 5 e 10.

Também é possível usar outro modificador, como `*= 2`. Nesse caso, se não definir o primeiro valor manualmente, todos continuam 0. Para corrigir, basta atribuir um valor inicial:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0 = 1,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

Resultado: 1, 2, 4 e 8. Você pode definir quantos valores quiser:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1 = 1,
    E_EXAMPLE_2
} // 0, 1, 2, 4
```

Arrays também são suportados:

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0[10],
    E_EXAMPLE_1,
    E_EXAMPLE_2
} // produz 0, 10, 11 e 12
```

Itens podem ter tags. No exemplo inicial:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    Float:E_MY_ARRAY_HEALTH,
    E_MY_ARRAY_GUN
}
```

Assim evitamos `tag mismatch` ao armazenar floats.

Enums também podem servir como tags:

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_VAL_1 = 1,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3;
```

`gMyTagVar` terá valor 6 e tag personalizada. Atribuir um número puro gera aviso:

```c
gMyTagVar = 7;          // warning
gMyTagVar = E_MY_TAG:7; // válido
```

Muito útil para flags ou dados combinados:

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_MASK = 0xFF,
    E_MY_TAG_VAL_1 = 0x100,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3 | (E_MY_TAG:7 & E_MY_TAG_MASK);
```

Valor final: 0x0607 (1543).

Enums também podem substituir blocos de `#define`:

```c
enum
{
    TEAM_NONE,
    TEAM_COP,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

Os valores continuam 0–5 e o uso é idêntico. Você pode ainda transformá-los em bitmasks para permitir múltiplos times:

```c
enum (<<= 1)
{
    TEAM_NONE,
    TEAM_COP = 1,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER,
    TEAM_ADMIN
}
```

Operações básicas:

- Adicionar: `gPlayerTeam[playerid] |= TEAM_COP`
- Remover: `gPlayerTeam[playerid] &= ~TEAM_COP`
- Verificar: `if (gPlayerTeam[playerid] & TEAM_COP)`

## `forward`

Informa ao compilador que uma função será declarada depois. Obrigatório para todas as `public`, mas útil em outros casos, como funções que retornam tags.

```c
forward MyPublicFunction(playerid, const string[]);

public MyPublicFunction(playerid, const string[])
{
}
```

Sem o `forward`, o compilador precisa “reprocessar” quando encontra uma função que retorna, por exemplo, `Float:` antes da definição. Outra alternativa é declarar a função antes do uso, mas o `forward` evita reorganizar o arquivo.

## `native`

Nativas são funções implementadas fora do script (no servidor ou em plugins). Você só pode declará-las se já existir uma implementação; porém, pode criar “falsas” nativas para listar funções no painel do Pawno.

```c
native printf(const format[], {Float,_}:...);
```

Para exibir uma função personalizada na lista sem declará-la de fato:

```c
/*
native MyFunction(playerid);
*/
```

O Pawno não interpreta comentários e adiciona o símbolo na lista, enquanto o compilador ignora a linha.

Também é possível renomear ou encapsular nativas:

```c
native my_print(const string[]) = print;

print(const string[])
{
    my_print("Someone called print()");
    my_print(string);
}
```

Agora toda chamada a `print` passa pelo wrapper.

## `new`

Declara variáveis; por padrão começam em 0.

```c
new
    myVar = 5;
```

O escopo depende das chaves onde é declarado. Variáveis globais (`new` fora de funções) podem ser usadas em qualquer ponto após a declaração. Se o arquivo incluir outros, eles também terão acesso, a menos que você use `static`.

## `operator`

Permite sobrecarregar operadores para tags personalizadas. Exemplo para armazenar números em big endian:

```c
stock BigEndian:operator=(value)
{
    return BigEndian:(((value >>> 24) & 0x000000FF) |
                      ((value >>> 8)  & 0x0000FF00) |
                      ((value << 8)   & 0x00FF0000) |
                      ((value << 24)  & 0xFF000000));
}
```

Operadores suportados: `+`, `-`, `*`, `/`, `%`, `++`, `--`, `==`, `!=`, `<`, `>`, `<=`, `>=`, `!` e `=`.

Eles podem executar qualquer lógica, inclusive ignorar o comportamento padrão.

## `public`

Transforma funções (ou variáveis) em símbolos acessíveis pelo servidor. Todas as callbacks do SA:MP são `public`. O nome textual da função é armazenado no AMX, o que permite chamá-la por `CallLocalFunction`, `SetTimerEx`, etc. Para isso é obrigatório declarar um `forward`.

```c
forward MyPublicFunc();

main()
{
    CallLocalFunction("MyPublicFunc", "");
}

public MyPublicFunc()
{
    printf("Hello");
}
```

Funções públicas também podem ser chamadas normalmente dentro do script (`MyPublicFunc();`), o que é bem mais rápido do que invoques por string.

## `static`

`static` aplicado globalmente cria variáveis visíveis apenas no arquivo (ou `#section`) onde foram declaradas. Diferente de `new`, a visibilidade não se estende a arquivos incluídos.

Localmente, `static` mantém o valor entre chamadas:

```c
MyFunc()
{
    static
        counter = 0;
    printf("%d", counter);
    counter++;
}
```

A primeira chamada imprime 0, a segunda 1 e assim por diante. Com `new`, o valor seria reiniciado em cada execução. Também é possível declarar funções `static` para “privatizá-las”.

## `stock`

`stock` serve para declarar funções ou variáveis opcionais, sem gerar avisos de “unused”. Se o símbolo for usado, o compilador o inclui; caso contrário, ele é descartado.

```c
stock Func1()
{
    printf("Hello");
}

stock Func2()
{
    printf("Hi");
}
```

Útil para bibliotecas, onde você não sabe quais funções o usuário vai chamar. Diferentemente de `#pragma unused`, o código nem chega a ser emitido se não houver uso.
