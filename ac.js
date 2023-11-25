let darkModeEnabled = false;

const darkModeButton = document.getElementById("dark");

darkModeButton.addEventListener("click", () =>{
    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled){
        enabled();
    }
    else{
        disabled();
    }
});

const enabled = () => {
    document.body.classList.add("dark-mode");
}

const disabled = () => {
    document.body.classList.remove("dark-mode");
}