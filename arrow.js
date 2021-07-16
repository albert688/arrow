var person = {
  name: "jason",

  shout: () => console.log("my name is ", this.name)
}

person.shout() // Should print out my name is jason