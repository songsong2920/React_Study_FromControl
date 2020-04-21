import React from "react";

export const UserContext = {
  users: [],
  editingQuestion: null,
  removeQuestion: (removeId) => {},
  editQuestion: (editId) => {},
  showDialog: (userId) => {},
  hideDialog: () => {},
};

export default React.createContext(UserContext);
