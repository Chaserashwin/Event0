import { useState } from "react";
import axios from "axios";

function CreateEvent() {
  const [formData, setFormData] = useState({
    eventcategory: "",
    eventname: "",
    organizer: "",
    eventdate: "",
    eventtime: "",
    location: "",
    ticketPrice: 0,
    totalcapacity: 0,
    imageUpload: "",
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
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post("/addEvent", formData, config)
      .then((response) => {
        console.log("Event posted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error posting event:", error);
      });
  };
  return (
    <>
      <div className="max-w-4xl p-6 mx-auto tex rounded-md shadow-md dark:bg-gray-950 mt-[50px] sm:mt-0 w-full h-auto min-h-screen px-4 sm:px-6">
        {/* heading of component */}
        <div className="w-full h-auto flex flex-wrap flex-col items-center pt-12 md:pt-20 border-t border-gray-800">
          <p
            className="bg-gradient-to-r 
         from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 font-bold text-3xl md:text-4xl text-center "
          >
            Create Events
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 rounded-2xl md:mt-4 mt-2 mb-12"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* for Event Category */}
            <div>
              <label class=" dark:text-gray-200">Category</label>
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
              <label class=" dark:text-gray-200">Title</label>
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
              <label class=" dark:text-gray-200">Description</label>
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
              <label class="block  dark:text-gray-200">Event Banner</label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 "
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
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      // for="file-upload"
                      class="cursor-pointer  rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 bg-slate-400 border-black border-2"
                    >
                      <span class="">Upload a file</span>
                      <input
                        type="file"
                        name="imageUpload"
                        onChange={handleImageUpload}
                        // class="sr-only"
                        className="w-auto  p-0 m-1 "
                      />
                    </label>
                    <p class="pl-1 dark:text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs dark:text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            {/* for Organized by */}
            <div>
              <label class=" dark:text-gray-200">Organized By</label>
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
              <label class=" dark:text-gray-200">Location</label>
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
              <label class=" dark:text-gray-200">Event Date</label>
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
              <label class=" dark:text-gray-200">Event time</label>
              <input
                type="time"
                name="eventtime"
                value={formData.eventtime}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                // value="00:00"
                required
              />
            </div>
            {/* for ticketPrice */}
            <div>
              <label class=" dark:text-gray-200">Ticket Price</label>
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
              <label class=" dark:text-gray-200">Total Number of Seats</label>
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
    </>
  );
}

export default CreateEvent;
