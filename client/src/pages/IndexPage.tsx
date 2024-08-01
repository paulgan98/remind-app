import React, { useEffect, useState } from 'react';
import { trpc } from '../utils/trpc';
import Event from '../components/Event';

const IndexPage: React.FC = () => {
  //   const [user, setUser] = useState();
  //   const [events, setEvents] = useState([]);
  const user = trpc.getUserByEmail.useQuery({ email: 'paulgan98@gmail.com' });
  const createUser = trpc.createUser.useMutation({
    onSuccess: (data) => {
      console.log('Successfully added user ' + JSON.stringify(data));
    },
    onError: (e) => {
      console.error(e);
    },
  });
  const events = trpc.getEventsByUserId.useQuery({
    userId: '66a9a13699b6177f71627d85',
  });
  //   const events = user.data?.id
  //     ? trpc.getEventsByUserId.useQuery(user.data.id)
  //     : [];

  //   if (user.isLoading) return <div>Loading...</div>;
  //   if (user.error) return <div>{user.error}</div>;

  return (
    <div className="content">
      <button
        onClick={() => {
          createUser.mutate({
            firstName: 'Paul',
            lastName: 'Gan',
            email: 'paulgan98@gmail.com',
            asfd: '',
          });
        }}
      >
        Add User
      </button>
      <h2>Upcoming Events</h2>
      <ul className="event-list-container">
        {events.data?.map((item, i) => (
          <Event key={i} name={item.name} type={item.type} date={item.date} />
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
