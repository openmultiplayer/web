---
slug: debugging
title: Testing in open.mp
authors: y_less
---

Testing in SA:MP has always been challenging, but open.mp introduces new tools to make it easier and more efficient. With an open-source codebase, enhanced debugging tools, and a powerful new "mock" library for simulating player interactions, testing is now more automated and reliable than ever.

<!-- truncate -->

:::warning

The content of the following post is out of date and has no reference to the current state of open.mp. The post is published here for archival purposes.

:::

Testing in SA:MP is not very easy. For the most part it is just connecting to the server and placing prints everywhere. Libraries such as y_testing make writing unit tests much easier, but only for fairly "pure" code - that is, code that runs on the server without much player interaction. You can test a surprising amount of behaviour like this, but it is still limited and doesn't help narrow down issues when they do crop up.

So how does open.mp address this? Well to begin with, the code is open-source, so you have the full range of existing debugging tools such as GDB and Visual Studio available to you for stepping through and inspecting code. We also have plans to add similar tools for pawn scripts themselves.

But the biggest addition is the "mock" library. Very simply, this allows you to create fake players that act exactly like real players, but without any connected client. So any actions performed on them by a script can be read and analysed by another script. Let's take the most simple example possible for a first demonstration - showing a player a checkpoint, and confirming it was sent. With y_testing you do the action and then have to actually ask the player if it happened, which is slow, not repeatable, and just tedious:

```c
PTEST__ SetPlayerCheckpoint(playerid)
{
    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);
    ASK("Do you see a checkpoint in the middle of the world?");
}
```

Using a library like "Pawn.RakNet" can remove the question, by automating the checking of outgoing packets, but still requires a connected player so can't be automated and repeated:

```c
static
    gCheckpointPlayer,
    Float:gX,
    Float:gY,
    Float:gZ,
    Float:gS;

PTEST__ SetPlayerCheckpoint(playerid)
{
    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);
    ASSERT(gX == 0.0);
    ASSERT(gY == 0.0);
    ASSERT(gZ == 4.0);
    ASSERT(gS == 5.0);
    ASSERT(gCheckpointPlayer == playerid);
}

OPacket:107(playerid, BitStream:bs)
{
    gCheckpointPlayer = playerid;

    BS_IgnoreBits(bs, 8);
    BS_ReadFloat(bs, gX);
    BS_ReadFloat(bs, gY);
    BS_ReadFloat(bs, gZ);
    BS_ReadFloat(bs, gS);

    return 1;
}
```

With open.mp, we have an API similar to that of Pawn.RakNet, but with fake players. So you create a player, without a game instance, and use that exactly like a normal player:

```c
TEST__ SetPlayerCheckpoint()
{
    new playerid = Mock_CreatePlayer("Mr Mock");

    // Clear all existing packets, for ease of searching.
    Mock_PurgeSent(playerid);

    // Show a checkpoint normally.
    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);

    // Check a "SetCheckpoint" packet was seen.
    new MockPacket:packet = Mock_GetPacket(playerid, "SetCheckpoint");
    ASSERT(packet);
    if (!packet) return;

    // Check the packet has 4 components, each 32 bits.
    ASSERT(MockPacket_Components(packet) == 4);
    ASSERT(MockPacket_Bits(packet) == 4 * 32);

    // Check the various components.
    new Float:tmp;
    ASSERT(MockPacket_ReadFloat(packet, 0, tmp));
    ASSERT(tmp == 0.0);
    ASSERT(MockPacket_ReadFloat(packet, 1, tmp));
    ASSERT(tmp == 0.0);
    ASSERT(MockPacket_ReadFloat(packet, 2, tmp));
    ASSERT(tmp == 4.0);
    ASSERT(MockPacket_ReadFloat(packet, 3, tmp));
    ASSERT(tmp == 5.0);
}
```

This code is entirely repeatably testable, self-contained (no global variables and extra callbacks), and simple to expand upon.

But sometimes it isn't quite this simple. If you create an object you can't just check that it was instantly sent to a player, because they might not be anywhere near it and thus the in-built streamer hasn't sent them it yet. To solve this, we first need to go on a slight tangent to explain how basic sync works for things like `SetPlayerPos`. When you set a player's position with `SetPlayerPos` the server does NOT update their position internally and for all other players straight away. Instead a `SET POSITION` command is sent to that one player being moved, they are teleported to the new position, and then report the new position back to the server in their next sync packet. The reason why is basically lag - there may be one or more sync packets still in flight with the old position after setting the new position. So what does this mean for mock players? It means you can't actually set their position, at least not in the normal way. There's no real client, so there's nothing receiving packets (i.e. the set position command), and there's nothing syncing that data back to the server again.

We can generate any mock sync data for the server from mock players, so that is one way to update their position, but it can be a little cumbersome for just one common operation, so there is `Mock_SetPlayerPos` for exactly this one use-case. But this still isn't quite the whole story, because we need the streamer to run and update with their new position, which happens only periodically (every few milliseconds, depending on the server tick rate). For this we have another mock function - `Mock_Tick`, which jumps the server time forward by a given number of microseconds (NOT milliseconds). This should absolutely not be used on live servers as it can create all sorts of weirdness with timers and other time sensitive code, but can be used to fake time passing in tests. Note that `Mock_Tick(10000)` will not delay for 10ms, it will instead jump time forward by 10 milliseconds instantly.

```c
TEST__ SetPlayerCheckpoint()
{
    new playerid = Mock_CreatePlayer("Mr Mock");

    // Clear all existing packets, for ease of searching.
    Mock_PurgeSent(playerid);

    // Create an object.
    CreateObject(1337, 100.0, 100.0, 4.0);

    // Fake the mock player's position updating to the server, near the object.
    Mock_SetPlayerPos(playerid, 105.0, 105.0, 4.0);

    // Now FAKE pass some time, so the streamer can run (50ms should do).
    Mock_Tick(50000);

    // Check a "CreateObject" packet was seen.
    new MockPacket:packet = Mock_GetPacket(playerid, "CreateObject");
    ASSERT(packet);
    if (!packet) return;

    // Check the packet has 4 components, each 32 bits.
    ASSERT(MockPacket_Components(packet) > 5);

    // Check some of the packet components.
    new int;
    new Float:tmp;
    ASSERT(MockPacket_ReadInt32(packet, 1, int));
    ASSERT(int == 1337);
    ASSERT(MockPacket_ReadFloat(packet, 2, tmp));
    ASSERT(tmp == 100.0);
    ASSERT(MockPacket_ReadFloat(packet, 3, tmp));
    ASSERT(tmp == 100.0);
    ASSERT(MockPacket_ReadFloat(packet, 4, tmp));
    ASSERT(tmp == 4.0);
}
```

An important note about `Mock_Tick`. If you call it as, say `Mock_Tick(100000)` and have a 1ms timer running, this will instantly trigger the timer to run, but the timer will think it missed its time by a long way (100ms) and will queue itself up again. During the call to `Mock_Tick` the timer will fire once, but after the current test ends the timer will be queued up a further 99 times, one per tick because it thinks it missed 100 invocation times.

Later we'll cover some higher-level debugging techniques so you can read and write fake packets more easily, instead of one component at a time as in that code, but this introduces the basics on which everything else is built. Hopefully it will make developing and testing code easier for everyone (and ensure the server is more stable as well).

We'll also go much more in to the API design for open.mp tomorrow. It is fully backwards- compatible with SA:MP, but that doesn't mean there isn't parallel room for improvement.
