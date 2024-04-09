
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
    <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white capitalize dark:text-white">
            Create Event Here
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* for Event Category */}
            <div>
              <label class="text-white dark:text-gray-200">Category</label>
              <input
                type="text"
                name="eventcategory"
                value={formData.eventcategory}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* for Event Title */}
            <div>
              <label class="text-white dark:text-gray-200">Title</label>
              <input
                type="text"
                name="eventname"
                value={formData.eventname}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* for Description */}
            <div>
              <label class="text-white dark:text-gray-200">Description</label>
              <textarea
                type="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
            {/* for Image upload */}
            <div>
              <label class="block text-sm font-medium text-white">
                Event Banner
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  {/* <svg
                    class="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg> */}
                  <div class="flex text-sm text-gray-600">
                    <label
                      // for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span >Upload a file</span>
                      <input
                        type="file"
                        name="imageUpload"
                        onChange={handleImageUpload}
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            {/* for Organized by */}
            <div>
              <label class="text-white dark:text-gray-200">Organized By</label>
              <input
                type="text"
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* for Location */}
            <div>
              <label class="text-white dark:text-gray-200">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* for date */}
            <div>
              <label class="text-white dark:text-gray-200">Event Date</label>
              <input
                datepicker
                datepicker-format="mm/dd/yyyy"
                type="date"
                name="eventdate"
                value={formData.eventdate}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* for time */}
            <div>
              <label
                for="time"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Event time
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="time"
                  name="eventtime"
                  value={formData.eventtime}
                  onChange={handleChange}
                  class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  min="09:00"
                  max="18:00"
                  // value="00:00"
                  required
                />
              </div>
            </div>
            {/* for ticketPrice */}
            <div>
              <label class="text-white dark:text-gray-200">Ticket Price</label>
              <input
                type="number"
                min={100}
                max={1000}
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* for ticketPrice */}
            <div>
              <label class="text-white dark:text-gray-200">
                Total Number of Seats
              </label>
              <input
                type="number"
                name="totalcapacity"
                value={formData.totalcapacity}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* for final submit button */}
            <div class="flex justify-end mt-6">
              <button
                type="submit"
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    
    {/* <h1 className=" text-5xl mb-5">Create Event Here</h1>
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
    </div> */}

    </>
  )
}

export default CreateEvent
// =======
// import React from "react";

// function CreateEvent() {
//   return (
//     <div>
//       <h2>CreateEvent</h2>
//       <div class="min-h-screen bg-gray-100 p-0 sm:p-12">
//         <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
//           <h1 class="text-2xl font-bold mb-8">Form With Floating Labels</h1>
//           <form id="form" novalidate>
//             <div class="relative z-0 w-full mb-5">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder=" "
//                 required
//                 class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//               />
//               <label
//                 for="name"
//                 class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
//               >
//                 Enter name
//               </label>
//               <span class="text-sm text-red-600 hidden" id="error">
//                 Name is required
//               </span>
//             </div>

//             <div class="relative z-0 w-full mb-5">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder=" "
//                 class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//               />
//               <label
//                 for="email"
//                 class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
//               >
//                 Enter email address
//               </label>
//               <span class="text-sm text-red-600 hidden" id="error">
//                 Email address is required
//               </span>
//             </div>

//             <div class="relative z-0 w-full mb-5">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder=" "
//                 class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//               />
//               <label
//                 for="password"
//                 class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
//               >
//                 Enter password
//               </label>
//               <span class="text-sm text-red-600 hidden" id="error">
//                 Password is required
//               </span>
//             </div>

//             <fieldset class="relative z-0 w-full p-px mb-5">
//               <legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0">
//                 Choose an option
//               </legend>
//               <div class="block pt-3 pb-2 space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="radio"
//                     value="1"
//                     class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
//                   />
//                   Option 1
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="radio"
//                     value="2"
//                     class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
//                   />
//                   Option 2
//                 </label>
//               </div>
//               <span class="text-sm text-red-600 hidden" id="error">
//                 Option has to be selected
//               </span>
//             </fieldset>

//             <div class="relative z-0 w-full mb-5">
//               <select
//                 name="select"
//                 value=""
//                 onclick="this.setAttribute('value', this.value);"
//                 class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//               >
//                 <option value="" selected disabled hidden></option>
//                 <option value="1">Option 1</option>
//                 <option value="2">Option 2</option>
//                 <option value="3">Option 3</option>
//                 <option value="4">Option 4</option>
//                 <option value="5">Option 5</option>
//               </select>
//               <label
//                 for="select"
//                 class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
//               >
//                 Select an option
//               </label>
//               <span class="text-sm text-red-600 hidden" id="error">
//                 Option has to be selected
//               </span>
//             </div>

//             <div class="flex flex-row space-x-4">
//               <div class="relative z-0 w-full mb-5">
//                 <input
//                   type="text"
//                   name="date"
//                   placeholder=" "
//                   onclick="this.setAttribute('type', 'date');"
//                   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//                 />
//                 <label
//                   for="date"
//                   class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
//                 >
//                   Date
//                 </label>
//                 <span class="text-sm text-red-600 hidden" id="error">
//                   Date is required
//                 </span>
//               </div>
//               <div class="relative z-0 w-full">
//                 <input
//                   type="text"
//                   name="time"
//                   placeholder=" "
//                   onclick="this.setAttribute('type', 'time');"
//                   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//                 />
//                 <label
//                   for="time"
//                   class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
//                 >
//                   Time
//                 </label>
//                 <span class="text-sm text-red-600 hidden" id="error">
//                   Time is required
//                 </span>
//               </div>
//             </div>

//             <div class="relative z-0 w-full mb-5">
//               <input
//                 type="number"
//                 name="money"
//                 placeholder=" "
//                 class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//               />
//               <div class="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
//               <label
//                 for="money"
//                 class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"
//               >
//                 Amount
//               </label>
//               <span class="text-sm text-red-600 hidden" id="error">
//                 Amount is required
//               </span>
//             </div>

//             <div class="relative z-0 w-full mb-5">
//               <input
//                 type="text"
//                 name="duration"
//                 placeholder=" "
//                 class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//               />
//               <div class="absolute top-0 right-0 mt-3 mr-4 text-gray-400">
//                 min
//               </div>
//               <label
//                 for="duration"
//                 class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
//               >
//                 Duration
//               </label>
//               <span class="text-sm text-red-600 hidden" id="error">
//                 Duration is required
//               </span>
//             </div>

//             <button
//               id="button"
//               type="button"
//               class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
//             >
//               Toggle Error
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateEvent;

