---
title: "Pickup Types"
---

### Available Pickup Types

:::note

These pickup types are used by [CreatePickup](../functions/CreatePickup) and [CreatePlayerPickup](../functions/CreatePlayerPickup).

:::

:::note

Most other IDs are either undocumented or are similar to type 1 (but do not use them just because they seem similar to ID 1, they might have side-effects like ID 18 and 20).

:::

| ID  | Description                                                                                                                                                                              |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0   | It has no special attributes and cannot be picked up. It also does not trigger [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup) or [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup), and is not removed when closing the server                                |
| 1   | Exists always. Disables pickup scripts such as horseshoes and oysters to allow for scripted actions ONLY. Will trigger [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup) or [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup) every few seconds. This is likely a SA-MP bug                           |
| 2   | Disappears after pickup, respawns after 30 seconds if the player is at a distance of at least 15 meters (used for money pickups)                                                                                 |
| 3   | Disappears after pickup, respawns after death                                                                                                                                           |
| 4   | Disappears after 20 seconds. Respawns after death                                                                                                                                 |
| 5   | Disappears after 120 seconds. Respawns after death                                                                                                                                 |
| 8   | Disappears after pickup, but has no effect (used for money pickups)                                                                                                                                              |
| 9   | Explodes on contact with any ground vehicle in 10 seconds after creation (used for land mines)                                                                                                                                              |
| 10  | Explodes on contact with any ground vehicle (used for land mines)                                                                                                                                      |
| 11  | Explodes on contact with any vessel in 10 seconds after creation (used for nautical/sea mines)                                                                                                                                              |
| 12  | Explodes on contact with any vessel (used for nautical/sea mines)                                                                                                                                              |
| 13  | Invisible. Triggers checkpoint sound when picked up with a vehicle, but doesn't trigger OnPlayerPickUpPickup (floating pickup)                                                                            |
| 14  | Disappears after pickup, can only be picked up with a vehicle. Triggers checkpoint sound (floating pickup)                                                                                                |
| 15  | Same as type 2, however the pickup will respawn after 12 minutes. If the model ID is a bribe, it will respawn after just 5 minutes.                                                                                                                                                                          |
| 18  | Similar to type 1. Pressing Tab (KEY_ACTION) makes it disappear but the key press doesn't trigger OnPlayerPickUpPickup (used for properties)                                                                  |
| 19  | Disappears after pickup, but doesn't respawn. Makes "cash pickup" sound if picked up                                                                                                    |
| 20  | Similar to type 1. Disappears when you take a picture of it with the Camera weapon, which triggers "Snapshot # out of 0" message. Taking a picture doesn't trigger OnPlayerPickUpPickup (used for snapshot locations) |
| 22  | Same as type 3 (used for missions)                                                                                                                                                                          |
