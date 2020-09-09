class Details{
    constructor(Forenames,Surname,Email_Address,Date_of_Birth){
        this.Forenames = Forenames.replace(","," ");
        this.Surname = Surname;
        this.Email_Address = Email_Address;
        this.Date_of_Birth = Date_of_Birth;
        this.Firstname = this.Forenames.split(" ")[0];
        this.Fullname = `${this.Forenames} ${this.Surname}`;
    }

}

module.exports = { Details }


