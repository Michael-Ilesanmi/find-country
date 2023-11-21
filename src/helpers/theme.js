const theme = (mode) => {
    // Check what is the active theme and change theme.
    if (mode == 'light') {
      localStorage.setItem("theme", 'light');
      document.querySelector("html").classList.remove("dark");
    }else{
      localStorage.setItem("theme", "dark");
      document.querySelector("html").classList.add("dark");
    }
    return;
};
  
export default theme;
  