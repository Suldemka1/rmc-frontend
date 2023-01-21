class CoalServiceCalculator {
  coalPrice: number = 0;
  quantity: number = 0;
  coalRemainder: number = 0;
  delieveryPrice: number = 0;

  Calculate(): number | string {
    if (this.quantity < this.coalRemainder) {
      const result =
        Math.ceil(this.quantity / 3) * this.delieveryPrice +
        this.coalPrice * this.quantity;
      console.log(
        Math.ceil(this.quantity / 3) * this.delieveryPrice +
          this.coalPrice * this.quantity
      );
      return result;
    } else {
      return "Запрошенное количество не может быть больше остатка на складе";
    }
  }
}

export function Calculate(
  coalPrice: number,
  quantity: number,
  delieveryPrice: number,
  coalRemainder: number
): number | string {
  if (quantity < coalRemainder) {
    const result =
      Math.ceil(quantity / 3) * delieveryPrice + coalPrice * quantity;
    console.log(
      Math.ceil(quantity / 3) * delieveryPrice + coalPrice * quantity
    );
    return result;
  } else {
    return "Запрошенное количество не может быть больше остатка на складе";
  }
}

export function CalculateWithoutDelievery(
  coalPrice: number,
  quantity: number,
  coalRemainder: number
): number | string {
  if (quantity < coalRemainder) {
    const result = coalPrice * quantity;
    return result;
  } else {
    return "Запрошенное количество не может быть больше остатка на складе";
  }
}

export function Validate(
  result: number | string | undefined,
  quantity: number | undefined,
  coal_remainder: number
) {
  if (quantity) {
    if (
      typeof quantity != "number" &&
      coal_remainder > quantity &&
      result === undefined
    ) {
      return false;
    }
  }

  return true;
}

export function CalcDelieveryDay(average_delivery_time: number) {
  let date = new Date();
  date.setDate(date.getDate() + average_delivery_time);
  date.toLocaleDateString();

  let string = `ориентировочное время доставки ${date.toLocaleDateString()}`;
  return string;
}
