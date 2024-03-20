function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
      return 'Have this one my Nigga!';
  } else if (feet > 400 && feet <= 2000) {
      return 'That will be twenty dollars.';
  } else if (feet > 2000 && feet <= 2500) {
      return 'I will gladly take your thirty dollars.';
  } else {
      return 'Go home.';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
      case 'generous':
          return 'Thank you so much.';
      case 'not as generous':
          return 'Thank you.';
      default:
          return 'Bye.';
  }
}
