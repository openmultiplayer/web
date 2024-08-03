---
title: OnPlayerWeaponShot
description: Essa callback é executada todas as vezes que o player realiza um disparo com uma arma.
tags: ["player"]
---

## Descrição

Essa callback é executada todas as vezes que o player realiza um disparo com uma arma. Somente armas com balas são suportadas. Somente o drive-by do passageiro é registrado (drive-by feitos pelo motorista, disparos de helicópteros como o sea sparrow / hunter também não são suportados).

| Nome                    | Descrição                                                                                                    |
|-------------------------|--------------------------------------------------------------------------------------------------------------|
| playerid                | ID do jogador que disparou a arma.                                                                           |
| WEAPON:weaponid         | ID da [arma](../resources/weaponids) que foi disparada.                                                      |
| BULLET_HIT_TYPE:hittype | O [tipo](../resources/bullethittypes) de onde a bala acertou (Nada, Jogador, Veículo, ou Objeto do jogador). |
| hitid                   | ID do jogador, veículo ou objeto que a bala acertou.                                                         |
| Float:fX                | Coordenada X de onde a bala acertou.                                                                         |
| Float:fY                | Coordenada Y de onde a bala acertou.                                                                         |
| Float:fZ                | Coordenada Z de onde a bala acertou.                                                                         |

## Retornos

0 - Previne a bala de causar danos ao acertar.

1 - Permite a bala causar danos ao acertar.

Sempre executada primeiro em filterscripts, retorne 0 para bloquear que outros filterscripts a vejam.

## Exemplos

```c
public OnPlayerWeaponShot(playerid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new szString[144];
    format(szString, sizeof(szString), "A Arma %i foi disparada. Tipo: %i   ID: %i   Posição: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, szString);
    return 1;
}
```

## Notas

:::tip

Essa callback é executada somente quando o "lag compensation" está ativado. Caso o tipo de acerto seja:
- `BULLET_HIT_TYPE_NONE`: Os parâmetros fX, fY e fZ irão retornar 0.0 nas coordenadas, caso não haja acerto em nenhuma superficíe (ex. Objeto distante no qual a bala não consegue chegar);
- Outros: Os parâmetros fX, fY e fZ são offsets relativos ao hitid.

:::

:::tip

A função [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors) pode ser usada nessa callback para mais detalhes sobre os vetores da bala.

:::

:::warning

Bug(s) Conhecidos:

- Não é executada quando você atira sendo motorista de um veículo ou caso você esteja olhando para trás com a mira ativa (atirando para o alto). Caso você esteja disparando em um veículo o tipo a ser retornado será `BULLET_HIT_TYPE_VEHICLE` e não `BULLET_HIT_TYPE_PLAYER`, o valor retornado no hitid será o ID do veículo, mesmo que você mire e atire diretamente no jogador que está no veículo o parâmetro `BULLET_HIT_TYPE_VEHICLE` persiste!
- Parcialmente arrumado na versão 0.3.7: Caso 'Fake Weapon Data' seja enviada por um jogador malicioso, outros jogadores podem crashar ou congelar. Para impedir isso de acontecer verifique se o weaponid (arma) pode realmente disparar balas.

:::

## Funções Relacionadas

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): Retorna o vetor do último disparo realizado pelo jogador.
