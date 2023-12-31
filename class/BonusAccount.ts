import { DioAccount } from './DioAccount'

export class BonusAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    bonusDeposit = (value: number): void => {
        this.deposit(value + 10)
    }
}
