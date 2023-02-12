import React from 'react'

const ProfileTabs = () => {
  return (
    <>
      <form >
        <div >
            <div >
                <label for="account-fn">User Name</label>
                <input  type="text" required />
            </div>
        </div>

        <div >
            <div >
                <label for="account-email">Email Address</label>
                <input  type="email" />
            </div>
        </div>
        <div >
            <div >
                <label for="account-pass">New Password</label>
                <input  type="password" />
            </div>
        </div>
        <div >
            <div >
                <label for="account-confirm-pass">Confirm Password</label>
                <input  type="password"  />
            </div>
        </div>
        <button type='submit'>Update Profile</button>
      </form>
    </>
  )
}

export default ProfileTabs
