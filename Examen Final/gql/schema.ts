export const typeDefs=`#graphql

type Contacto{
    nombre:String!
    apellidos:String!,
    telefono:String!,
    pais:String!,
    horaActual:String!,
}

type Query{
    getContact(id:string!)Contacto!,
    getContacts()Contacto!,
}

type Mutation{
    addContact(nombre:string,apellidos:string,telefono:string)Contacto,
    deleteContact(id:string!)Boolean,
    updateContact(id:string!,nombre:string!,apellidos:string!,telefono:string!)Contacto,

}
`;


