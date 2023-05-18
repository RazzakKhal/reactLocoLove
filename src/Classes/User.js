class User{

    constructor(firstname = "", lastname = "", pseudo = "", date_of_birth = new Date(), mail = "", password = "", gender = ""){
        this.firstname = firstname;
        this.lastname = lastname;
        this.pseudo = pseudo;
        this.date_of_birth = date_of_birth;
        this.mail = mail;
        this.password = password;
        this.gender = gender;
        this.train_number = null;
        this.car_number = null;
        this.description = "";
        this.size = "";
        this.messagesSended = [];
        this.messagesReceived = [];
        this.likesSended = [];
        this.likesReceived = [];
        this.pictures = [];
        this.role = "USER";

    }



}

export default User;