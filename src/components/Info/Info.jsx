import './info.css';

function Info() {
  return (
    <div className='info'>
      <img src='./src/assets/profile-pic.jpg' alt='profile-pic' />
      <h2>Lawrence Narh-Lawson</h2>
      <p>Front End Developer</p>
      <p>lawlawson.dev</p>
      <div className='buttons'>
        <button className='email-button'>Email</button>
        <button className='linkedin-button'>LinkedIn</button>
      </div>
    </div>
  );
}

export default Info;
