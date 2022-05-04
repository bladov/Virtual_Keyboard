const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');

container.innerHTML = `<header class="header">Virtual Keyboard</header>
                      <textarea name="" id="text" cols="30" rows="10"></textarea>
                      <div class="language">Change language: Shift + Alt</div>
                      <div class="color">Change Color: <input type="color" name="color" id="color"></div>
                      <div class="Keyboard__wrapper">
                        <div class="Keyboard__keys">
                          <div class="Keyboard__row">
                            <div class="key">\`</div>
                            <div class="key">1</div>
                            <div class="key">2</div>
                            <div class="key">3</div>
                            <div class="key">4</div>
                            <div class="key">5</div>
                            <div class="key">6</div>
                            <div class="key">7</div>
                            <div class="key">8</div>
                            <div class="key">9</div>
                            <div class="key">0</div>
                            <div class="key">-</div>
                            <div class="key">=</div>
                            <div class="key backspace_key key_large">Backspace</div>
                          </div>
                          <div class="Keyboard__row">
                            <div class="key tab_key">Tab</div>
                            <div class="key">Q</div>
                            <div class="key">W</div>
                            <div class="key">E</div>
                            <div class="key">R</div>
                            <div class="key">T</div>
                            <div class="key">Y</div>
                            <div class="key">U</div>
                            <div class="key">I</div>
                            <div class="key">O</div>
                            <div class="key">P</div>
                            <div class="key">[</div>
                            <div class="key">]</div>
                            <div class="key slash_key">&#92;</div>
                            <div class="key del_key">DEL</div>
                          </div>
                          <div class="Keyboard__row">
                            <div class="key caps_lock_key key_large">Caps Lock</div>
                            <div class="key">A</div>
                            <div class="key">S</div>
                            <div class="key">D</div>
                            <div class="key">F</div>
                            <div class="key">G</div>
                            <div class="key">H</div>
                            <div class="key">J</div>
                            <div class="key">K</div>
                            <div class="key">L</div>
                            <div class="key">;</div>
                            <div class="key">'</div>
                            <div class="key enter_key key_large">Enter</div>
                          </div>
                          <div class="Keyboard__row">
                            <div class="key shift_key shift_key_left key_large">Shift</div>
                            <div class="key" data-event-code="KeyZ">Z</div>
                            <div class="key" data-event-code="KeyX">X</div>
                            <div class="key" data-event-code="KeyC">C</div>
                            <div class="key key_bef">V</div>
                            <div class="key">B</div>
                            <div class="key">N</div>
                            <div class="key">M</div>
                            <div class="key">,</div>
                            <div class="key">.</div>
                            <div class="key">/</div>
                            <div class="key arrow_key arrow_key_up">&#8679;</div>
                            <div class="key shift_key shift_key_right">Shift</div>
                          </div>
                          <div class="Keyboard__row">
                            <div class="key ctrl_key ctrl_key_left">Ctrl</div>
                            <div class="key win_key">Win</div>
                            <div class="key alt_key alt_key_left">Alt</div>
                            <div class="key space_key">Space</div>
                            <div class="key alt_key alt_key_right">Alt</div>
                            <div class="key ctrl_key ctrl_key_left">Ctrl</div>
                            <div class="key arrow_key arrow_key_left">&#8678;</div>
                            <div class="key arrow_key arrow_key_down">&#8681;</div>
                            <div class="key arrow_key arrow_key_right">&#8680;</div>
                          </div>
                        </div>
                      </div>
`;

body.prepend(container);

const key = document.querySelectorAll('.key');

const keyWrapper = {
  Backquote: {
    code: 'Backquote',
    changeable: true,
    keyNormal: '`',
    keySpec: '~',
  },

  Digit1: {
    code: 'Digit1',
    changeable: true,
    keyNormal: '1',
    keySpec: '!',
  },

  Digit2: {
    code: 'Digit2',
    changeable: true,
    keyNormal: '2',
    keySpec: '@',
  },

  Digit3: {
    code: 'Digit3',
    changeable: true,
    keyNormal: '3',
    keySpec: '#',
  },

  Digit4: {
    code: 'Digit4',
    changeable: true,
    keyNormal: '4',
    keySpec: '$',
  },

  Digit5: {
    code: 'Digit5',
    changeable: true,
    keyNormal: '5',
    keySpec: '%',
  },

  Digit6: {
    code: 'Digit6',
    changeable: true,
    keyNormal: '6',
    keySpec: '^',
  },

  Digit7: {
    code: 'Digit7',
    changeable: true,
    keyNormal: '7',
    keySpec: '&',
  },

  Digit8: {
    code: 'Digit8',
    changeable: true,
    keyNormal: '8',
    keySpec: '*',
  },

  Digit9: {
    code: 'Digit9',
    changeable: true,
    keyNormal: '9',
    keySpec: '(',
  },

  Digit0: {
    code: 'Digit0',
    changeable: true,
    keyNormal: '0',
    keySpec: ')',
  },

  Minus: {
    code: 'Minus',
    changeable: true,
    keyNormal: '-',
    keySpec: '_',
  },

  Equal: {
    code: 'Equal',
    changeable: true,
    keyNormal: '=',
    keySpec: '+',
  },

  Backspace: {
    code: 'Backspace',
  },

  Tab: {
    code: 'Tab',
  },

  KeyQ: {
    code: 'KeyQ',
    changeableRu: true,
    keyEn: 'Q',
    keyRu: 'Й',
  },

  KeyW: {
    code: 'KeyW',
    changeableRu: true,
    keyEn: 'W',
    keyRu: 'Ц',
  },

  KeyE: {
    code: 'KeyE',
    changeableRu: true,
    keyEn: 'E',
    keyRu: 'У',
  },

  KeyR: {
    code: 'KeyR',
    changeableRu: true,
    keyEn: 'R',
    keyRu: 'К',
  },

  KeyT: {
    code: 'KeyT',
    changeableRu: true,
    keyEn: 'T',
    keyRu: 'Е',
  },

  KeyY: {
    code: 'KeyY',
    changeableRu: true,
    keyEn: 'Y',
    keyRu: 'Н',
  },

  KeyU: {
    code: 'KeyU',
    changeableRu: true,
    keyEn: 'U',
    keyRu: 'Г',
  },

  KeyI: {
    code: 'KeyI',
    changeableRu: true,
    keyEn: 'I',
    keyRu: 'Ш',
  },

  KeyO: {
    code: 'KeyO',
    changeableRu: true,
    keyEn: 'O',
    keyRu: 'Щ',
  },

  KeyP: {
    code: 'KeyP',
    changeableRu: true,
    keyEn: 'P',
    keyRu: 'З',
  },

  BracketLeft: {
    code: 'BracketLeft',
    changeable: true,
    keyNormal: '[',
    keySpec: '{',
  },

  BracketRight: {
    code: 'BracketRight',
    changeable: true,
    keyNormal: ']',
    keySpec: '}',
  },

  Backslash: {
    code: 'Backslash',
    changeable: true,
    keyNormal: '&#92;',
    keySpec: '|',
  },

  Delete: {
    code: 'Delete',
  },

  CapsLock: {
    code: 'CapsLock',
  },

  KeyA: {
    code: 'KeyA',
    changeableRu: true,
    keyEn: 'A',
    keyRu: 'Ф',
  },

  KeyS: {
    code: 'KeyS',
    changeableRu: true,
    keyEn: 'S',
    keyRu: 'Ы',
  },

  KeyD: {
    code: 'KeyD',
    changeableRu: true,
    keyEn: 'D',
    keyRu: 'В',
  },

  KeyF: {
    code: 'KeyF',
    changeableRu: true,
    keyEn: 'F',
    keyRu: 'А',
  },

  KeyG: {
    code: 'KeyG',
    changeableRu: true,
    keyEn: 'G',
    keyRu: 'П',
  },

  KeyH: {
    code: 'KeyH',
    changeableRu: true,
    keyEn: 'H',
    keyRu: 'Р',
  },

  KeyJ: {
    code: 'KeyJ',
    changeableRu: true,
    keyEn: 'J',
    keyRu: 'О',
  },

  KeyK: {
    code: 'KeyK',
    changeableRu: true,
    keyEn: 'K',
    keyRu: 'Л',
  },

  KeyL: {
    code: 'KeyL',
    changeableRu: true,
    keyEn: 'L',
    keyRu: 'Д',
  },

  Semicolon: {
    code: 'Semicolon',
    changeable: true,
    keyNormal: ';',
    keySpec: ':',
  },

  Quote: {
    code: 'Quote',
    changeable: true,
    keyNormal: "'",
    keySpec: '"',
  },

  Enter: {
    code: 'Enter',
  },

  ShiftLeft: {
    code: 'ShiftLeft',
  },

  KeyZ: {
    code: 'KeyZ',
    changeableRu: true,
    keyEn: 'Z',
    keyRu: 'Я',
  },

  KeyX: {
    code: 'KeyX',
    changeableRu: true,
    keyEn: 'X',
    keyRu: 'Ч',
  },

  KeyC: {
    code: 'KeyC',
    changeableRu: true,
    keyEn: 'C',
    keyRu: 'С',
  },

  KeyV: {
    code: 'KeyC',
    changeableRu: true,
    keyEn: 'V',
    keyRu: 'М',
  },

  KeyB: {
    code: 'KeyC',
    changeableRu: true,
    keyEn: 'B',
    keyRu: 'И',
  },

  KeyN: {
    code: 'KeyN',
    changeableRu: true,
    keyEn: 'N',
    keyRu: 'Т',
  },

  KeyM: {
    code: 'KeyM',
    changeableRu: true,
    keyEn: 'M',
    keyRu: 'Ь',
  },

  Comma: {
    code: 'Comma',
    changeableRu: true,
    keyEn: ',',
    keyRu: 'Б',
  },

  Period: {
    code: 'Period',
    changeableRu: true,
    keyEn: '.',
    keyRu: 'Ю',
  },

  Slash: {
    code: 'Slash',
    changeable: true,
    keyNormal: '/',
    keySpec: '?',
  },

  ArrowUp: {
    code: 'ArrowUp',
  },

  ShiftRight: {
    code: 'ShiftRight',
  },

  ControlLeft: {
    code: 'ControlLeft',
  },

  MetaLeft: {
    code: 'MetaLeft',
  },

  AltLeft: {
    code: 'AltLeft',
  },

  Space: {
    code: 'Space',
  },

  AltRight: {
    code: 'AltRight',
  },

  ControlRight: {
    code: 'ControlRight',
  },

  ArrowLeft: {
    code: 'ArrowLeft',
  },

  ArrowDown: {
    code: 'ArrowDown',
  },

  ArrowRight: {
    code: 'ArrowRight',
  },
};

function addPosition() {
  let zero = 0;

  Object.keys(keyWrapper).forEach((item) => {
    keyWrapper[item].position = zero;
    key[zero].setAttribute('data-code-key', `${keyWrapper[item].code}`);
    zero += 1;
  });
}

addPosition();

document.addEventListener('keydown', (e) => {
  const btnKey = key[keyWrapper[e.code].position];
  btnKey.classList.add('active');

  if (e.code === 'ShiftLeft') {
    Object.keys(keyWrapper).forEach((item) => {
      if (keyWrapper[item].changeable === true) {
        key[keyWrapper[item].position].innerHTML = keyWrapper[item].keySpec;
      }
    });
  }
});

document.addEventListener('keyup', (e) => {
  const btnKey = key[keyWrapper[e.code].position];
  btnKey.classList.remove('active');

  if (e.code === 'ShiftLeft') {
    Object.keys(keyWrapper).forEach((item) => {
      if (keyWrapper[item].changeable === true) {
        key[keyWrapper[item].position].innerHTML = keyWrapper[item].keyNormal;
      }
    });
  }
});

// change lng----------------------------------------------------------------==========

function runOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

function swapLang() {
  Object.keys(keyWrapper).forEach((item) => {
    if (keyWrapper[item].changeableRu === true) {
      key[keyWrapper[item].position].innerHTML = keyWrapper[item].keyRu;
      keyWrapper[item].changeableRu = false;
    } else if (keyWrapper[item].changeableRu === false) {
      key[keyWrapper[item].position].innerHTML = keyWrapper[item].keyEn;
      keyWrapper[item].changeableRu = true;
    }
  });

  if (!localStorage.getItem('ru')) {
    localStorage.setItem('ru', 'true');
  } else {
    localStorage.clear();
  }
}

runOnKeys(() => swapLang(), 'ShiftLeft', 'AltLeft');

if (localStorage.getItem('ru')) {
  Object.keys(keyWrapper).forEach((item) => {
    if (keyWrapper[item].changeableRu === true) {
      key[keyWrapper[item].position].innerHTML = keyWrapper[item].keyRu;
      keyWrapper[item].changeableRu = false;
    } else if (keyWrapper[item].changeableRu === false) {
      key[keyWrapper[item].position].innerHTML = keyWrapper[item].keyEn;
      keyWrapper[item].changeableRu = true;
    }
  });
}
// change lng end---------------------------------------------------------------==========

const text = document.querySelector('#text');
const keyContainer = document.querySelector('.Keyboard__keys');

keyContainer.addEventListener('click', (e) => {
  const target = e.target;
  text.value += target.textContent;
});

//  change color
const changeColor = document.querySelector('#color');

changeColor.addEventListener('input', () => {
  key.forEach((item, pos) => {
    key[pos].style.borderColor = changeColor.value;
    key[pos].style.backgroundColor = changeColor.value;
  });
});
//  chenge color end
