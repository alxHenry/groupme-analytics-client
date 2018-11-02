import React from "react";

const InputForm = () => (
  <form>
    <label>
      Group:
      <input type="text" name="group" style={{ margin: "4px" }} />
    </label>
    <input type="submit" value="Analyze!" style={{ margin: "4px" }} />
  </form>
);

export default InputForm;
