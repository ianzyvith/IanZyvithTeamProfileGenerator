const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Ian", 1, "test@test.com", "IanZyv");

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer github value", () => {
  const engineer = new Engineer("Ian", 1, "test@test.com", "IanZyv");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("gets role of employee", () => {
  const engineer = new Engineer("Ian", 1, "test@test.com", "IanZyv");

  expect(engineer.getRole()).toEqual("Engineer");
});
