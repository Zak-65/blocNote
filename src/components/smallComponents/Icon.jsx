import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Icon({name,...props}){
    return(
    <FontAwesomeIcon icon={name} {...props}/>
    );
}