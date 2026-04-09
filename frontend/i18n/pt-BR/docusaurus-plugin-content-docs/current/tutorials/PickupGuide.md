---
title: Guia de Pickups
sidebar_label: Guia de Pickups
---

Um breve tutorial que descreve como usar pickups.

## Definir o pickupid

A primeira coisa a fazer ao criar pickups é criar um lugar para armazenar seu ID. Isso será feito em uma variável global para que possa ser definida quando você criar o pickup e lida quando você pegar um pickup, chamando um callback com o ID do pickup que você pegou. Para este exemplo, usaremos o nome "gMyPickup".

```pawn
new gMyPickup;
```

## Criando o pickup

Existem duas maneiras de criar pickups. [CreatePickup](../scripting/functions/CreatePickup) e [AddStaticPickup](../scripting/functions/AddStaticPickup). AddStaticPickup não retorna um ID quando é criado, não pode ser destruído e só pode ser usado dentro de OnGameModeInit, então para este exemplo usaremos [CreatePickup](../scripting/functions/CreatePickup).

**A sintaxe para [CreatePickup](../scripting/functions/CreatePickup) é:**

**Parâmetros:**

| model        | O modelo que você gostaria de usar para o pickup.                                                   |
| ------------ | --------------------------------------------------------------------------------------------------- |
| type         | O tipo de spawn do pickup, veja mais abaixo nesta página.                                           |
| Float:X      | A coordenada X para o pickup aparecer.                                                              |
| Float:Y      | A coordenada Y para o pickup aparecer.                                                              |
| Float:Z      | A coordenada Z para o pickup aparecer.                                                              |
| Virtualworld | O ID do mundo virtual do pickup. Um valor de -1 fará o pickup aparecer em todos os mundos virtuais. |

Para este exemplo, criaremos um pickup de dinheiro na Grove Street.

Agora precisamos escolher um modelo para aparecer no mundo, existem muitos modelos para escolher, alguns estão listados no site externo [aqui](https://dev.prineside.com/en/gtasa_samp_model_id), aqui escolha o modelo número 1274 que é o símbolo do dólar.

Finalmente, precisamos de um [Tipo](../scripting/resources/pickuptypes) para o pickup, na mesma página com os modelos de pickup há uma lista de tipos de pickup descrevendo o que os vários fazem. Queremos que este pickup desapareça quando você o pegar, para que você não possa pegá-lo repetidamente, mas que reapareça depois de alguns minutos para que você possa pegá-lo novamente, o tipo 2 faz exatamente isso.

Pickups são mais comumente criados quando o script inicia, em [OnGameModeInit](../scripting/callbacks/OnGameModeInit) ou [OnFilterScriptInit](../scripting/callbacks/OnFilterScriptInit) dependendo do tipo de script, porém pode ir em qualquer função (por exemplo, você poderia criar um script de drop de armas que usaria OnPlayerDeath para criar pickups de armas).

Então aqui está o código para criar nosso pickup, e armazenar o ID em 'gMyPickup':

```pawn
gMyPickup = CreatePickup(1274, 2, 2491.7900, -1668.1653, 13.3438, -1);
```

### Escolhendo o que ele faz

Quando você pega um pickup, [OnPlayerPickUpPickup](../scripting/callbacks/OnPlayerPickUpPickup) é chamado, passando playerid (o jogador que pegou o pickup) e pickupid (o ID do pickup que foi pego).

Alguns tipos de pickup são projetados para funcionar automaticamente, então não há necessidade de fazer nada em OnPlayerPickUpPickup. Confira a página [Tipos de Pickup](../scripting/resources/pickuptypes) para mais informações.

Quando um jogador pegar nosso novo pickup, queremos dar a ele $100, para fazer isso primeiro precisamos verificar se ele pegou nosso pickup de dólar e não um diferente. Quando fizermos isso, podemos dar a ele os $100:

```pawn
public OnPlayerPickUpPickup(playerid, pickupid)
{
    // Verifica se o ID do pickup que eles pegaram é gMyPickup
    if(pickupid == gMyPickup)
    {
        // Envia mensagem ao jogador
        SendClientMessage(playerid, 0xFFFFFFFF, "Você recebeu $100!");
        // Dá o dinheiro ao jogador
        GivePlayerMoney(playerid, 100);
    }
    // se você precisar adicionar mais pickups, simplesmente faça isso:
    else if (pickupid == (algum outro pickup))
    {
        // Outro pickup, faz outra coisa
    }
    return 1;
}
```

Parabéns, agora você sabe como criar e manipular pickups!

## Leitura Adicional

Você pode usar o plugin [Streamer](https://github.com/samp-incognito/samp-streamer-plugin) para criar pickups ilimitados com [CreateDynamicPickup](<https://github.com/samp-incognito/samp-streamer-plugin/wiki/Natives-(Pickups)>)

Você também pode criar pickup por jogador com [CreatePlayerPickup](../scripting/functions/CreatePlayerPickup).
