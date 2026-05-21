---
title: Path Nodes
sidebar_label: Path Nodes
description: "Documentação do sistema do nó de caminho GTA SA"
tags: [nodes, paths, ai, navigation, vehicles, pedestrians]
---


:::warning Source Attribution
Esta documentação foi originalmente obtida de [GTAMods Wiki - Paths (GTA SA)](<https://gtamods.com/wiki/Paths_(GTA_SA)>) e foi preservada aqui para fins de arquivamento. O conteúdo permanece inalterado, apenas com melhorias de formatação para melhorar a legibilidade da documentação open.mp.
:::

<!-- Image: Colour-coded car path nodes for GTA: SA. (SAPathNodes.png) -->

## Visão geral

Os 64 arquivos `nodes*.dat` em `gta3.img` (ou qualquer outro arquivo) contêm os caminhos do veículo e dos pedestres e informações relacionadas para GTA SA. Há um arquivo para cada unidade quadrada de 750×750, começando no canto sudoeste (-3000, -3000) em ordem de linha maior.

Os caminhos para aviões e trens não são armazenados nos arquivos do nó. Os trens usam os quatro arquivos `tracks*.dat`. Também existem caminhos para diversas missões e carros concretos em `carrec.img`.

Os nós podem ser influenciados através de scripts utilizando os opcodes 01EB e 03DE.

Normalmente, carros e pedestres usam nós se não estiverem vinculados a um script ou caminho `carrec.img` de alguma forma.

Existe uma [versão modificada](https://gtamods.com/wiki/Fastman92_Path_Format) do formato de caminho que pode ser usado com o Limit Adjuster do fastman92, que remove ou estende alguns dos limites que o formato nativo impõe.

## Objetivo

Acredita-se que os arquivos do nó foram gerados por algum tipo de compilador de caminho durante o desenvolvimento do jogo e representam as estruturas de dados binários de fácil processamento geradas em tempo de execução por versões anteriores do jogo a partir de arquivos como `paths.ipl` e relacionados. Esses arquivos ainda estão presentes em SA, mas não são utilizados.

Como o compilador de caminho integrado aparentemente foi removido do código do jogo ou pelo menos tornou-se não funcional, ferramentas e técnicas personalizadas são necessárias para gerar novos caminhos para SA.

Os arquivos do nó são transmitidos pelo jogo – apenas a área ativa e aquelas ao seu redor são carregadas por vez. Assim, arquivos corrompidos só levam ao travamento do jogo quando o jogador entra na área específica.

Os arquivos `nodes*.dat` separados no diretório `data/paths/` são ignorados pelo jogo.

## Formato de arquivo

Cada arquivo começa com um cabeçalho, seguido por 7 seções distintas.

Os caminhos são armazenados como gráficos de ligação dupla (portanto, não direcionados) na representação de lista de adjacências. Pode haver conexões entre áreas separadas.

### Tipos de dados

Os seguintes tipos de dados e estruturas são usados neste artigo:

| Tipo | Descrição | Tamanho |
| ---------------- | -------------------------------------- | ------- |
| **INT8/UINT8** | inteiro de 8 bits assinado/não assinado | 1 byte |
| **INT16/UINT16** | inteiro de 16 bits assinado/não assinado | 2 bytes |
| **INT32/UINT32** | inteiro de 32 bits assinado/não assinado | 4 bytes |
| **FLOAT** | número de ponto flutuante de precisão única | 4 bytes |

### Conceitos-chave

Existem vários conceitos principais que são importantes para entender como funcionam os arquivos de caminho:

- Um **"nó"** é um ponto individual no espaço que é usado como âncora para um caminho
- **Caminhos** são rotas entre nós. Eles são rastreados no jogo por pedestres e veículos, mas normalmente são mostrados nos editores como linhas gráficas
- Dois nós são conectados por um referenciando um **"link"** que aponta para o outro
- A maioria dos nós se conecta a dois outros nós, um para cada direção ao longo de um caminho, mas é possível que haja mais (como em uma junção)

### Cabeçalho

O cabeçalho contém informações sobre o conteúdo das diversas seções do arquivo. Tem um tamanho de **20 bytes**.

| Size | Tipo | Descrição |
| ---- | ------ | ------------------------------------ |
| 4b | UINT32 | número de nós (secção 1) |
| 4b | UINT32 | número de nós de veículos (secção 1a) |
| 4b | UINT32 | número de nós ped (secção 1b) |
| 4b | UINT32 | número de nós de navegação (secção 2) |
| 4b | UINT32 | número de links (seção 3/5/6) |

:::note
As seções relacionadas aos links (3/5/6) possuem o mesmo número de entradas. Essas entradas pertencem umas às outras e podem ser tratadas como um único registro pelos editores.
:::

### Seção 1 - Nós de caminho

A primeira seção contém os dados do nó para os caminhos. Eles são agrupados por tipo: a lista de nós de veículos (carros, barcos, pistas de corrida) é seguida pelos nós ped. Cada entrada de nó tem um tamanho de **28 bytes**.

| Size | Tipo | Descrição |
| ---- | -------- | -------------------------------------------------------------------- |
| 4b | UINT32 | Endereço Mem, _não utilizado_ |
| 4b | UINT32 | sempre zero, _não utilizado_ |
| 6b | INT16[3] | Posição (XYZ), veja abaixo |
| 2b | INT16 | custo heurístico, sempre `0x7FFE`, utilizado internamente para cálculo de rotas |
| 2b | UINT16 | Ligação ID |
| 2b | UINT16 | Área ID (igual ao nome do arquivo) |
| 2b | UINT16 | Nó ID (incrementa em 1) |
| 1b | UINT8 | Largura do caminho |
| 1b | UINT8 | Flood Fill, usado em cálculos de rotas |
| 4b | UINT32 | Bandeiras |

#### Descrições dos campos

- **Endereço Mem**: Estes podem ter sido ponteiros para estruturas de segmento de caminho dentro do compilador de caminho do R\*. Aparentemente eles são ignorados pelo jogo e podem ser zerados.
- **Posição**: Esta é a posição do nó nas coordenadas mundiais. Para converter as palavras sinalizadas em valores de ponto flutuante, divida-as por 8.
- **Link ID**: o ID do primeiro nó ao qual este nó está vinculado. O intervalo de nós vinculados é _link ID ≤ x < (link ID + contagem de links)_, onde a contagem de links é dada pelos primeiros quatro bits dos sinalizadores.
- **Área ID e Nó ID**: Dados informativos, utilizados para conectar nós via Links. A área ID é sempre igual ao número no nome do arquivo e o nó ID é usado para identificar o nó.
- **Largura do caminho**: Isto é usado para modificar a largura de um caminho. O valor padrão é 0 (zero). Para converter a palavra assinada em um valor de ponto flutuante, divida-a por 8.
- **Inundação**: Inundação IDs para cálculo de rota para NPCs. Para o tráfego normal de veículos NPC, um valor de 1 é usado, 2 é para barcos e valores mais altos são alocados para segmentos de área de caminho desconectados, por exemplo, para pistas de corrida e outras aplicações de missão.
- **Flags**: Os primeiros 4 bits definem o número de links para nós adjacentes. Os demais bits são utilizados para caracterizar o comportamento do nó, para mais informações consulte a tabela abaixo.

#### Sinalizadores de nó de caminho

_Bits de sinalização de nó, de baixo para alto:_

| Bits | Descrição |
| ---- | ------------ |
| 0-3 | Contagem de links |
| 4-5 | TrafficLevel |

O LinkCount define o número de entradas incrementadas a partir do LinkID. O TrafficLevel usa 4 etapas:

- 0 = completo
- 1 = alto
- 2 = médio
- 3 = baixo

| Flag | Pouco | Descrição |
| ----- | ----- | --------------------------------------------------------------- |
| A | 06 | Bloqueios de estradas |
| B | 07 | Barcos |
| C | 08 | Apenas veículos de emergência |
| D | 09 | zero/não utilizado |
| E | 10 | desconhecido, caminhos de entrada da casa do bosque?                           |
| F | 11 | zero/não utilizado |
| G | 12 | não é rodovia |
| H | 13 | É Rodovia (ignorada para nós PED e nunca 11 ou 00 para carros!) |
| I | 14 | zero |
| J | 15 | zero |
| K-M | 16-19 | probabilidade de geração (`0x00` a `0x0F`) |
| O | 20 | RoadBlock?                                                      |
| P | 21 | Estacionamento |
| Q | 22 | zero |
| R | 23 | RoadBlock?                                                      |
| 24-31 |       | zero (não utilizado) |

As seguintes _estatísticas sobre uso de sinalizadores_, agrupadas por tipo de caminho, podem ser úteis para pesquisas futuras:

| Flag | Pediatria | Carros | Total |
| --------- | --------------- | --------------- | ------ |
| **Total** | 37.650 | 30.587 | 68.237 |
| A | 0 | 391 (1,28%) | 391 |
| B | 0 | 1.596 (5,22%) | 1.596 |
| C | 6.019 (15,99%) | 7.669 (25,08%) | 13.688 |
| D | 0 | 0 | 0 |
| E | 17 (0,05%) | 0 | 17 |
| F | 0 | 0 | 0 |
| G | 0 | 27.936 (91,33%) | 27.936 |
| H | 0 | 2.539 (8,3%) | 2.539 |
| I | 0 | 0 | 0 |
| J | 0 | 0 | 0 |
| K | 37.646 (99,98%) | 30.582 (99,98%) | 68.228 |
| L | 36.676 (97,41%) | 30.141 (98,54%) | 66.817 |
| M | 36.676 (97,41%) | 30.136 (98,52%) | 66.812 |
| N | 36.607 (97,22%) | 30.046 (98,23%) | 66.653 |
| O | 0 | 8 (0,03%) | 8 |
| P | 0 | 215 (0,7%) | 215 |
| Q | 0 | 0 | 0 |
| R | 0 | 16 (0,05%) | 16 |

### Seção 2 - Nós Navi

A segunda seção contém nós adicionais. Esses nós são _nós de navegação_ (mas são chamados neste artigo como "nós de navegação" por questões de brevidade). Cada registro tem um tamanho de **14 bytes**.

Os nós Navi são usados ​​para definir informações adicionais para segmentos do caminho do veículo; eles não são usados ​​por caminhos ped. Eles geralmente são posicionados entre dois nós adjacentes do veículo em uma curva interpolada.

Pode haver bugs se você não conectar os nós de navegação corretamente. Os links sempre vão de um nó com área/nó ID superior para outro com ID inferior, portanto, o destino é sempre o nó inferior.

| Size | Tipo | Descrição |
| ---- | -------- | ------------------------- |
| 4b | INT16[2] | Posição (XY), veja abaixo |
| 2b | UINT16 | Área ID |
| 2b | UINT16 | Nó ID |
| 2b | INT8[2] | Direção (XY), veja abaixo |
| 4b | UINT32 | Bandeiras |

#### Descrições dos campos do nó Navi

- **Posição**: Esta é a posição do nó de navegação nas coordenadas mundiais. Para converter as palavras sinalizadas em valores de ponto flutuante, divida-as por 8.
- **Área ID e Nó ID**: identificam o nó de destino ao qual um nó de navegação está anexado.
- **Direção**: Este é um vetor normalizado apontando para o nó alvo mencionado acima, definindo assim a direção geral do segmento do caminho. Os componentes do vetor são representados por bytes assinados com valores dentro do intervalo [-100, 100], que corresponde ao intervalo de valores de ponto flutuante [-1,0, 1,0].

#### Sinalizadores de nó Navi

Eles são usados para caracterizar o comportamento do segmento de caminho. Para obter mais informações, consulte a tabela abaixo.

| Bits | Descrição |
| ----- | ---------------------------------------------------------------------- |
| 0-7 | largura do nó do caminho, geralmente uma cópia da largura do caminho do nó vinculado (byte) |
| 8-10 | número de faixas da esquerda |
| 11-13 | número de faixas da direita |
| 14 | comportamento da direção do semáforo |
| 15 | zero/não utilizado |
| 16,17 | comportamento dos semáforos |
| 18 | travessia de trem |
| 19-31 | zero/não utilizado |

#### Notas importantes

- As faixas da direita (para frente) e da esquerda (para trás) são relativas ao vetor de direção.
- A experiência tem mostrado que nós de navegação com anexos além das fronteiras da área não funcionam muito bem. Uma solução possível é anexá-los ao último em vez do próximo nó, inverter a direção e trocar os números das faixas (se diferentes) e outras bandeiras dependentes da direção. No entanto, isso nunca funcionará se o nó anterior, de navegação e o próximo estiverem localizados em áreas diferentes cada. **(\*)**
- _Comportamento do semáforo_ pode ser um valor de 0 a 2, onde 0 significa que os semáforos estão desativados, 1 e 2 são usados para os semáforos e são ciclos Norte-Sul e Oeste-Leste para sincronização de semáforos, respectivamente.
- O _comportamento da direção do semáforo_ é 1 se o nó de navegação tiver a mesma direção do semáforo e 0 se o nó de navegação apontar para outro lugar.

:::note
(\*) Ficou claro depois de saber exatamente como os Navis estão vinculados. Então você pode usar isso, mas não é obrigação.
:::

### Seção 3 - Links

Esses são links para nós adjacentes, **4 bytes** por entrada.

| Size | Tipo | Descrição |
| ---- | ------ | ----------- |
| 2b | UINT16 | Área ID |
| 2b | UINT16 | Nó ID |

### Seção 4 - Preenchimento

Esta seção contém dados de tamanho e conteúdo constantes; seu propósito é desconhecido. Esses **768 bytes** são preenchidos com 192 repetições do padrão `0xFF 0xFF 0x00 0x00`, mas também podem ser preenchidos com zeros.

### Seção 5 - Links de navegação

Estes são links para nós de navegação adjacentes, um para cada link (na seção 3), **2 bytes** por entrada. Para índices de nós ped (na seção 1b), estes são zero (não utilizados).

| Size | Tipo | Descrição |
| ---- | ------ | ------------------------------------------------------------------------ |
| 2b | UINT16 | os 10 bits inferiores são o Navi Node ID, os 6 bits superiores são a área correspondente ID |

:::warning Important Limitations
**Limites de nós de navegação:**

- Máximo de **1.024** nós Navi por arquivo de área
- Máximo de **64** arquivos/áreas no total

**Nó Navi ID Nota:**

- O Navi Node ID não é o Linked Node ID da Seção 2, mas sim a ordem sequencial em que o Navi Node aparece no arquivo.
  :::

### Seção 6 - Comprimentos dos links

Estas são as distâncias entre nós vinculados em unidades completas, **1 byte** por entrada. Eles são essenciais para algoritmos de localização de caminhos.

| Size | Tipo | Descrição |
| ---- | ----- | ----------- |
| 1b | UINT8 | Comprimento |

### Seção 7 - Sinalizadores de interseção de caminho

Esta seção consiste em valores de sinalizadores de interseção para cada endereço de nó (ou seja, link de nó).

```cpp
class CPathIntersectionInfo
{
public:
    unsigned char m_bRoadCross : 1;
    unsigned char m_bPedTrafficLight : 1;
};
```
O tamanho da seção é igual à contagem de endereços de nós.
A seção é seguida por 192 bytes de dados desconhecidos.

## Ferramentas e scripts

- [Formato de caminho Fastman92](https://gtamods.com/wiki/Fastman92_Path_Format)
- [SA Path Editor (WIP)](https://gtagmodding.com/1093) por JGuntherS@NL - Útil apenas para editar dados de caminho existentes
- [Path Compiler (WIP)](https://gtaforums.com/topic/214901-compiled-path-nodes/?do=findComment&comment=3841297) por ocram88 - Permite criar caminhos ped lineares gerando waypoints de dentro do jogo
- [Ferramenta Path (WIP)](https://gtaforums.com/topic/214901-compiled-path-nodes/?do=findComment&comment=3936074) por steve-m - Vem com um MaxScript para exportar caminhos de pedestres e veículos do Max (usando formas spline)
- [APE v1.1](https://gtaforums.com/topic/295628-ape-v11/) por Aschratt - Baseado em um memhack e incluindo um descompilador é possível adicionar caminho ao existente ou criar completamente novo a partir do jogo!
- [Path Script](https://gtaforums.com/topic/283684-path-script/) - um script de Deniska para 3DSMax que cria arquivos de caminho diretamente
- [PathViewer](https://gtaforums.com/topic/392955-pathviewer/) - uma ferramenta da Aschratt que permite visualizar caminhos e destacar nós com sinalizadores especiais em 3D
- [ajustador de limite fastman92](https://gtaforums.com/topic/733982-fastman92-limit-adjuster/) - Ajustador de limite por fastman92 que permite aumentar os limites do caminho

## Veja também

- [Nós de caminho compilado](https://gtaforums.com/topic/214901-compiled-path-nodes/) - tópico de discussão original
- [Documentação de caminhos para SA, VC e GTA3](https://gtaforums.com/topic/93990-paths-documentation-for-sa-vc-and-gta3/?do=findComment&comment=3813170)
