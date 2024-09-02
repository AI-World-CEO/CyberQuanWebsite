const p = document.querySelector('#phraseGenerator');
let curPhrase = 'phrase 1';

const transform_today = ['T', 'r', 'a', 'n', 's', 'f', 'o', 'r', 'm', ' ', 'T', 'o', 'm', 'o', 'r', 'r', 'o', 'w', ' ', 'T', 'o', 'd', 'a', 'y'];
const transform_today_Reversed = 'Transform Tomorrow Today';
let curTransformTodayIndex = 0;
let curtransformTodayIndexReversed = transform_today.length - 1;

const elevate_everyday = ['E', 'l', 'e', 'v', 'a', 't', 'e', ' ', 'Y', 'o', 'u', 'r', ' ', 'E', 'v', 'e', 'r', 'y', 'd', 'a', 'y'];
const elevate_everyday_Reversed = 'Elevate Your Everyday';
let curElevateEverydayIndex = 0;
let curElevateEverydayIndexReversed = elevate_everyday.length - 1;

const unleash_future = ['U', 'n', 'l', 'e', 'a', 's', 'h', ' ', 't', 'h', 'e', ' ', 'F', 'u', 't', 'u', 'r', 'e'];
const unleash_future_Reversed = 'Unleash the Future';
let curUnleashFutureIndex = 0;
let curUnleashFutureIndexReversed = unleash_future.length - 1;



setInterval(function () {
  if (curPhrase === 'phrase 1') {
    p.innerHTML += transform_today[curTransformTodayIndex]
    curTransformTodayIndex++;
    if (!transform_today[curTransformTodayIndex]) {
      curPhrase = 'phrase 1 reversed'
      curTransformTodayIndex = 0;
    }
  } else if (curPhrase === 'phrase 1 reversed') {
    p.innerHTML = transform_today_Reversed.slice(0, curtransformTodayIndexReversed);
    curtransformTodayIndexReversed--;
    if (!p.innerHTML.length) {
      curPhrase = 'phrase 2';
      curtransformTodayIndexReversed = transform_today.length - 1;
    }
  } else if (curPhrase === 'phrase 2') {
    p.innerHTML += elevate_everyday[curElevateEverydayIndex]
    curElevateEverydayIndex++;
    if (!elevate_everyday[curElevateEverydayIndex]) {
      curPhrase = 'phrase 2 reversed'
      curElevateEverydayIndex = 0;
    }
  } else if (curPhrase === 'phrase 2 reversed') {
    p.innerHTML = elevate_everyday_Reversed.slice(0, curElevateEverydayIndexReversed);
    curElevateEverydayIndexReversed--;
    if (!p.innerHTML.length) {
      curPhrase = 'phrase 3';
      curElevateEverydayIndexReversed = elevate_everyday.length - 1;
    }
  } else if (curPhrase === 'phrase 3') {
    p.innerHTML += unleash_future[curUnleashFutureIndex]
    curUnleashFutureIndex++;
    if (!unleash_future[curUnleashFutureIndex]) {
      curPhrase = 'phrase 3 reversed'
      curUnleashFutureIndex = 0;
    }
  } else if (curPhrase === 'phrase 3 reversed') {
    p.innerHTML = unleash_future_Reversed.slice(0, curUnleashFutureIndexReversed);
    curUnleashFutureIndexReversed--;
    if (!p.innerHTML.length) {
      curPhrase = 'phrase 1';
      curUnleashFutureIndexReversed = unleash_future.length - 1;
    }
  }
}, 115);
