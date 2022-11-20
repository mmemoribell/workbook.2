//room is length times width 
//box has 121 of 1ft tiles
//add a 10% incase of breakage or messups
const length = 14;
const width = 16;
let room = (length * width);
const box = 121;
insurance =( .10 * room );
calculateRoomTiles = ( ( room + insurance ) / box ); 
console.log(" if your room is 14ft by 16ft and each box holds 121, 1ft tiles, you'd need " + calculateRoomTiles.toFixed(0) + " boxes");

