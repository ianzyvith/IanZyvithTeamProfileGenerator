const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Ian", 1, "test@test.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets employee name", () => {
  const employee = new Employee("Ian", 1, "test@test.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee ID", () => {
  const employee = new Employee("Ian", 1, "test@test.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee email", () => {
  const employee = new Employee("Ian", 1, "test@test.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

test("gets role of employee", () => {
  const employee = new Employee("Ian", 1, "test@test.com");

  expect(employee.getRole()).toEqual("Employee");
});
