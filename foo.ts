import Vue from "vue";

export function Foo(name: string) {
    const app = new Vue({
        el: "#app",
        data: {
            name: name
        },
    });    
    console.log("[Foo] started!");
}
