const type = process.env.TYPE;
const username = process.env.USER;
const password = process.env.PASS;
const database = process.env.DATABASE;
const port = process.env.PORT;
const host = process.env.HOST;

module.exports = {
  type,
  url: `${type}://${username}:${password}@${host}:${port}/${database}`,
  entities: [
    process.env.NODE_ENV === "test"
      ? "src/migrations/**/*.ts"
      : "build/migrations/**/*.js",
  ],
  cli: {
    entitiesDir:
      process.env.NODE_ENV === "test" ? "src/entity" : "build/entity",
    migrationsDir:
      process.env.NODE_ENV === "test" ? "src/migration" : "build/migration",
  },
  synchronize: false,
  logging: false,
};
