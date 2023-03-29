import './Contacts.scss';
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

//this component can be more flexible as need, just need to improve code, I can do it as well.
const Contacts = ({componentOwner}) => {
  return(
      <div className="contacts">
          <div className={`contact ${componentOwner}__contact`}>
              <PhoneIcon className="contact-icon"/>
              <p className="contact-text">+1012 3456 789</p>
          </div>

          <div className={`contact ${componentOwner}__contact`}>
              <EmailIcon className="contact-icon"/>
              <p className="contact-text">demo@gmail.com</p>
          </div>

          <div className={`contact ${componentOwner}__contact`}>
              <LocationOnIcon className="contact-icon"/>
              <p className="contact-text">132 Dartmouth Street
                  Boston,<br/> Massachusetts 02156 United States</p>
          </div>
      </div>
  )
}

export default Contacts;