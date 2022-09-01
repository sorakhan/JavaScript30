function move() {
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");

  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  hourHand.style.transform = `rotate(${(hour / 12) * 360 + 90}deg)`;
  minuteHand.style.transform = `rotate(${(minute / 60) * 360 + 90}deg)`;
  secondHand.style.transform = `rotate(${(second / 60) * 360 + 90}deg)`;
}

setInterval(() => move(), 1000);
