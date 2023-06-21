import db from "@/middleware/firebase"
import { collection } from "firebase/firestore"

export const todosCollectionRef =  collection(db, 'todoList')
