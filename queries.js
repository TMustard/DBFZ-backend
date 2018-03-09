const database = require("./database-connection");

module.exports = {
  listTips() {
    return database("tips").select();
  },
  listGuides() {
    return database("guides").select();
  },
  read(id) {
    return database("tips")
      .select()
      .where("id", id)
      .first();
  },
  readGuides(id) {
    return database("guides")
      .select()
      .where("id", id)
      .first();
  },
  create(tip) {
    return database("tips")
      .insert(tip)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, guide) {
    return database("guides")
      .update(guide)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("tips")
      .delete()
      .where("id", id);
  }
};
