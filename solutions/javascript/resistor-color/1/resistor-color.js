
export const colorCode = (color) => {
  let colorResult = [];
  let colorReceived = color.trim().toLowerCase();

  return COLORS.indexOf(colorReceived);
};

export const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];
