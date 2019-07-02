
export function testThis(...args){
    console.log(...args)
}

export function alertThis(data){
    window.confirm(data)
}

export class Test {
    constructor(){
        this.posts = [1,2,3,4,5]
    }
}

var test = new Test()

export {test}