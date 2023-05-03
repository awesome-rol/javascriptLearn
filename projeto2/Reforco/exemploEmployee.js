class Employee {
  constructor(name, age, rg) {
      this.name = name;
      this.age = age;
      this.rg = rg;
  }
}

class Hourly extends Employee {
  constructor(name, age, rg, hourlySalary) {
      super(name, age, rg);
      this.hourlySalary = hourlySalary;
  }
  getTotalSalaryInOneWeek(workedHoursInOneWeek) {
    let totalSalary = 0;
    for(const hour of workedHoursInOneWeek) {

      totalSalary += (this.hourlySalary * hour);
    }
    return totalSalary;
  }
}

class Assalaried extends Employee {
  constructor(name, age, rg, salary) {
      super(name, age, rg);
      this.salary = salary;
  }
  getTotalSalaryInOneWeek() {
    return this.salary * (7 / 30);;
  }
}


const cayoHourly = new Hourly("Cayo", 13, "2469123", 10);
const teteuAssalariado = new Assalaried("Teteu", 12, "2469123", 7000);


console.log(cayoHourly.getTotalSalaryInOneWeek([1, 1, 1, 1, 1, 1, 1]));
console.log(teteuAssalariado.getTotalSalaryInOneWeek());

console.log(cayoHourly.rg);
console.log(teteuAssalariado.rg)
