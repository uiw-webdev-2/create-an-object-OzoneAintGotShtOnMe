const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

const song = {
  name: "Forever Always",
  length: {
  minutes: 3.5,
  seconds: 210,
  },
  genre: "hip-hop",
  features: 4,
  isPlaying: false,
  toggleSong: function (playSong) {
    this.isPlaying = playSong;
  },
  newSongLength: function (minute, secondo) {
    this.length.minutes = minute;
    this.length.seconds = secondo;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log('left before:', backpack.strapLength.left);

backpack.newStrapLength(10,15);

console.log('left after:', backpack.strapLength.left);
