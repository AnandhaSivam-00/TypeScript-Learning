function displayLog() {
  console.log("********");
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Target:", target);
    console.log("Property Key:", propertyKey);
  }
  console.log("********");
}


class User {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  @displayLog()
  getName(): string {
    return this.name;
  }

  @displayLog()
  getId(): number {
    return this.id;
  }
}

let user = new User(1, "John Doe");
console.log(user.getName());
console.log(user.getId());