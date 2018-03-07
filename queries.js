const database = require("./database-connection");

module.exports = {
  list() {
    return database("tips").select();
  },
  read(id) {
    return database("tips")
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
  update(id, tip) {
    return database("tips")
      .update(tip)
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
