
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
=======
import React from "react";

function CreateEvent() {
  return (
    <div>
      <h2>CreateEvent</h2>
      <div class="min-h-screen bg-gray-100 p-0 sm:p-12">
        <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 class="text-2xl font-bold mb-8">Form With Floating Labels</h1>
          <form id="form" novalidate>
            <div class="relative z-0 w-full mb-5">
              <input
                type="text"
                name="name"
                placeholder=" "
                required
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                for="name"
                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter name
              </label>
              <span class="text-sm text-red-600 hidden" id="error">
                Name is required
              </span>
            </div>

            <div class="relative z-0 w-full mb-5">
              <input
                type="email"
                name="email"
                placeholder=" "
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                for="email"
                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter email address
              </label>
              <span class="text-sm text-red-600 hidden" id="error">
                Email address is required
              </span>
            </div>

            <div class="relative z-0 w-full mb-5">
              <input
                type="password"
                name="password"
                placeholder=" "
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                for="password"
                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter password
              </label>
              <span class="text-sm text-red-600 hidden" id="error">
                Password is required
              </span>
            </div>

            <fieldset class="relative z-0 w-full p-px mb-5">
              <legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                Choose an option
              </legend>
              <div class="block pt-3 pb-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="1"
                    class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Option 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="2"
                    class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Option 2
                </label>
              </div>
              <span class="text-sm text-red-600 hidden" id="error">
                Option has to be selected
              </span>
            </fieldset>

            <div class="relative z-0 w-full mb-5">
              <select
                name="select"
                value=""
                onclick="this.setAttribute('value', this.value);"
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              >
                <option value="" selected disabled hidden></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </select>
              <label
                for="select"
                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Select an option
              </label>
              <span class="text-sm text-red-600 hidden" id="error">
                Option has to be selected
              </span>
            </div>

            <div class="flex flex-row space-x-4">
              <div class="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="date"
                  placeholder=" "
                  onclick="this.setAttribute('type', 'date');"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label
                  for="date"
                  class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                >
                  Date
                </label>
                <span class="text-sm text-red-600 hidden" id="error">
                  Date is required
                </span>
              </div>
              <div class="relative z-0 w-full">
                <input
                  type="text"
                  name="time"
                  placeholder=" "
                  onclick="this.setAttribute('type', 'time');"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label
                  for="time"
                  class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                >
                  Time
                </label>
                <span class="text-sm text-red-600 hidden" id="error">
                  Time is required
                </span>
              </div>
            </div>

            <div class="relative z-0 w-full mb-5">
              <input
                type="number"
                name="money"
                placeholder=" "
                class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <div class="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
              <label
                for="money"
                class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"
              >
                Amount
              </label>
              <span class="text-sm text-red-600 hidden" id="error">
                Amount is required
              </span>
            </div>

            <div class="relative z-0 w-full mb-5">
              <input
                type="text"
                name="duration"
                placeholder=" "
                class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <div class="absolute top-0 right-0 mt-3 mr-4 text-gray-400">
                min
              </div>
              <label
                for="duration"
                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Duration
              </label>
              <span class="text-sm text-red-600 hidden" id="error">
                Duration is required
              </span>
            </div>

            <button
              id="button"
              type="button"
              class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            >
              Toggle Error
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;

