import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Navigation = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon className="icon" icon={faHome} />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon className="icon" icon={faTicket} />
        </Link>
        <div>
          <p className="text-white">ibsham@gmail.com</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
