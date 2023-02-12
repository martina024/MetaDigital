import React from 'react'

const ProfileTabs = () => {
  return (
    <>
      <form className='row form-container'>
        <div className='col-md-6'>
            <div className='form'>
                <label for="account-fn">User Name</label>
                <input className='form-control' type="text" required />
            </div>
        </div>

        <div className='col-md-6'>
            <div className='form'>
                <label for="account-email">Email Address</label>
                <input className='form-control' type="email" />
            </div>
        </div>
        <div className='col-md-6'>
            <div className='form'>
                <label for="account-pass">New Password</label>
                <input className='form-control' type="password" />
            </div>
        </div>
        <div  className='col-md-6'>
            <div className='form'>
                <label for="account-confirm-pass">Confirm Password</label>
                <input className='form-control' type="password"  />
            </div>
        </div>
        <button type='submit'>Update Profile</button>
      </form>
    </>
  )
}

export default ProfileTabs
