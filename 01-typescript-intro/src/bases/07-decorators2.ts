const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {

        return {
            get() {
                const wrapperFn = (...args: any[]) => {
                    console.warn(`Method ${memberName} is deprecated with reason: ${deprecationReason}`);
                    propertyDescriptor.value.apply(this, args);
                }
                return wrapperFn;
            }


        }
    }
}






export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string,

    ) { }

    //METODOS
    scream() {
        console.log(`${this.name.toUpperCase()}!!`)

    }
    @Deprecated('Most use talk2 method instead')
    talk() {
        console.log(`${this.name}, ${this.name}!!`)

    }
    @Deprecated('Most use talk3 method instead')
    talk2() {
        console.log(`${this.name}, ${this.name}!!`)

    }

}
export const charmander = new Pokemon(4, 'Charmander') 
charmander.talk2();