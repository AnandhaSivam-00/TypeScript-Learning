// Defining the types
type Pizza = {
  id: number;
  name: string;
  price: number;
  gst?: number;
}

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed" | "cancelled";
}

type Menu = Pizza[]


let menuArray: Menu = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 12 },
  { id: 4, name: "BBQ Chicken", price: 14 },
]

let cashInRegister: number = 100
let orderId: number = 1;
let orderQueue: Order[] = []
// let orderQueue: Array<Order> = [] --> also valid one

function getPizzaDetails(identifier: number | string) {
  if(typeof identifier === "number") {
    return menuArray.find(pizza => pizza.id === identifier)
  }
  else if(typeof identifier === "string") {
    return menuArray.find(pizza => pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())
  }
  else {
    throw new TypeError("Invalid identifier type. Expected number or string.")
  }
}

function addNewPizza(pizzaObj: Pizza) {
  menuArray.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
  const pizza = menuArray.find(pizza => pizza.name === pizzaName);
  if(pizza) {
    cashInRegister += pizza.price;
    const newOrder: Order = {
      id: orderId++,
      pizza: pizza,
      status: "ordered"
    }
    orderQueue.push(newOrder)
    return newOrder
  }

  console.log("Pizza not found")
  return
}

function completeOrder(orderId: number) {
  let order = orderQueue.find(order => order.id === orderId);
  if(order) {
    order.status = "completed"
    return order;
  }
  console.log("Order not found")
  return
}

addNewPizza({ id: 5, name: "Veggie", price: 12 })
addNewPizza({ id: 6, name: "Meat Lovers", price: 16 })
addNewPizza({ id: 7, name: "Supreme", price: 14 })

placeOrder("Margherita")
placeOrder("Pepperoni")
completeOrder(2)

console.log("Today's Menu : ", menuArray)
console.log("Cash in Register : ", cashInRegister)
console.log("Order Queue : ", orderQueue)