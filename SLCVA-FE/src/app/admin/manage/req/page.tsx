import App from "@/components/AdminTable/table";

const Requests = () => {
  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NAME", uid: "name", sortable: true },
    { name: "EMAIL", uid: "email" },
    { name: "ROLE", uid: "role", sortable: true },
    { name: "STATUS", uid: "status", sortable: true, type: "chip" },
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

  const tableConfig = {
    actionButtonType: "icon", //icon or dropdown
  };

  const data = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "donor",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "Tech Lead",
      team: "Development",
      status: "donor",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@example.com",
    },
    {
      id: 3,
      name: "Jane Fisher",
      role: "Sr. Dev",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
    },
    {
      id: 4,
      name: "William Howard",
      role: "C.M.",
      team: "Marketing",
      status: "patient",
      age: "28",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      email: "william.howard@example.com",
    },
    {
      id: 5,
      name: "Kristen Copper",
      role: "S. Manager",
      team: "Sales",
      status: "patient",
      age: "24",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      email: "kristen.cooper@example.com",
    },
    {
      id: 6,
      name: "Brian Kim",
      role: "P. Manager",
      team: "Management",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "brian.kim@example.com",
      status: "patient",
    },
    {
      id: 7,
      name: "Michael Hunt",
      role: "Designer",
      team: "Design",
      status: "importer",
      age: "27",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
      email: "michael.hunt@example.com",
    },
    {
      id: 8,
      name: "Samantha Brooks",
      role: "HR Manager",
      team: "HR",
      status: "donor",
      age: "31",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
      email: "samantha.brooks@example.com",
    },
    {
      id: 9,
      name: "Frank Harrison",
      role: "F. Manager",
      team: "Finance",
      status: "donor",
      age: "33",
      avatar: "https://i.pravatar.cc/150?img=4",
      email: "frank.harrison@example.com",
    },
  ];

  return (
    <div>
      <App columns = {columns} requiredFunctions={requiredFunctions}  statusOptions={statusOptions} data={data} />
    </div>
  );
};

export default Requests;
