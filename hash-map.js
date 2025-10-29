class hashMap {
  #loadFactorLimit;
  #capacity;
  #map;
  #loadFactor;
  #totalItems;
  
  constructor(loadFactorlimit = 0.75, capacity = 16) {
    this.#loadFactorLimit = loadFactorlimit;
    this.#capacity = capacity;
    this.#map = [];
    this.#loadFactor = 0;
    this.#totalItems = 0;
    
    for (let i = 0; i < capacity; i++) {
      this.#map.push([])
    }
  }

  #hash(key) {
    let hashCode = 0;
    const PRIME_NUMBER = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (PRIME_NUMBER * hashCode + key.charCodeAt(i)) % this.#capacity;
    }
    return hashCode; // will return a number between 0 and capacity-1
  }

  set(key, value) { 
    let hashCode = this.#hash(key);    
    // If the bucket has no data create node
    if (this.#map[hashCode].length === 0) { 
      this.#map[hashCode].push( {key, value} );
      this.#totalItems++;
      return;
    }
    // If keys are not identical create node
    for (let i = 0; i < this.#map[hashCode].length; i++) {
      if (this.#map[hashCode][i].key != key) { 
        this.#map[hashCode].push( {key, value} );
        this.#totalItems++;
        return;
      }    
      // If bucket contains same key update value
      if (this.#map[hashCode][i].key === key) { 
        this.#map[hashCode][i].value = value;
        return;
      }    
    }
  }

  has(key) {    
    let hashCode = this.#hash(key)
    if (this.length() < 1) {return false}
    if (this.#map[hashCode].length < 1) {return false}
    for (let i = 0; i < this.#map[hashCode].length; i++) {
      if (this.#map[hashCode][i].key === key) {return true}
    }
    return false;
  }

  entries() {
    this.#map.forEach(element => {
      console.log(element);
    });
  }

  length() {
    return this.#totalItems;
  }

  //--- Debugging helpers ---
  testSetterWithWords() {
    let keys = ['Jack', 'Jill', 'went', 'up', 'the', 'hill', 'to', 'fetch', 'a', 'cilantro', 'plant'];
    let hashes = [];
    console.log(hashes)
    for (let i = 0; i < keys.length; i++) {
      hashes.push(hm.hash(keys[i]))
    }
    console.log(hashes)
  }

  testSetterWithPlaces() {
    let list = [
      { "Starbucks": "coffee shop" },
      { "Central Park": "public park" },
      { "Metropolitan Museum of Art": "museum" },
      { "The Grand Hotel": "hotel" },
      { "Whole Foods Market": "grocery store" },
      { "Cineplex Odeon": "movie theater" },
      { "Bluefin Sushi": "restaurant" },
      { "Planet Fitness": "gym" },
      { "Harbor Library": "library" },
      { "Union Station": "train station" },
      { "Sunnyvale Elementary": "school" },
      { "Riverwalk Plaza": "shopping mall" },
      { "St. Marys Hospital": "hospital" },
      { "Greenview Apartments": "residential complex" },
      { "TechWorks Co.": "office building" },
      { "TechWorks Co.": "office building" },
      { "Seaside Inn": "motel" },
      { "The Iron Horse": "bar" },
      { "City Hall": "government building" },
      { "Northside Fire Station": "fire station" },
      { "Sunset Pier": "tourist attraction" },
      { "Elmwood Cemetery": "cemetery" },
      { "Pinecrest Campground": "campground" },
      { "Luna Park": "amusement park" },
      { "Sky Harbor Airport": "airport" },
      { "Brighton Stadium": "sports stadium" },
      { "Oceanview Marina": "marina" },
      { "Golden Sands Resort": "resort" },
      { "Downtown Clinic": "medical clinic" },
      { "Riverside Chapel": "church" },
      { "Blue Horizon Observatory": "observatory" }
    ];
    list.forEach(obj => {
      for (const [key, value] of Object.entries(obj)) {
        this.set(key, value);
      }
    })
    hm.entries()
  }
}


let hm = new hashMap();
//hm.testSetterWithPlaces();
console.log(hm.has("Luna Park"))
console.log(hm.has("Yangiobod"))
console.log(`Length: ${hm.length()}`)