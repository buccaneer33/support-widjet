"use strict";
import TOKENKEY from '../../settings/settings.js';

// localStorage.setItem(TOKENKEY, 'myValue');
//localStorage.removeItem(TOKENKEY);
 console.log('TOKENKEY = ' + JSON.stringify(TOKENKEY.TOKENKEY));
const LocalStorage = localStorage.getItem(TOKENKEY);
 console.log('LocalStorage = ' + LocalStorage);

export default LocalStorage;