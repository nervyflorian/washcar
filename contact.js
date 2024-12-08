// contact.js
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const telephone = document.getElementById('telephone').value;
    const Objet_de_votre_message = document.getElementById('Objet_de_votre_message').value;
    const commantaire = document.getElementById('commantaire').value;
    console.log("nom:", nom, "prenom:", prenom, "telephone:", telephone, "Objet_de_votre_message:", Objet_de_votre_message, "commantaire:", commantaire );
    try {
        // Ajouter un document à la collection "contacts"
        const docRef = await addDoc(collection(window.db, "contacts"), {
            nom: nom,
            prenom: prenom,
            telephone: telephone,
            Objet_de_votre_message: Objet_de_votre_message,
            commantaire: commantaire,
            timestamp: new Date() // Ajoute un horodatage
       
        });
        console.log("Document écrit avec ID: ", docRef.id);
        
        alert("Votre message a été envoyé avec succès 👏!");
    } catch (e) {
        console.error("Erreur lors de l'ajout du document: ", e);
        alert("Une erreur s'est produite lors de l'envoi de votre message : " + e.message);
    }

    // Réinitialiser le formulaire
    document.getElementById('contactForm').reset();
});