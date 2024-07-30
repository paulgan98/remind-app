import React, { useEffect, useState } from 'react';
import { trpc } from '../utils/trpc';

const IndexPage: React.fc = () => {
  const hello = trpc.hello.useQuery();

  if (hello.isLoading) return <div>Loading...</div>;
  if (hello.error) return <div>{hello.error}</div>;

  return (
    <div>
      <p>{hello.data?.message}</p>
    </div>
  );
};

export default IndexPage;
