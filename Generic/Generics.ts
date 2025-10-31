class KeyValuePair<K, V> {
  private key: K;
  private value: V;

  constructor() { }

  setKeyValue(key: K, value: V): void {
    this.key = key;
    this.value = value;
  }

  display(): void {
    console.log(`Key = ${this.key}, Value = ${this.value}`);
  }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display();