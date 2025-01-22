import { parseDataSourceConfig } from "../src/utils"

const connectionString = "mysql://root:password@localhost:3306/nxauth"

test("could parse connection string", () => {
  expect(parseDataSourceConfig(connectionString)).toEqual(
    expect.objectContaining({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "password",
      database: "nxauth",
    })
  )
})
