const playerInitialState = {
		players : [
			{name:"kim", score:30,id:1},
			{name:"lee", score:40,id:2},
			{name:"che", score:50,id:3},
			{name:"ji", score:60,id:4},
		]
}


export const playerReducer = (state = playerInitialState, action) => {
	return state;
}