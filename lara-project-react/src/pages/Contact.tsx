import { useState } from "react";
import { defaultContact, type Contact } from "../interfaces/contact";

function Contact() {
    const [contact, setContact] = useState<Contact>(defaultContact);
    const handleSubmit =()=>{
        console.log(contact);

    }
    return (
        <>
            <h1>Contact Us</h1>
            <form action="">
               
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={contact.name} onChange={(e) => setContact({...contact, name: e.target.value})} /><br /><br />    
               
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={contact.email} onChange={(e) => setContact({...contact, email: e.target.value})} /><br /><br />
                
                    <label htmlFor="message">Message: </label>
                    <textarea  id="message" rows={5} value={contact.message} onChange={(e) => setContact({...contact, message: e.target.value})}></textarea><br /> <br />
                <button onClick={handleSubmit} type="submit" className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </>
    );
}

export default Contact;