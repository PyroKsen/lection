const пулестой = 258.9;
const пулестойСборки = 0;
const базоваяжив = 100;
const жив = 0;
const реген = (0 / 5);
const эфф = 220;
const период = 7;
const периодБАФ = 3;
const живБАФ = (1.3 + 2.8 + 2.5); // 2.5
const пулестойБАФ = 0 + 18;// 18
const эффБаф = 19 + 17.1;// (19 + 17.1)

const ОбщаяПулестойкость = пулестой + пулестойСборки + пулестойБАФ;
const ОбщаяЖивучесть = жив + базоваяжив + живБАФ;
const ОбщаяЭффективка = эфф + эффБаф;
const ОбщаяПериод = период + периодБАФ;
const пулестойФуллЖир = ОбщаяПулестойкость * (ОбщаяЖивучесть / 100);

const rounded = function (number) {
  return +number.toFixed(2);
};

const проценты = (ОбщаяПериод * (1 + (ОбщаяЭффективка / 100))) + реген;
const пулестойвс = (((ОбщаяПулестойкость) * (ОбщаяЖивучесть / 100)) / 100) * ((ОбщаяПериод) * (1 + (ОбщаяЭффективка / 100)) + реген);
const фуллОтхилВС = пулестойФуллЖир / пулестойвс;
console.log(rounded(пулестойФуллЖир), rounded(проценты), rounded(пулестойвс), rounded(фуллОтхилВС));
