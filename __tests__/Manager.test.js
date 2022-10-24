const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager("Ian", 1, "test@test.com", 1);

  expect(manager.number).toEqual(expect.any(Number));
});

test("gets role of employee", () => {
  const manager = new Manager("Ian", 1, "test@test.com.com");

  expect(manager.getRole()).toEqual("Manager");
});
