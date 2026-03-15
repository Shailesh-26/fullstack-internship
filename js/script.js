const apiURL = "http://localhost:5000/api/users";

const userList = document.getElementById("userList");
const userForm = document.getElementById("userForm");

async function loadUsers() {


try {

    const response = await fetch(apiURL);
    const users = await response.json();

    userList.innerHTML = "";

    users.forEach(user => {

        const li = document.createElement("li");

        const userText = document.createElement("span");
        userText.textContent = `${user.name} - ${user.email}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("btn");

        deleteBtn.onclick = async () => {

            await fetch(`${apiURL}/${user._id}`, {
                method: "DELETE"
            });

            loadUsers();
        };

        li.appendChild(userText);
        li.appendChild(deleteBtn);

        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";

        userList.appendChild(li);

    });

} catch (error) {

    console.error("Error loading users:", error);

}


}

userForm.addEventListener("submit", async (e) => {


e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;

try {

    await fetch(apiURL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({ name, email })

    });

    userForm.reset();
    loadUsers();

} catch (error) {

    console.error("Error adding user:", error);

}


});

loadUsers();
