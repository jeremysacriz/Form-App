import { Link } from 'react-router-dom';

export const SignedUp = () => {
   return (
      <section id="signedUp">
         <div className="signedUp-container">
            <h1>Congratulations, you have successfully signed up.</h1>
            <Link to="/" type="button" className="button">
               <h3>Back to Home?</h3>
            </Link>
         </div>
      </section>
   )
}
