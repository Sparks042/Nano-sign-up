const firstNameInput= document.getElementById("first-name")
const lastNameInput = document.getElementById("last-name")

firstNameInput.addEventListener("input", (e) => {
    const inputValue = e.target.value;
    const spaceIndex = inputValue.indexOf("");
    if(spaceIndex !== -1){
        e.target.value = inputValue.substring(0,spaceIndex);
    }
})