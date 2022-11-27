import { ref, set, onValue, remove, get } from "firebase/database";
import { database } from "helpers/firebase";

// export const getMessages = () => {
//   return fetch('http://localhost:5000/messages')
//     .then(res => res.json())
// }

export const getMessagesFromFB = (callbackFn) => {
  // funkcja onValue w FB jest realtime, czyli dane aktualizuja sie na biezaco

  onValue(ref(database, 'messages'), (snapshot) => {
    const data = snapshot.toJSON() ?? {}
    // Potrzebuje zrobic Object.values poniewaz FB zwraca dane jako obiekt obiektow
    callbackFn(Object.values(data));
  })
}


export const getMessage = (id) => {
  return get(ref(database, `messages/${id}`))
  // return fetch(`http://localhost:5000/messages/${id}`)
  //   .then(res => res.json())
}

// export const addMessage = (messageToAdd) => {
//   return fetch('http://localhost:5000/messages', {
//     method: 'POST',
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify(messageToAdd)
//   })
// }

export const addMessage = (messageToAdd) => {
  return set(ref(database, `messages/${messageToAdd.id}`), messageToAdd)
}


// remove(ref(database, messages/${messageId}))

export const removeMessage = (idToRemove) => {
  remove(ref(database, `messages/${idToRemove}`))
  // fetch(`http://localhost:5000/messages/${idToRemove}`, {
  //   method: 'DELETE'
  // })
}



export const editMessage = (id, messageToEdit) => {
  return set(ref(database, `messages/${id}`), messageToEdit)
  // return fetch(`http://localhost:5000/messages/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-type': "application/json"
  //   },
  //   body: JSON.stringify(messageToEdit)
  // })
}

// export const registerUser = (user) => {
//   return fetch('http://localhost:5000/users', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(user)
//   })
// }

// export const loginUser = (email) => {
//   fetch(`http://localhost:5000/users?email=${email}`)
//     .then(res => res.json())
// }
