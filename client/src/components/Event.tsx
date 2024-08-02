import * as React from 'react';

type EventProps = {
  name: string;
  type: string;
  date: Date;
};

const Event: React.FC<EventProps> = ({ name, type, date }) => {
  const month = date.toLocaleString('default', { month: 'long' });
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  return (
    <li className='event-list-item'>
      <p style={{ fontWeight: 'bold' }}>{name}</p>
      {/* <p>{type === 'birthday' ? `${name}'s Birthday` : name}</p> */}
      <p>{`${month} ${dayOfMonth}, ${year}`}</p>
      <p>{type}</p>
    </li>
  );
};

export default Event;
