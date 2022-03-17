import React, { createContext, useState } from "react";

const DataContext = createContext();

export default DataContext;

// export const DataProvider = ({ children }) => {
//   const [blog, setBlog] = useState();

//   return (
//     <DataContext.Provider value={''}>
//       {children}
//     </DataContext.Provider>
//   )
// }