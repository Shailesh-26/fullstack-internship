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
            li.textContent = `${user.name} - ${user.email}`;

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