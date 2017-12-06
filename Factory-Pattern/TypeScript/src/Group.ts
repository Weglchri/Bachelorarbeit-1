import { User } from "./User"

export class Group {
    
    _id:string; 
    userlist:User[];
    size:number;
        
    constructor(groupname:string) {
        this._id = groupname;
        this.userlist = [];
        this.size = this.userlist.length;
    } 
    
    adduser(user:User):void {
        this.userlist.push(user);
    }
    
    getusers():User[] {
        return this.userlist;
    }
    
    deleteuser(user:User):void {
        var i = this.userlist.indexOf(user);
        if (i != -1) {
            this.size--;
            this.userlist.splice(i, 1);
        }
    }
}