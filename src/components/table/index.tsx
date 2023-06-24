/** React Table UI - Basic example (TypeScript) */

import ReactTableUI from "react-table-ui";
import { useMemo, useRef } from "react";
import type { TableInstance, DataType } from "react-table-ui";

/** Structure of data provided foe each row. */
interface User extends DataType {
  name: string;
  age: number;
}

const Table = () => {
  // Provide data for the table
  const data: User[] = useMemo(
    () => [
      { name: "Abc Xyx", age: 20 },
      { name: "Def Uvw", age: 25 },
      { name: "Ghi Rst", age: 23 },
      { name: "Jklm Nopq", age: 30 },
    ],
    []
  );

  // Create an instance ref that will hold the reference to React Table instance.
  const tableInstanceRef = useRef<TableInstance<User>>(null);

  return (
    <ReactTableUI
      title="My Table"
      data={data}
      tableInstanceRef={tableInstanceRef}
    />
  );
};

export default Table;
