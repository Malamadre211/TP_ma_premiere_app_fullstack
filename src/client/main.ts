import "./style.css";

const app = document.querySelector('#app') as HTMLDivElement;

const inputText = document.createElement("input") as HTMLInputElement;
inputText.setAttribute("id", "input");
inputText.setAttribute("type", "text");
inputText.setAttribute("placeholder", "Name Here");

const btnGo = document.createElement("button") as HTMLButtonElement;
btnGo.innerText = "Go!";

const paragraphe = document.createElement("p") as HTMLParagraphElement;

app.appendChild(inputText);
app.appendChild(btnGo);
app.appendChild(paragraphe);


btnGo.addEventListener("click", async () => {
  const res = await fetch("/hello/Mariangela")
  const message = await res.text()
  paragraphe.innerText = message
})