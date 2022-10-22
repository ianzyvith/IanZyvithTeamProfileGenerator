const createManager = function (manager) {
  return `
    <card class="card col-3 shadow px-0 mx-3 mb-3">
    <div class="card-header bg-info">
        <h3>${manager.name}</h3>
        <h4>
            <i class="fa-solid fa-people-roof"></i>
            Manager
        </h4>
    </div>
  
    <ul class="card-body">
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p>Number: ${manager.number}</p>
    </ul>
  </card>
      `;
};

const createEngineer = function (engineer) {
  return `
    <card class="card col-3 shadow px-0 mx-3 mb-3">
    <div class="card-header bg-info">
        <h3>${engineer.name}</h3>
        <h4>
        <i class="fa-solid fa-atom"></i>
            Engineer
        </h4>
    </div>
  
    <ul class="card-body">
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </ul>
  </card>
      `;
};

const createIntern = function (intern) {
  return `
    <card class="card col-3 shadow px-0 mx-3 mb-3">
    <div class="card-header bg-info">
        <h3>${intern.name}</h3>
        <h4>
        <i class="fa-solid fa-glasses"></i>
            Intern
        </h4>
    </div>
  
    <ul class="card-body">
        <p>ID: ${intern.id}</p>
        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p>School: ${intern.school}</p>
    </ul>
  </card>
      `;
};

createHTML = (data) => {
  dataArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const manager = createManager(employee);
      dataArray.push(manager);
    }

    if (role === "Engineer") {
      const engineers = createEngineer(employee);
      dataArray.push(engineers);
    }

    if (role === "Intern") {
      const interns = createIntern(employee);
      dataArray.push(interns);
    }
  }

  const employees = dataArray.join("");

  const createTeam = teamHTML(employees);
  return createTeam;
};

const teamHTML = function (employees) {
  return `
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet">
      
      <body>
          <header class="bg-danger py-5">
              <h1 class="d-flex justify-content-center text-bg-danger">My Team</h1>
          </header>
  
          <container class="my-5 row justify-content-center">
              ${employees}
          </container>    
      </body>
  
  
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </html>
  `;
};

module.exports = createHTML;
