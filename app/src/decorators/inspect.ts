export function inspect() {
    return function(
        target: any,
        propertyKey: String,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            console.log(`--- Método ${propertyKey}`);
            console.log(`------ parâmetros ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------ parâmetros ${JSON.stringify(retorno)}`);
        }

        return descriptor;
    };
}