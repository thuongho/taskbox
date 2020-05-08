import React from 'react';

import UserItem from './UserItem';

export default {
  component: UserItem,
  title: 'components/UserItem'
};

export const simple = () => (
  <UserItem
    user={{
      name: 'Sam H',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/5452152'
    }}
  ></UserItem>
);
