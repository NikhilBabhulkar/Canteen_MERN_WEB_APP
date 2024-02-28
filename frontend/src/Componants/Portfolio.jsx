import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    number: '',
    collegeId: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('id'); // Get user ID from localStorage
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL_USER}/${userId}`);
        const { name, email, number, collegeId } = response.data;
        setUserData({ name, email, number, collegeId });
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    if (isVisible) {
      fetchUserData();
    }
  }, [isVisible]);

  const toggleFormVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('id'); // Get user ID from localStorage
      const token = localStorage.getItem('token'); // Get token from localStorage
      const headers = { Authorization: `Bearer ${token}` }; // Create headers object with Authorization header
  
      await axios.put(`${process.env.REACT_APP_BACKEND_URL_USER}/${userId}`, userData, { headers });
      console.log('User data updated successfully');
      // Optionally, you can display a success message or perform other actions upon successful submission
    } catch (error) {
      console.error('Failed to update user data:', error);
    }
  };
  

  return (
    <div>
      <img
        src="profile_icon.png"
        alt="Profile Icon"
        style={{ cursor: 'pointer' }}
        onClick={toggleFormVisibility}
      />
      {isVisible && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              name="number"
              value={userData.number}
              onChange={handleChange}
            />
          </label>
          <label>
            College ID:
            <input
              type="text"
              name="collegeId"
              value={userData.collegeId}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default ProfileForm;
