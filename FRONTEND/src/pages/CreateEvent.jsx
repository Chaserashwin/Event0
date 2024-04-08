import { useState,} from "react"
import axios from 'axios';
function CreateEvent() {
  

  const [formData, setFormData] = useState({
    eventcategory:"",
    eventname: "",
    organizer: "",
    eventdate: "",
    eventtime: "",
    location: "",
    ticketPrice: 0,
    totalcapacity:0,
    imageUpload: ''
  });
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({ ...prevState, imageUpload: file }));
  };
// console.log(formData);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevState) => ({ ...prevState, [name]: files[0] }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config={
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }
    axios
      .post("/addEvent", formData,config)
      .then((response) => {
        console.log("Event posted successfully:", response.data);
        
      })
      .catch((error) => {
        console.error("Error posting event:", error);
      });
  };
  return (
    <>
    
    <h1 className=" text-5xl mb-5">Create Event Here</h1>
    <div className="bg-slate-500 text-center px-10 text-2xl w-5xl border-black rounded-lg shadow-lg flex items-center space">
    <form  onSubmit={handleSubmit} className="grid items-center text-center py-5 w-10" >
        Category: <input type="text" name="eventcategory" value={formData.eventcategory} onChange={handleChange}/>
        Title: <input type="text" name='eventname'value={formData.eventname} onChange={handleChange}/>
        Decription: <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        Organised By: <input type="text" name="organizer" value={formData.organizer} onChange={handleChange}/>
        Event Date: <input type="date" name='eventdate' value={formData.eventdate} onChange={handleChange} />
        Event Time: <input type="time" name="eventtime" value={formData.eventtime} onChange={handleChange}/>
        Location : <input type="text" name='location' value={formData.location} onChange={handleChange} />
        Ticket Price: <input type="number" max={1000} min={100}  name="ticketPrice" value={formData.ticketPrice} onChange={handleChange}/>
        Total Number of Seats: <input type="number" name="totalcapacity" value={formData.totalcapacity} onChange={handleChange} />
        Event Banner: <input type="file" name="imageUpload" onChange={handleImageUpload}  />
        <button type="submit" className="border-1 bg-red-200 hover:bg-green-500 rounded-md">Create Event</button>
    </form>
    </div>

    </>
  )
}

export default CreateEvent