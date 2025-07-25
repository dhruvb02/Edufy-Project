import { useEffect, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import { FiUploadCloud } from "react-icons/fi"
import { useSelector } from "react-redux"

import "video-react/dist/video-react.css"
import { Player } from "video-react"

export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  viewData = null,
  editData = null,
}) {
  const { course } = useSelector((state) => state.course)
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  )
  const inputRef = useRef(null)

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      console.log("File selected:", file.name)
      previewFile(file)
      setSelectedFile(file)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: !video
      ? { 
          "image/jpeg": [".jpeg", ".jpg"],
          "image/png": [".png"],
          "image/gif": [".gif"]
        }
      : { "video/mp4": [".mp4"] },
    onDrop,
    maxSize: video ? 100 * 1024 * 1024 : 5 * 1024 * 1024, // 100MB for video, 5MB for image
    multiple: false
  })

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
    reader.onerror = () => {
      console.error("Error reading file")
    }
  }

  const handleFileSelect = () => {
    inputRef.current?.click()
  }

  const handleRemoveFile = () => {
    setPreviewSource("")
    setSelectedFile(null)
    setValue(name, null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  useEffect(() => {
    register(name, { required: true })
  }, [register, name])

  useEffect(() => {
    setValue(name, selectedFile)
  }, [selectedFile, setValue, name])

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} {!viewData && <sup className="text-pink-200">*</sup>}
      </label>
      
      <div
        className={`${
          isDragActive ? "bg-richblack-600" : "bg-richblack-700"
        } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
      >
        {previewSource ? (
          <div className="flex w-full flex-col p-6">
            {!video ? (
              <img
                src={previewSource}
                alt="Preview"
                className="h-full w-full rounded-md object-cover max-h-[300px]"
              />
            ) : (
              <Player aspectRatio="16:9" playsInline src={previewSource} />
            )}
            {!viewData && (
              <div className="flex gap-2 mt-3">
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="text-richblack-400 underline hover:text-richblack-200"
                >
                  Remove
                </button>
                <button
                  type="button"
                  onClick={handleFileSelect}
                  className="text-yellow-50 underline hover:text-yellow-25"
                >
                  Replace
                </button>
              </div>
            )}
          </div>
        ) : (
          <div
            className="flex w-full flex-col items-center p-6"
            {...getRootProps()} 
          >
            <input 
              {...getInputProps()} 
              ref={inputRef}
              style={{ display: 'none' }}
            />
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
              <FiUploadCloud className="text-2xl text-yellow-50" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
              Drag and drop an {!video ? "image" : "video"}, or{" "}
              <span 
                className="font-semibold text-yellow-50 cursor-pointer hover:text-yellow-25"
                onClick={handleFileSelect}
              >
                click to browse
              </span>
            </p>
            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center text-xs text-richblack-200">
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
              <li>Max size: {video ? "100MB" : "5MB"}</li>
            </ul>
          </div>
        )}
      </div>
      
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}