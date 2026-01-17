// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD78EqHKu_x1TuJK-Cy8W-JreY3DuscJJk",
    authDomain: "amigo-invisible-ba863.firebaseapp.com",
    databaseURL: "https://amigo-invisible-ba863-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "amigo-invisible-ba863",
    storageBucket: "amigo-invisible-ba863.firebasestorage.app",
    messagingSenderId: "854142652532",
    appId: "1:854142652532:web:426434c51a99fab2884121"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
const database = firebase.database();
