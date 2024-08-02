import React from 'react';
import { trpc } from '../utils/trpc';
import Event from '../components/Event';
// import { EventType } from '../../../server/src/db/models/event.model.ts';

const IndexPage: React.FC = () => {
  // const user = trpc.getUserByEmail.useQuery({ email: 'my_email_123@gmail.com' });
  // const createUser = trpc.createUser.useMutation({
  //   onSuccess: (data) => {
  //     console.log('Successfully added user ' + JSON.stringify(data));
  //   },
  //   onError: (e) => {
  //     console.error(e);
  //   },
  // });

  const upcomingEvents = trpc.getEventsByUserId.useQuery(
    {
      // userId: '66a9a13699b6177f71627d85',
      userId: '66ac0103139d6782f9caae10',
    },
    {
      onSuccess: () => {},
    }
  );

  return (
    <div className='content'>
      {/* <button
        onClick={() => {
          createUser.mutate({
            firstName: 'FirstName',
            lastName: 'LastName',
            email: 'my_email_123@gmail.com',
          });
        }}
      >
        Add User
      </button> */}
      <h2>Upcoming Events</h2>
      <ul className='event-list-container'>
        {upcomingEvents.data?.length
          ? upcomingEvents.data.map((item, i) => (
              <Event
                key={i}
                name={item.name}
                type={item.type}
                date={new Date(item.date)}
              />
            ))
          : 'None'}
      </ul>
    </div>
  );
};

export default IndexPage;
