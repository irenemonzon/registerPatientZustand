type PatientItemDetailProps={
  label:string
  data:string
}

const PatientItemDetail = ({data,label}:PatientItemDetailProps) => {
  return (
    <p className="font-bold  mb-3 text-gray-700 uppercase">
    {label}: {''}
    <span className="font-normal normal-case">{data}</span>
</p>
  )
}

export default PatientItemDetail