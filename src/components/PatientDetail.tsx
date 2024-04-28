import {toast} from 'react-toastify'
import { Patient } from "../types"
import PatientItemDetail from "./PatientItemDetail"
import { usePatientStore } from "../store"

type PatientDetailProps={
    patient:Patient
}

const PatientDetail = ({patient}:PatientDetailProps) => {

   const { deletePatient ,getPatientById}=usePatientStore()

   const handleClick=()=>{
    deletePatient(patient.id)
    toast.error('Paciente eliminado')
   }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientItemDetail
            label="ID"
            data={patient.id}
        />
         <PatientItemDetail
            label="Nombre"
            data={patient.name}
        />
            <PatientItemDetail
            label="Propietario"
            data={patient.caretaker}
        />
            <PatientItemDetail
            label="Email"
            data={patient.email}
        />
          <PatientItemDetail
            label="Fecha Alta"
            data={patient.date.toString()}
        />
         <PatientItemDetail
            label="Sintomas"
            data={patient.symptoms}
        />
        <div className="flex  flex-col md:flex-row justify-between mt-10 gap-3">
            <button
                type="button"
                className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white  font-bold uppercase rounded-lg"
                onClick={() => getPatientById(patient.id)}
            >
                Editar
            </button>
            <button
                type="button"
                className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white  font-bold uppercase rounded-lg"
                onClick={handleClick}
            >
                Eliminar
            </button>

        </div>
    </div>
  )
}

export default PatientDetail