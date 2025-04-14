import users from "../data/users.js";

// Posibilita que se ejecute load ni bien carga la pagina, cuando el contenido
// del DOM esta cargado
document.addEventListener("DOMContentLoaded", () => load());

function load() {
  switch (window.location.pathname) {
    case "/index.htm":
      crearUsuarios();
      break;
    case "/userDetails.htm":
      const id = getParamUserId();
      crearUsuario(getUserId(id));
      break;
    default:
      break;
  }
}

function getParamUserId() {
  const querystring = window.location.search;
  // separa los parametros
  const urlParam = new URLSearchParams(querystring);
  return urlParam.get("id");
}

function getUserId(userId) {
  return users.find((user) => user["Object Id"] == userId);
}

//TODO:UserDetails.htm
// Al hacer click en algun usuario, vaya a la pagina UserDetails para
// mostrar todas las demas propiedades
// tip: enviar el Object id de usuario por URL (querystring)

function crearUsuario(user) {
  const main = document.getElementById("main");
  const usersElements = document.createElement("ul");
  usersElements.className = "users-list";
  main.appendChild(usersElements);

  const userItem = document.createElement("li");
  userItem.className = "user-item";
  usersElements.appendChild(userItem);

  const card = document.createElement("div");
  card.className = "card user-item__content";
  userItem.appendChild(card);

  const link = document.createElement("a");
  // Querystring
  link.href = `#`;
  card.appendChild(link);

  const userItemImage = document.createElement("div");
  userItemImage.className = "user-item__image avatar";
  link.appendChild(userItemImage);

  const imageUser = document.createElement("img");
  imageUser.src = `img/${user["Display name"]}.jpg`;
  userItemImage.appendChild(imageUser);

  const userItemInfo = document.createElement("div");
  userItemInfo.className = "user-item__info";
  link.appendChild(userItemInfo);

  const nameUser = document.createElement("h2");
  nameUser.innerText = user["Display name"];
  userItemInfo.appendChild(nameUser);

  const stateUser = document.createElement("h3");
  stateUser.innerText = user["State"];
  userItemInfo.appendChild(stateUser);
}

function crearUsuarios() {
  const main = document.getElementById("main");
  const usersElements = document.createElement("ul");
  usersElements.className = "users-list";
  main.appendChild(usersElements);

  for (const user of users) {
    const userItem = document.createElement("li");
    userItem.className = "user-item";
    usersElements.appendChild(userItem);

    const card = document.createElement("div");
    card.className = "card user-item__content";
    userItem.appendChild(card);

    const link = document.createElement("a");
    // Querystring
    link.href = `/userDetails.htm?id=${user["Object Id"]}`;
    card.appendChild(link);

    const userItemImage = document.createElement("div");
    userItemImage.className = "user-item__image avatar";
    link.appendChild(userItemImage);

    const imageUser = document.createElement("img");
    imageUser.src = `img/${user["Display name"]}.jpg`;
    userItemImage.appendChild(imageUser);

    const userItemInfo = document.createElement("div");
    userItemInfo.className = "user-item__info";
    link.appendChild(userItemInfo);

    const nameUser = document.createElement("h2");
    nameUser.innerText = user["Display name"];
    userItemInfo.appendChild(nameUser);

    const stateUser = document.createElement("h3");
    stateUser.innerText = user["State"];
    userItemInfo.appendChild(stateUser);
  }
}
