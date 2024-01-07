class Person {
    private firstName: string;
    private lastName: string;
    private age: number;
    private gender: string;
    private address: string;
  
    constructor(firstName: string, lastName: string, age: number, gender: string, address: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.address = address;
    }
  
    getFirstName(): string {
      return this.firstName;
    }
  
    setFirstName(firstName: string): void {
      this.firstName = firstName;
    }
  
    getLastName(): string {
      return this.lastName;
    }
  
    setLastName(lastName: string): void {
      this.lastName = lastName;
    }
  
    getAge(): number {
      return this.age;
    }
  
    setAge(age: number): void {
      this.age = age;
    }
  
    getGender(): string {
      return this.gender;
    }
  
    setGender(gender: string): void {
      this.gender = gender;
    }
  
    getAddress(): string {
      return this.address;
    }
  
    setAddress(address: string): void {
      this.address = address;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
    toString(): string {
      return `Person [Name: ${this.getFullName()}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}]`;
    }
  }
  
  // Example usage:
  const person = new Person("Nomin", "G", 27, "Male", "Maraimalainagar chennai");
  console.log(person.toString());
  