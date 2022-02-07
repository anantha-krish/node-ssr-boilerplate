const addOrderBtn = document.querySelector("#addOrder");
if (addOrderBtn) {
  addOrderBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const product = document.querySelector("#product").value;
    const quantity = document.querySelector("#quantity").value;
    const company = document.querySelector("#company").value;
    const res = await fetch("/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product, quantity, company }),
    });

    const { message } = await res.json();
    if (message) {
      alert(message);
    }
  });
}
