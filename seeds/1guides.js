exports.seed = function(knex, Promise) {
  return knex("guides")
    .del()
    .then(() => {
      return knex("guides").insert([
        {
          id: 1,
          name: "guide1",
          guide:
            "If you press forward + A1 or A2 while in blockstun, you will perform a guard cancel, which tags out your current point character for one of your teammates. This costs one bar and obviously, if all of your teammates are dead it won't work!"
        },
        {
          id: 2,
          name: "guide2",
          guide:
            "Light autocombo strings can be very useful in air combos, because each successive autocombo hit will pull you closer to your opponent."
        },
        {
          id: 3,
          name: "guide3",
          guide:
            "To air dash instantly after jumping, the standard input is up + forward, forward (or up + back, back for a backwards air dash). However, in DBFZ there is also a shortcut which is to press forward + H + S to forward dash in the air (this does not work for backdash). Try both and see which one feels more comfortable for you."
        },
        {
          id: 4,
          name: "guide4",
          guide:
            "Raw level 3 attacks only do blue damage (which is fully recoverable), so unless the lvl 3 is going to finish off a character, it's usually better to go for a different option"
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE tips_id_seq RESTART WITH 5;");
    });
};
