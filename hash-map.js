class hashMap {
  #loadFactor;
  #capacity;
  #map;
  #currentLoadFactor = 0;
  
  constructor(loadFactor = 0.75, capacity = 16) {
    this.#loadFactor = loadFactor;
    this.#capacity = capacity;
    this.#map = [];
    
    for (let i = 0; i < capacity; i++) {
      this.map.push([])
    }
  }

  hash(key) {
    let hashCode = 0;
    const PRIME_NUMBER = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (PRIME_NUMBER * hashCode + key.charCodeAt(i)) / this.capacity;
    }
    return hashCode; // will return a number between 0 and capacity-1
  }

  // set(key, value) { 
  //   let hashCode = this.hash(key);
    
  // }
}

let hm = new hashMap();
console.log(hm);