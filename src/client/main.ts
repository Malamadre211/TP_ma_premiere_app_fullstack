import "./style.css";

const app = document.querySelector('#app') as HTMLDivElement;

const inputText = document.createElement("input") as HTMLInputElement;
inputText.setAttribute("id", "input");
inputText.setAttribute("type", "text");
inputText.setAttribute("placeholder", "Name Here");  
// placeholder permette di mettere la scritta in grigio che sparisce nel momento in cui scrivi nella riga

const btnGo = document.createElement("button") as HTMLButtonElement;
btnGo.innerText = "Go!";

const btnTwo = document.createElement("button") as HTMLButtonElement;
btnTwo.innerText = "Update";

const btnCompte = document.createElement("button") as HTMLButtonElement;
btnCompte.innerText = "Total";

const btnCancel = document.createElement("button") as HTMLButtonElement;
btnCancel.innerText = "Cancel";

const paragraphe = document.createElement("p") as HTMLParagraphElement;
const paragrapheHellos = document.createElement("p") as HTMLParagraphElement;
const paragrapheTotal = document.createElement("p") as HTMLParagraphElement;

app.appendChild(inputText);
app.appendChild(btnGo);
app.appendChild(paragraphe);
app.appendChild(btnTwo);
app.appendChild(paragrapheHellos);
app.appendChild(btnCompte);
app.appendChild(paragrapheTotal);
app.appendChild(btnCancel);


btnGo.addEventListener("click", async () => {
  const res = await fetch("/hello/Mariangela")
  const message = await res.text()
  paragraphe.innerText = message
})

btnTwo.addEventListener("click", async () => {
  console.log('hellos');
  
  const res = await fetch("/hellos")
  const message = await res.text()
  const tab = JSON.parse(message)
  const values: string = tab.join(', ')
  paragrapheHellos.innerText = values

})

btnCompte.addEventListener("click", async () => {
  const res = await fetch("/hellos")
  const message = await res.text()
  const tab = JSON.parse(message)
  paragrapheHellos.innerText = tab.length.toString()
})

btnCancel.addEventListener("click", async () => {
  
})