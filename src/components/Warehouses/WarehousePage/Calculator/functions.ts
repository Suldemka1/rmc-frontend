export function Calculate(
  coalPrice: number,
  quantity: number,
  deliveryPrice: number,
  coalRemainder: number,
  isDelivery: boolean
): number | string {
  let result;
  try {
    if (
      typeof quantity === "number" &&
      typeof coalRemainder === "number" &&
      typeof coalPrice === "number" &&
      isDelivery === true &&
      coalRemainder > quantity
    ) {
      let flights = Math.ceil(quantity / 3) * deliveryPrice;
      result = Math.ceil(quantity / 3) * deliveryPrice + coalPrice * quantity; //количество рейсов + количество угля на цену
      return result;
    } else if (
      typeof quantity === "number" &&
      typeof coalRemainder === "number" &&
      typeof coalPrice === "number" &&
      isDelivery === false &&
      coalRemainder > quantity
    ) {
      result = coalPrice * quantity; //количество рейсов + количество угля на цену
      return result;
    } else {
      return "Запрошенное количество не может быть больше остатка на складе";
    }
  } catch (e) {
    console.error(e);
  }

  return "ошибка";
}

export function CalculateWithoutDelievery(
  coalPrice: number,
  quantity: number,
  coalRemainder: number
): number | string | undefined {
  if (
    typeof quantity === "number" &&
    typeof coalRemainder === "number" &&
    typeof coalPrice === "number"
  )
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
