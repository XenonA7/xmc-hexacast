sc.STAT_CHANGE_SETTINGS["ATTACK-MINUS-VANISHING"] = {
  change: sc.STAT_CHANGE_TYPE.STATS,
  type: sc.STAT_PARAM_TYPE.ATTACK,
  value: 0.50,
  negative: true,
  icon: "stat-attack",
  grade: "stat-rank-down-3"
};

sc.STAT_CHANGE_SETTINGS["DEFENSE-PLUS-STASIS"] = {
  change: sc.STAT_CHANGE_TYPE.STATS,
  type: sc.STAT_PARAM_TYPE.DEFENSE,
  value: 2.50,
  negative: false,
  icon: "stat-defense",
  grade: "stat-rank-up-1"
};

sc.STAT_PARAM_TYPE.TOXIC_HAZARD = {
  key: "TOXIC_HAZARD"
};

sc.STAT_CHANGE_SETTINGS["POISON_INFLICT-1"] = {
  change: sc.STAT_CHANGE_TYPE.MODIFIER,
  type: sc.STAT_PARAM_TYPE.TOXIC_HAZARD,
  value: 1.5,
  negative: false,
  icon: "stat-hack",
  grade: "stat-rank-1"
};