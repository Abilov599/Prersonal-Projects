import React, { forwardRef } from "react";

const InputComponent = forwardRef((ref) => <input ref={ref} type="text" id="my-input" />);

export default InputComponent;
