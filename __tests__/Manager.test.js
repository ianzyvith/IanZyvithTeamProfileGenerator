const Manager = require("../lib/Manager");

test("creates an Manager object", () => {
  const manager = new Manager("Ian", 90, "test@test.com", 3);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets role of employee", () => {
  const manager = new Manager("Ian", 90, "test@test.com.com");

  expect(manager.getRole()).toEqual("Manager");
});
