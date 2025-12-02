---
title: "Estruturas Avançadas"
sidebar_label: "Estruturas Avançadas"
---

## Manipulação de Arrays

### Encontrando um slot vazio corretamente

Este exemplo mostra como encontrar um slot vazio em um array usando práticas padrão de codificação.

```pawn
new
    gMyArray[10];

stock FindEmptySlot()
{
    new
        i = 0;
    while (i < sizeof (gMyArray) && gMyArray[i])
    {
        i++;
    }
    if (i == sizeof (gMyArray)) return -1;
    return i;
}
```

Este exemplo básico assume que um slot do array está vazio se seu valor for 0. O loop percorre todos os valores do array (também pode ser feito com uma constante) enquanto os valores não forem 0. Quando atinge um que é 0, a condição while falhará e o loop termina sem usar um break, como é prática comum, mas desencorajado em situações como esta. Esta função também retorna -1 se um slot livre não for encontrado, o que precisaria ser verificado na outra extremidade. Mais comumente, você usaria o id encontrado diretamente:

```pawn
MyFunction()
{
    new
        i = 0;
    while (i < sizeof (gMyArray) && gMyArray[i])
    {
        i++;
    }
    if (i == sizeof (gMyArray))
    {
        printf("No free slot found");
        return 0;
    }
    printf("Slot %d is empty", i);
    // Use the found slot in your code for whatever
    return 1;
}
```

Obviamente, você substituiria a expressão "gMyArray[i]" pela sua própria indicação de um slot em uso.

### Lista

#### Introdução

Listas são um tipo muito útil de estrutura, basicamente são um array onde o próximo pedaço de dados relevantes é apontado pelo último pedaço.

Exemplo:

Digamos que você tenha o seguinte array:

```pawn
3, 1, 64, 2, 4, 786, 2, 9
```

Se você quisesse ordenar o array, você acabaria com:

```pawn
1, 2, 2, 3, 4, 9, 64, 786
```

No entanto, se você quisesse deixar os dados na ordem original, mas ainda assim saber os números em ordem por algum motivo (é apenas um exemplo), você tem um problema: como você pode ter números em duas ordens ao mesmo tempo? Este seria um bom uso de listas. Para construir uma lista a partir desses dados, você precisaria transformar o array em um array 2D, onde a segunda dimensão tem 2 células de tamanho, a primeira dimensão contendo o número original, a outra contendo o índice do próximo número maior. Você também precisaria de uma variável separada para armazenar o índice do menor número, então seu novo array ficaria assim:

```pawn
start = 1
3, 1, 64, 2, 4, 786, 2, 9
4, 3, 5,  6, 7, -1,  0, 2
```

O próximo índice associado a 786 é -1, este é um índice de array inválido e indica o fim da lista, ou seja, não há mais números. Os dois 2's obviamente poderiam estar em qualquer ordem, o primeiro no array é o primeiro na lista também, pois é mais provável ser encontrado primeiro.

A outra vantagem deste método de ordenar os números é que adicionar mais números é muito mais rápido. Se você quisesse adicionar outro número 3 ao array ordenado, precisaria primeiro deslocar pelo menos 4 números um slot para a direita para abrir espaço, não é terrível aqui, mas muito lento em arrays maiores. Com a versão de lista, você poderia simplesmente anexar o 3 ao final do array e modificar um único valor na lista;

```pawn
start = 1
3, 1, 64, 2, 4, 786, 2, 9, 3
8, 3, 5,  6, 7, -1,  0, 2, 4
^ modify this value        ^ next highest slot
```

Nenhum dos outros números foi movido, então nenhum dos outros índices precisa ser atualizado, apenas faça o próximo número menor apontar para o novo número e faça o novo número apontar para o número que o próximo menor costumava apontar. Remover um valor é ainda mais fácil:

```pawn
start = 1
3, 1, 64, X, 4, 786, 2, 9, 3
8, 6, 5,  6, 7, -1,  0, 2, 4
   ^ Alterado para pular o valor removido
```

Aqui o primeiro 2 foi removido e o número que apontava para esse número (o 1) foi atualizado para apontar para o número que o número removido estava apontando. Neste exemplo, nem o ponteiro do número removido nem o número foram removidos, mas você não pode possivelmente chegar a esse slot seguindo a lista, então não importa, ele está efetivamente removido.

#### Tipos

As listas nos exemplos acima eram apenas listas simples básicas, você também pode ter listas duplas onde cada valor aponta para o próximo valor e o último valor, estas tendem a ter um ponteiro para o final da lista também para ir para trás (por exemplo, para obter os números em ordem decrescente):

```pawn
start = 1
end = 5
value: 3, 1,  64, 2, 4, 786, 2, 9, 3
next:  8, 3,  5,  6, 7, -1,  0, 2, 4
last:  6, -1, 7,  1, 8, 2,   3, 4, 0
```

Você tem que ter cuidado com estas, especialmente quando você tem mais de um de qualquer valor, que o último ponteiro aponte para o número cujo próximo ponteiro volta direto novamente, por exemplo, isso está errado:

```pawn
2,  3, 3
1,  2, -1
-1, 2, 0
```

O próximo ponteiro do 2 aponta para o 3 no slot um, mas o último ponteiro desse 3 não volta para o dois, ambas as listas estão em ordem por conta própria (já que os dois três podem estar em qualquer ordem), mas juntas estão erradas, a versão correta seria:

```pawn
2,  3, 3
1,  2, -1
-1, 0, 2
```

Ambas as listas começam e terminam nos dois números finais, a lista traseira no exemplo errado começou no número do meio.

O outro tipo de lista é a circular onde o último valor aponta de volta para o primeiro. A vantagem óbvia disso é que você pode chegar a qualquer valor a partir de qualquer outro valor sem saber antecipadamente se o alvo está antes ou depois do ponto de partida, você só precisa ter cuidado para não entrar em um loop infinito, pois não há ponto final explícito -1. Essas listas ainda têm pontos de partida. Você também pode fazer listas circulares duplas onde você tem uma lista de próximo e última, ambas circulares:

```pawn
start = 1
end = 5
3, 1,  64, 2, 4, 786, 2, 9, 3
8, 3,  5,  6, 7, 1,   0, 2, 4
6, 5,  7,  1, 8, 2,   3, 4, 0
```

#### Listas Mistas

Listas mistas são arrays contendo múltiplas listas ao mesmo tempo. Um exemplo poderia ser um array de valores, ordenado por uma lista, com outra lista ligando todos os slots não utilizados para que você saiba onde pode adicionar um novo valor. Exemplo (X significa slot não utilizado (livre)):

```pawn
sortedStart = 3
unusedStart = 1
value: 34, X, X, 6, 34, 46, X,  54, 23, 25, X,  75, X, 45
sort:  4,        8, 13, 7,      11, 9,  0,      -1,    5
free:      2, 6,            10,             12,     -1
```

Obviamente as duas listas nunca interagem, então ambas podem usar o mesmo slot para o seu próximo valor:

```pawn
sortedStart = 3
unusedStart = 1
value: 34, X, X, 6, 34, 46, X,  54, 23, 25, X,  75, X,  45
next:  4,  2, 6, 8, 13, 7,  10, 11, 9,  0,  12, -1, -1, 5
```

#### Código

Antes de começar o código, você precisa decidir que tipo de lista é mais adequada para sua aplicação, isso é inteiramente baseado na aplicação e não pode ser facilmente coberto aqui. Todos esses exemplos são listas mistas, uma lista para os valores necessários, uma para slots não utilizados.

Este exemplo mostra como escrever código para uma lista ordenada numericamente em ordem crescente.

```pawn
#define NUMBER_OF_VALUES (10)

enum E_DATA_LIST
{
    E_DATA_LIST_VALUE,
    E_DATA_LIST_NEXT
}

new
    gListData[NUMBER_OF_VALUES][E_DATA_LIST],
    gUnusedStart = 0,
    gListStart = -1; // Começa sem lista

// Esta função inicializa a lista
List_Setup()
{
    new
        i,
        size = NUMBER_OF_VALUES;
    size--;
    for (i = 0; i < size; i++)
    {
        // Para começar, todos os slots estão não utilizados
        gListData[i][E_DATA_LIST_NEXT] = i + 1;
    }
    // Finaliza a lista
    gListData[size][E_DATA_LIST_NEXT] = -1;
}

// Esta função adiciona um valor à lista (usando ordenação básica)
List_Add(value)
{
    // Verifica se há slots livres no array
    if (gUnusedStart == -1) return -1;
    new
        pointer = gListStart,
        last = -1,
        slot = gUnusedStart;
    // Adiciona o valor ao array
    gListData[slot][E_DATA_LIST_VALUE] = value;
    // Atualiza a lista vazia
    gUnusedStart = gListData[slot][E_DATA_LIST_NEXT];
    // Percorre a lista até chegar a um número maior/do mesmo tamanho
    while (pointer != -1 && gListData[pointer][E_DATA_LIST_VALUE] < value)
    {
        // Salva a posição do último valor
        last = pointer;
        // Move para o próximo slot
        pointer = gListData[pointer][E_DATA_LIST_NEXT];
    }
    // Se chegamos aqui, acabaram os valores ou alcançamos um maior
    // Verifica se checamos algum número
    if (last == -1)
    {
        // O primeiro número era maior ou não há lista
        // De qualquer forma, adiciona o novo valor ao início da lista
        gListData[slot][E_DATA_LIST_NEXT] = gListStart;
        gListStart = slot;
    }
    else
    {
        // Coloca o novo valor na lista
        gListData[slot][E_DATA_LIST_NEXT] = pointer;
        gListData[last][E_DATA_LIST_NEXT] = slot;
    }
    return slot;
}

// Esta função remove um valor de um determinado slot no array (retornado por List_Add)
List_Remove(slot)
{
    // Este é um slot válido
    if (slot < 0 || slot >= NUMBER_OF_VALUES) return 0;
    // Primeiro encontra o slot anterior
    new
        pointer = gListStart,
        last = -1;
    while (pointer != -1 && pointer != slot)
    {
        last = pointer;
        pointer = gListData[pointer][E_DATA_LIST_NEXT];
    }
    // Encontramos o slot na lista
    if (pointer == -1) return 0;
    if (last == -1)
    {
        // O valor é o primeiro na lista
        // Pula este slot na lista
        gListStart = gListData[slot][E_DATA_LIST_NEXT];
    }
    else
    {
        // O valor está na lista
        // Pula este slot na lista
        gListData[last][E_DATA_LIST_NEXT] = gListData[slot][E_DATA_LIST_NEXT];
    }
    // Adiciona este slot à lista de não utilizados
    // A lista de não utilizados não está em nenhuma ordem, então isso não importa
    gListData[slot][E_DATA_LIST_NEXT] = gUnusedStart;
    gUnusedStart = slot;
    return 1;
}
```

### Árvores Binárias

#### Introdução

Árvores binárias são um método muito rápido de pesquisar dados em um array usando um sistema de lista muito especial. A árvore binária mais conhecida é provavelmente o jogo das 20 perguntas, com apenas 20 perguntas sim/não você pode ter mais de 1048576 itens. Uma árvore binária, como o nome indica, é um tipo de árvore, semelhante a uma árvore genealógica, onde cada item tem 0, 1 ou 2 filhos. Elas não são usadas para ordenar dados como uma lista, mas para classificar dados para uma pesquisa muito eficiente. Basicamente, você começa com um item em algum lugar próximo ao meio da lista ordenada de objetos (por exemplo, o número do meio em um array ordenado) e compara isso com o valor que deseja encontrar. Se for o mesmo, você encontrou seu item, se for maior, você move para o item à direita (não imediatamente à direita, o item à direita do item do meio seria o item na marca de três quartos), se for menor, você move para a esquerda, então repete o processo.

**Exemplo**

```pawn
1 2 5 6 7 9 12 14 17 19 23 25 28 33 38
```

Você tem o array ordenado anterior e deseja encontrar em qual slot o número 7 está (se estiver), neste exemplo provavelmente é mais eficiente apenas percorrer diretamente o array para encontrá-lo, mas esse não é o ponto, esse método aumenta em tempo linearmente com o tamanho do array, o tempo de pesquisa binária aumenta linearmente à medida que o array aumenta exponencialmente em tamanho. Ou seja, um array de tamanho 128 levará o dobro do tempo para pesquisar diretamente do que um array de tamanho 64, mas uma pesquisa binária 128 levará apenas uma verificação a mais do que uma pesquisa binária 64, nada demais.

Se construirmos uma árvore binária a partir dos dados acima, obtemos: ![Binarytree](https://sampwiki.blast.hk/wiki/Image:Binarytree.GIF)

Se você ler da esquerda para a direita, ignorando o aspecto vertical, você pode ver que os números estão em ordem. Agora podemos tentar encontrar o 7.

O número inicial é 14, 7 é menor que 14, então vamos para o slot apontado pelo ramo esquerdo do 14. Isso nos leva ao 6, 7 é maior que 6, então vamos para a direita até o 9, depois para a esquerda novamente até o 7. Este método levou 4 comparações para encontrar o número (incluindo a verificação final para confirmar que estamos no 7), usando uma pesquisa direta teria levado 5.

Vamos dizer que não há 7, acabaríamos com esta árvore binária: ![Binarytree-7-less](https://sampwiki.blast.hk/wiki/Image:Binarytree-7-less.GIF)

Esta, ao contrário do exemplo acima, tem um único número filho (o 9), bem como números filhos 2 e 0. Você só obtém uma árvore perfeita quando há (2^n)-1 números (0, 1, 3, 7, 15, 31 ...), quaisquer outros números darão uma árvore não completamente cheia. Neste caso, quando chegamos ao 9, onde o 7 estaria, encontraremos que não há ramo esquerdo, significando que o 7 não existe (ele não pode estar em nenhum outro lugar na árvore, pense nisso), então retornamos -1 para slot inválido.

#### Balanceadas e desbalanceadas

As árvores nos exemplos acima são chamadas de árvores binárias balanceadas, isso significa que, o mais próximo possível, todos os ramos têm o mesmo comprimento (obviamente no segundo não há números suficientes para que este seja o caso, mas é o mais próximo possível). Construir árvores balanceadas não é fácil, o método geralmente aceito de construir árvores quase balanceadas é colocar os números em ordem aleatória, isso pode significar que você acaba com algo assim: ![Binarytree-uneven](https://sampwiki.blast.hk/wiki/Image:Binarytree-uneven.GIF)

Obviamente esta árvore ainda é válida, mas o lado direito é muito maior que o esquerdo, no entanto, encontrar 25 ainda leva apenas 7 comparações nesta em comparação com 12 na lista direta. Além disso, contanto que você comece com um número razoavelmente do meio, o método de inserção aleatória deve produzir uma árvore razoavelmente balanceada. A pior coisa possível que você pode fazer é colocar os números em ordem, pois então não haverá ramos esquerdos (ou ramos direitos se feito ao contrário), no entanto, mesmo neste pior caso, a árvore binária não levará mais tempo para pesquisar do que a lista direta.

**Modificação**

#### Adição

Adicionar um valor a uma árvore binária é relativamente fácil, você apenas segue a árvore, usando o valor que deseja adicionar como referência até atingir um ramo vazio e adicionar o número lá. Por exemplo, se você quisesse adicionar o número 15 à nossa árvore balanceada original, ele acabaria no ramo esquerdo do 17. Se quiséssemos adicionar o número 8 à segunda árvore balanceada (a sem o 7), ele acabaria no antigo slot do 7 à esquerda do 9.

#### Exclusão

Excluir um número de uma árvore binária pode ser difícil ou pode ser fácil. Se o número está no final de um ramo (por exemplo, 1, 5, 7, 12 etc na árvore original), você simplesmente os remove. Se um número tem apenas um filho (por exemplo, o 9 no segundo exemplo), você simplesmente move esse filho (por exemplo, o 12) para cima em sua posição (então os filhos do 6 seriam 2 e 12 no novo segundo exemplo com 9 removido). A exclusão só fica interessante quando um nó tem dois filhos. Existem pelo menos quatro maneiras de fazer isso:

O primeiro método é o mais simples computacionalmente. Basicamente, você escolhe um dos ramos (esquerdo ou direito, assuma direito para esta explicação) e substitui o nó que você removeu pelo primeiro nó desse ramo (ou seja, o filho direito do nó que você removeu). Você então vai para a esquerda através do novo ramo até chegar ao final e coloca o ramo esquerdo lá. Por exemplo, se você removesse o 14 do exemplo original, você acabaria com o 25 tomando seu lugar no topo da árvore e o 6 anexado ao ramo esquerdo do 17. Este método é rápido, mas acaba com árvores muito desbalanceadas muito rapidamente.

O segundo método é obter todos os números que são filhos do nó que você acabou de remover e reconstruir uma nova árvore binária a partir deles, depois colocar o topo dessa árvore no nó que você acabou de remover. Isso mantém a árvore razoavelmente bem balanceada, mas é obviamente mais lento.

O terceiro método é combinar os dois métodos acima e reconstruir a árvore inline, isso é mais complexo de codificar, mas mantém a árvore balanceada e é mais rápido que o segundo método (embora não tão rápido quanto o primeiro).

O método final listado aqui é simplesmente definir uma flag em um valor dizendo que não é mais usado, isso é ainda mais rápido que o primeiro método e mantém a estrutura, mas significa que você não pode reutilizar slots a menos que possa encontrar um valor para substituí-lo mais tarde.
