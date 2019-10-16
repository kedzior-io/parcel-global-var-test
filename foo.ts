import Vue from "vue";

export function Foo(message: string) {
    
    let jsMessage = document.getElementById("message") as HTMLElement;
    jsMessage.innerHTML = message;
    
    const app = new Vue({
        el: "#app",
        data: {
            message: message
        },
    });    
    console.log("[Foo] started!");
}
