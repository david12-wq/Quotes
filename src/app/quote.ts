export class Quote {
    id:number;
    user:string;
    message:string;
    author:string;
    day:Date;
    upVote:number;
    downVote:number;
    
    constructor( id:number, user:string, message:string,author:string, day:Date){
        this.id=id;
        this.user=user;
        this.message=message;
        this.author=author;
        this.day=day;
        this.upVote=0;
        this.downVote=0;
    }
}
