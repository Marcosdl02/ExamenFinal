export type Query{
 
getContacts:async(
    _:unknown,

) Promise<ContactModelType> =>{
    const ListaContactos = await ContactModel.find().exec();
    return ListaContactos
};

getContact:async(
    _:unknown
    args:{id:string}
)Promise<ContactModelType> =>{

    
}

};