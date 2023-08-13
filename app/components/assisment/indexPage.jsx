import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Tasks from "./Tasks";
import MyAssessment from "./MyAssessment";
import MyOverview from "./MyOverview";
import { toast } from "react-toastify";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const indexPage = () => {
  // state to check whether 'unstop assessment' is selected or 'my assessment'
  const [open, setOpen] = useState(false);
  // state to check is dialog open or not, it is a dialog to add new assessment
  const [openDialog, setOpenDialog] = useState(false);
  // array to store selected skills
  const [skills, setSkills] = useState([
    "UI/UX and Design",
    "NO Of Question",
    "Web Devlopment",
    "UI/UX and Design",
    "Web Devlopment",
  ]);
  const cancelButtonRef = useRef(null);

  // state to store form data in an object
  const [formData, setFormData] = useState({
    title: "",
    purpose: "",
    questions: "",
    duration: "",
    date: new Date().toDateString().slice(3),
  });
  // upon changing the input data, formData object will be updated
  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  // adding the formData to existing or main data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    data.unshift(formData);
    setOpenDialog(false);
    toast.success("Added Successfully!");
  };

  // func to add new skills to skills array
  const addSkills = (e) => {
    if (e.key === "Shift") {
      const newValue = e.target.value;
      setSkills((prevValues) => [...prevValues, newValue]);
      e.target.value = "";
    }
  };
  // func to remove the added skills from an array
  const removeSkills = (item) => {
    const updatedSkills = skills.filter((skill) => skill !== item);
    setSkills(updatedSkills);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-start overflow-hidden">
        <Tasks setOpen={setOpen} />
        {open && (
          <>
            <MyOverview data={data} />
            <MyAssessment data={data} setOpenDialog={setOpenDialog} />
          </>
        )}
      </div>

      <Transition.Root show={openDialog} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 "
          initialFocus={cancelButtonRef}
          onClose={setOpenDialog}
        >
          <div className="fixed inset-0 z-10 overflow-y-auto bg-black/30 bg-opacity-25">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-blue-300 border-b-2 pb-2"
                  >
                    Create New Assessment
                  </Dialog.Title>
                  <div className="mt-8">
                    <p className="text-sm text-gray-500">
                      <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4 md:gap-8">
                          <TextField
                            name="title"
                            type="text"
                            label="Name Of Assessment"
                            value={formData.title}
                            onChange={(e) => handleChange(e, "title")}
                            required
                          />

                          <FormControl>
                            <InputLabel>Purpose of the test is</InputLabel>
                            <Select
                              name="purpose"
                              value={formData.purpose}
                              onChange={(e) => handleChange(e, "purpose")}
                              required
                            >
                              <MenuItem value="Job">Full-Time</MenuItem>
                              <MenuItem value="Intern">Part-Time</MenuItem>
                            </Select>
                          </FormControl>

                          <TextField
                            name="questions"
                            label="Description"
                            type="number"
                            value={formData.questions}
                            onChange={(e) => handleChange(e, "questions")}
                            required
                          />

                          <div className="flex flex-wrap justify-start items-center p-4 border-2 gap-2 rounded-lg">
                            {skills?.map((item, index) => {
                              return (
                                <div
                                  // label="Duration of assessment"
                                  key={index}
                                  className="flex justify-center items-center bg-blue-200 py-1 px-4 gap-4 rounded-xl"
                                >
                                  <span>{item}</span>
                                  <span
                                    onClick={() => removeSkills(item)}
                                    className="text-xl cursor-pointer"
                                  >
                                    ×
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                          <TextField
                            name="skills"
                            label="Duration of assessment"
                            type="text"
                            onKeyUp={addSkills}
                           
                          />

                          <div className="bg-gray-50 px-4 py-3  sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex  justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"style={{width:"100%"}}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default indexPage;

const data = [
  {
    title: "Math Assessment",
    purpose: "Job",
    questions: "00",
    duration: "00",
    date: "20 Apr 2023",
    attendees: [
      {
        id: 1,
        name: "Uzair Ansari"
      }
    ],
  },
  {
    title: "React Assessment",
    purpose: "Intern",
    questions: "00",
    duration: "00",
    date: "11 Sep 2023",
    attendees: [
			{
				id: 1,
				name: "Uzair Ansari",
			},
			{
				id: 2,
				name: "Neha Sahu",
			}
		],
	
  },
];
