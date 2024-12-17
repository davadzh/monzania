export const mapColorNameToColor = (colorName: string): string => {
  switch (colorName) {
    case "Зеленый.":
      return "rgba(151, 199, 122, 1)";
    case "Желтый.":
      return "rgba(246, 233, 137, 1)";
    case "Красный.":
      return "rgba(248, 130, 130, 1)";
    default:
      return "#FFFFFF";
  }
}