## 0.32.0 (05/13/2024)
### General
- Now requires XTM 1.0.3 or higher
### New Content
- Added player versions of Lily combat arts as Hexacast custom skills
  * Chilling Gale (Cold Melee Lv.2A)
  * Diving Jolt (Shock Throw Lv.1A)
  * Lightning Orb (Shock Throw Lv.2A)
  * Bolt Aura (Shock Guard Lv.2A)
  * Bubble Pulse (Wave Throw Lv.1A)
  * Spirit Tornado (Wave Throw Lv.3A)
  * Verdant Blast (Wave Melee Lv.2A)
### Changes
- Updated animation at the end of action for the following combat arts:
  * Hex Barrier
  * Brittle Barrier
  * Firebrand
  * Ampere Cloak
  * Heal Card

## 0.31.3 (05/07/2024)
### Fixes
- Fixed Tri Turret not properly despawning

## 0.31.2 (05/06/2024)
### New Content
- Created icons for base Triblader throw/melee custom skills
### Changes
- Removed unused empty Joern2 custom skill files
- Added prefix to ArcaneLab "wall" proxies in custom skills to differentiate from icicileSmall proxies
- Changed Glacial Harpoon final animation to proper throwSpecial
### Fixes
- Fixed Guarding Gale text icon

## 0.31.1 (05/05/2024)
### Fixes
- Added support for "arcane-lab" and "arcane-labs" mod IDs across new/old AL versions

## 0.31.0 (05/05/2024)
### General
- Custom skill update (bonus feature only if Arcane Lab is installed)
- Now requires XTM 1.0.2 or higher
### New Content
- Unfinished combat art: Storm Chaser (Shock Throw Lv.3A)
- Added **220** combat arts to Hexacast1 and Hexacast2 as custom skills
- Added the following custom skills to Hexacast1 and Hexacast2:
  * Spheromancer Ranged
  * Spheromancer Melee
  * Triblader Ranged
  * Triblader Melee
  * All Spheromancer arts (91 total)
  * All Triblader arts (91 total)
  * All ArcaneLab arts (28 total)
  * Limited Pentafist arts (3 total)
  * Custom Hexacast arts (2 total)
  * Debug arts (1 total)
- Added the following effect sheets to help with custom skill ports:
  * /patches/data/effects/specials/heat-custom.json
  * /patches/data/effects/specials/cold-custom.json
  * /patches/data/effects/specials/shock-custom.json
- Added props to facilitate custom skills to the XTM "art testing" map if AL is installed
- Added placeholder entries for all unimplemented Hexacast arts without alternatives
- Created sprites for landOnGround N/E directions
- Created new triblader spritesheet and animations for Hexacast1 and Hexacast2
- Added animation itemHoldRev to Hexacast1 and Hexacast2
### Changes
- Added eɪsus|𐤀기술자🇰🇷 to readme credits
- Moved Animation Viewer combat art out of Hexacast character file and into Triblader custom skills
- Extended spritesheet hexa-misc.png
- Firebrand now tracks an attrib value called firebrandActive
- Ice Blitz changed from cold melee 1A to 1B
- Ray of G'oni: Added ground indicator arrows while charging
- Ray of G'oni: Proxy shadow size now properly increases/decreases throughout the combat art
- Ray of G'oni: Added subtle darkness effect
- Ray of G'oni: Reduced distance card travels forward before charging
- Removed old backup file hexacast1_oldCrystalCarnage.json
- Added looping screen rumble to effect zirvitarFinalStrike
- Adjusted particle rotation for effect detonationFlyActivate
- Added pLight property to particles in effect detonationFlyActivate
- Improved effect zirvitarFinalStrike with new particles
### Fixes
- Fixed Frigid Flurry marked as wrong ID in readme
- Fixed effect scale70 scaling factor
- Typo fix in autumn/guild/left.json.patch
### Balance
- Throttle Hex damage slightly increased
- Static Discharge damage decreased

## 0.30.0 (04/08/2024)
### New Content
- New combat art: Ray of G'oni (Wave Throw Lv.3A)
### Changes
- Reduced snowflake particle count on effect hailBullet3Aura to reduce lag for Crystal Carnage
- Increased moveDist of CIRCLE_SMALL_COLD particles in effect crystalCarnageGlaive
- Increased particle duration of ice debris particles in effect crystalCarnageGlaive
- Increased size of WAVE_SPARKLE particles in effect gigaDrainHeal
- Added missing effect shootCharge when throwing dungeon key proxies
- Added standard startDist value when throwing dungeon key proxies
- Added ground indicator effect to Calamity Beacon's spellcard while it is being thrown
- Reduced particle duration for effect sentryShoot
- Added a minor hexagon particle effect to Blaster Sentry
- Ultimate PVP: Default enemy level decreased by 5
- Ultimate PVP: Changed LJM BGM options to UTY
- Ultimate PVP: Adjusted Joern2 animation timing
### Fixes
- Fixed player not disappearing when using Ethereal Stance while Shadowflame Sorcery is active
- Blaster Sentry now always shoots in the same direction as the targeting indicator
- Fixed Blaster Sentry death effect timing
- Removed stray DETATCH_TIME_PARENT from Ampere Cloak steps
### Balance
- Ethereal Stance: Can now be interrupted at the start if you get hit
- Ice Blitz damage increased
- Meteor Storm chargeup time reduced by 0.1 seconds
- Blaster Sentry automatic rate of fire greatly reduced
- Blaster Sentry shot chargeup time reduced from 0.35 seconds to 0.3 seconds
- Blaster Sentry damage and status inflict increased

## 0.29.0 (03/24/2024)
### New Content
- New combat art: Crystal Carnage (Cold Throw Lv.3A)
- Added KeyPanel code patch by **Lubkuluk**
- Added files for WIP concepts, might delete later:
  * \assets\data\animations\enemies\spellcard-neutral.json
  * \assets\data\enemies\shield-generator.json
  * \assets\data\players\hexacast1_oldCrystalCarnage.json
### Changes
- Spark Stream: Reworked to use GENERIC proxies instead of BALL proxies
- Spark Stream: Less excessive player movement during combat art
- Deleted proxy sparkStreamCardDeathFX
- Removed inherent tranparency from icicles in hexa-misc.png
- Ultimate PVP: Joern2 intro animation updated
- Pulsing hexagon particle in effect hailCard2Hexagons now cancelable
- Pulsing hexagon particle in effect gigaDrainCardTrail now cancelable
- Added light source to effect creepingColdShoot
- Changed FADE_COLOR color value for effect creepingColdShoot
- Deleted file "shoot-proxy-player-fix - 1st try.js"
### Fixes
- Fixed Hexacast unable use key panels in dungeons
- Set proxies hailSeeker1 and hailSeeker2 to be invisible by default to fix rare case of frame 1 being visible
- Fixed duplicate skillBonus definition in Frozen Fortress code
- Disabled animation repeat for charged VRPs
### Balance
- Hex Barrier: shield hit stability downgraded from MASSIVE to HEAVY (significant nerf)

## 0.28.1 (03/17/2024)
### New Content
- Added new NPC encounter in path-04 of Azure Archipelago (Rough Lagoon)
- Added Hexacast animations from **HeartLychee**:
  * exhale
  * fanPre
  * fanLoop
### Changes
 - Removed redundant floatEyesClosed sprites from hexacast2.png

## 0.28.0 (03/16/2024)
### General
- Now requires XTM version 1.0.0 or later
### New Content
- Added copy of basement.json map to override XTM with Hexacast character options available (mod intro map)
  * Despite being functional, this will not be implemented until mods are re-organized into XMC later
- Added new NPC encounter in autumn.guild.left, different depending on Arcane Lab being installed
- Added new combat conditions TARGET_HAS_BLOCKED_DAMAGE and TARGET_HAS_BLOCKED_HITS in new file custom-combat-conditions.js
- Added new action step RESET_GUARD_COMBO
### Changes
- Modified ccmod.json tags
- Updated HeartLychee credits preferences
- Removed uses of RESET_GUARDED_HITS, which is from unified-steps
- Uncommented triblader-lea dialogue from AlyBox NPC in XTM dev room
- Deleted backup map copy: ultimate-pvp - Copy.json
- Updated character selection signs to remove portrait
- Removed all "plot.xtm.character" from character change signs
- Removed commented broken code from custom-action-steps.js
### Fixes
- Hex Barrier: Fixed player facing the mouse cursor while active
- Hex Barrier: Fixed looping hexBarrierBlocker effect for some users
- Ultimate PVP: Fixed logic bug when selecting 3 rounds
- Ultimate PVP: Fixed final round events not working when using default 5 rounds
- Ultimate PVP: Fixed missing ENV_PARTICLE logic from pvpBrake
- Ultimate PVP: Fixes to pvpEnd logic
- Ultimate PVP: Joern2 now uses "spinRepeat" animation during intro (requirement for new versions of LJM)
### Balance
- Shadowflame Sorcery: normal throws and all melee attacks now provide HEAVY hit stability

## 0.27.3 (02/19/2024)
### Changes
- Updated to new ccmod.json format
### Fixes
- Fixed an issue with Meteor Flare sometimes despawning for some users
- Fixed Heal Card and Ether Singularity sometimes despawning when cast on allies
- Standardized WAIT times at the end of proxy actions from 0.01 to 0.05.
  * meteorSmallController1
  * zirvitarDummy2
  * etherSingularityBuffParty
  * etherSingularityBuffOwner
  * healCardBuffParty
  * healCardBuffOwner
  * amberCard2
  * thunderJacketAura
  * ampereBall

## 0.27.2 (02/12/2024)
### Changes
- Note that Ultimate PVP modernization is still a work in progress, there might be bugs with event logic
- Ultimate PVP: now only supports Qine unofficial update 0.3.0 or higher
- Ultimate PVP: enemy entities renamed to XTM standard
- Ultimate PVP: added death logic, although only active with XTM 1.0.0 or higher
- Ultimate PVP: disabled player EXP gain during duel


## 0.27.1 (02/03/2024)
### General
- Now requires extendable-severed-heads version 1.1.0: https://github.com/CCDirectLink/extendable-severed-heads/releases
### Changes
- Reformatted headIdx.json.patch for extendable-severed-heads 1.1.0

## 0.27.0 (01/28/2024)
### New Content
- New map: "Ultimate PVP" added to XTM dev room
   - Requires Qine, LJM, and AL mods to enter
   - Different dialogue support for Lea versus XTM characters
- Added file custom-bgm.js to define new vanilla BGM configuration
- Added \assets\data\effects\map\rh-quest-hub.json.patch
- Added modified effect lilyWaveTornadoBackground
### Fixes
- Fixed zirvitarCharge2 effect duration to align with previous update adjustments to Zir'vitar Strike

## 0.26.0 (01/15/2024)
### New Content
- New combat art: Hive Missile (Neutral Throw Lv.2A)
- Colored NPC portraits for Hexacast1 and Hexacast2
### Changes
- Changed Hexacast2 eye color
- Modified PERFECT_GUARD action to include heal decay initialization
- Added dash dust effects to relevant movements in Spark Stream
- Added additional hexagon particles when Hail Spears is thrown
- Reduced particle count on effects godThrowShockFastest and godThrowShockFastestRev
- Reduced particle count on effect sparkStreamImpact
- Removed unused legacy walkAnims
### Fixes
- Fixed particle spacing/timing for effect sparkStreamHexagons
- Fixed player healing effect not showing on final tick of Heal Card
- Fixed incorrect zHeight on Static Field and Static Discharge allowing player to hit enemies at higher elevation levels
### Balance
- Spark Stream now grants MEDIUM hit stability after first two volleys
- Spark Stream now grants HEAVY hit stability during final volley
- Vortex Blast now grants HEAVY hit stability during the explosion
- Zir'vitar Strike no longer stuns enemies from the initial dash
- Zir'vitar Strike charge time reduced by 0.8 seconds (significant)
- Zir'vitar Strike slow motion is now stronger and kicks in with less delay after the initial dash
- Heal card now has diminishing returns (resets on map entry)
   - Begins at 15 heal ticks, each repeated use has a 25% chance to reduce this total
   - Cannot go below 5 heal ticks
   - This applies to Heal Card used on yourself or your allies

## 0.25.1 (01/01/2024)
### Fixes
- Fixed date on changelog

## 0.25.0 (01/01/2024)
### General
- Litter mod now updated to 1.7: https://github.com/XenonA7/xmc-hexacast-litter/releases
### New Content
- Added alternate function to Augmented Flames if used while Shadowflame Sorcery is active
- New combat art: Polarity Spark (Shock Throw Lv.1B)
- New combat art: Spark Stream (Shock Throw Lv.2B)
- New combat art: Zir'vitar Strike (Shock Dash Lv.3B)
- Created NE/NW sprites for animation runGrumpy
- Defined new "blank" character animation
- Defined animations sweepFast, sweepRevFast, sweepEndFast, sweepRevEndFast
### Changes
- Re-worded the description for Shine
- Re-worded the description for Hexing Blast
- Re-worded the description for Throttle Hex
- Added zoom blur effect to final hit of Lightning Hex
- Increased light radius and duration of effect iceBlitzExplode
- Adjusted FADE_COLOR of effect iceBlitzExplode
- Added light source to effect staticFieldEnd
- Added a pLight property to particles in effect darkFireLine
- Defined "M" light source for all default uncharged proxies
- Defined "L" light source for all default charged proxies
- Disabled light glow property for all default charged and unchraged proxies
- Added pLight property to all default charged proxy trail particles
- Added killEffect functionality to proxy magnetCard1 and magnetCard2
- All "DeathFX" proxies changed to breakType NEVER
- Separated initial dash effect clearing for Fire Barrage
### Fixes
- Fixed standard melee able to be extended by swapping elements during attack
- Fixed missing light source from effect stormStrideSweep
- Fixed effect alignment for magnetCard1Impact
- Fixed effect alignment for magnetCard2Impact
- Fire Barrage shooting effects now properly assigned a group
### Balance
- Shine perfect guard window extended for full move duration (0.5 seconds increased to 1.0 seconds)
- Hail Spears card contact damage greatly reduced (TACKLE damageFactor reduced from 2.0 to 0.5)
- Hail Spears bullet damage factor reduced from 1.35 to 1.25
- Ice Blitz damage increased
- Magnet Deck status inflict increased
- Amber Hex status inflict increased

## 0.24.0 (11/28/2023)
### New Content
- New combat art: Calamity Beacon (Heat Melee Lv.3A)
- Added south sprite for animation landOnGround
### Changes
- Did a pass of all combat arts to check/fix light sources
- Disabled Stasis Storm (unfinished art) for now
- Re-worded description for Giga Drain
- Ace of Flames no longer uses undefined effect "hexaShootHeat"
- Increased proxy beamBlasterLaser speed on return trip from 3500 to 6000
- Renamed all CIRCLE_SMALL_HEAT particles to CIRCLE_SMALL_HEAT_GUI
- Removed light glow property from effect staticFieldUserFX
- Reduced color intensity of screen flash in shadowflame effect "finisherBurst"
- Increased light radius of the following effects:
   - All standard/rev melee effects
   - eternalBlizzardAuraMain
   - eternalBlizzardAuraProxy
   - ashenInfernoExplode
   - firebrandAttack2
   - joltHexLightning
   - mjolnirHex
   - staticFieldMain
   - finisherSweep (shadowflame)
### Fixes
- Fixed Beam Blaster being able to shoot through walls
- Fixed Blaster Sentry being able to shoot through walls
- Fixed missing light source for the following effects:
   - freezeRayImpact
   - hugeSnowflakeDashEndLight
   - magicMissilePre
   - aceOfFlamesShoot
   - amberLunge
   - lightningHexBeam
   - slowDebuff
   - wavePunchHexa
   - wavePunch2Hex
   - essenceLines
   - singularityAura
   - soulTrail
### Balance
- Vortex Blast reduced charge time by half
- Meteor Flare slightly reduced meteor spawn delay after beacon appears
- Meteor Storm slightly reduced meteor spawn delay after beacon appears
- Beam Blaster reduced delay between aiming and shooting
- Blaster Sentry reduced delay between shots
- Blaster Sentry now capped at 2 instances at a time
- Blaster Sentry slight damage reduction
- Freeze Rays increased orbit radius
- Jolt Hex slight damage reduction
- Hail Spears slight damage reduction
- Ether Singularity damage increased
- Stasis Rune cooldown increased from 16 seconds to 26 seconds
- Shadowflame Sorcery adjustments:
   - Total duration reduced from 15 seconds to 12.5 seconds
   - Lingering dash fire (darkFireGround) damage factor increased from 0.25 to 0.75
   - Guard fire wall (darkFireGroundBarrier) damage factor increased from 0.25 to 0.50
   - Melee attack reduced time between swings
   - Melee attack damage factor reduced from 1.5 to 1.35
   - Melee finisher damage factor reduced from 1.6 to 1.45
   - Melee finisher lingering fire (shadowflameAffliction) damage factor increased from 0.08 to 0.085
   - Uncharged throwing attack (shadowflameBullet) damage factor increased from 0.068 to 0.075
   - Charged throwing attack (shadowflameCharged) direct damage factor increased from 1.4 to 1.75
   - Charged throwing attack (shadowflameCharged) increased timer before self-destruct from 0.6 to 0.85
   - Charged throwing attack explosion (shadowflameChargedExplosion) damage factor increased from 0.225 to 0.230

## 0.23.0 (10/25/2023)
### IMPORTANT
- Logic Steps is now depreciated, please delete it from your install
- Logic Steps has been replaced by CC-AlyBox
- New dependency mod: AlyBox by Alyxia
   - https://github.com/lexisother/cc-alybox/releases
   - Install instructions have been updated
### New Content
- New combat art: Vortex Blast (Neutral Melee Lv.2A)
- New combat art: Meteor Storm (Heat Melee Lv.2B)
- New revised sprites for chest opening animations
- Added an NPC in the XTM dev room that demonstrates AlyBox character detection functionality
### Changes
- Using Stasis Rune while the cooldown is active now refunds 2 SP
- Renamed "mc-hit.ogg" to "mc-exp.ogg"
- Removed the fake glow effect (transparent pixels on sprite) for GOD_HEXAGON particles
- Added additional sound effect to effect meteorExplodeSmall
- Slightly increased particle duration for effect meteorDebrisOnly
- Slight pAlpha adjustments for hexagon particle in meteorExplodeSmall
- Renamed proxy hexingBlastBig to hexingBlastMed
- Reworked the particles in effect gigaDrainFly
- Increased particle size in effect gigaDrainHeal
- Increased sprite color contrast for WAVE_SPARKLE particles
- Increased FLAME2 particle size in effect meteorFlareCardAppear
- Renamed proxy stasisStorm to stasisStormController
- Removed light glow from effect stasisPlayerTrail
- Increased minimum radius of Ashen Inferno PULL force from 16 to 48
- Adjusted the looping section of effect shineFX to pulse slightly faster
- Re-worded the description for Shine
### Fixes
- Fixed "Wet Work" quests for all Hexacast characters by adding "STANDARD" hint property to charged proxies
- The following arts now have unique effect group names to prevent CLEAR_EFFECTS conflicts:
   - Magnet Card
   - Magnet Deck
   - Acceleration Mine
   - Ashen Hex
   - Throttle Hex
   - Stasis Rune
### Balance
- Greatly increased strength of PULL force inside of Creeping Cold's projectile
- Increased strength of initial PULL force during Ashen Inferno's chargeup
- Added a PULL force during Ashen Inferno's fire vortex
- Augmented Flames duration increased from 8 seconds to 10 seconds
- Scorching Swirl total damage reduced, now in line with Calamity Trigger


## 0.22.0 (08/12/2023)
### New Content
- New combat art: Giga Drain (Wave Throw Lv.2B)
- Reworked combat art: Ampere Cloak (Shock Guard Lv.1A)
- Added definition for "dashSlow" animation
### Changes
- Ampere Cloak reworked: Contact damage removed, replaced with damaging orbiting proxies
- Reduced backwards travel distance before the last hit of Spirit Blast
- Reduced forwards travel distance during the first two hits of Ice Blitz
- Improved sound effects for effect scorchingSwirlSweep1
- Added additional particles to effect aceOfFlamesSpinning
- Adjusted sound effect for effect wavePullHex
- Renamed proxy ampereCloakAura to ampereCloakProxy
- Proxy thunderJacketPrimer contact damage changed to visualType MEDIUM
- Toned down effect ampereCloakAuraFX
- Proxy essenceStealProxy now shows effects centered on itself, not its target
- Renamed proxy magicMissileWavePre to essenceStealPre
### Fixes
- Fixed proxy thunderJacketPrimer not having a shadow
- Corrected particle alignment for effect waveCardSmallTrail
### Balance
- Wave Recall now inflicts 5% self-damage
- Meteor Flare damage reduced
- Lightning Hex no longer slows the player when it causes slow motion while charging
- Lightning Hex slow motion is now near-instant instead of gradual while charging
- Lightning Hex slow motion is more powerful while charging

## 0.21.3 (07/30/2023)
### New Content
- Added Hexacast NPC encounter to So'najiz temple entrance
- Added effect "stasisAuraNPC"
### Fixes
- Fixed typo in Basin Keep NPC conversation

## 0.21.2 (07/30/2023)
### Fixes
- Fixed SET_FACE actions not using rotation in Basin Keep NPC conversation
- Fixed player being left without collision when fast forwarding Basin Keep NPC conversation

## 0.21.1 (07/30/2023)
### New Content
- Added new interactive Hexacast encounter to Basin Keep center

## 0.21.0 (07/29/2023)
### General
- Litter mod now updated to 1.6: https://github.com/XenonA7/xmc-hexacast-litter/releases
### New Content
- New combat art: Blaster Sentry (Wave Throw Lv.2A)
- New placeholder art: Acceleration Mine (Neutral Dash Lv.1A)
- New combat art: Ampere Cloak (Shock Guard Lv.1A)
- New combat art: Meteor Flare (Heat Melee Lv.1B)
- Added new sprites for E combat run animation (modified from Lychee draft)
- Added character changing sign to Rookie Harbor info hub building
- Added character changing sign to Rhombus Arena lobby
- Added character changing sign to XTM dev room
### Changes
- Changed "Animation Viewer" shock guard art to GUARD_SPECIAL1_B in the files to deactivate it
- Ice Blitz 3rd hit no longer triggers unless one of the previous hits lands
- Tweaked sound effect volume for effect scorchingSwirlSweepLoop
- Increased size of FLAME2 particles in effect aceOfFlamesCharge and added a pAlpha fade in
- Renamed proxy waveLaserCard to beamBlasterCard
- Renamed proxy waveLaser to beamBlasterLaser
- Re-worded description for Eternal Blizzard
- Effect iceBlitzExplode now uses new particle SNOW_BURST_GUI
- Reduced sound effect volume from effect fireBarrageTackleExplode
- Renamed proxy overclockProxy to animationViewerProxy
- Made the FADE_COLOR brighter in effect iceBlitzExplode
- Added FLAME2 particles to effect scorchingSwirlBombCharge
### Balance
- Fire Hand target acquisition distance greatly increased

## 0.20.0 (07/16/2023)
### General
- Litter mod now updated to 1.5: https://github.com/XenonA7/xmc-hexacast-litter/releases
### New Content
- New combat art: Ace of Flames (Heat Throw Lv.2A)
- New combat art: Ice Blitz (Cold Melee Lv.1A)
- New combat art: Searing Touch (Heat Melee Lv.1A)
- New combat art: Scorching Swirl (Heat Melee Lv.2A)
- Added animation "dashFast"
- Added non-homing versions of all charged VRPs
- Hexacast1 now shoots non-homing chargd VRPs, Hexacast2 shoots homing charged VRPs
### Changes
- Icicle Deck changed from Cold Melee Lv.1A to Cold Guard Lv.1B
- Deleted "Animation Test" heat melee placeholder
- Ace of Flames placeholder removed and reworked
- Changed avatar/name for existing pentafist NPC in hexacast encounters
- Effect ashenHexExplode scaled down in all aspects by 0.75
- Slightly sped up the loop speed for effect shineFX
- Proxy shadowflameAffliction changed to breaktype COMBATANT
- Improved effect ashenInfernoSweep
- Moved dark fire particles into loop for effect shadowflame.afflictionLines
- Reduced startup delay on proxy shadowflameAffliction
- Effeect ashenHexCardAppear reduced sound effect volume
### Fixes
- Stasis cooldown meter effect can no longer be cleared by CLEAR_EFFECTS (actionDetached = true)
- Fixed moveWithTarget property for effect shadowflame.afflictionLines
### Balance
- Ashen Hex explosion radius reduced by 25%
- Ashen Hex explosion knockback increased
- Reduced activation delay on proxy icePillarTiny (part of Icicle Deck)
- Increased duration of shadowflameAffliction (results in damage increase)

## 0.19.0 (07/09/2023)
### New Content
- New combat art: Shine (Neutral Guard Lv.1A)
- Added DLC dependency in ccmod.json
- Alyxia implementaiton of WAIT_UNTIL_GUARDED_NO_FACE, currently having issues
### Changes
- Hexing Blast reworked; uses new proxy hexingBlastController
- Extended the canvas for hexa-misc.png
### Fixes
- Fixed some dependency declaration syntax
- Fixed postShoot animation not showing for THROW_NORMAL or THROW_NROMAL_REV
### Balance
- Hex Barrier shield strength reduced from 30% to 20%
- Hex Barrier now comes with a 10% movement speed penalty
- Proxy hexingBlastSmall and hexingBlastBig damage reduced
- Withering Slash now deals damage for 12 ticks instead of 10

## 0.18.2 (07/06/2023)
### IMPORTANT
- Now requires CCLoader2 version 2.22.1 or higher!
- New dependency mod: Logic Steps by Alyxia
   - https://github.com/lexisother/logic-steps/releases
   - Install instructions have been updated
- Simplify requirement version increased to 2.12.1 (part of CCLoader2)
### New Content
- Added Lychee runGrumpy animations for S direction
- Added demonstration of Logic Steps functionality to XTM dev room (via patch)
- Added teleporter to early access cutscene to XTM dev room (via patch)
- Added a return teleporter to the early access cutscene map
### Changes
- ashenInfernoCard changed visualType on repeating CIRCLE_ATTACK from MEDIUM to HEAVY
- All standard melee effects and their rev variants slowed down to match the slower melee attack
- Effect meleeDarkRev from specials.shadowflame.json slowed down to match new melee speed
- Effect firebrandAttackDark slowed down to match new melee speed
- Effect firebrandAttack1 slowed down to match new melee speed
- Effect firebrandAttack2 slowed down to match new melee speed
- firebrandProxy timing adjusted for slower melee
- Animation at the end of standard melee attack changed to postShootSlow
### Fixes
- Fixed proxy darkFireGround spawning over gaps (added maxGroundDistance 16)
- Fixed proxy darkFireGroundBarrier spawning over gaps (added maxGroundDistance 16)
- Fixed effect darkFireWall not moving with target
### Balance
- Nerfed the standard melee attack
   - Standard melee attack is now slower
   - Standard melee attack damage reduced significantly
   - Standard melee attack SP gain factor changed to be more in line with other classes
   - Firebrand (Shadowflame version) standard melee hitboxes received the same nerf
- Standard melee attack first three hits increased from LIGHT strength to MEDIUM strength with LIGHT fly and visualType
- Firebrand (Shadowflame version) standard melee hits increased from LIGHT strength to MEDIUM strength with LIGHT fly and visualType
- Magic Missile explosion attack strength reduced from MASSIVE to HEAVY

## 0.18.1 (07/04/2023)
### General
- Public early access release!
### New Content
- Implemented runGrumpy animation for N and SE directions
   - SE sprites created by Lychee
### Fixes
- Updated README.md
- Fixed Triblader NPC position in the early access cutscene

## 0.18.0 (07/03/2023)
### New Content
- New map: xtm/bonus/early-access-cutscene
### Changes
- The animations from the "posesGround" sheet are now 2-directional
- Effect afflictionLines now uses new particle DARK_FIRE_SMALL_GUI
- Renamed proxy healCard1 to essenceCard
- Renamed proxy mmCard1 to mmCard
- Added "size" property (8x8x12) to the following BALL proxies which previously had it undefined:
   - mmCard
   - essenceCard
   - joltHexCard
   - mundaneCard
   - arcaneCardBullet
   - amberCard1

## 0.17.0 (07/02/2023)
### New Content
- New combat art: Shadowflame Sorcery (Heat Guard Lv.3A)
   - Casting again while active will immediately add a full duration to the existing buff's remaining time
   - Affects the following actions while active:
   - DASH
   - PERFECT_GUARD
   - ATTACK
   - ATTACK_REV
   - ATTACK_FINISHER
   - THROW_NORMAL
   - THROW_NORMAL_REV
   - THROW_CHARGED
   - THROW_CHARGED_REV
   - HEAT: GUARD_SPECIAL1_A (Firebrand): Instant melee attack (tier 1 only) with recolored effects
   - HEAT: GUARD_SPECIAL2_A (Augmented Flames): WIP, pending functionality in a later update
- Added new animation floatEyesClosed
- Added effect sheet specials.shadowflame.json
- Added spritesheet shadowflame.png
- Added corrected versions of all "HEXA" particles from combat.hexacastXMC to hexa-misc.png
### Changes
- Reverted Hexacast1 back to normal sprite color
- Firebrand changed from Heat Guard Lv.1B to Heat Guard Lv.1A
- Augmented Flames changed from Heat Guard Lv.2B to Heat Guard Lv.2A
- Renamed HEXA_DARK particles in hexacastXMC.json to HEXA_BLACK
- Made hexagon outline slightly larger for effects ashenHexExplode and ashenInfernoExplode
- Alightly adjusted particle timing for effect ashenInfernoExplode
- Tweaked sound effects for effect ashenInfernoVortex and made them louder
- The following proxies no longer interact with puzzle elements and are changed to "checkCollision": "false" for their CIRCLE_ATTACK:
   - frigidFlurryCard
   - ashenInfernoCard
   - creepingColdCard
   - blizzardRushCard
   - fireBarrageExplosion
- Removed unused idle animation in the DASH action
### Fixes
- Fixed Ashen Inferno final explosion hitbox radius being too small
- Fixed Stasis Rune cooldown bugging out if the player gets interrupted between hitting an enemy and landing on the ground
   - The proxy stasisCooldown is now shot by the proxy stasisProxy instead of the player
- Fixed a bug where stasisCooldown could be deleted by REMOVE_PROXIES.
   - Note that breakType NEVER is not respected if the proxy is attached to a target. Now it is not attached.
- Fixed invalid proxy breakType on heatExplosionSmall
- Fixed changelog formatting
### Balance
- Ashen Inferno damage reduced
- Ashen Inferno hit strength reduced from MEDIUM to LIGHT on the repeating vortex hitbox

## 0.16.0 (06/29/2023)
### New Content
- WIP unfinished combat art: Stasis Storm (Shock Melee Lv.3A)
- New combat art: Toxic Mire (Wave Dash Lv.1A)
- New combat art: Fire Barrage (Heat Dash Lv.2A)
- New combat art: Ashen Hex (Heat Dash Lv.1B)
- Placeholder combat art: Ace of Flames (Heat Throw Lv.2A)
- New combat art: Creeping Cold (Cold Throw Lv.2B)
- New combat art: Ashen Inferno (Heat Dash Lv.2B)
- Added global cooldown to Stasis Rune
- Added cooldown icon effect for Stasis Rune, although it does not render well
### Changes
- Temporarily recolored Hexacast1's sprites. This will be reverted in the next update.
- Flame Tackle changed from Heat Dash Lv.1B to Heat Dash Lv.1A
- Fire Barrage throw art replaced with Fire Barrage dash art
- Renamed Overclock to "Animation Viewer" (this is still a placeholder)
- Enhanced particle effect for coldExplodeBigHexagon
- Proxy fireballBig now has LIGHT knockback
- Deleted unfinished combat art Lingering Gale (Cold Throw Lv.2B)
- Deleted effects lingeringGaleSweep and lingeringGaleMain
- Deleted proxies lingeringGale and snowDust
- Adjusted CIRCLE_ATTACK parameters for proxy frigidFlurryCard
### Fixes
- Fixed previous changelog order
- Fixed the charging effect in Augmented Flames being action detached
### Balance
- Stasis Rune enemy defense buff increased from +90% to 150% (250% multiplier)

## 0.15.0 (06/12/2023)
### New Content
- New combat art: Augmented Flames (Heat Guard Lv.2B)
- New combat art: Stasis Rune (Shock Melee Lv.2B)
- Added definition for animation shuffle2Fast
### Changes
- Added "placeholder" text to Fire Barrage, as this art will be replaced in a later update
- Removed unused DARK_LIGHTNING_BOLD code and the sprites from hexa-misc.png
- Recolored SHOCK_DOT1_INV to be brighter
- Consolidated the following standard attacks into element-independent actions:
   - ATTACK
   - ATTACK_REV
   - ATTACK_FINISHER
   - THROW_NORMAL
   - THROW_NORMAL_REV
   - THROW_CHARGED
   - THROW_CHARGED_REV
- Re-worded Firebrand description
- Card shuffling animations now have 2 dirs and flip left/right respectively
- Effect thunderJacketAura now has a separate fadeColor (slightly more blue) on COPY_SPRITE particles
### Fixes
- Fixed particle SHOCK_DOT1_INV wrong spritesheep mapping
- Fixed SHOCK_DOT1_INV particles not showing for Magnet Card art
### Balance
- Wave Detonation (remote trigger version) no longer stuns enemies. Initial CIRCLE_ATTACK removed entirely.
- Proxy fireballBig damage reduced greatly
- Proxy heatExplosionSmall (part of fireballBig) damage reduced greatly

## 0.14.1 (06/04/2023)
### Changes
- Shock Surge now also grants a neutralization shield during the dash
- Flame particles in firebrandAttack1 and firebrandAttack2 effects no longer move with target
- Re-worded Firebrand description

## 0.14.0 (06/04/2023)
### New Content
- New combat art: Firebrand (Heat Guard Lv.1B)
- Added Hexacast easter egg NPC conversation to "Solar Farm" map in Ba'kii Kum
- Added Hexacast easter egg NPC conversation to "Tranquil Bamboo" map in Sapphire Ridge
- Added effect thunderJacketAuraNPC with tweaked offset and sound volume/radius

## 0.13.0 (06/01/2023)
### New Content
- New combat art: Flame Tackle (Heat Dash Lv.1B)
- New combat art: Blizzard Rush (Cold Melee Lv.3B)
- Added definitions for animations sweepEndInstant and sweepRevEndInstant
### Changes
- Spirit Blast can no longer be canceled during the final part of the attack
- Made wave laser sprites brighter, more saturated
- Greatly improved the visuals for laser endpoints in Beam Blaster
- Deleted particles LASER_END and LASER_END_INV, Beam Blaster now uses CIRCLE_BIG_WAVE_LASER
- Increased particle spread for effect beamBlasterThrowRev
- Decreased sprite scale by -15% on proxy magnetCard2 once it plays "rotating" animation
### Fixes
- Icicle Deck stunType category fixed from "INTERRUPT" to ""
### Balance
- Spirit Blast damage slightly reduced
- Proxy fireballSmallStraight status factor increased from 0.3 to 0.5

## 0.12.1 (05/21/2023)
### Changes
- Spirit Blast now only combos if at least one enemy was hit
- Increased FADE_COLOR fadeout duration in effect wavePunch2Hex
- Adjusted sound effect audio for effect beamBlasterPre

## 0.12.0 (05/21/2023)
### New Content
- New combat art: Storm Stride (Shock Dash Lv.2B)
- New combat art: Beam Blaster (Wave Throw Lv.1A)
- New combat art: Spirit Blast (Wave Melee Lv.2A)
### Changes
- Added CYBER_BOLT_SHOCK particles to effect mjolnirHex
- Reduced light source radius in effect frigidFlurrySweep1 and frigidFlurrySweep2
- Reduced light source radius in effect fortressSweep and fortressSweepRev
### Fixes
- Fixed Shock Surge having "guardable": "NEVER"

## 0.11.0 (05/16/2023)
### New Content
- New combat art: Shock Surge (Shock Dash Lv.1B)
- Added placeholder code for combat art: Storm Stride (Shock Dash Lv.2B)
### Changes
- Recolored frame 2 of DARK_LIGHTNING_TALL
- Adjusted timing for effect lightningHexMain and proxy lightningChain
- Effect lightningHexCardJumpBase initial size increased
### Fixes
- Added DETATCH_TIME_PARENT to proxy lightningChain and lightningChainTrail
### Balance
- Throttle Hex nerfed back to the original -15% timeflow debuff (was -20%)
- Proxy lightningHexBounce no longer inflicts jolt status

## 0.10.0 (05/15/2023)
### New Content
- New combat art: Throttle Hex (Shock Melee Lv.1B)
- New combat art: Jolt Hex (Shock Throw Lv.1A)
- New combat art: Lightning Hex (Shock Throw Lv.3A)
### Changes
- Throttle Hex throw art replaced with Throttle Hex melee art
- Frigid Flurry changed from ATTACK_SPECIAL2_A to ATTACK_SPECIAL2_B
- Edited last 2 frames of south sweep animation to make eye more visible
- Effect thunderJacketExplode rotated hexagon particle by 90°
- Frozen Fortress now has knockback resistance (weight -1)
- Removed redundant light source from effect magnetCard2Trail
- Reduced particle duration and spawn frequency in effect magnetCard2Trail to reduce lag
- Reduced blink speed, particle duration, and particle spawn rate in effect arcaneCardTrail to reduce lag
- Minor description edits to Eternal Blizzard and Static Field
- Replaced effect magnetCardImpactLite with magnetCard2Impact for Magnet Deck
- Renamed effect magnetCardImpact to magnetCard1Impact
- Renamed particle DEFAULT_SWEEP to DEFAULT_SWEEP_NEUTRAL, and same for rev
- Replaced proxy throttleCard with proxy joltHexCard
- In effect staticFieldUserFX, the COPY_SPRITE now moves with target
- Added a DARK_LIGHTNING_TALL particle to effect staticFieldEnd
### Fixes
- Fixed typo in Thunder Jacket description
- Fixed "timeDisconnect" property of Static Field, Static Discharge
- Removed all instances of "timeDisconnect" property from all generic proxies
### Balance
- Hail Spears reduced delay between spawning and shooting at targeted enemies
- Heal card healing total increased from 20% to 25%
- Throttle Hex time slow factor increased from 15% to 20%
- Proxy thunderSmallWeak attack strength factor changed from MEDIUM to LIGHT
- Static Discharge now inflicts jolt status
- Static Field now inflicts jolt status

## 0.9.1 (05/06/2023)
### Changes
- Effect thunderJacketAura removed light glow property
- Effect thunderJacketAura increased blink duration
- Effect thunderJacketAura increased blink alpha

## 0.9.0 (05/06/2023)
### New Content
- New combat art: Thunder Jacket (Shock Guard Lv.2A)
### Changes
- Changed spark particle entity coverage factor from 0.7 to 1.0 in effect amberHexCharge
- Reduced blink color alpha value for effect waveCardSmallTrail
- Magnet Deck cards now use effect magnetCardImpactLite upon return to player (less particles)
- Magnet Deck sparkle effect now centered more accurately on cards
- Removed effect magnetAttractHexagonsSmall from Magnet Deck
- Added SHOCK_BALL_DOT2 particles to effect magnetCard2Lightning

## 0.8.0 (05/05/2023)
### New Content
- New combat art: Frigid Flurry (Cold Melee Lv.2A)
- New combat art: Frozen Fortress (Cold Guard Lv.2A)
- Added js\proxy-hp-access.js (created by Bakafish) to support proxy entity.hpFactor
- Added poststart.js
- Added simplify as mod dependency
- Added new particle effect to Brittle Barrier proxies
### Changes
- Freeze Rays changed from GUARD_SPECIAL2_A to GUARD_SPECIAL2_B
- Converted "Sleet Sentry" combat art into "Frigid Flurry":
   - Deleted proxy sentryTurret
   - Proxy sleetSentryTrigger renamed to frigidFlurryTrigger
   - Proxy sleetSentry card renamed to frigidFlurryCard
   - Effect sleetCardBase renamed to frigidFlurryCardBase
   - Effect sentrySweep1 renamed to frigidFlurrySweep1
   - Effect sentrySweepHexagons1 renamed to frigidFlurrySweepHexagons1
   - Effect sentrySweep2 renamed to frigidFlurrySweep2
   - Effect sentrySweepHexagons2 renamed to frigidFlurrySweepHexagons2
   - Added card death effect to frigidFlurryCard
- Frigid Flurry is now classified as stunType "INTERRUPT"
- Frigid Flurry now has stun steps to lock/release enemies in the first two melee hits
- Reduced intensity of blue screen flash in effect frigidFlurrySweep2
- Proxy frigidFlurryCard travel time reduced (velocity, effects adjusted to compensate)
- Removed redundant scale85 effect from proxy frigidFlurryCard
- Moved PLAY_SOUND from Brittle Barrier action steps into effect brittleBarrierGlow
### Fxies
- Fixed frigidFlurryCard not able to shoot next to walls by changing hitbox to 16x16x16
- Fixed proxy arcaneCardBullet spawning proxies on target entity upon wall death by creating proxy arcaneCardDeathFX
- Removed wall/air death effectKeys from proxy arcaneCardBullet
- Fixed Magnet Card and Magnet Deck able to hit enemies on higher cliffs (reduced CIRCLE_ATTACK zHeight to 16 from 24)
### Balance
- Freeze Rays now inflicts chill status

## 0.7.0 (05/03/2023)
### New Content
- WIP combat art: Sleet Sentry (Cold Melee Lv.2A)
   - Unfinished mini Lea turrets spawned from the attack, manually aimed
   - No particle effects made for the turrets yet
   - The turret idea will be scrapped in future versions
### Changes
- Lingering Cold max bounces increased from 4 to 12
- Lingering Cold proxy life changed from 12 seconds to 10 seconds

## 0.6.0 (05/02/2023)
### New Content
- Added "dashRev" animation definition
- Added "dashLong" and "dashLongRev" animation definitions
- WIP combat art: Sleet Sentry (Cold Melee Lv.2A)
### Changes
- Added "WIP" to the name for Lingering Gale
- Added proper card death effect for Icicle Deck
- Amber Hex adjusted sound effect when shooting card
- Amber Hex now has dust trail when character recoils after shooting
- Amber Hex particles overhauled
### Fixes
- Fixed Arcane Volley spawning card death effects on initial piercing hits
### Balance
- Amber Hex now loses projectile velocity much faster

## 0.5.0 (04/24/2023)
### New Content
- New combat art: Lingering Cold (Cold Throw Lv.1B)
- New combat art: Amber Hex (Shock Throw Lv.2A)
- Implemented Lychee's card shuffle animation (made it 1 pixel taller)
- Implemented all remaining sweep/sweepRev animations
- Added south floating animation
- Added Hexacast easter egg NPC conversation to Bergen Village South
- WIP combat art: Lingering Gale (Cold Throw Lv.2B)
### Changes
- Made edits to east guard animation
- Hue-shifted GOD_HEXAGON_COLD to a darker blue color
- Moved a PLAY_SOUND step from Hail Spears action into hailCard2 action
- Added RHOMBUS_DOT particles to godThrowNeutral and godThrowNeutralRev effects
- Added "stopBeforeEdge" property to Eternal Blizzard, Wave Recall, Wave Detonation, Fire Hand, Icicle Deck
- Removed unused proxy group name from witheringSlashProxy and vanishingCurseProxy
- Brighter and slower blink effect for shockCardSmallTrail effect
### Fixes
- Fixed an animation glitch at the end of the following combat arts:
   - Magic Missile
   - Throttle Hex
   - Essence Steal
   - Hail Line
   - Hail Spears

## 0.4.1 (04/18/2023)
### Changes
- Lowered refresh rate for particle trail to improve Arcane Volley performance
   - arcaneCardTrail
   - arcaneCardTrailLite
   - arcaneCardTrailLiteSilent
- Improved alignment of sparkle effect on arcaneCardSeeker proxy
### Fixes
- Fixed a particle effect glitch if player gets interrupted during Arcane Volley
- Added "cancelable": true to effect "magnetAttractHexagonsSmall" steps
- Added "cancelable": true to effect "magnetCard2Lightning" steps
- Added "cancelable": true to effect "magnetCard2Trail" steps that contain SHOCK_BALL_DOT2
### Balance
 - Nerfed contact damage of Magnet Deck cards when returning to player

## 0.4.0 (04/17/2023)
### New Content
- New combat art: Withering Slash (Neutral Melee Lv.1B)
- New combat art: Arcane Volley (Neutral Throw Lv.2B)
- Finalized combat art: Magnet Deck (Shock Dash Lv.2A)
- New "brake" and "preIdle" animations (transiton when you stop running)
- Finalized eating animation from Lychee (slight edits)
- New "guard" animation from Lychee (slight edits)
### Changes
- Magnet Card now uses unfinished "runGrumpy" animation
- Reduced lunge speed on standard melee attack from 350 to 200
- Made sprite edits to many frames of the dash animation
- Made sprite edits to E, NE sweep/sweepRev animation
- Freeze Rays startup animation changed from spin to dash
- Cards from Mundane Volley linger on the ground for a shorter duration before fading
- Player can no longer be pushed around during Static Discharge
- Player can no longer be pushed around during Static Field
- Animation "itemEffect" increased time between frames
- Animation "guard" increased time between frames
- Curse of Vanishing now has slight darkness effect
- Curse of Vanishing added screen rumble on hit
- Curse of Vanishing added dust particle effect
- Proxy fireBallBig renamed to fireballBig
- Added dust effect to Magnet Card and Magnet Deck
### Fixes
- Fixed minor aniamtion bug at the end of Fire Hand
- Fixed frame data for animation "itemEffect"
- Fixed frame data for "hover" placeholder animation
- Corrected Curse of Vanishing stunType category
### Balance
- Curse of Vanishing now grants invincibility during the lunge (description updated to reflect this)
- Hail Spears damage greatly increased
- Wave Detionation (proximity mine version) damage reduced

## 0.3.1 (03/26/2023)
### New Content
- Dash animation finalized, heavily edited from Lychee
### Changes
- Moved effect godThrowNeutral and godThrowNeutralRev from hexacastXMC.json to neutral.json

## 0.3.0 (03/26/2023)
### New Content
- New combat art: Mundane Volley (Neutral Throw Lv.1B)
- New combat art: Curse of Vanishing (Neutral Melee Lv.2B)
- Added GOD_HEXAGON effects to hexa-misc.png (96x96)
- Added custom-action-buffs.js
### Changes
- Removed all instances of the "preIdle" animation from the player actions
- Updated description for Magic Missile
- Standard melee now lunges with an acceleration factor of 0.2 (momentum prior to attacking has a bigger effect)
### Balance
- Removed 0.07s delay at the start of standard melee attacks
- Pending balance decision: Mundane Volley (Hexacast1 vs Hexacast2)

## 0.2.1 (03/25/2023)
### New Content
- Implemented tweaked Lychee chest animation
- Implemented tweaked Lychee push/pull animation
- Added WIP Lychee eating animation
- Added Lea placeholder guard animation
- Added Lea placeholder brake animation
- Added Lea placeholder preIdle animation
- Started work on Curse of Vanishing
### Changes
- Hexing Blast changed from ATTACK_SPECIAL1_A to ATTACK_SPECIAL1_B
- Reduced main hexacast1.png spritesheet size
- Re-arranged hexacast1.png spritesheet

## 0.2.0 (03/18/2023)
### General
- Lychee joins the project (pixel art)
### New Content
- Added hexacast1-sweeps.png and hexacast2-sweeps.png
- New dash animation
- New sweep animations
- Added "Animation Test" level 1 heat melee art
### Changes
- Overclock (placeholder art) now sets timescale to 0.25% for viewing animations
- Removed particle effects from Overclock

## 0.1.2 (02/20/2023)
### New Content
- Ether Singularity new buff orb sprite when thrown to party members
- Added new effect sheet hexa-buff-orbs.json
- Added new spritesheet buff-orbs.png
### Changes
- Wave Detonation (when recall is active) removed zoom blur from chargeup
- Wave Detonation (mine version) zoom blur settings tweaked

## 0.1.1 (02/20/2023)
### New Content
- Ether Singularity reworked to support casting on party members
### Changes
- Added additional particle effect to Ether Singulartiy
- Removed redundant trail effect from Ether Singularity

## 0.1.0 (02/16/2023)
### New Content
- (Unfinished) New combat art: Magnet Deck (Shock Dash Lv.2 A)
- Added a sparkle effect when Heal Card spawns
### Changes
- Renamed hexacastXTM.json to hexacastXMC.json
- Tweaked particle effects for Heal Card
- CIRCLE_BALL_TRAIL_SHOCK no longer repeats a 1-frame animation
- Effect magnetCardSparks now moves with target
- Effect magnetCardAura reduced SHOCK_BALL_DOT2 particle count by 50%
- Effect magnetCardAura now shown with y=4 offset on proxy magnetCard1

## 0.0.5 (02/06/2023)
### Fixes
- Fixed changelog headings

## 0.0.4 (02/06/2023)
### Changes
- Reformatted changelog headings
- Incremented Triblader Mod version requirement

## 0.0.3 (02/06/2023)
### Fixes
- Merged changes between Hexacast1 and Hexacast2

## 0.0.2 (02/06/2023)
### Changes
- Renamed effect healCardTrail to healCardAura
- Tweaked particle effects for Heal Card
- Tweaked sound effects for Heal Card
- Added "placeholder" to the names of Overclock and Magnet Deck

## 0.0.1 (02/06/2023)
- Initial version
- Started tracking version numbers