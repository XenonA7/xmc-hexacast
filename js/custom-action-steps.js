ig.module("game.feature.combat.hex-combat-action-steps").requires("game.feature.combat.combat-action-steps").defines(function() {
/*
  //This was an attempt to make a version of WAIT_UNTIL_GUARDED that doesn't make the player follow the mouse.
  //Edit: This does not work at all.
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
*/
/*
  //Needed to add the "add" functionality for the Curse of Vanishing combat art.
  //Edit: this does not work at all.
  var C = {
    set: function (a, b) {
      return b
    },
    mul: function (a, b) {
      return a * b
    }
    add: function (a, b) {
      return a + b
    }
  };

  var d = {
      SELF: function (a) {
        return a
      },
      PROXY_OWNER: function (a) {
        return a.getCombatantRoot()
      },
      PROXY_SRC: function (a) {
        return a.sourceEntity
      },
      TARGET: function (a) {
        return a.getTarget()
      }
    },
    c = Vec3.create();

  ig.ACTION_STEP.MOD_ACTION_BUFF_PARAM_2 = ig.ActionStepBase.extend({
    _wm: new ig.Config({
      attributes: {
        target: {
          _type: "String",
          _info: "What entity will get the buff",
          _select: d
        },
        name: {
          _type: "String",
          _info: "Name used to search for buff of target entity"
        },
        param: {
          _type: "String",
          _info: "What param to modify",
          _select: ["hp",
            "attack", "defense", "focus"
          ]
        },
        changeType: {
          _type: "String",
          _info: "Type of modification",
          _select: C
        },
        value: {
          _type: "Number",
          _info: "By what value param is modified"
        }
      }
    }),
    init: function (a) {
      this.target = d[a.target] || d.SELF;
      this.name = a.name || null;
      this.param = a.param;
      this.value = a.value || 0;
      this.changeType = C[a.changeType] || C.set
    },
    start: function (a) {
      if ((a = this.target(a)) && a.params)
        for (var b = a.params.buffs, c = b.length; c--;) {
          var d = b[c];
          if (d instanceof sc.ActionBuff && d.name == this.name) {
            var e = this.changeType(d.params[this.param],
              this.value);
            a.params.modifyBuff(d, this.param, e)
          }
        }
    }
  });
*/
});