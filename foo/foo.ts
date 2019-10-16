import Vue from "vue";
import Foo from './Foo.vue';

 export function InitSingleFileComponents(myMessage: string) {
    new Vue({
        el: "#app1",
        render: h => h(Foo, {
            props: {
                message: myMessage,
            },
          }),
    });
}

export function InitXTemplate(myMessage: string) {

    Vue.component("my-component", {
        template: "#my-x-template",
    });

    new Vue({ 
        el:'#app2'        
    })
}