let manager = require("./manager");
let employee = require("./employee");
const hobbes = new manager("Hobbes", 1000000, "Founder", null);
const calvin = new manager("Calvin", 130000, "Director", hobbes);
const susie = new manager("Susie", 100000, "TA Manager", calvin);
const lily = new employee("Lily", 90000, "TA", susie);
const clifford = new employee("Clifford", 90000, "TA", susie);

console.log(
  `If Hobbes gets a bonus multiplier of 0.05, their bonus will be $${hobbes.calculateBonus(
    0.05
  )}.`
);
console.log(
  `If Calvin gets a bonus multiplier of 0.05, their bonus will be $${calvin.calculateBonus(
    0.05
  )}.`
);
console.log(
  `If Susie gets a bonus multiplier of 0.05, their bonus will be $${susie.calculateBonus(
    0.05
  )}.`
);
console.log(
  `If Lily gets a bonus multiplier of 0.05, their bonus will be $${lily.calculateBonus(
    0.05
  )}.`
);
console.log(
  `If Clifford gets a bonus multiplier of 0.05, their bonus will be $${clifford.calculateBonus(
    0.05
  )}.`
);
