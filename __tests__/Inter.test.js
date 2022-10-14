const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("Ian", 90, "test@test.com", "RU");

  expect(intern.school).toEqual(expect.any(String));
});

test("gets employee school", () => {
  const intern = new Intern("Ian", 90, "test@test.com", "RU");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("gets role of employee", () => {
  const intern = new Intern("Ian", 90, "test@test.com.com", "RU");

  expect(intern.getRole()).toEqual("Intern");
});
