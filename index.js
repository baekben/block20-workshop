const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  // grabbing the root
  const root = document.querySelector("#root");

  // Creating the title
  const h1 = document.createElement("h1");
  h1.innerText = "FREELANCERS";

  root.appendChild(h1);

  const list = document.createElement("ul");
  list.setAttribute("class", "freelancers");

  // creating titles for the lists
  const titles = document.createElement("li");
  titles.setAttribute("class", "freelancer");
  const nameTitle = document.createElement("div");
  nameTitle.setAttribute("class", "name");
  nameTitle.innerHTML = "<b>NAME</b>";
  const ageTitle = document.createElement("div");
  ageTitle.setAttribute("class", "age");
  ageTitle.innerHTML = "<b>AGE</b>";
  const occupationTitle = document.createElement("div");
  occupationTitle.setAttribute("class", "occupation");
  occupationTitle.innerHTML = "<b>OCCUPATION</b>";
  titles.appendChild(nameTitle);
  titles.appendChild(ageTitle);
  titles.appendChild(occupationTitle);
  list.appendChild(titles);

  // adding each freelancer to the lists
  users.forEach((user) => {
    let listItem = document.createElement("li");
    listItem.setAttribute("class", "freelancer");

    let name = document.createElement("div");
    name.setAttribute("class", "name");
    name.innerText = user.name;

    let age = document.createElement("div");
    age.setAttribute("class", "age");
    age.innerText = user.age;

    let occupation = document.createElement("div");
    occupation.setAttribute("class", "occupation");
    occupation.innerText = user.occupation.toUpperCase();

    listItem.appendChild(name);
    listItem.appendChild(age);
    listItem.appendChild(occupation);

    list.appendChild(listItem);
  });

  root.appendChild(list);
}

//call the main function
main();
