function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysInMonth(month, year) {
  switch (month) {
    case 'januari':
      return 31;

    case 'maart':
      return 31;

    case 'mei':
      return 31;

    case 'juli':
      return 31;

    case 'augustus':
      return 31;

    case 'oktober':
      return 31;

    case 'december':
      return 31;

    case 'april':
      return 30;

    case 'juni':
      return 30;

    case 'september':
      return 30;

    case 'november':
      return 30;

      return 30;
      return 30;

    case 'februari':
      return isLeapYear(year) ? 29 : 28;
    default:
      return 'Ongeldige maand';
  }
}

let year = 2024;
let month = 'februari';

console.log(
  `Voor het jaar ${year} en de maand ${month} de aantal dagen bedraagt: ` +
    daysInMonth('februari', 2024) +
    ' dagen.'
);
