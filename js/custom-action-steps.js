ig.module("game.feature.combat.hex-combat-action-steps").requires("game.feature.combat.combat-action-steps").defines(function() {

  var r = Vec2.create(),
    t = {
      FACE_REVERSE: 1,
      FACE: 2
    };

  ig.ACTION_STEP.WAIT_UNTIL_GUARDED_NO_FACE = ig.ActionStepBase.extend({
    _wm: new ig.Config({
      attributes: {
        maxTime: {
          _type: "Number",
          _info: "Maximum time to wait"
        },
        meleeOnly: {
          _type: "Boolean",
          _info: "Only continue when melee attack was guarded"
        }
      }
    }),
    init: function (a) {
      this.maxTime = a.maxTime;
      this.meleeOnly = a.meleeOnly || false
    },
    start: function (a) {
      a.stepTimer = a.stepTimer + this.maxTime
    },
    run: function (a) {
      a = a.getCombatantRoot();
      if (a.isPlayer)
        if (ig.input.currentDevice == ig.INPUT_DEVICES.KEYBOARD_AND_MOUSE) a.gui.crosshair.getDir(a.face);
        else {
          sc.control.moveDir(r, 1);
          Vec2.isZero(r) || Vec2.assign(a.face, r)
        } a.combo.guardTrapTime = a.combo.guardTrapTime + ig.system.tick;
      if (a.stepTimer <= 0 || a.combo.guardedHits > 0 &&
        (!this.meleeOnly || a.hasBlockEntity())) {
        a.combo.guardTrapTime = 0;
        return true
      }
      return false
    }
  });

});