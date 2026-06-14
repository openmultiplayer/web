---
title: SetPlayerMapIcon
sidebar_label: SetPlayerMapIcon
description: "Coloque um ícone/marcador no mapa de um jogador."
tags: ["player"]
---


## Descrição

Coloque um ícone/marcador no mapa de um jogador. Pode ser usado para marcar locais como bancos e hospitais para os jogadores.

| Nome | Descrição |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador para o qual definir o ícone do mapa.                                                                                                             |
| iconid | O ícone do jogador ID, variando de 0 a 99. Isso significa que há no máximo 100 ícones de mapa. ID pode ser usado em [RemovePlayerMapIcon](RemovePlayerMapIcon). |
| Float:x | A coordenada X na qual colocar o ícone do mapa.                                                                                                                |
| Float:y | A coordenada Y na qual colocar o ícone do mapa.                                                                                                                |
| Float:z | A coordenada Z na qual colocar o ícone do mapa.                                                                                                                |
| markerType | O [ícone](../resources/mapicons) a ser definido.                                                                                                                 |
| colour | A cor do ícone, como um número inteiro ou hexadecimal no formato de cor RGBA. Deve ser usado apenas com o ícone quadrado (ID: 0).                                  |
| MAPICON:style | O [estilo](../resources/mapiconstyles) do ícone.                                                                                                          |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador não está conectado.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    // Este exemplo demonstra como criar um ícone de dólar no topo de um 24/7 localizado
    // em Las Venturas. Desta forma, os novos jogadores sabem para onde ir com o seu dinheiro!
    SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0, MAPICON_LOCAL);
}
```
## Notas

:::tip

- Se você usar um tipo de marcador inválido, ele criará ID 1 (Quadrado Branco![](https://assets.open.mp/assets/images/mapIcons/icon1.gif)).
- Se você usar um ícone ID que já esteja em uso, ele substituirá o ícone do mapa atual usando esse ID.

:::

:::warning

- Você só pode ter 100 ícones de mapa. Para contornar esse limite, você pode usar o plugin [streamer](https://github.com/samp-incognito/samp-streamer-plugin).
- O tipo de marcador 1 (![](https://assets.open.mp/assets/images/mapIcons/icon1.gif)), 2 (![](https://assets.open.mp/assets/images/mapIcons/icon2.gif)), 4 (![](https://assets.open.mp/assets/images/mapIcons/icon4.gif)) e 56 (![](https://assets.open.mp/assets/images/mapIcons/icon56.gif)) fará com que seu jogo trave se você tiver as legendas do mapa ativadas durante a visualização do mapa.

:::

## Funções Relacionadas

- [RemovePlayerMapIcon](RemovePlayerMapIcon): Remove um ícone de mapa para um jogador.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Define o marcador de um jogador.

## Recursos relacionados

- [Ícones do mapa](../resources/mapicons): Uma lista de ícones do mapa.
- [Estilos de ícones de mapas](../resources/mapiconstyles): Uma lista de estilos de ícones de mapas.
