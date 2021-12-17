import { Computer } from './computer.js'

class Macbook extends Computer {
    constructor(name, company) {
        super(name)
        this.company = company
    }

    logIn() {
        console.log("You are logged into a MacBook " + this.name)
    }
}

export default Macbook
