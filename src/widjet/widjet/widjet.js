"use strict";
import localStorage from './local-storage/local-storage';
import openWidjet from './open-widjet/open-widjet';

class Widget{
   

    getConfig(){
        // делаем вебсокер запрос о конфиге
        var config = {
            colorSchema: 'light',
            widgetPos: 'top'
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
    toggleWidjet(){
        var status = 'closed';
        var button = document.getElementById('toggleWidjet');

        button.classList.add('support_widget__button');
        var widjet = document.querySelector(".support_widget");
        button.onclick = function() { 
            if(status == 'closed'){
                widjet.classList.remove('support_widget_container--closed');
                status = 'opened';
                console.log(status);
            }else{
                widjet.classList.add('support_widget_container--closed');
                status = 'closed';
                console.log(status);
            }

        };
        return false;
    }


    constructor(){
        const CONFIG = this.getConfig();
        const TOKEN = this.getToken();
        openWidjet(CONFIG, TOKEN);
        this.toggleWidjet();

    }
};


export default Widget;