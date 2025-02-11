export enum EPalette {
	Primary = "#F95454",
	Secondary = "#0a7ea4",
	Black = "#000",
	BlackSecondary = "#3c3c3c",
	White = "#fff",
	WhiteSecondary = "#ececec",
	Grey = "grey",
	Error = "#a6192e",
	Caution = "#ff9900",
	Success = "#04b34f",
	Information = "#0057b8",
}

export const Colors = {
	light: {
		primary: EPalette.Primary,
		secondary: EPalette.Secondary,
		text: EPalette.Black,
		background: EPalette.White,
		backgroundSecondary: EPalette.WhiteSecondary,
		tabIconDefault: EPalette.Grey,
		tabIconSelected: EPalette.Secondary,
	},
	dark: {
		primary: EPalette.Primary,
		secondary: EPalette.Secondary,
		text: EPalette.White,
		background: EPalette.Black,
		backgroundSecondary: EPalette.BlackSecondary,
		tabIconDefault: EPalette.Grey,
		tabIconSelected: EPalette.Secondary,
	},
};
