export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus() && value > 0 ){
      this.balance += value
      console.log(`Voce depositou R$ ${value.toFixed(2)}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && value < this.balance){
      this.balance -= value
      console.log(`Você sacou R$ ${value.toFixed(2)}`)
    }
    
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
