import mongoose from "npm:mongoose@8.0.1";

const Schema = mongoose.Schema;

const ContactSchema=new Schema({
    nombre:{type:String, required:true},
    apellidos:{type:String, required:true},
    telefono:{type:String, required:true},
    pais:{type:String, required:true},
    horaActual:{type:String, required:true},
});

export type ContactModelType = mongoose.document & Omit<Contacto,"id">;
export const ContactModel = mongoose.model<ContactModelType>('Contacto', ContactSchema);

