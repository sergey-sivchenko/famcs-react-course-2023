function sayHi() {
  const name = prompt("What is your name?");

  const nameParagraph = document.createElement("p");

  nameParagraph.className = "name";
  nameParagraph.append(`Hi, ${name}!`);

  const mainTag = document.querySelector("#main");
  mainTag.append(nameParagraph);
}
