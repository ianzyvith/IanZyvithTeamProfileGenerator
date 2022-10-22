const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createHTML = require("./src/html-template");
const fs = require("fs");
const inquirer = require("inquirer");

const teamList = [];

const managerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Manager's Name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's ID?",
        validate: (id) => {
          if (isNaN(id)) {
            console.log("Enter a Number ID");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's Email?",
        validate: (email) => {
          valid =
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
              email
            );
          if (valid) {
            return true;
          } else {
            console.log("Enter a Valid Email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "number",
        message: "What is the Manager's Number?",
        validate: (number) => {
          if (isNaN(number)) {
            console.log("Enter a Number");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((input) => {
      const manager = new Manager(
        input.name,
        input.id,
        input.email,
        input.number
      );
      teamList.push(manager);
      console.log(manager);
    });
};

const employeePrompt = () => {
  console.log(`
    ================
    Select Employees
    ================
    `);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Select the Employee's Role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's Name?",
        when: (input) => input.role === "Engineer",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Enter a Name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "name",
        message: "What is the Intern's Name?",
        when: (input) => input.role === "Intern",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Enter a Name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's ID?",
        when: (input) => input.role === "Engineer",
        validate: (id) => {
          if (isNaN(id)) {
            console.log("Enter a Valid ID");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's ID?",
        when: (input) => input.role === "Intern",
        validate: (id) => {
          if (isNaN(id)) {
            console.log("Enter a Valid ID");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the the Engineer's Email?",
        when: (input) => input.role === "Engineer",
        validate: (email) => {
          valid =
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
              email
            );
          if (valid) {
            return true;
          } else {
            console.log("Enter a Valid Email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the the Intern's Email?",
        when: (input) => input.role === "Intern",
        validate: (email) => {
          valid =
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
              email
            );
          if (valid) {
            return true;
          } else {
            console.log("Enter a Valid Email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter their GitHub Username",
        when: (input) => input.role === "Engineer",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter a GitHub Username");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the their School",
        when: (input) => input.role === "Intern",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter a School");
          }
        },
      },
      {
        type: "confirm",
        name: "addAnother",
        message: "Do you want to add another Team Member?",
        default: true,
      },
    ])
    .then((inputs) => {
      let employee;
      if (inputs.role === "Engineer") {
        employee = new Engineer(
          inputs.name,
          inputs.id,
          inputs.email,
          inputs.github
        );
        console.log(employee);
      } else if (inputs.role === "Intern") {
        employee = new Intern(
          inputs.name,
          inputs.id,
          inputs.email,
          inputs.school
        );
        console.log(employee);
      }

      teamList.push(employee);

      if (inputs.addAnother) {
        return employeePrompt(teamList);
      } else {
        return teamList;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your Team has been made");
    }
  });
};

managerPrompt()
  .then(employeePrompt)
  .then((teamList) => {
    return createHTML(teamList);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
