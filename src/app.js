const users = [
  {
    "Block credential": "FALSE",
    City: "Bellevue",
    "Country/Region": "United States",
    Department: "Retail",
    DirSyncEnabled: "",
    "Display name": "Adele Vance",
    Fax: "",
    "First name": "Adele",
    "Last dirsync time": "2021-09-05 23:19:44Z",
    "Last name": "Vance",
    "Last password change time stamp": "",
    "License assignment details":
      "Microsoft 365 E5 Developer (without Windows and Audio Conferencing)",
    Licenses: "",
    "Mobile Phone": "",
    "Oath token meta data": "",
    "Object Id": "96ca293c-29dd-4668-a763-ee407bd935d7",
    Office: "18/2111",
    "Password never expires": "",
    "Phone number": "+1 425 555 0109",
    "Postal code": "98004",
    "Preferred data location": "",
    "Preferred language": "en-US",
    "Proxy addresses": "SMTP:AdeleV@tecnosharedev.onmicrosoft.com",
    "Release track": "",
    "Soft deletion time stamp": "",
    State: "WA",
    "Street address": "205 108th Ave. NE, Suite 400",
    "Strong password required": "",
    Title: "Retail Manager",
    "Usage location": "US",
    "User principal name": "AdeleV@tecnosharedev.onmicrosoft.com",
    "When created": "2020-05-23 19:59:00Z",
  },
  {
    "Block credential": "FALSE",
    City: "San Diego",
    "Country/Region": "United States",
    Department: "Marketing",
    DirSyncEnabled: "",
    "Display name": "Alex Wilber",
    Fax: "",
    "First name": "Alex",
    "Last dirsync time": "2022-01-14 19:04:23Z",
    "Last name": "Wilber",
    "Last password change time stamp": "",
    "License assignment details":
      "Microsoft 365 E5 Developer (without Windows and Audio Conferencing)",
    Licenses: "",
    "Mobile Phone": "",
    "Oath token meta data": "",
    "Object Id": "8b1d7dd9-48ba-4358-a9b3-1b08daa2d68a",
    Office: "131/1104",
    "Password never expires": "",
    "Phone number": "+1 858 555 0110",
    "Postal code": "92121",
    "Preferred data location": "",
    "Preferred language": "en-US",
    "Proxy addresses": "SMTP:AlexW@tecnosharedev.onmicrosoft.com",
    "Release track": "",
    "Soft deletion time stamp": "",
    State: "CA",
    "Street address": "9256 Towne Center Dr., Suite 400",
    "Strong password required": "",
    Title: "Marketing Assistant",
    "Usage location": "US",
    "User principal name": "AlexW@tecnosharedev.onmicrosoft.com",
    "When created": "2020-05-23 19:59:01Z",
  },
  {
    "Block credential": "FALSE",
    City: "Tulsa",
    "Country/Region": "United States",
    Department: "Engineering",
    DirSyncEnabled: "",
    "Display name": "Lidia Holloway",
    Fax: "",
    "First name": "Lidia",
    "Last dirsync time": "2020-05-23 19:59:08Z",
    "Last name": "Holloway",
    "Last password change time stamp": "",
    "License assignment details":
      "Microsoft 365 E5 Developer (without Windows and Audio Conferencing)",
    Licenses: "",
    "Mobile Phone": "",
    "Oath token meta data": "",
    "Object Id": "f8104839-2023-446e-a137-475f9e52821f",
    Office: "20/2107",
    "Password never expires": "",
    "Phone number": "+1 918 555 0107",
    "Postal code": "74133",
    "Preferred data location": "",
    "Preferred language": "en-US",
    "Proxy addresses": "SMTP:LidiaH@tecnosharedev.onmicrosoft.com",
    "Release track": "",
    "Soft deletion time stamp": "",
    State: "OK",
    "Street address": "7633 E. 63rd Place, Suite 300",
    "Strong password required": "",
    Title: "Product Manager",
    "Usage location": "US",
    "User principal name": "LidiaH@tecnosharedev.onmicrosoft.com",
    "When created": "2020-05-23 19:59:09Z",
  },
];

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
    link.href = "#";
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
