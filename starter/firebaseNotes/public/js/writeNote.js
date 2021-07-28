let googleUser;

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUser = user;
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};

/*
const submitMessage = (noteFinal) => {
    messagesRef.push({
        title: noteFinal.title,
        note: noteFinal.note,
    });
}
*/
const handleNoteSubmit = () => {
    console.log("note submission function called");

    const titleVal = document.querySelector("#noteTitle");
    const noteVal = document.querySelector("#noteText");    

    const noteFinal = {
        title: titleVal.value,
        text: noteVal.value,
    };
    
    //console.log(googleUser);
    //console.log(noteFinal);
    const dbRef = firebase.database().ref("users/" + googleUser.uid);
    dbRef.push(noteFinal).then(() => {
        titleVal.value = "";
        noteVal.value = "";
    });
    //submitMessage(noteFinal);
    
}