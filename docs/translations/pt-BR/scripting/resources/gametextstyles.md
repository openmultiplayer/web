---
title: Estilos de GameText
description: Estilos de GameText usados em textdraws e gametext.
---

Esta página aborda tudo o que você precisa saber sobre estilos de gametext e como eles podem ser usados em textdraw e em texto renderizado para um (único) jogador.
Usado principalmente por [GameText](../functions/GameTextForPlayer) e [GameTextForAll](../functions/GameTextForAll).

---
  
## Cores do texto
É possível desenhar certas partes do seu texto em cores diferentes. Para fazer isso, você simplesmente precisa usar os slugs de cores listados abaixo e encapsular a parte do texto que deseja desenhar em uma cor específica (ex: \~y\~Eu sou desenhado em amarelo!\~y\~).

| Codigo                 | Cor                                 | Descrição                                     |
| -------------------- | -------------------------------------- | ------------------------------------------------ |
| N/A                  | ![](/images/gameTextStyles/-.png)      | Cor padrão, não possui código.                     |
| `~h~`                | ![](/images/gameTextStyles/h.png)      | Versão mais clara da cor padrão        |
| `~h~~h~`             | ![](/images/gameTextStyles/hh.png)     | Versão mais clara da cor padrão.           |
| `~r~`                | ![](/images/gameTextStyles/r.png)      | Possui cinco níveis de clareamento.                   |
| `~r~~h~`             | ![](/images/gameTextStyles/rh.png)     |                                                  |
| `~r~~h~~h~`          | ![](/images/gameTextStyles/rhh.png)    |                                                  |
| `~r~~h~~h~~h~`       | ![](/images/gameTextStyles/rhhh.png)   |                                                  |
| `~r~~h~~h~~h~~h~`    | ![](/images/gameTextStyles/rhhhh.png)  |                                                  |
| `~r~~h~~h~~h~~h~~h~` | ![](/images/gameTextStyles/rhhhhh.png) |                                                  |
| `~g~`                | ![](/images/gameTextStyles/g.png)      | Possui quatro níveis de clareamento.                   |
| `~g~~h~`             | ![](/images/gameTextStyles/gh.png)     |                                                  |
| `~g~~h~~h~`          | ![](/images/gameTextStyles/ghh.png)    |                                                  |
| `~g~~h~~h~~h~`       | ![](/images/gameTextStyles/ghhh.png)   |                                                  |
| `~g~~h~~h~~h~~h~`    | ![](/images/gameTextStyles/ghhhh.png)  | O mesmo que `~y~~h~~h~`.                             |
| `~b~`                | ![](/images/gameTextStyles/b.png)      | Possui três níveis de clareamento.                  |
| `~b~~h~`             | ![](/images/gameTextStyles/bh.png)     |                                                  |
| `~b~~h~~h~`          | ![](/images/gameTextStyles/bhh.png)    |                                                  |
| `~b~~h~~h~~h~`       | ![](/images/gameTextStyles/bhhh.png)   |                                                  |
| `~p~`                | ![](/images/gameTextStyles/p.png)      | Possui dois níveis de clareamento.                    |
| `~p~~h~`             | ![](/images/gameTextStyles/ph.png)     |                                                  |
| `~p~~h~~h~`          | ![](/images/gameTextStyles/phh.png)    |                                                  |
| `~y~`                | ![](/images/gameTextStyles/y.png)      | Possui dois níveis de clareamento.                    |
| `~y~~h~`             | ![](/images/gameTextStyles/yh.png)     |                                                  |
| `~y~~h~~h~`          | ![](/images/gameTextStyles/yhh.png)    | O mesmo que `~g~~h~~h~~h~~h~`.                       |
| `~l~`                | ![](/images/gameTextStyles/l.png)      | "L" minúsculo. Não pode ser clareado.             |
| `~w~ (or ~s~)`       | ![](/images/gameTextStyles/w.png)      | Tem um nível de clareamento.                     |
| `~w~~h~ (or ~s~~h~)` | ![](/images/gameTextStyles/wh.png)     | Todas as cores se tornam assim quando muito iluminadas. |

---
  
## Carácteres especiais
Diferentemente das cores de texto, esses slugs (código de texto) não exigem encapsulamento. Eles podem ser usados como estão.

|  Código | Descrição                                                                                                                       |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `~n~` | Nova linha                                                                                                                            |
| `~h~` | Clareie as cores selecionadas.  O texto pode aparecer entre a cor principal e o clareamento, por exemplo `~r~Olá ~h~mundo` tornará "Olá" vermelho e "mundo" um vermelho ligeiramente mais claro. |
| `~u~` | Seta para cima (cinza)                                                                                                                     |
| `~d~` | Seta para baixo (cinza)                                                                                                                   |
| `~<~` | Seta para a esquerda (cinza)                                                                                                                   |
| `~>~` | Seta para a direita (cinza)                                                                                                                  |
| `~]~` | Exibe um `*` símbolo (somente nos estilos de texto 3, 4 e 5)                                                                              |
| `~k~` | Mapeamento de teclas do teclado (ex: `~k~~VEHICLE_TURRETLEFT~` e `~k~~PED_FIREWEAPON~`). Veja [aqui](../resources/keys) uma lista de chaves. |

:::caution

Tenha cuidado, usar muitas cores de texto ou caracteres especiais em um gametext pode travar todos os jogadores para os quais o gametext é exibido. Além disso, evite usar o caractere `~` de forma desigual. Exemplo: `~~r~Olá, ~g~como vai ~y~você?`

:::

## Estilos de texto
Você pode usar os seguintes estilos de texto em gametext.

|  Estilo  | Pré-visualização                               | Descrição                                                                                                              |
| ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Estilo 0 | ![](/images/gameTextStyles/style0.png) | Aparece por 9 segundos, independentemente da configuração de tempo. Oculta textdraws e qualquer outro gametext na tela (corrigido em fixes.inc)  |
| Estilo 1 | ![](/images/gameTextStyles/style1.png) | Desaparece após 8 segundos, independentemente do tempo definido. Se você tiver uma configuração de tempo maior que isso, ele reaparecerá após desaparecer e repetirá até que o tempo acabe (corrigido em fixes.inc) |
| Estilo 2 | ![](/images/gameTextStyles/style2.png) | N/A                                                                                                                      |
| Estilo 3 | ![](/images/gameTextStyles/style3.png) | N/A                                                                                                                      |
| Estilo 4 | ![](/images/gameTextStyles/style4.png) | N/A                                                                                                                      |
| Estilo 5 | ![](/images/gameTextStyles/style5.png) | Exibe por 3 segundos, independentemente do horário que você definir. Recusará ser exibido se for "spam" (corrigido em fixes.inc) |
| Estilo 6 | ![](/images/gameTextStyles/style6.png) | N/A                                                                                                                      |

---
  
## Estilos de texto adicionados por [fixes.inc](https://github.com/pawn-lang/sa-mp-fixes)

|  Estilo   | Pré-visualização                                 | Descrição                                        |
| -------- | --------------------------------------- | -------------------------------------------------- |
| Estilo 7  | ![](/images/gameTextStyles/style7.png)  | Baseado em nomes de veículos.                         |
| Estilo 8  | ![](/images/gameTextStyles/style8.png)  | Baseado em nomes de locais.                        |
| Estilo 9  | ![](/images/gameTextStyles/style9.png)  | Baseado em nomes de estações de rádio (uma vez selecionado).   |
| Estilo 10 | ![](/images/gameTextStyles/style10.png) | Baseado em nomes de estações de rádio (durante a troca). |
| Estilo 11 | ![](/images/gameTextStyles/style11.png) | Baseado em dinheiro positivo.                        |
| Estilo 12 | ![](/images/gameTextStyles/style12.png) | Baseado em dinheiro negativo.                        |
| Estilo 13 | ![](/images/gameTextStyles/style13.png) | Baseado nos bônus de acrobacias.                         |
| Estilo 14 | ![](/images/gameTextStyles/style14.png) | Baseado no relógio do jogo.                         |
| Estilo 15 | ![](/images/gameTextStyles/style15.png) | Com base no pop-up de notificação.                    |
