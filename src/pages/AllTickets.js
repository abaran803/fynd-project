import { useEffect, useState } from "react";
import { getAllTickets } from "../services/api";

const AllTickets = () => {

    const [tickets, setTickets] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getAllTicketsOfClient = () => {
        getAllTickets("emp123")
            .then((data) => {
                setTickets(data.tickets);
                console.log(data);
            }).catch(err => {
                isLoading(false);
                console.log(err.message);
            })
    }

    useEffect(() => {
        getAllTicketsOfClient();
    }, [])

    if(!tickets) {
        if(isLoading) {
            return <h1>Loading Tickets</h1>
        } else {
            return <h1>No ticket found</h1>
        }
    }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Desciption</th>
          <th scope="col">Duration</th>
          <th scope="col">Type</th>
          <th scope="col">Subject</th>
          <th scope="col">Ticket Status</th>
        </tr>
      </thead>
      <tbody>
        {
            tickets.map(ticket => (
                <tr>
                    <td>{ticket.description.substring(0, 20) + (ticket.description.length > 20 ? '...' : '')}</td>
                    <td>{ticket.duration}</td>
                    <td>{ticket.type}</td>
                    <td>{ticket.subject}</td>
                    <td>{ticket.ticketStatus}</td>
                </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default AllTickets;
