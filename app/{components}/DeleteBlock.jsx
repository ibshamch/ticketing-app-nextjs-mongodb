// DeleteBlock.jsx
"use client";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    if (!id) {
      console.error("Missing ID for delete operation");
      return;
    } else {
      console.log(id);
    }

    try {
      const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      } else {
        console.error(`Failed to delete ticket. Status: ${res.status}`);
      }
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  return (
    <FontAwesomeIcon
      onClick={deleteTicket}
      icon={faTimes}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
    />
  );
};

export default DeleteBlock;
