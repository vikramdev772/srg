let api = "http://127.0.0.1:5050/fact?n";

async function submit() {
  let i = document.getElementById("i");
  console.log("\n\t input value : " + i.value);
  let req = await fetch(`${api}=${i.value}`);
  let res = await req.text();
  console.log("\n\t result : " + res);
  document.querySelector("h4").textContent = res;
}
