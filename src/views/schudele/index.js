import React, { Component } from 'react';
import './index.css';
import EventForm from '../../components/eventForm';

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  saveEvent = async(e) => {
    e.preventDefault();

    let title = e.target.elements.title.value;
    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;
    let notes = e.target.elements.notes.value;

    // console.log(title, day, month, notes);

    let url = 'https://event-sched-backend1453.herokuapp.com/api/save';

    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "year": year,
        "month": month,
        "day": day,
        "title": title,
        "notes": notes
      }
    });

    let data = await response.json();

    if (data.success) {
      alert(`${data.success}`);
    } else if (data.error) {
      alert(`${data.error}`);
    } else {
      alert('Try again')
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="cool-md-6 offset-md-3">
            <h1>Schudele an Event</h1>
            <EventForm saveEvent={this.saveEvent} />
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
