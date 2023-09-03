var isstatus = document.querySelector("h5")
var addFriend = document.querySelector("#add")
var check = 0

addFriend.addEventListener("click",function(){
    if(check==0){
    isstatus.innerHTML = "Friends"
    addFriend.innerHTML = "Remove Friend"
    check=1
    }
    else{
        isstatus.innerHTML = "Stranger"
        addFriend.innerHTML = "Add Friend"
        check=0
    }
})
