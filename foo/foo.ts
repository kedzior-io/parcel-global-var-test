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
        props: ["message"],
        template: "#my-x-template",
        data() {
            return {
                message: this.message,
            }        
    });

    new Vue({ 
        el:'#app2',
        data: {
            message: myMessage,
        },             
    })
}