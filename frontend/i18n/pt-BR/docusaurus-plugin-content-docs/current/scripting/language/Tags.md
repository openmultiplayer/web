---
title: "Scripting: Tags"
sidebar_label: "Scripting: Tags"
description: Um guia sobre Tags, o recurso semelhante a tipos da linguagem Pawn que oferece segurança ao trabalhar com valores de diferentes propósitos.
---

## Introdução

Uma tag é um prefixo aplicado a uma variável para indicar ao compilador que ela deve ser tratada de forma especial em determinadas situações. Por exemplo, você pode usar tags para determinar onde uma variável pode ou não ser usada, ou ainda definir uma forma específica de somar duas variáveis.

Existem dois tipos de tags: tags fortes (usam letra maiúscula) e tags fracas (usam letra minúscula). Em geral elas funcionam igual, mas em algumas situações as tags fracas podem ser convertidas silenciosamente para “sem tag” pelo compilador (ou seja, você não verá um aviso). Na maioria das vezes, com tags fracas, e sempre com tags fortes, mudar a tag implicitamente gera um aviso indicando que os dados podem estar sendo usados de forma incorreta.

Um exemplo simples:

```c
new
    File:myfile = fopen("file.txt", io_read);
myFile += 4;
```

A função `fopen` retorna um valor com tag `File:`; não há problema porque esse valor é armazenado em uma variável também marcada com `File:` (observe que as letras maiúsculas/minúsculas são idênticas). Contudo, na linha seguinte o valor `4` é somado ao handle do arquivo. O `4` não possui tag (na verdade tem o tipo `_:` por padrão, mas não é algo com que você precise se preocupar normalmente) e `myFile` tem a tag `File:`. Como nada e algo não podem ser iguais, o compilador emitirá um aviso; isso é bom, pois um handle de arquivo não faz sentido em termos de valor numérico, então modificá-lo apenas corromperia o handle e impediria o fechamento do arquivo, já que não haveria mais um handle válido para passar ao fechamento.

### Tags fortes

Como dito, uma tag forte começa com letra maiúscula. Exemplos em SA:MP:

```c
Float:
File:
Text:
```

Elas não podem ser misturadas com outros tipos e sempre geram aviso quando você tenta fazer isso:

```c
new
    Float:myFloat,
    File:myFile,
    myBlank;

myFile = fopen("file.txt", io_read); // File: = File:, sem aviso

myFloat = myFile; // Float: = File:, aviso "tag mismatch"

myFloat = 4; // Float: = _: (nenhuma), aviso "tag mismatch"

myBlank = myFloat; // _: (nenhuma) = Float:, aviso "tag mismatch"
```

### Tags fracas

Uma tag fraca se comporta quase como uma tag forte, mas o compilador não gera aviso quando o destino não tem tag e a origem é uma tag fraca. Compare o código com tag forte e com tag fraca: o primeiro gera aviso, o segundo não.

```c
new
    Strong:myStrong,
    weak:myWeak,
    myNone;

myNone = myStrong; // Aviso
myNone = myWeak; // Sem aviso
```

O inverso não é verdadeiro:

```c
myWeak = myNone; // Aviso
```

Isso também vale para funções: chamar uma função cujo parâmetro é sem tag passando uma variável com tag fraca não gera aviso:

```c
new
    weak:myWeak;
MyFunction(myWeak);



MyFunction(myVar)
{
    ...
}
```

Mas chamar uma função que espera um parâmetro etiquetado (fraco ou forte) com um valor sem tag gera aviso. Exemplos de tags fracas usados em SA:MP, ainda que pouco conhecidos, incluem:

```c
bool:
filemode:
floatround_method:
```

## Uso

### Declaração

Declarar uma variável com tag é simples: basta escrever a tag; não é necessário defini-la antes, embora isso seja possível e útil em alguns casos (veremos mais à frente):

```c
new
    Mytag:myVariable;
```

Declarar com uma tag existente permite usar essa variável com as funções e operadores já definidos para o tipo.

### Funções

Criar uma função que recebe ou retorna uma tag também é simples: prefixe a parte relevante com o tipo desejado, por exemplo:

```c
Float:GetValue(File:fHnd, const name[])
{
    ...
}
```

Essa função recebe o handle de um arquivo e retorna um float (presumivelmente um valor lido desse arquivo e correspondente ao nome informado em `name[]`). Ela provavelmente usará `floatstr`, que também retorna um `Float:` (é possível conferir na barra de status do Pawno ao clicar na função). A implementação em si não importa, mas ela converte a string em um float IEEE, armazenado como um cell (na prática é um inteiro com o mesmo padrão de bits do número IEEE, já que Pawn não tem tipagem; tags existem justamente para amenizar isso).

### Operadores

Operadores como `+`, `==`, `>` etc. podem ser sobrecarregados para tags diferentes, ou seja, fazer `+` em dois `Float:` executa algo distinto de somar duas variáveis sem tag. Isso é especialmente útil para floats porque, como mencionado, eles são apenas inteiros com um padrão de bits específico; se os operadores não fossem sobrecarregados, as operações ocorreriam sobre os inteiros e o resultado, interpretado como float, seria lixo. Por isso a tag `Float:` tem versões sobrecarregadas da maioria dos operadores para chamar funções especiais no servidor em vez de confiar em Pawn.

Um operador é igual a uma função normal, mas com o nome `operator(**símbolo**)`, onde (**símbolo**) é o operador que você quer sobrescrever. Os operadores válidos são:

```c
+
-
=
++
--
==
*
/
!=
>
<
>=
<=
!
%
```

Operadores como `\`, `*`, `=` etc. já são tratados automaticamente. Operadores como `&` não podem ser sobrecarregados. Você também pode sobrescrever o mesmo operador várias vezes com combinações diferentes de tags. Exemplo:

```c
stock Float:operator=(Mytag:oper)
{
    return float(_:oper);
}
```

Se adicionar isso ao código e fizer:

```c
new
    Float:myFloat,
    Mytag:myTag;

myFloat = myTag;
```

Você não verá mais o aviso do compilador porque agora o operador `=` para o caso `Float: = Mytag:` está implementado e o compilador sabe como tratar a conversão.

### Sobrescrita

No exemplo de sobrecarga acima, a linha funcional foi:

```c
return float(_:oper);
```

Esse é um exemplo de sobrescrita de tag: o `_:` antes de `oper` indica ao compilador que ignore o fato de a variável ter tag `Mytag:` e a trate como `_:` (sem tag). A função `float()` aplica a tag a um número comum, então precisa receber um número sem tag. No exemplo consideramos que `Mytag` armazena um inteiro comum, mas é necessário cuidado com a sobrescrita; o código a seguir gera resultados estranhos:

```c
new
    Float:f1,
    Float:f2 = 4.0;
f1 = float(_:f2);
```

Seria lógico imaginar que `f1` viraria `4.0`, mas isso não acontece. Como mencionado, `f2` guarda a representação de `4.0`, e não apenas o valor inteiro `4`; isso significa que o valor bruto contido na variável é um número bem incomum. Ao mandar o compilador tratá-la como inteiro, ele simplesmente interpreta o padrão de bits como um inteiro, sem converter o float, então o resultado será praticamente aleatório (há um padrão nos floats IEEE, mas certamente não se parecerá com `4.0`).
