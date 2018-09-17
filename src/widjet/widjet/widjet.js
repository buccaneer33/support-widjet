"use strict";
import localStorage from './local-storage/local-storage';
import openWidjet from './open-widjet/open-widjet';

class Widget{
   

    getConfig(){
        // делаем вебсокер запрос о конфиге
        var config = {
            colorSchema: 'light',
            widgetPos: 'down-right'
        };
        return config;
    };
    getToken(){
        if(!localStorage){
            // если в ЛС ничего не нашли то делаем запрос на токен
          }
          const TOKEN = '123456789';
          return TOKEN;
    };


    constructor(){
        
        const CONFIG = this.getConfig();
        const TOKEN = this.getToken();
        openWidjet(CONFIG, TOKEN);

    }
};


export default Widget;