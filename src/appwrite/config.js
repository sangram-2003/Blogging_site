import { Client, Databases, Storage, Query, ID } from "appwrite";
import { conf } from "../conf/conf";

export class Service {
	client = new Client();
	databases;
	bucket;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);

		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

async createPost({ title, slug, content, featuredImage, status, userID, category, trending }) {
	const date = new Date().toISOString();
	try {
		return await this.databases.createDocument(
			conf.appwriteDatabaseId,
			conf.appwriteCollectionId,
			slug,
			{ title, content, featuredImage, status, userID, date, category, trending }
		);
	} catch (error) {
		console.error("Appwrite Service :: createPost", error);
		throw error;
	}
}


async updatePost(slug, { title, content, featuredImage, status, userID, category, trending }) {
	try {
		return await this.databases.updateDocument(
			conf.appwriteDatabaseId,
			conf.appwriteCollectionId,
			slug,
			{ title, content, featuredImage, status, userID, category, trending }
		);
	} catch (error) {
		console.log("Appwrite Service :: updatePost", error);
	}
}


	async deletePost(slug) {
		try {
			//does not need to return
			await this.databases.deleteDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			);

			return true; // means deleted
		} catch (error) {
			console.log("Appwrite Serive :: deletePost", error);
			return false;
		}
	}

	async getPost(slug) {
		try {
			return await this.databases.getDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			);
		} catch (error) {
			console.log("Appwrite Serive :: getPost", error);
		}
	}

	async getPosts(queries = [Query.equal("status", "true")]) {
		// which post are active , indexing need when the use query
		try {
			return await this.databases.listDocuments(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				queries
			);
		} catch (error) {
			console.log("Appwrite Serive :: getPosts", error);
		}
	}

async  getRecentPosts() {
  try {
    return await this.databases.listDocuments(
      conf.appwriteDatabaseId,
	  conf.appwriteCollectionId,
      [Query.orderDesc("$createdAt"),
		Query.limit(9),
	  ]
    );
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return null;
  }
}

	async getPostsByQuery(queries) {
		// which post are active , indexing need when the use query
		try {
			return await this.databases.listDocuments(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				queries
			);
		} catch (error) {
			console.log("Appwrite Serive :: getPosts", error);
		}
	}
  
	//gallery photo 

   async createGallery ({ userID , galleryImage , title , status})
{
	try {
		return await this.databases.createDocument(
			conf.appwriteDatabaseId,
			conf.appwriteGalleryCollectionId,
		     ID.unique(),
			{ userID , galleryImage , title , status }
		);
	} catch (error) {
		console.error("Appwrite Service :: createGallery", error);
		throw error;
	}
}


async getPhotos()
{
	try {
		return await this.databases.listDocuments(
			conf.appwriteDatabaseId,
			conf.appwriteGalleryCollectionId,
			  [Query.orderDesc("$createdAt")]
		)
	} catch (error) {
		console.log("Appwrite error getPhotos :: ",error)
	}
}


	//file handling for image

	async uploadFile(
		file //sent the actual file
	) {
		try {
			const img = await this.bucket.createFile(
				// return id
				conf.appwriteBucketId,
				ID.unique(), // need unique file
				file
			);
			console.log(img);
			return img;
		} catch (error) {
			console.log("Appwrite Serive :: uploadFile", error);
			return false;
		}
	}

	async deleteFile(
		fileId //sent the actual file
	) {
		try {
			await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
			return true;
		} catch (error) {
			console.log("Appwrite Serive :: deleteFile", error);
			return false;
		}
	}

	getFilePreview(fileId) {
		return this.bucket.getFileView(conf.appwriteBucketId, fileId);
	}
}

const service = new Service();

export default service;
