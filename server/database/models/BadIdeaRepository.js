const AbstractRepository = require("./AbstractRepository");

class BadIdeaRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "bad_idea" });
  }

  // The C of CRUD - Create operation

  async create(badIdea) {
    // Execute the SQL INSERT query to add a new item to the "item" table
        const [result] = await this.database.query(
      `INSERT INTO ${this.table} (id_idea) values (?)`,
      [
        badIdea.id_idea
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID

    const [rows] = await this.database.query(
      `SELECT bad_idea.id,idea.title,idea.description,bad_idea.id_idea FROM ${this.table} JOIN idea ON bad_idea.id_idea = idea.id WHERE bad_idea.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `SELECT bad_idea.id,idea.title,idea.description,bad_idea.id_idea FROM bad_idea LEFT JOIN idea ON bad_idea.id_idea = idea.id  ORDER BY RAND()`
    );
    // Return the array of items
    return rows;
  }


  // The U of CRUD - Update operation

  async update(id, keys, value) {
    const updates = keys.map((key) => `${key} = ?`).join(", ");

    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET ${updates} WHERE id=${id}`,
      value
    );

    // Return the array of items
    return rows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE from ${this.table} WHERE id=?`,
      [id]
    );

    // Return the array of items
    return rows;
  }
}

module.exports = BadIdeaRepository;
