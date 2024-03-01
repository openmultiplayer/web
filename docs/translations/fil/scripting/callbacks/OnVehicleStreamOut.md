---
title: OnVehicleStreamOut
description: Tinatawag ang callback na ito kapag na-stream out ang isang sasakyan para sa client ng player (napakalayo nito kaya hindi nila ito nakikita).
tags: ["vehicle"]
---

## Description

Tinatawag ang callback na ito kapag na-stream out ang isang sasakyan para sa client ng player (napakalayo nito kaya hindi nila ito nakikita).

| Name        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| vehicleid   | Ang ID ng sasakyan na nag-stream out.                        |
| forplayerid | Ang ID ng player na hindi na nag i-stream ng sasakyan.       |

## Returns

Palaging una itong tinatawag sa mga filterscript.

## Examples

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Your client is no longer streaming vehicle %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Callbacks
- [OnVehicleStreamIn](OnVehicleStreamIn): Tinatawag ang callback na ito kapag nag-stream ang sasakyan para sa isang player.
- [OnPlayerStreamIn](OnPlayerStreamIn): Tinatawag ang callback na ito kapag nag-stream ang isang player para sa isa pang player.
- [OnPlayerStreamOut](OnPlayerStreamOut): Tinatawag ang callback na ito kapag nag-stream out ang isang player para sa isa pang player.