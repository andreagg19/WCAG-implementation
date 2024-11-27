function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    alert(`Thank you, ${name}! Your support means a lot. A confirmation has been sent to ${email}.`);
    document.getElementById('donationForm').reset(); // Reset the form fields
}
