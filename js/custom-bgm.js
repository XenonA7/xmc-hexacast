ig.module("impact.feature.bgm.bgm-xmc")
  .requires("impact.feature.bgm.bgm")
  .defines(function () {
    ig.merge(ig.BGM_TRACK_LIST, {

    });

    ig.merge(ig.BGM_DEFAULT_TRACKS, {
      mysterious: {
        field: {
          track: "oldHideout1",
          volume: 0.9,
        },
        battle: {
          track: "fieldBattle",
          volume: 0.7,
        },
    		rankBattle: {
    			track: "fieldBattle",
    			volume: 0.7
    		},
    		sRankBattle: {
    			track: "fieldBattle",
    			volume: 0.7
    		}
      },
      briefingArea: {
        field: {
          track: "briefing",
          volume: 0.9,
        },
        battle: {
          track: "fieldBattle",
          volume: 0.7,
        },
        rankBattle: {
          track: "fieldBattle",
          volume: 0.7
        },
        sRankBattle: {
          track: "fieldBattle",
          volume: 0.7
        }
      }

    });
  });