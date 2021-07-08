export class controller {

    static registro=new Map();

    static register(instance){
        this.registro.set(instance.id,instance)
    }

    static setCSS(instance,env){
        console.log(this.registro.has(instance.id))
        if(this.registro.has(instance.id)){
            instance.setEnvioroment(env);
            instance.setCSS()
        }
    }

}