export const localize = (key) => {
  return game.i18n.localize(`DND4E.${key}`);
};

export const format = (key, type) => {
	return game.i18n.format(`DND4E.${key}`, {type: type.capitalize()});
};

export const preLocalizePower = (key) => {
	if (key === "atwill") {
		return `PowerAtWill`;
	}
	return `Power${key.capitalize()}`;
};
