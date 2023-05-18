class User{

    constructor(firstname = "", lastname = "", pseudo = "", dateOfBirth = new Date(), mail = "", password = "", gender = ""){
        this.firstname = firstname;
        this.lastname = lastname;
        this.pseudo = pseudo;
        this.dateOfBirth = dateOfBirth;
        this.mail = mail;
        this.password = password;
        this.gender = gender;
        this.trainNumber = "";
        this.messages = [];
        this.likes = [];
        this.pictures = [];

    }



}

export default User;