import { useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { useSelector } from "react-redux"

export default function ChipInput({
  label,
  name,
  placeholder,
  register,
  errors,
  setValue,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course)
  const [chips, setChips] = useState([])

  useEffect(() => {
    if (editCourse) {
      setChips(course?.tag || [])
    }
    register(name, { 
      required: true, 
      validate: (value) => value.length > 0 
    })
  }, [])

  useEffect(() => {
    setValue(name, chips)
  }, [chips])

  const handleKeyDown = (event) => {
    // Check if user presses "Enter" or ","
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault()
      const chipValue = event.target.value.trim()
      
      if (chipValue && !chips.includes(chipValue)) {
        const newChips = [...chips, chipValue]
        setChips(newChips)
        event.target.value = ""
      }
    }
  }

  const handleDeleteChip = (chipIndex) => {
    const newChips = chips.filter((_, index) => index !== chipIndex)
    setChips(newChips)
  }

  const handleAddChip = () => {
    const input = document.getElementById(name)
    const chipValue = input.value.trim()
    
    if (chipValue && !chips.includes(chipValue)) {
      const newChips = [...chips, chipValue]
      setChips(newChips)
      input.value = ""
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      
      {/* Display existing chips */}
      {chips.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {chips.map((chip, index) => (
            <div
              key={index}
              className="flex items-center rounded-full bg-yellow-400 px-3 py-1 text-sm text-richblack-5"
            >
              {chip}
              <button
                type="button"
                className="ml-2 focus:outline-none"
                onClick={() => handleDeleteChip(index)}
              >
                <MdClose className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input for adding new chips */}
      <div className="flex gap-2">
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          className="form-style flex-1"
        />
        <button
          type="button"
          onClick={handleAddChip}
          className="px-3 py-2 bg-yellow-50 text-richblack-900 rounded-md hover:bg-yellow-100 transition-colors"
        >
          Add
        </button>
      </div>

      <p className="text-xs text-richblack-300">
        Press Enter or comma to add tags
      </p>

      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}