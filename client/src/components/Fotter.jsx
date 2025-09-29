import React from "react";

const Fotter = () => {
  return (
    <footer className="border-t border-gray-600 text-white p-4 text-center">
      © {new Date().getFullYear()} Ajay Arumugam. All rights reserved.
    </footer>
  );
};

export default Fotter;