import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	DocumentData,
	Firestore,
	getDoc,
	getDocs,
	getFirestore,
	query,
	setDoc,
	where,
	WithFieldValue,
} from "firebase/firestore";

export default class FirestoreService<
	T extends DocumentData,
	TBase extends DocumentData = Omit<T, "id">
> {
	private db: Firestore;
	private collectionName: string;

	constructor(collectionName: string) {
		this.db = getFirestore();
		this.collectionName = collectionName;
	}

	async getById(id: string): Promise<T | null> {
		const docRef = doc(this.db, this.collectionName, id);
		const docSnap = await getDoc(docRef);
		return docSnap.exists() ? ({ id: docSnap.id, ...(docSnap.data() as T) } as T) : null;
	}

	async getAll(): Promise<T[]> {
		const querySnapshot = await getDocs(collection(this.db, this.collectionName));
		return querySnapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as T) } as T));
	}

	async getByField(field: keyof T, value: any): Promise<T[]> {
		const q = query(
			collection(this.db, this.collectionName),
			where(field as string, "==", value)
		);
		const querySnapshot = await getDocs(q);
		return querySnapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as T) } as T));
	}

	async create(data: WithFieldValue<TBase>): Promise<string> {
		const docRef = await addDoc(collection(this.db, this.collectionName), data);
		return docRef.id;
	}

	async update(id: string, data: Partial<T>): Promise<void> {
		await setDoc(doc(this.db, this.collectionName, id), data, { merge: true });
	}

	async delete(id: string): Promise<void> {
		await deleteDoc(doc(this.db, this.collectionName, id));
	}
}
