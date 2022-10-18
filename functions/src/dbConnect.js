import { initializeApp, cert, getApps } from "firebase-admin/app"
import { getFirestone, getFirestore } from "firebase-admin/firestore"

import { ServiceAccount } from "../secrets.js"

export function dbConnect() {
    if(!getApps().length) {
        initializeApp({
            credential: cert(serviceAccount)
        })
    }
    return getFirestore()
}