"use client"
 
 import TableComponent from "@/app/imp/_components/table";

const Requests = () => {
    const columns = [
        {name: "ID", uid: "id", sortable: true},
        {name: "Patient Name", uid: "name", sortable: true},
        {name : "Medication Name", uid: "Mname", Sortable: true},
        {name: "Medication Dosage", uid: "dosage", Sortable: true},
        {name: "Request Date", uid: "date", Sortable: true},
        {name: "Additional Information", uid: "info", Sortable: true},
        {name: "Actions", uid: "actions", type: "AcceptDeclineContact"},


    ];

    const requiredFunctions = {
        searching: true,
        refresh: true,
        statusFiltering: true,
        pagination: true,
        columnSelection: true,
    };

    const statusOptions = [
         
        { name: "Pending", uid:"pending" },
        { name: "Declined", uid:"declined" },
        { name: "Quoted", uid:"quoted" },
        
      ];

    const data = [  
        {
            id: 1,
            name: "John Doe",
            Mname: "Ibuprofen",
            dosage: "200mg",
            date: "2021-09-21",
            info: "N/A",
        },
        {
            id: 2,
            name: "Jane Doe",
            Mname: "Tylenol",
            dosage: "500mg",
            date: "2021-09-21",
            info: "N/A",
        },
        {
            id: 3,
            name: "John Smith",
            Mname: "Advil",
            dosage: "400mg",
            date: "2021-09-21",
            info: "N/A",
        },
        {
            id: 4,
            name: "Jane Smith",
            Mname: "Aleve",
            dosage: "200mg",
            date: "2021-09-21",
            info: "N/A",
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
      <TableComponent columns = {columns} accpetButton={accpetButton}  declineButton={declineButton} contactButton={contactButton} requiredFunctions={requiredFunctions}  statusOptions={statusOptions} data={data} />
    </div>
  );
}

export default Requests;
