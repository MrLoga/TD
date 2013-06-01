function distance(x1, y1, x2, y2) { // Подсчет дистанции по теореме Пифагора
  return Math.floor(Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)));
}