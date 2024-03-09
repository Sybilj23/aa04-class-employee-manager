const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, salary, title, manager = null, employees = []) {
    super(name, salary, title, manager);
    this.employees = employees;
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  _totalSubSalary() {
    let sum = 0;
    for (const employee of this.employees) {
      if (employee instanceof Manager) {
        sum += employee.salary + employee._totalSubSalary();
      } else {
        sum += employee.salary
      }
    }
    return sum;
  }

  calculateBonus(multiplier) {
    const totalSalary = this.salary + this._totalSubSalary();
    return totalSalary * multiplier;
  }
}

// const splinter = new Manager('Splinter', 100000, 'Sensei');
// const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
// const raph = new Manager('Raphael', 90000, 'Ninja', leo);
// const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
// const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

// console.log(splinter.calculateBonus(0.05)); // => 22500
// console.log(leo.calculateBonus(0.05)); // => 17500
// console.log(raph.calculateBonus(0.05)); // => 13000
module.exports = Manager;
