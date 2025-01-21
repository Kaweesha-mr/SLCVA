# AdminTable Component Documentation

The **AdminTable** component is a flexible and dynamic table for managing and presenting data. It supports various column types, filtering, searching, and interactive actions, making it suitable for complex data management interfaces.

---

## Props Overview

### 1. **`columns`**  
Defines the structure and behavior of the table's columns. Each column is an object with the following properties:
- **`name`**: The label displayed in the table header.
- **`uid`**: A unique identifier for the column (used for data mapping).
- **`sortable`**: *(Optional)* Enables sorting for the column.
- **`type`**: *(Optional)* Specifies the column's content type. Available types:
  - `"text"`: Plain text.
  - `"copy"`: Displays the value in a copyable snippet format.
  - `"chip"`: Renders a status indicator as a colored chip.
  - `"AcceptDecline"`: Displays "Accept" and "Decline" buttons.
  - `"AcceptDeclineContact"`: Displays "Accept," "Decline," and "Contact" buttons.

#### Example:
```javascript
const columns = [
  { name: "ID", uid: "id", sortable: true, type: "text" },
  { name: "NAME", uid: "name", sortable: true, type: "text" },
  { name: "EMAIL", uid: "email", type: "copy" },
  { name: "ROLE", uid: "role", sortable: true, type: "text" },
  { name: "STATUS", uid: "status", sortable: true, type: "chip" },
  { name: "ACTIONS", uid: "actions", type: "AcceptDeclineContact" },
];
```

---

### 2. **`data`**  
An array of objects representing the table rows. Each object should contain keys matching the column `uid`.

#### Example:
```javascript
const data = [
  {
    id: 1,
    name: "Tony Reichert",
    email: "tony.reichert@example.com",
    role: "CEO",
    status: "donor",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  // Additional rows...
];
```

---

### 3. **`statusOptions`**  
An array of objects used for status filtering in the table. Each object includes:
- **`name`**: Display name of the status.
- **`uid`**: Unique identifier for the status.

#### Example:
```javascript
const statusOptions = [
  { name: "Donor", uid: "donor" },
  { name: "Importer", uid: "importer" },
  { name: "Patient", uid: "patient" },
];
```

---

### 4. **`requiredFunctions`**  
Defines the features available in the table. Each key in the object enables/disables a specific functionality:
- **`searching`**: Enables a search bar for filtering by text.
- **`refresh`**: Placeholder for a refresh action (not implemented in this example).
- **`statusFiltering`**: Enables a dropdown for filtering by status.
- **`pagination`**: Enables pagination controls for navigating data.
- **`columnSelection`**: Allows dynamic toggling of visible columns.

#### Example:
```javascript
const requiredFunctions = {
  searching: true,
  refresh: true,
  statusFiltering: true,
  pagination: true,
  columnSelection: true,
};
```

---

### 5. **Action Callbacks**  
Functions triggered by button actions in the table:
- **`acceptButton`**: Triggered when the "Accept" button is clicked.
- **`declineButton`**: Triggered when the "Decline" button is clicked.
- **`contactButton`**: Triggered when the "Contact" button is clicked.

#### Example:
```javascript
const acceptButton = () => alert("Accept clicked!");
const declineButton = () => alert("Decline clicked!");
const contactButton = () => alert("Contact clicked!");
```

---

## Column Types

### 1. **`text`**
Displays plain text in the column.

### 2. **`copy`**
Displays the content in a copyable snippet format.

### 3. **`chip`**
Displays the content as a status chip, using colors to represent different statuses.

### 4. **`AcceptDecline`**
Renders "Accept" and "Decline" buttons for user actions.

### 5. **`AcceptDeclineContact`**
Renders "Accept," "Decline," and "Contact" buttons for more interactive actions.

---

## Features

### 1. **Searching**
- Allows text-based filtering of rows using the search bar.
- Requires `searching: true` in `requiredFunctions`.

### 2. **Sorting**
- Enables column sorting by setting `sortable: true` in the column definition.

### 3. **Status Filtering**
- Filters rows based on their status using a dropdown menu.
- Requires `statusFiltering: true` and `statusOptions` props.

### 4. **Pagination**
- Displays pagination controls for navigating data.
- Requires `pagination: true` in `requiredFunctions`.

### 5. **Column Visibility**
- Allows toggling visible columns dynamically.
- Requires `columnSelection: true` in `requiredFunctions`.

### 6. **Action Buttons**
- Provides customizable action buttons ("Accept," "Decline," "Contact") based on column type.

---

## Example Usage

```javascript
<AdminTable
  columns={columns}
  data={data}
  statusOptions={statusOptions}
  requiredFunctions={requiredFunctions}
  acceptButton={acceptButton}
  declineButton={declineButton}
  contactButton={contactButton}
/>
```

---

This component is ideal for creating dynamic, feature-rich admin dashboards or data management systems. It supports extensive customization, making it adaptable to various use cases.