// import { useState } from "react";

// export default initialVal => {
//   const [value, setValue] = useState(initialVal);
//   const handleChange = e => {
//     setValue(e.target.value);
//   };

//   const reset = () => {
//     setValue("");
//   };

//   return [value, handleChange, reset];
// };

import { useState } from "react";

const useInputState = initialVal => {
  const [value, setValue] = useState(initialVal);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
};
