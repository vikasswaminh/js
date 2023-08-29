document.getElementById('restaurant-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    let vendorName = document.getElementById('vendorName').value;
    // Fetch other form fields similarly

    saveToFirestore(vendorName);
}

function saveToFirestore(vendorName) {
    const db = firebase.firestore();
    db.collection("purchases").add({
        vendorName: vendorName
        // Add other form fields as necessary
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Data added successfully!");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("An error occurred!");
    });
}
