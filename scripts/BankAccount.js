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
    printHistory(){
       console.log(`Deposited $${this.history[0]}, WithDrew $${this.history[1]}`);
    }
    getSummary(){
        console.log(`${this.ownerName}'s balance is $${this.initialBalance}`);
    }

}

const acc1=new BankAccount("ali",400,[0,0]);
const acc2=new BankAccount("bob",100,[0,0]);

console.log("=============")
acc1.getSummary();
acc2.getSummary();
console.log("=============")
acc1.deposit(400);
acc2.deposit(500);
acc1.printHistory();
acc2.printHistory();
console.log("=============")
acc1.getSummary();
acc2.getSummary();
console.log("=============");
acc1.withDraw(200);
acc2.withDraw(200);
console.log("=============")
acc1.getSummary();
acc2.getSummary();
acc1.printHistory()
acc2.printHistory();
console.log("=============")
acc1.getSummary();
acc2.getSummary();
console.log("=============");
acc1.transferTo(acc2,200);
acc1.printHistory();
acc2.printHistory();
console.log("=============");
acc1.getSummary();
acc2.getSummary();
console.log("=============");

