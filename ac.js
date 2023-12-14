let darkModeEnabled = false;
const darkModeCheckbox = document.getElementsById("darkModeButton");

darkModeCheckbox.addEventListener("change", () => {
    darkModeEnabled = darkModeCheckbox.checked;
    
    if(darkModeEnabled) {
        enableDarkMode();
    } else{
        disableDarkMode();
    }
});

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
};
const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
};
