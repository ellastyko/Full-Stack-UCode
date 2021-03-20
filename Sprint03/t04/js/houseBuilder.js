function HouseBlueprint(address, description, owner, size) {

    this._averageBuildSpeed = 0.5
    this.address = address
    this.description = description
    this.owner = owner
    this.size = size

    this.getDaysToBuild = () => {
        return this.size / this._averageBuildSpeed 
    }

    this.date = new Date()
    this.toDateString = () => {
        console.log(this.date)
    }
    
    return this
}


function HouseBuilder(address, description, owner, size, roomCount) {

    Object.setPrototypeOf(this, new HouseBlueprint(address, description, owner, size));
  
    this.roomCount = roomCount;
}