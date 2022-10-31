import React from 'react';

const User = ({user, index}) => {
  return (
    <tr>
    <th>{index + 1}</th>
    <td>
      <div className="avatar">
        <div className="w-16 rounded-full">
          <img src={user.img} alt="" />
        </div>
      </div>
    </td>

    <td>{user.displayName}</td>
    <td>{user.accountNumber}</td>
    <td>{user.email}</td>
    <td>{user.contact}</td>
    
    

   
  </tr>
  );
};

export default User;