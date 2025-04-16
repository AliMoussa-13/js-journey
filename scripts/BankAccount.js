class BankAccount{
    constructor(ownerName, initialBalance,history){
        this.ownerName=ownerName;
        this.initialBalance=initialBalance;
        this.history=history
    }
    deposit(amount){
        if(amount>0){
           this.initialBalance+=amount;
           this.history[0]+=amount;
        }
        else{
            console.log("Invalid input!")
        }
    }
    withDraw(amount){
        if(amount>0){
            if(this.initialBalance>=amount){
                this.initialBalance-=amount;
                this.history[1]+=amount;
            }
            else{
                console.log("Insuffecient balance.")
            }
        }
        else{
            console.log("Invalid input!")
        }
    }
    transferTo(anotherAccount,amount){
        if(amount>0){
            if(this.initialBalance>=amount){
                this.withDraw(amount)
                anotherAccount.deposit(amount);
            }
            else{
                console.log("Insuffecient balance.")
            }
        }
        else{
            console.log("Invalid input!")
        }
    }
    print(){
        console.log(this.history);
    }
    getSummary(){
        console.log(`${this.ownerName}'s balance is $${this.initialBalance}`);
    }

}
array=[0,0]
const acc1=new BankAccount("ali",400,array);
const acc2=new BankAccount("bob",100,array);
console.log(acc1);
acc1.deposit(100);
acc1.print();
acc1.withDraw(50);
acc1.print();

