"use client"
import DropdownMessage from "@/components/Header/DropdownMessage";
import {ImporterTable} from "@/components/ImporterTable/table";

const Requests = () => {
  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "PATIENT NAME", uid: "name", sortable: true },
    { name: "MEDICATION NAME", uid: "mname", sortable: true },  
    { name: "MEDICATION DOSAGE", uid: "dosage", sortable: true },
    {name: "REQUEST DATE", uid: "date", sortable: true},
    {name:"ADDITIONAL NOTES",uid:"notes",sortable:true},
    {name: "STATUS", uid: "status", type: "chips" },
    { name: "ACTIONS", uid: "actions", type: "AcceptDeclineContact" },
  ];

  const requiredFunctions = {
    searching: true,
    refrsh: true,
    statusFiltering: true,
    pagination: true,
    columnSelection: true,
  };

  //type : AccdeptDecline, AcceptDeclineContact,text.copy,chips

  const statusOptions = [
    { name: "Donor", uid: "donor" },
    { name: "Importer", uid: "importer" },
    { name: "Patient", uid: "patient" },
  ];


  const data = [
    {
      id: 1,
      name: "Tony Reichert",
      mname: "Paracetamol",
      dosage: "500mg",
      date: "12/12/2021",
      notes: "Patient is allergic to penicillin",
    },
    {
      id: 2,
      name: "Zoey Lang",
      mname: "Aspirin",
      dosage: "100mg",
      date: "12/12/2021",
      notes: "Patient is allergic to penicillin",
    },
    {
      id: 3,
      name: "Jane Fisher",
      mname: "Paracetamol",
      dosage: "500mg",
      date: "12/12/2021",
      notes: "Patient is allergic to penicillin",

    },
    {
      id: 4,
      name: "William Howard",
      mname: "Aspirin",
      dosage: "100mg",
      date: "12/12/2021",
      notes: "Patient is allergic to penicillin",
    },
    {
      id: 5,
      name: "Kristen Copper",
      mname: "Paracetamol",
      dosage: "500mg",
      date: "12/12/2021",
      notes: "Patient is allergic to penicillin",
    },
    {
      id: 6,
      name: "Brian Kim",
      mname: "Aspirin",
      dosage: "100mg",
      date: "12/12/2021",
      notes: "Patient is allergic to penicillin",

    },
    {
      id: 7,
      name: "Michael Hunt",
      mname: "Paracetamol",
      dosage: "500mg",
      date: "12/12/2021",
      notes: "Patient is allergic to penicillin",

    },
    {
      id: 8,
      name: "Megan Fox",
      mname: "Aspirin",
      dosage: "100mg",
      date: "12/12/2021",
      notes: "Patient is allergic to penicillin",
    },
    {
      id: 9,
      name: "John Doe",
      mname: "Paracetamol",
      dosage: "500mg",
      date: "12/12/2021",
      notes: "Patient is allergic to penicillin",
    },
    {
      id: 10,
      name: "Jane Doe",
      mname: "Aspirin",
      dosage: "100mg",
      date: "12/12/2021",
      notes: "Patient is allergic to penicillin",
    },
     
  ];

  const accpetButton = () => {
    alert("clicked accpetButton")
  }

  const declineButton = () => {

    alert("clicked declineButton")
  }

  const contactButton = () => {

    alert("clicked contactButton")
  }

  return (
    <div>

      <ImporterTable data={data} columns={columns} requiredFunctions={requiredFunctions} statusOptions={statusOptions} />
      
    </div>
  );
}

export default Requests;
