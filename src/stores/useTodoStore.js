import { defineStore } from 'pinia'
import { ref } from 'vue'
import db from '../middleware/firebase'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { todosCollectionRef } from '../middleware/bindings'

export const useTodoStore = defineStore('todos', {
  state: () => ({
      todoList: ref([]),
      id: ref(0),
      showAlert: ref(false)
    }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {
    async syncTodos() {
      var allTodos = await getDocs(todosCollectionRef)
      const documents = []
      allTodos.forEach((todo) => {
        let id = todo.id
        let { item, completed } = todo.data()

        documents.push({ item, completed, id })
      })
      this.todoList = documents
    },
    async addTodo(item) {
      const newTodo = {
        id: this.id++,
        item: item,
        completed: false
      }
      this.todoList.push(newTodo) //To be removed
      // const colRef = collection(db, 'todoList')
      const docRef = await addDoc(todosCollectionRef, newTodo)
      // access auto-generated ID with '.id'
      console.log('Document was created with ID:', docRef.id)
    },
    async deleteTodo(itemID) {
      try {
        // const colRef = collection(db, 'todoList')
        const docRef = doc(todosCollectionRef, itemID)
        await deleteDoc(docRef)
        this.todoList = this.todoList.filter((object) => {
          return object.id !== itemID
        })
        console.log('deleted todo')
      } catch (e) {
        console.log('Couldnt delete' + e)
      }
    },
    async toggleCompleted(idToFind) {
      await updateDoc(doc(db, 'todoList', idToFind),{
        completed: true,
      }).then(() => {
        console.log('ToggleComplete Completed');
      });
      const todo = this.todoList.find((obj) => obj.id === idToFind)
      if (todo) {
        todo.completed = true
      }
    },
    inputAlert() {
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 1000)
    }
  }
})

// watchTodos(state) {
//   try {
//     const documents = []
//     const todosCollection = todosCollectionRef()
//     const q = query(todosCollection)
//     // eslint-disable-next-line no-unused-vars
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       snapshot.docChanges().forEach((change) => {
//         if (change.type === 'added') {
//           let id = change.doc.id
//           let { completed, item } = change.doc.data()
//           documents.push({
//             item: item,
//             completed: completed,
//             id: id
//           })
//           state.todoList = documents
//         } else if (change.type === 'modified') {
//           let id = change.doc.data().id
//           let updatedTodo = change.doc.data()
//           const todo = state.todoList.find((el) => el.item === updatedTodo.item)
//           if (todo) {
//             todo.id = updatedTodo.id
//             todo.item = updatedTodo.item
//             todo.completed = updatedTodo.completed
//           }
//         } else if (change.type === 'removed') {
//           let deletedTodo = change.doc.data()
//           const todo = state.todoList.find((el) => el.item === deletedTodo.item)
//           if (todo) {
//             console.log('Deleting todo' + todo.item)
//             const todoIndex = state.todoList.indexOf(todo)
//             state.todoList.splice(todoIndex, 1)
//           }
//         }
//       })
//     })
//     // UNCOMMENT TO CLOSE ONSNAPSHOT LISTENER
//     //unsubscribe();
//     return true
//     //return resolve();
//   } catch (e) {
//     console.error('Erorr: ' + e)
//     return false
//     //return reject();
//   }
// },

// const observer = db.collection('todoList').onSnapshot((querySnapshot) => {
//   querySnapshot.docChanges().forEach((change) => {
//     if (change.type === 'added') {
//       console.log('New city: ', change.doc.data())
//     }
//     if (change.type === 'modified') {
//       console.log('Modified city: ', change.doc.data())
//     }
//     if (change.type === 'removed') {
//       console.log('Removed city: ', change.doc.data())
//     }
//   })

// watchTodos() {
//   var tutorialsRef = collection(db, "todoList");
//   onSnapshot(function(tutorialsRef,snapshot) {
//     snapshot.docChanges().forEach(function(change) {
//       if (change.type === "added") {
//         console.log("New tutorial: ", change.doc.data());
//       }
//       if (change.type === "modified") {
//         console.log("Modified tutorial: ", change.doc.data());
//       }
//       if (change.type === "removed") {
//         console.log("Removed tutorial: ", change.doc.data());
//       }
//     });
//   });
// },


// () => ({
//   todoList: ref([]),
//   id: ref(0),
//   showAlert: ref(false)
//   // totalCount: ref(0),
//   // countCompleted: ref(0),
//   // countIncomplete: ref(0),
// }),