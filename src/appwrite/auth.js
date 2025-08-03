import { Client , Account , ID } from "appwrite";
import { conf } from "../conf/conf";

export class AuthService{
    
   client = new Client();
   account;
    //we need client and account
    //constructor call 

    constructor()
    {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        
        //we can write this code outside the constructor but this meaning less , because when client create instend then only account create 

        this.account = new Account(this.client);
    }

    // now create a account
    // promise return so used asynce

    async createAccount({email , password , name}) // destructure the parameter , b/c object pass there
    {
      try {
        
        const userAccount =  await this.account.create(ID.unique(), email ,password , name )
        //first fild must be user id 
        if (userAccount) {
            //call the another method , after the successfully create account , then sent the user to login 
            return this.login({email,password});

        }
        else{
     return userAccount;
        }

      } catch (error) {
        console.log("Appwrite Auth Service :: createAccount" , error)
      }
    }

     async login({email , password }) // destructure the parameter , b/c object pass there
    {
      try {
        
        return await this.account.createEmailPasswordSession(email ,password );
       
        

      } catch (error) {
        console.log("Appwrite Auth Service :: login " , error)
      }
    }


    //to check the user login or not 

    async getCurrentUser()
    {
        try {
            
            return await this.account.get(); // account have many option 

        } catch (error) {
              console.log("Appwrite Auth Service :: getCurrentUser" , error)
        }

        return null ; //user not found , if any error occur then null return 
    }

     async logout() // destructure the parameter , b/c object pass there
    {
      try {
        
        return await this.account.deleteSessions();
       
        

      } catch (error) {
        console.log("Appwrite Auth Service :: logout error" , error)
      }
    }
}


const authService = new AuthService(); // instend create 

export default authService;