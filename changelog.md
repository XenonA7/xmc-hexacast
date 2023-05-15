0.10.0 (05/15/2023)
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

0.9.1 (05/06/2023)
### Changes
- Effect thunderJacketAura removed light glow property
- Effect thunderJacketAura increased blink duration
- Effect thunderJacketAura increased blink alpha

0.9.0 (05/06/2023)
### New Content
- New combat art: Thunder Jacket (Shock Guard Lv.2A)
### Changes
- Changed spark particle entity coverage factor from 0.7 to 1.0 in effect amberHexCharge
- Reduced blink color alpha value for effect waveCardSmallTrail
- Magnet Deck cards now use effect magnetCardImpactLite upon return to player (less particles)
- Magnet Deck sparkle effect now centered more accurately on cards
- Removed effect magnetAttractHexagonsSmall from Magnet Deck
- Added SHOCK_BALL_DOT2 particles to effect magnetCard2Lightning

0.8.0 (05/05/2023)
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

0.7.0 (05/03/2023)
### New Content
- WIP combat art: Sleet Sentry (Cold Melee Lv.2A)
   - Unfinished mini Lea turrets spawned from the attack, manually aimed
   - No particle effects made for the turrets yet
   - The turret idea will be scrapped in future versions
### Changes
- Lingering Cold max bounces increased from 4 to 12
- Lingering Cold proxy life changed from 12 seconds to 10 seconds

0.6.0 (05/02/2023)
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

0.5.0 (04/24/2023)
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

0.4.1 (04/18/2023)
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

0.4.0 (04/17/2023)
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

0.3.1 (03/26/2023)
### New Content
- Dash animation finalized, heavily edited from Lychee
### Changes
- Moved effect godThrowNeutral and godThrowNeutralRev from hexacastXMC.json to neutral.json

0.3.0 (03/26/2023)
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

0.2.1 (03/25/2023)
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

0.2.0 (03/18/2023)
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

0.1.2 (02/20/2023)
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
- Initial Release