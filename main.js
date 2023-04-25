const firebaseConfig = {
    apiKey: "AIzaSyAPRJEOjQhuauT1xBaR7qZ4THU_jMBbSd8",
    authDomain: "aula-94-668ba.firebaseapp.com",
    projectId: "aula-94-668ba",
    storageBucket: "aula-94-668ba.appspot.com",
    messagingSenderId: "564366007931",
    appId: "1:564366007931:web:f628733cfbe5e953080cde"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function adicionar () {
    nomeusuario=document.getElementById("usuario").value 
    firebase.database().ref("/").child(nomeusuario).update({
        purpose:"usuario adicionado"
    })
} 