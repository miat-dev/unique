"use client";
import { useEffect, useState } from "react";
import { FaRegFilePdf} from 'react-icons/fa';
import { AiOutlineFileText,AiOutlineFileImage,AiOutlineFilePdf} from 'react-icons/ai';
import { BsCheck2Circle} from 'react-icons/bs';

import "./gupload.css";
function GUpload() {
  const [n_items] = useState(204);
  const [time_left] = useState("2 hr, 33 min left...");
  const [uptogg, setUptogg] = useState(true);
  const [upFiles, setUpFiles] = useState(new FormData());
  const [dummy, setDummy] = useState(null);
  useEffect(() => {
    setDummy(new Array(upFiles.length).fill(1));
  }, [upFiles]);
  return (
    <div className="gu_main">
      <Inp setUpFiles={setUpFiles} />
      <div className="gu_toph">
        <div>Uploading {n_items} items</div>
        <div>
          <button
            className="trans_btn"
            onClick={(st) => setUptogg((st) => !st)}
          >
            &or;
          </button>
          <button className="trans_btn">X</button>
        </div>
      </div>
      <div
        className={
          "gu_bottomh " + (uptogg === false ? "gu_bottomh_h_zero" : "")
        }
      >
        <div className="gu_time_left">
          <div>{time_left}</div>
          <button
            className="trans_btn"
            onClick={() => {
              length: 0;
            }}
          >
            CANCEL
          </button>
        </div>
        <div className="gu_upload_files">
          {upFiles.length  &&
            dummy.map((item, idx) => (
              <ListFiles key={idx} upFile={upFiles[idx]} />
            ))}
        </div>
      </div>
    </div>
  );
}
export default GUpload;

const ListFiles = ({ upFile }) => {
  // console.log(upFile)
  return (
    <div className="gu_file_dt">
      <div>
        {upFile.type.includes("image") && <AiOutlineFileImage fontSize="2em" color="blue" />}
        {upFile.type.includes("pdf") && <AiOutlineFilePdf fontSize="2em" color="red" />}
        {upFile.type.includes("text") && <AiOutlineFileText fontSize="2em" />}
        <div>
          {upFile.name} {upFile.type}
        </div>
      </div>
      <BsCheck2Circle fontSize="2em" color="#0f0" />
    </div>
  );
};

const Inp = ({ setUpFiles }) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files);
    if (e.target.files.length !== 0) {
      let files = e.target.files;
      setUpFiles(files);
      let validExtensions = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "text/plain",
        "image/svg+xml",
        "application/pdf",
      ];
      //console.log("Files ",files)
      for (let idx = 0; idx < files?.length; idx++) {
        if (validExtensions.includes(files[idx].type)) {
          //console.log(files[idx].type)
          let formData = new FormData();
          formData.append("newpic", files[idx], files[idx].name);
          // console.log(formData)
          // axios.post(baseurl + "api/newpic", formData, {
          //     headers: {
          //         'Content-Type': 'multipart/form-data'
          //     }
          // })
          //     .then(res => { setCap(res.data) })
          //     .catch(err => window.alert(err))
        } else {
          alert("This is not a File!");
          let formData = new FormData();
          setUpFiles(formData);
          break;
        }
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        name="pic"
        className="drag_input"
        onChange={handleChange}
        multiple
      />
    </div>
  );
};
