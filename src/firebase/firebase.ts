import { initializeApp } from 'firebase/app';
import { FirebaseOptions } from 'firebase/app';
import { Firestore, getFirestore } from "firebase/firestore"
import { FirebaseStorage, getDownloadURL, getStorage, listAll, ListResult, ref } from "firebase/storage";

import { collection, query, getDocs } from "firebase/firestore";

const config: FirebaseOptions = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESUREMENT_ID
}


class Firebase {
  private db: Firestore;
  private storage: FirebaseStorage;
  constructor() {
    initializeApp(config);
    this.db = getFirestore();
    this.storage = getStorage();
  }

  private async getDownloadURLs(listResult: ListResult) {
    const res: string[] = [];
    for (let i = 0; i < listResult.items.length; i++) {
      const itemRef = listResult.items[i];
      const url = await getDownloadURL(itemRef);
      if (url) {
        res.push(url);
      }
    }
    return res;
  }

  async getFeedbacks(): Promise<string[]> {
    const feedbacksRef = ref(this.storage, 'feedbacks');

    const feedbacks = await listAll(feedbacksRef);
    return this.getDownloadURLs(feedbacks);
  }

  async getPreviews(course: string): Promise<string[]> {
    const previewsRef = ref(this.storage, `previews/${course}`);
    const previewsListResult = await listAll(previewsRef);
    return this.getDownloadURLs(previewsListResult);
  }
}


export default Firebase;