ig.module('game.feature.combat.hex-combat-action-steps').requires('game.feature.combat.combat-action-steps').defines(function () {

  ig.ACTION_STEP.RESET_GUARD_COMBO = ig.ActionStepBase.extend({
      init: function(a) {},
      start: function(a) {
          a = a.getCombatantRoot();
          a.combo.guardedHits = 0;
          a.combo.blockedDamage = 0;
          a.combo.blockedFactor = 0;
          a.combo.guardedEntity = null;
      }
  });

/*
  ig.ACTION_STEP.RESET_TARGET_GUARD_COMBO = ig.ActionStepBase.extend({
      init: function(a) {},
      start: function(a) {
          a = a.getCombatantRoot();
          (a.getTarget()).combo.guardedHits = 0;
          (a.getTarget()).combo.blockedDamage = 0;
          (a.getTarget()).combo.blockedFactor = 0;
          (a.getTarget()).combo.guardedEntity = null;
      }
  });
*/

});
