import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(300)
peopleAccount.withdraw(100)
console.log(peopleAccount.getBalance())
console.log('===================================================')

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(5000)
companyAccount.getLoan(2500)
companyAccount.withdraw(1500)
console.log(companyAccount.getBalance())
console.log('===================================================')

const bonusAccount: BonusAccount = new BonusAccount('Davi', 12)
bonusAccount.bonusDeposit(100)
bonusAccount.deposit(300)
bonusAccount.withdraw(100)
console.log(bonusAccount.getBalance())
