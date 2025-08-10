const conf={
appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
appwriteGalleryCollectionId:String(import.meta.env.VITE_APPWRITE_GALLERY_COLLECTION_ID),
tinyMce: String(import.meta.VITE_TINYMCE)

}

export {conf};