import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 0 ? "text-red-400" : "text-slate-400"} pr-1`}
      />{" "}
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 1 ? "text-red-400" : "text-slate-400"} pr-1`}
      />{" "}
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 2 ? "text-red-400" : "text-slate-400"} pr-1`}
      />{" "}
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 3 ? "text-red-400" : "text-slate-400"} pr-1`}
      />{" "}
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 4 ? "text-red-400" : "text-slate-400"} pr-1`}
      />
    </div>
  );
};

export default PriorityDisplay;
