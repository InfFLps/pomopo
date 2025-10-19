const { ipcRenderer } = require("electron");

document.getElementById("min-btn").addEventListener("click", () => {
  ipcRenderer.send("win:minimize");
});
document.getElementById("max-btn").addEventListener("click", () => {
  ipcRenderer.send("win:maximize");
});
document.getElementById("close-btn").addEventListener("click", () => {
  ipcRenderer.send("win:close");
});
