const AbstractRepository = require("./AbstractRepository");

class IdeaRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "idea" });
  }

  // The C of CRUD - Create operation

  async create(idea) {
        // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description) values (?, ?)`,
      [
        idea.title,
        idea.description,
        idea.good
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations


  async readId() {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SHOW TABLE STATUS FROM la_boite_a_idee like "idea"`
    );

    // Return the first row of the result, which represents the item
    return rows[0].Auto_increment+1;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readfourResult() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select * from ${this.table} ORDER BY RAND() LIMIT 4`
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
      `DELETE ${this.table} from ${this.table} JOIN idea ON idea.id=${this.table}.id WHERE ${this.table}.id=?`,
      [id]
    );

    // Return the array of items
    return rows;
  }
}

module.exports = IdeaRepository;
