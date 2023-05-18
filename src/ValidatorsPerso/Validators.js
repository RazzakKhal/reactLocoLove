

class Validators {


    

    mailValidator(inputValue){
        const regex = /@/;
        if(inputValue.match(regex)){
          
                return true;
        }else{
          
                return false;    
        }
    }

    passwordValidator(inputValue){
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if(inputValue.match(regex)){
          
                return true;
        }else{
          
                return false;    
        }
    }


}

export default Validators;