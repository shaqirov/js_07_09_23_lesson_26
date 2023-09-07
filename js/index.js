import { customFetch } from "./helpers.js"
import { endpoints } from "./endpoints.js"
import { getUsersBtn } from "./elements.js"
import {usersList} from "./elements.js"

getUsersBtn.addEventListener('click', function() {
    customFetch(endpoints.users)
        .then(data => {
            data = JSON.parse(data)
            usersList.innerHTML = ""
            data.forEach(user => {
                usersList.innerHTML += `<li>
                                            Name: ${user.name}<br>
                                            Age: ${user.age}<br>
                                            Username: ${user.username}
                                        </li>`
            });
        })
})
