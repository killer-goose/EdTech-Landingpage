import {
  ref,
  get,
  getDatabase,
  set,
  // update,
  push,
  child,
} from 'firebase/database'
import { app } from './firebaseApp'

const db = getDatabase(app)
// connectDatabaseEmulator(db, 'localhost', 9000)

export const getFn = async (url: string = '') => {
  try {
    const data = await get(ref(db, url))
    if (!data.exists()) return Promise.reject('No data')
    return data.val()
  } catch (err) {
    return Promise.reject(err)
  }
}

export const setFn = async (url: string, payload: TUser) => {
  const res = await get(ref(db, url))
  if (res.exists())
    return Promise.reject('Data already exists at this location\ndb/' + url)

  try {
    const res = set(ref(db, url), payload)
    return res
  } catch (error) {
    return Promise.reject(error)
  }
}
// [IMPROVEMENT] remove any's from codebase
// export const updateMultipleFn = async (object: any) => {
//   /* No check for already existing data */
//   // const res = await get(ref(db, url))
//   // if (res.exists())
//   //   return Promise.reject('Data already exists at this location\ndb/' + url)

//   try {
//     const res = update(ref(db), object)
//     return res
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }
// export const updateData = async (url: string, payload: any) => {
//   // ⚠ No checks
//   try {
//     const res = update(ref(db, url), payload)
//     return res
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

export const getKey = (url: string): string | undefined | null => {
  try {
    const key = push(child(ref(db), url)).key
    return key?.toString()
  } catch (error) {
    console.log(error)
    return undefined
  }
}

/* 
That is how you update atomically, sadly I can't seem to make it work with ts
Need to read about typing objects TS

const updates = {};
  updates[`posts/${key}/stars/${uid}`] = true;
  updates[`posts/${key}/starCount`] = increment(1);
  updates[`user-posts/${key}/stars/${uid}`] = true;
  updates[`user-posts/${key}/starCount`] = increment(1);
  update(dbRef, updates); */
