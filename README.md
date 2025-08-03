## Installation 

###     @reduxjs/toolkit @tinymce/tinymce-react appwrite html-react-parser react-hook-form react-redux react-router-dom
   
   


 ## .env 

 #### we need to setup the .env file , but for diff method have corresponding to each react app  create  , if we create react app by create-react-app , then env variable must start with REACT_APP_varible_name , access by the process.env.variable_name

 #### but if we create by vite , then variable name start with the VITE_variable , and access by import.meta.env.variable

 #### we create a another folder named conf , there create a object for each variable , it help to access easy and simple access the key not use repeatly import.meta.env. , and we wrap with string beacuse the env varibale may be another data type but env variable must be string , so we force fully convert into string 


 ```js
VITE_APPWRITE_URL="https://fra.cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="68787f3e003c5f41eb6b"
VITE_APPWRITE_DATABASE_ID="68788088003954c12d3a"
VITE_APPWRITE_COLLECTION_ID="687880c7001dec274fdf"
VITE_APPWRITE_BUCKET_ID="6878827a002fdb9ae303"
 ```

 ```js
 //conf.js

const conf={
appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),


}

export {conf};

//access 
//conf.appwriteUrl
 ```



 ## Service 

 ```js
  import {Client , Account , Id} from 'appwrite';


 export class AuthService {}

const authService = new AuthService(); //to access the class , create object , 
export default authService;



 ```
