// const createHTML = require("./src/html-template");

// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

// const fs = require("fs");
// const inquirer = require("inquirer");

// const teamArray = [];

// const addManager = () => {
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "Who is the Manager?",
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("Please enter a name");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "Please enter the Manager's ID.",
//         validate: (nameInput) => {
//           if (isNaN(nameInput)) {
//             console.log("Please enter an ID");
//             return false;
//           } else {
//             return true;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Please enter the Manager's email.",
//         validate: (email) => {
//           valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
//           if (valid) {
//             return true;
//           } else {
//             console.log("Please enter an email");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "number",
//         message: "Please enter the Manager's number",
//         validate: (nameInput) => {
//           if (isNaN(nameInput)) {
//             console.log("Please enter a number");
//             return false;
//           } else {
//             return true;
//           }
//         },
//       },
//     ])
//     .then((managerInput) => {
//       const { name, id, email, number } = managerInput;
//       const manager = new Manager(name, id, email, number);

//       teamArray.push(manager);
//       console.log(manager);
//     });
// };

// const addEmployee = () => {
//   console.log(`
//     =================
//     Adding Employees
//     =================
//     `);

//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "role",
//         message: "Please choose your Employee's role",
//         choices: ["Engineer", "Intern"],
//       },
//       {
//         type: "input",
//         name: "name",
//         message: "What's the name of the Employee?",
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("Please enter a name");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "Please enter the Employee's ID.",
//         validate: (nameInput) => {
//           if (isNaN(nameInput)) {
//             console.log("Please enter an ID");
//             return false;
//           } else {
//             return true;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Please enter the Employee's email.",
//         validate: (email) => {
//           valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
//           if (valid) {
//             return true;
//           } else {
//             console.log("Please enter an email");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "github",
//         message: "Please enter the Employee's github username.",
//         when: (input) => input.role === "Engineer",
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("Please enter a github username");
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "school",
//         message: "Please enter the Intern's school",
//         when: (input) => input.role === "Intern",
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("Please enter a school");
//           }
//         },
//       },
//       {
//         type: "confirm",
//         name: "confirmAddEmployee",
//         message: "Would you like to add more members?",
//         default: false,
//       },
//     ])
//     .then((employeeData) => {
//       let { name, id, email, role, github, school, confirmAddEmployee } =
//         employeeData;
//       let employee;

//       if (role === "Engineer") {
//         employee = new Engineer(name, id, email, github);

//         console.log(employee);
//       } else if (role === "Intern") {
//         employee = new Intern(name, id, email, school);

//         console.log(employee);
//       }

//       teamArray.push(employee);

//       if (confirmAddEmployee) {
//         return addEmployee(teamArray);
//       } else {
//         return teamArray;
//       }
//     });
// };

// // write html file
// const writeFile = (data) => {
//   fs.writeFile("./dist/index.html", data, (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     } else {
//       console.log("Team has been created");
//     }
//   });
// };

// addManager()
//   .then(addEmployee)
//   .then((teamArray) => {
//     return createHTML(teamArray);
//   })
//   .then((pageHTML) => {
//     return writeFile(pageHTML);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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
        message: "What is their Name?",
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
        message: "What is their ID?",
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
        message: "What is the their Email?",
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
