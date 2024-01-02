ig.module("game.feature.combat.shoot-proxy-player-fix").requires(
  "game.feature.player.player-steps"
).defines(function() {
  var c = Vec3.create(),
    e = Vec2.create();
  ig.ACTION_STEP.SHOOT_PROXY_PLAYER.inject({
      offset: 0,
      startDist: 1,
      startDistCollide: sc.SPAWN_START_DIST_COLLIDE.CLOSER,
      _wm: new ig.Config({
        attributes: {
          startDistCollide: {
            _type: "String",
            _info: "If not NONE: consider environment collision before adding start dist. CLOSER = move closer, DROP = Don't spawn if colliding",
            _select: sc.SPAWN_START_DIST_COLLIDE
          },
          offset: {
            _type: "Offset",
            _info: "Offset relative to entity ground center from which to shoot"
          }
        }
      }),
      init: function (a) {
        a.elementProxy ? this.elementProxy = a.elementProxy : this.proxySrc = sc.ProxyTools.prepareSrc(a.proxy);
        if (a.align)
            this.align = ig.ENTITY_ALIGN[a.align];
        this.offset = a.offset || null;
        this.startDist = a.startDist || 0;
        this.startDistCollide = sc.SPAWN_START_DIST_COLLIDE[a.startDistCollide] || sc.SPAWN_START_DIST_COLLIDE.NONE
      },
      run: function (a) {
            var b;
            if (this.elementProxy)
                if (this.elementProxy == "CHARGED" && a.overrideBall)
                    b = a.overrideBall;
                else {
                    b = sc.combat.getElementMode(a);
                    b = sc.PlayerConfig.getElementBall(a, b, this.elementProxy == "CHARGED")
                }
            else
                b = sc.ProxyTools.getProxy(this.proxySrc,
                        a);
            if (b) {
                if (this.align)
                    a.getAlignedPos(this.align, c);
                else {
                    var d = a.maxJumpHeight === void 0 ? -1 : a.maxJumpHeight;
                    c.x = a.coll.pos.x + a.coll.size.x / 2;
                    c.y = a.coll.pos.y + a.coll.size.y / 2;
                    c.z = d < 0 ? a.coll.pos.z : Math.min(a.coll.pos.z, d);
                    c.z = c.z + Constants.BALL_HEIGHT
                }
                d = a.throwDirData || a.face;
                if (this.startDist) {
                    Vec2.assign(e, d);
                    Vec2.length(e, this.startDist);
                    Vec2.add(c, e)
                }
                b.spawn(c.x, c.y, c.z, a, d)
            }
            return true
        }
    });
});