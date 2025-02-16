---
title: OnVehicleStreamIn
sidebar_label: OnVehicleStreamIn
description: Ang callback na ito ay tinatawag kapag ang isang sasakyan ay na-stream sa client ng isang manlalaro.
tags: ["vehicle"]
---

## Description

Ang callback na ito ay tinatawag kapag ang isang sasakyan ay na-stream sa client ng isang manlalaro.

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| vehicleid   | Ang ID ng sasakyan na nag-stream para sa player.       |
| forplayerid | Ang ID ng player kung saan nag-stream ang sasakyan.    |

## Returns

Palaging una itong tinatawag sa mga filterscript.

## Examples

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "You can now see vehicle %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Callbacks
- [OnVehicleStreamOut](OnVehicleStreamOut): Tinatawag ang callback na ito kapag nag-stream out ang isang sasakyan para sa isang player.
- [OnPlayerStreamIn](OnPlayerStreamIn): Tinatawag ang callback na ito kapag nag-stream ang isang manlalaro para sa isa pang manlalaro.
- [OnPlayerStreamOut](OnPlayerStreamOut): Tinatawag ang callback na ito kapag nag-stream out ang isang player para sa isa pang player.