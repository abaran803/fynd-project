import {useState} from 'react';
import { generateTicket } from '../services/api';

const TicketPanel = () => {

    const [type, setType] = useState();
    const [manager, setManager] = useState();
    const [duration, setDuration] = useState();
    const [days, setDays] = useState();
    const [subject, setSubject] = useState();
    const [description, setDescription] = useState();
    const [isLoading, setIsLoading] = useState();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const showError = (err) => {
        console.log(err.message);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        generateTicket({
            type, manager, duration, days, subject, description
        })
        .then(() => {
            setIsLoading(false);
        })
        .catch(err => {
            showError(err)
            setIsLoading(false);
        });
    }

    if(isLoading) {
        return <h1>Loading...</h1>
    }

  return (
    <form onSubmit={submitHandler}>
    <div className="container-fluid py-4 px-3">
      <div className="row p-2">
        <div className="mb-3 col-md-6">
          <label for="type" className="form-label">
            Select Type
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            id="type"
            onChange={(e) => {setType(e.target.value)}}
            required
          >
            <option selected disabled>
              ---select type---
            </option>
            <option value="mouse">Mouse</option>
            <option value="headphone">Headphone</option>
            <option value="monitor">Monitor</option>
          </select>
        </div>
        <div className="mb-3 col-md-6">
          <label for="manager" className="form-label">
            Manager Name
          </label>
          <input
            type="text"
            className="form-control"
            id="manager"
            placeholder="Enter manager name"
            onChange={(e) => setManager(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-md-6">
          <label for="duration" className="form-label">
            Duration Type
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            id="duration"
            onChange={(e) => {setDuration(e.target.value)}}
            required
          >
            <option selected disabled>
              ---select type---
            </option>
            <option value="temporary">Temporary</option>
            <option value="permanent">Permanent</option>
          </select>
        </div>
        <div className="mb-3 col-md-6">
          <label for="days" className="form-label">
            Days
          </label>
          <input
            type="number"
            className="form-control"
            id="days"
            placeholder="Enter days"
            disabled={!(duration === 'temporary')}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>
        <div className="mb-3 col-md-12">
          <label for="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Enter subject"
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            id="desc"
            rows="7"
            placeholder="Enter description here..."
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mx-2">Create Ticket</button>
      <button type="reset" class="btn btn-danger mx-2">Reset</button>
    </div>
    </form>
  );
};

export default TicketPanel;
