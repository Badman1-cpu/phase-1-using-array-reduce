const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//const sumReducer
//const totalBatteries = batteryBatches.reduce(sumReducer,0)

const totalBatteries = batteryBatches.reduce((total, battery)=> {
    return total + battery
},0)