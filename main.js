const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
container.innerHTML = `<header class="header">Virtual Keyboard</header>
                      <textarea name="" id="text" cols="30" rows="10"></textarea>
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
                            <div class="key">V</div>
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
  },

  Digit1: {
    code: 'Digit1',
  },

  Digit2: {
    code: 'Digit2',
  },

  Digit3: {
    code: 'Digit3',
  },

  Digit4: {
    code: 'Digit4',
  },

  Digit5: {
    code: 'Digit5',
  },

  Digit6: {
    code: 'Digit6',
  },

  Digit7: {
    code: 'Digit7',
  },

  Digit8: {
    code: 'Digit8',
  },

  Digit9: {
    code: 'Digit9',
  },

  Digit0: {
    code: 'Digit0',
  },

  Minus: {
    code: 'Minus',
  },

  Equal: {
    code: 'Equal',
  },

  Backspace: {
    code: 'Backspace',
  },

  Tab: {
    code: 'Tab',
  },

  KeyQ: {
    code: 'KeyQ',
  },

  KeyW: {
    code: 'KeyW',
  },

  KeyE: {
    code: 'KeyE',
  },

  KeyR: {
    code: 'KeyR',
  },

  KeyT: {
    code: 'KeyT',
  },

  KeyY: {
    code: 'KeyY',
  },

  KeyU: {
    code: 'KeyU',
  },

  KeyI: {
    code: 'KeyI',
  },

  KeyO: {
    code: 'KeyO',
  },

  KeyP: {
    code: 'KeyP',
  },

  BracketLeft: {
    code: 'BracketLeft',
  },

  BracketRight: {
    code: 'BracketRight',
  },

  Backslash: {
    code: 'Backslash',
  },

  Delete: {
    code: 'Delete',
  },

  CapsLock: {
    code: 'CapsLock',
  },

  KeyA: {
    code: 'KeyA',
  },

  KeyS: {
    code: 'KeyS',
  },

  KeyD: {
    code: 'KeyD',
  },

  KeyF: {
    code: 'KeyF',
  },

  KeyG: {
    code: 'KeyG',
  },

  KeyH: {
    code: 'KeyH',
  },

  KeyJ: {
    code: 'KeyJ',
  },

  KeyK: {
    code: 'KeyK',
  },

  KeyL: {
    code: 'KeyL',
  },

  Semicolon: {
    code: 'Semicolon',
  },

  Quote: {
    code: 'Quote',
  },

  Enter: {
    code: 'Enter',
  },

  ShiftLeft: {
    code: 'ShiftLeft',
  },

  KeyZ: {
    code: 'KeyZ',
  },

  KeyX: {
    code: 'KeyX',
  },

  KeyC: {
    code: 'KeyC',
  },

  KeyV: {
    code: 'KeyC',
  },

  KeyB: {
    code: 'KeyC',
  },

  KeyN: {
    code: 'KeyN',
  },

  KeyM: {
    code: 'KeyM',
  },

  Comma: {
    code: 'Comma',
  },

  Period: {
    code: 'Period',
  },

  Slash: {
    code: 'Slash',
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

// for (let i = 0; i < 10; i += 1) {
//   const codeKey = key[i].innerHTML;
//   key[i].setAttribute('data-code-key', `${keyWrapper[codeKey].code}`);
// }

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
});

document.addEventListener('keyup', (e) => {
  const btnKey = key[keyWrapper[e.code].position];
  btnKey.classList.remove('active');
});
