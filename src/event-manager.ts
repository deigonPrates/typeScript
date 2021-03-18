interface ListnerInterface{
    ():void;
}

export default class {
    private listeners:{[eventName:string]:Array<ListnerInterface>} = {};

    addListener(eventName:string, callable:ListnerInterface){
        if(!(this.listeners[eventName] instanceof Array)){
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callable);
    }

    runEvent(eventName:string){
        for(let callable of this.listeners[eventName]){
            callable();
        }
    }
}
