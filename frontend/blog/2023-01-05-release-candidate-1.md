---
slug: release-candidate-1
title: Release Candidate 1
authors: y_less
---

It's finally here! 🎉 After years of development, rewrites, and challenges, we're excited to introduce Release Candidate 1 (RC1) of the open.mp server. This marks a major step towards our official 1.0 release, bringing significant updates, features, and improvements.

<!-- truncate -->

It's here!

It's finally here!

After four years, two rewrites, arguments and drama, and countless other hurdles; it is finally here!

Release Candidate 1 (RC1) of the open.mp server.

This, hopefully, represents the final version of the code for our 1.0 release, and if everything goes smoothly with this version we will be able to finally **open** the so-called **open**.mp in just a few days from now.

Before I get in to the meat of the release I want to first sincerely thank every member of the open.mp team for helping the mod get this far. It has not been easy, mostly because of how invested everyone truly was - we all wanted what was best for the mod, for the community, for SA:MP, for our servers, and for our players; we wouldn't have embarked on this journey if that wasn't the case. Unfortunately strong differing opinions on what is **best** sometimes causes friction. But we're here now. So to all, a huge thank you:

- Amir
- Cheaterman
- Freaksken
- Graber
- Hual
- Josh
- JustMichael
- kseny
- Nexius
- pkfin
- Potassium
- Southclaws
- TommyB
- Y_Less
- Zeex
- And probably more...

Anyway, now the bit you actually care about...

Now we're out of beta, we're (if all goes well this week) releasing on time. So along with the server itself, which you've seen a dozen times before, we have some new goodies for you:

## Pawn

The download has the official includes, no more patching the old SA:MP includes with `omp.inc`, now we're doing it properly! It also has a new compiler. Ever wonder when 3.10.11 was coming? Well wait no longer (if you built it yourself, you could think of this one as 3.10.12)! With this combination you'll probably get loads of new warnings, but worry not - we have a tool for that as well, to automatically upgrade a load of code, adding well-defined symbol names, `const`, and more in all the right places. Maybe you already noticed this, you've been using it for months, but the virtual machine (the bit inside the server) has been updated as well! Oh, and all those string natives you know and love, like `SendClientMessage` and `AddMenuItem`? They all format now. All of them[^1].

A full list of what's available:

- Symbol length limit increased to 64, no more `OnPlyrDoTheTing` to try and fit your names in. Leading to...
- Multiple natives decompressed - is `Col` short for `Colour` or `Collision`? Now you know!
- Tags. Tags everywhere. See the included documentation.
- The official includes are finally const-correct. No more complaining that some people might not have them.
- Compiler version updated: `__nameof`, `__addressof`, fixes, and too many more things to go in to here.
- `switch` is way faster.
- More warnings for previously undetected issues. The more problems the compiler can find, the fewer you need to.
- An *upgrader* tool to add tags and `const` to user-code and fix several new warnings.
- More consistent naming. Every native has been closely examined and compared to ensure the maximum level of similarity and intuitiveness in naming.
- Added `{Float, _}:...` everywhere. What does this mean? It means no more `format()`[^2] - think y_va but natively.
- `-O2`, the highest pawn optimisation level, works when using the new compiler and VM. Some includes may need to be updated, but some already have. To help with that...
- The `__optimisation` macro was added so code can configure itself when compiled with -O2.

Documentation on the updated includes:  
https://github.com/openmultiplayer/omp-stdlib

Documentation on the new compiler:  
https://github.com/openmultiplayer/compiler/  
https://github.com/pawn-lang/compiler/

Documentation on qawno:  
https://github.com/openmultiplayer/qawno/

Documentation on the upgrader tool:  
https://github.com/openmultiplayer/upgrade

[^1]: Almost all of them.

[^2]: Almost no more `format()`.

## SDK

Pawn is the long-standing, and still official, way to write modes for your server. It isn't going away, but for those of you who want more control we are finally releasing the full SDK (the *S*oftware *D*evelopment *K*it). This is a C++ interface to the server, the same one used by all the components that make up the core open.mp code. Anything they can do you can do too (compared to plugins, which were only designed to provide functions to pawn, not write modes).

We have some documentation under way, it takes time unfortunately. But in the meantime have several example components for those of you who want to get straight stuck in. These are all templates you can build upon, and go from basically nothing to a fully working component with most common features:

https://github.com/openmultiplayer/empty-template  
https://github.com/openmultiplayer/basic-template  
https://github.com/openmultiplayer/pawn-template  
https://github.com/openmultiplayer/full-template

A few terms to get you started, so you can start to understand what it is that you're reading:

- *Component* - A logical individual piece of the server, like objects or pickups. Ones you don't need don't need to be loaded.
- *Extension* - Code that extends another bit of code. You can write component extensions, but the most common ones are player extensions, which define some structure of data to be associated with a player in addition to all their normal data like health and weapons.
- *UID* - *U*nique *ID*entifier, a number that represents your component, and your component alone. This ia always required and can be got here: http://open.mp/uid
- *Entity* - A thing, usually a thing a player can interact with, and which you might have a lot of. Objects are entities, but other players are also entities, even commands in a processor could be called entities.
- *Pool* - Something that holds entities. When you have a lot you need to be able to access them by name or ID in some way, this is what a pool does.
- *Interface* - Components use an abstract base class as an interface. This declares which methods a component has, but doesn't contain the code for the methods. Interfaces are passed around so that components can communicate with each other, but implementations are kept private.
- *SDK* - The collection of all the interfaces defined by the core server.
- *ABI* - An *A*pplication *B*inary *I*nterface is the way compiled code talks to other compiled code. The interfaces exported by the SDK are *ABI stable*, which means that using two components compiled at different times will still work together.
- *pawn-natives* - The library on which all native declarations are built. Useing a wrapper called *SCRIPT_API* around this library: https://github.com/openmultiplayer/pawn-natives
- *Event* - Something that happens externally. Things like players connecting and typing commands are events. Any component can define events and tell other components when those events happen.
- *Handler* - A component that wants to know when an event happens.

If you have questions, the best place is probably the brand new (revived) forums:  
https://forum.open.mp/

## Features

Beside all the new features announced for pawn, there are several new (and newly announced) features in the server:

- Per-player gang zones, as were in YSF.
- Per-player pickups, also as in YSF.
- `AttachPlayerObjectToPlayer`.
- Better PawnPlus support.
- `:memory:`, and other special names support in SQLite.
- SQLite open flags.
- `exclude` config option to not load certain components.
- Show config parse errors, don't just silently fail.
- SDK major version check, just in case we ever make major server changes (hopefully we won't).

## Fixes

There were a few new bugs introduced in beta 11, and a few minor ones left over from before. The ones fixed include:

- `funcidx` already registered warning.
- GDK plugins (streamer etc) missing natives.
- Random crash on GMX.
- GDK callbacks sometimes not called.
- No logging when requested in SQLite component.
- Some settings not reset on GMX.
- NPCs were connecting when there were a lot done at once.
- `.so` was still needed in Linux legacy plugin names.

## Links

Firstly, of course, is the new server version:  
https://github.com/openmultiplayer/open.mp/releases

Secondly, the forums are back up. Head there for all your questions:  
https://forum.open.mp/

Or if you prefer:  
https://vk.com/open_mp

Next, despite it being offered a few times, we have explicitly resisted any money up to this point; because we didn't feel it was right until we had proven ourselves with a release. With this post, that time is now, so if anyone wants to help support us (all donations will go towards infrastructure and future client dev work), it would be most appreciated:

https://www.patreon.com/open_mp  
https://opencollective.com/openmultiplayer

And of course everything is still in active development, so please do check all the links above regularly to see what's new that we have.
