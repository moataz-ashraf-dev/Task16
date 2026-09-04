function firstMessageIfYes(){
    alert("Start now creating, modifying, or deleting user data")
}
function firstMessageIfNo(){
    alert("No problem! If you don't want to manage client data now, you can return at any time.")
}
let allUsers =[]
function creating(){
    // if(allUsers.length == 1){
    console.clear()
    // }
    let userName = prompt("input User Name")
    let userPassword = prompt("input The Password")
    let userObject ={
        Name : userName,
        Password :userPassword
    }
    if(userObject.Name !== "" && userObject.Name !== null && userObject.Password !== "" && userObject.Password !== null){
        allUsers.push(userObject)
    }
    else{
    alert("You did not enter the user name or password")
    }

    console.log("Current Users List:", allUsers)
}
function showUsers(){
    let totalUsers =""
    if(allUsers.length == 0 ){
        alert("There is no user data available")
    }
    else{
       for (let i = 0; i < allUsers.length; i++) {
       totalUsers += (i + 1) + " : The Name is : "+ allUsers[i].Name + "  -  The Password is : " + allUsers[i].Password +"\n"
    }
    alert(totalUsers)
    }

}
function Update(){
    let numUser = prompt("What is the user  that you want to change?");
    if (numUser !== "" && numUser !== null){
        let numUserinbox = +numUser -1; 
        let nowuserName = prompt("input now User Name");
        let nowPassword = prompt("input ThE now Password");
        let nowEmail ={
            Name : nowuserName,
            Password : nowPassword
        }
           if(nowEmail.Name != "" && nowEmail.Password != ""){
        allUsers.splice(numUserinbox,1,nowEmail);
        console.log("Current Users List:", allUsers);
        }
        else{
        alert("You did not enter the user name or password");
        }
    }
    else{
        alert("You did not enter the user number you want to change")
    }
}
function deletUser(){
    let targetUser = prompt("Please enter the account number you want to delete.");
    if(targetUser !== "" && targetUser !== null){
    let targetUserInbox = +targetUser -1;
    allUsers.splice(targetUserInbox,1);
    console.log("Current Users List:", allUsers);
    }
    else{
    alert("You did not enter number account you want to delete");
    }
    alert("The user you entered has been deleted")
}