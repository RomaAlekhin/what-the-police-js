
  /**
  * Блок ниже заменить на блок из Firebase 
  * с вашими данными
  * (скриншоты приложил (step_1, step_2) ) 
  */

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAFKATYVVu96fZccb6Lg6RnmXnanlHpA0Q",
  authDomain: "raiponmapsmarker.firebaseapp.com",
  databaseURL: "https://raiponmapsmarker.firebaseio.com",
  projectId: "raiponmapsmarker",
  storageBucket: "raiponmapsmarker.appspot.com",
  messagingSenderId: "364428806434"
};
firebase.initializeApp(config);

var data = {
  sender: null,
  timestamp: null,
  lat: null,
  lng: null
};
var locations = [];

var map;
var markers = []; // Create a marker array to hold your markers

    /**
     * Handles the sign in button press.
     */
    function toggleSignIn() {
        if (firebase.auth().currentUser) {
          // [START signout]
          firebase.auth().signOut();
          // [END signout]
        } else {
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          if (email.length < 4) {
            alert('Please enter an email address.');
            return;
          }
          if (password.length < 4) {
            alert('Please enter a password.');
            return;
          }
          // Sign in with email and pass.
          // [START authwithemail]
          firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
            document.getElementById('sign-in').disabled = false;
            // [END_EXCLUDE]
          });
          // [END authwithemail]
        }
        document.getElementById('sign-in').disabled = true;
      }
      
      /**
       * Handles the sign up button press.
       */
      function handleSignUp() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START createwithemail]
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
        // [END createwithemail]
      }
  
      /**
       * Sends an email verification to the user.
       */
      function sendEmailVerification() {
        // [START sendemailverification]
        firebase.auth().currentUser.sendEmailVerification().then(function() {
          // Email Verification sent!
          // [START_EXCLUDE]
          alert('Email Verification Sent!');
          // [END_EXCLUDE]
        });
        // [END sendemailverification]
      }
  
      function sendPasswordReset() {
        var email = document.getElementById('email').value;
        // [START sendpasswordemail]
        firebase.auth().sendPasswordResetEmail(email).then(function() {
          // Password Reset Email Sent!
          // [START_EXCLUDE]
          alert('Password Reset Email Sent!');
          // [END_EXCLUDE]
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
          } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
        // [END sendpasswordemail];
      }

  
      /**
       * Функция проверки аутентификации
       * Также меняет в соответствии с аутентификацией названия кнопок и их доступность
       */
      function initAuth() {
        // Слежение за изменением состояния пользователя.
        // [START authstatelistener]
        firebase.auth().onAuthStateChanged(function(user) {
          // [START_EXCLUDE silent]
          // document.getElementById('verify-email').disabled = true;
          // [END_EXCLUDE]
          if (user) {
            // Пользователь зашел.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // [START_EXCLUDE]
            // document.getElementById('sign-in-status').textContent = 'Signed in';
            document.getElementById('add-marker').disabled = false;
            document.getElementById('sign-in').textContent = 'Sign out';
            // document.getElementById('account-details').textContent = JSON.stringify(user, null, '  ');
            // if (!emailVerified) {
            //   document.getElementById('verify-email').disabled = false;
            // }
            // [END_EXCLUDE]
          } else {
            // Пользователь вышел.
            // [START_EXCLUDE]
            // document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('add-marker').disabled = true;
            document.getElementById('sign-in').textContent = 'Sign in';
            // document.getElementById('account-details').textContent = 'null';
            // [END_EXCLUDE]
          }
          // [START_EXCLUDE silent]
          document.getElementById('sign-in').disabled = false;
          
          // [END_EXCLUDE]
          
        });
        // [END authstatelistener]
  
        document.getElementById('sign-in').addEventListener('click', toggleSignIn, false);
        document.getElementById('sign-up').addEventListener('click', handleSignUp, false);

        // document.getElementById('verify-email').addEventListener('click', sendEmailVerification, false);
        // document.getElementById('password-reset').addEventListener('click', sendPasswordReset, false);
      }

/**
 * Функция загрузки данных из Firebase
 */
var loadedMarkers = false;

function loadMarkers() {
  loadedMarkers = false;
  firebase.database().ref('places/').on('value', function(snapshot) {  
      var obj = snapshot.val();
      locations = obj
      for (let key in obj) {
        var nowDate = Math.round(new Date().getTime())
        var oldDate = obj[key].timestamp
        var sinseAdd = nowDate - oldDate
        var removed = false
        if (sinseAdd > 30 * 60 * 1000) {
          // Если с момента создания прошло более 24 часов - удаляем метку из базы
          firebase.database().ref().child('places/' + key + '/').remove()
          removed = true
        } else {
          removed = false             
        }
      }
      setMarkers();
    })    
}


// function reloadMarkers() {  
//   // Заного загружаем маркеры из Firebase
//   loadedMarkers = false;
//   firebase.database().ref('places/').on('child_added', (function(snapshot) {   
//       const obj = snapshot.val()
//       for (let key in obj) {     
//         locations.push({
//           id: key,
//           lat: obj[key].lat,
//           lng: obj[key].lng,
//           timestamp: obj[key].timestamp,
//           title: obj[key].title
//         })  
//       }
//       if (loadedMarkers == false) {
//         // Выставляем маркеры на карту
//         // locations = places;
//         // Скрываем все маркеры с карты
//         for (var i=0; i<markers.length; i++) {
//           markers[i].setMap(null);
//         } 
//         // Обновляем массив markers
//         markers = [];
//         setMarkers();
//         loadedMarkers = true;
//       }   
//     }))
// }

/**
 * Функция добавления в базу данных (Firebase)
 */
function addToFirebase(data) {
  var data = this.data;
  // Определяем и записываем время добавления метки.
  data.timestamp = Math.round(new Date().getTime());
  firebase.database().ref('places').push(data, function(err) {
    if (err) {  // Данные не могут быть записаны в базу Firebase.
      console.warn(err);
    }
  });
  return false;  
}