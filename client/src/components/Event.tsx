import * as React from 'react';
import { Event as EventType } from '../../../shared/src/types';

interface EventProps extends EventType {}

const Event: React.FC = ({ name, type, date }: EventProps) => {
  const _date = new Date(date);
  const month = _date.toLocaleString('default', { month: 'long' });
  const dayOfMonth = _date.getDate();
  const year = _date.getFullYear();
  return (
    <li className="event-list-item">
      <p style={{ fontWeight: 'bold' }}>{name}</p>
      {/* <p>{type === 'birthday' ? `${name}'s Birthday` : name}</p> */}
      <p>{`${month} ${dayOfMonth}, ${year}`}</p>
      <p>{type}</p>
    </li>
  );
};

export default Event;
