import Spotlight from "./../assets/music/lil-peep-spotlight.mp3";
import seaShanty from "./../assets/music/sea-shanty.mp3";
import Hero from "./../assets/music/skillet-hero.mp3";

let initialState = {
  songs: [
    {
      id: "1",
			image : "https://i.scdn.co/image/ab67616d00004851106de83d0b714c2de73dab41",
			name : "Spotlight",
			author : "Lil Peep",
      link : Spotlight,
    },
		{
      id: "2",
			image : "https://i.scdn.co/image/ab67616d00004851db24f6590f4ad36048076521",
			name : "Wellerman — Sea Shanty",	
			author : "Nathan Evans",
      link : seaShanty,
		},
		{
      id: "3",
			image : "https://i.scdn.co/image/ab67616d0000485143e531d5f69170aba281ef43",
			name : "Hero",
			author : "Skillet",
      link : Hero,
		},
  ],
};


const musicReducer = (state = initialState, action) => {
  switch (action.type) {
		

    default:
      return state;
  }
};


export default musicReducer;
