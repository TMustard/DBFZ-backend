exports.seed = function(knex, Promise) {
  return knex("guides")
    .del()
    .then(() => {
      return knex("guides").insert([
        {
          id: 1,
          name: "Android 16 Guide",
          guide:
            "Android 16 is a grappler who can break through his opponents' defenses with powerful command grabs. While lacking in means to deal with long-ranged fighters, if he can get close enough to get his hands on his foes, he can deal a lot of damage. Combined with his long reaching normals, good air projectile, armored launcher and strong framedata, many argue that Android 16 is the strongest character in the game, only lacking a proper beam and an invincible reversal, which are not that common meterless. One of his biggest strengths is that his Dynamite Driver command grab leaves the opponent in a true hard knockdown state. In Dragon Ball FighterZ, combos usually end with a move that sends the character back to the ground with a sliding effect. This state is considered the hard knockdown of the game. In this state, you can still choose to up tech, backroll, etc. However, there is a True Hard Knockdown state that does not allow the player to choose any of these options, making them extremely vulnerable to crossups and powerful setups that can otherwise be avoided or mitigated with the right normal wakeup option. Furthermore, with 1 bar for Vanish combo extensions, any mixup that he lands will directly lead back to the same situation with about 1/3 of the opponent's health gone at the very least, making Android 16 probably the scariest character in the entire game."
        },
        {
          id: 2,
          name: "Kid Buu Guide",
          guide: "Kid Buu"
        },
        {
          id: 3,
          name: "Cell Guide",
          guide: "Cell"
        },
        {
          id: 4,
          name: "Captain Ginyu Guide",
          guide: "Captain Ginyu"
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE tips_id_seq RESTART WITH 5;");
    });
};
