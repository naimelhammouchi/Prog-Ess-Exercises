let Studentenlijst = [
  'Jan',
  'Piet',
  'Klaas',
  'Marie',
  'Sofie',
  'Els',
  'Tom',
  'Lies',
];

function uitnodigingen(lijst) {
  for (let i = 0; i < lijst.length; i++) {
    console.log(
      `Beste ${lijst[i]}, je bent uitgenodigd om deel te nemen aan de cursus Programming fundamentals!`
    );
  }
}

uitnodigingen(Studentenlijst);
