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
  create(resolution) {
    return database("tips")
      .insert(resolution)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, resolution) {
    return database("resolution")
      .update(resolution)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("resolution")
      .delete()
      .where("id", id);
  }
};
