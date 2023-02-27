export function Calculate(
  coalPrice: number,
  quantity: number,
  delieveryPrice: number,
  coalRemainder: number
): number | string {
  if (quantity) {
    const result =
      Math.ceil(quantity / 3) * delieveryPrice + coalPrice * quantity;
      console.log('result')
      console.log(result)
    return result;
  } else {
    console.log('error')
    return "Запрошенное количество не может быть больше остатка на складе";
  }
}

export function CalculateWithoutDelievery(
  coalPrice: number | undefined,
  quantity: number | undefined,
  coalRemainder: number | undefined
): number | string {
  if (quantity! < coalRemainder!) {
    const result = coalPrice! * quantity!;
    return result;
  } else {
    return "Запрошенное количество не может быть больше остатка на складе";
  }
}

export function Validate( 
  result: number | string | undefined,
  quantity: number | undefined,
  remainder: number
) {
  if (quantity) {
    if (
      typeof quantity != "number" &&
      remainder > quantity &&
      result === undefined
    ) {
      return false;
    }
  }

  return true;
}

export function CalcDeliveryDay(time: number) {
  let timestamp = new Date().getTime();
  timestamp = Math.floor(timestamp) + time * 24 * 3600 * 1000;
  let date = new Date(timestamp);
  let string = `ориентировочное время доставки ${date.toLocaleDateString()}`;

  return string;
}
