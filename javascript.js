const adduserbtn = document.getElementById('adduser');
const btntext = adduserbtn.innerText;
const usernameTextfield = document.getElementById('username');
const datainsertinrow = document.getElementById('rowinsert');
let userArray = [];
let obj = localStorage.getItem('users');

let edit_id = null;
if (obj != null) {
    userArray = JSON.parse(obj);
    edit_id = null;
}

displayinfo();

adduserbtn.onclick = () => {

    const name = usernameTextfield.value;
    if (edit_id != null) {
        userArray.splice(edit_id, 1, { 'name': name });
    }
    else {
        userArray.push({ 'name': name });

    }
    saveinfo(userArray);
    usernameTextfield.value = '';
    adduserbtn.innerText = btntext;
}

function saveinfo(userArray) {
    let str = JSON.stringify(userArray);
    localStorage.setItem('users', str);
    displayinfo();
}
// <th scope="row">${i + 1}</th>
function displayinfo() {
    let statement = '';
    userArray.forEach((user, i) => {
        statement += ` <div><tr>
    <td>  <input type="checkbox" id =checkbox1></td>
    <td><b>${user.name}</b></td>
    <td><div><button type="button" class="btn btn-primary"  id="delbtn" onclick='deleinfo(${i})'>Delete</button>&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-success" id="editbtn" onclick='editinfo(${i})'>Edit</button></div></td>
  
</tr> 
</div>`
        datainsertinrow.innerHTML = statement;
    });

}


function deleinfo(i) {
    userArray.splice(i, 1);
    saveinfo(userArray);
}

function editinfo(i) {
    edit_id = i;
    usernameTextfield.value = userArray[i].name;
    adduserbtn.innerText = 'Edit User';

}

