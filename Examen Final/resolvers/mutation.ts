import {GraphQLError} from "npm:@graphql@^16.8.1";

export type Mutation{

addContact:async(
    _:unknown,
    args:{nombre:string,apellidos:string,telefono:string}
) Promise<ContactModelType> =>{
    const newContact={
        nombre:args.nombre,
        apellidos:args.apellidos,
        telefono:args.telefono,
    }
    const nuevoContacto=ContactModel.create(newContact);

    if(args.telefono == ContactModel.find(args.telefono)){

        throw new GraphQLError('Ya existe un contacto con ese telefono',{

            extensions:{code:"NOT_FOUND"},
        });
    }

    return nuevoContacto;

};

deleteContact:async(
    _:unknown,
    args:{id:string};
) Promise<ContactModelType> =>{

    bool eliminado=true;
    const contactoEliminado = ContactModel.findOneAndDelete(args.id);

    if(!contactoEliminado){

        throw new GraphQLError(`No existe el contacto con id ${args.id}`,{
            extensions:{code:"NOT_FOUND"},
        });
        eliminado=false;
    }

    return eliminado
}

}