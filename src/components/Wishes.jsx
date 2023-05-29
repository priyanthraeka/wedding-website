import { useRef, useState, useEffect } from "react";
import { FaDove } from "react-icons/fa";
import {
  BsClock,
  BsFillCheckCircleFill,
  BsFillQuestionCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import loading from "../assets/Loading/loading.png";
import TimeAgo from "react-timeago";
import bahasaStrings from "react-timeago/lib/language-strings/id";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Wishes = () => {
  const formatter = buildFormatter(bahasaStrings);
  const timestamp = Date.now();

  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const messageRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [messageLength, setMessageLength] = useState(500);

  const presenceRef = useRef(null);
  const [presence, setPresence] = useState(3);

  const [data, setData] = useState([]);
  const [countedData, setCountedData] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      "https://wedding-website-d7145-default-rtdb.firebaseio.com/data.json"
    );
    const data = await response.json();

    const loadedData = [];

    for (const key in data) {
      loadedData.push({
        id: key,
        name: data[key].name,
        message: data[key].message,
        presence: data[key].presence,
        created_at: data[key].created_at,
      });
    }
    setData(loadedData);
    setCountedData(loadedData.length);
  };

  useEffect(() => {
    console.log(
      "Ini adalah proses fetching data saat page pertama kali di-load"
    );
    fetchData();
  }, []);

  const nameInputChangeHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setNameIsValid(true);
    }
  };

  const nameInputBlurHandler = () => {
    setNameTouched(true);
    if (name.trim() === "") {
      setNameIsValid(false);
    }
  };

  const messageInputChangeHandler = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim() !== "") {
      setMessageIsValid(true);
    }
    const maxLength = e.target.getAttribute("maxLength");
    setMessageLength(maxLength - e.target.value.length);
  };

  const messageInputBlurHandler = () => {
    setMessageTouched(true);
    if (message.trim() === "") {
      setMessageIsValid(false);
    }
  };

  const presenceInputChangeHandler = (e) => {
    setPresence(e.target.value);
  };

  //! Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();
    setNameTouched(true);
    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);

    setIsLoading(true);
    await fetch(
      "https://wedding-website-d7145-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          message: messageRef.current.value,
          presence: +presence,
          created_at: timestamp,
        }),
      }
    );
    console.log("Proses submit berhasil");
    fetchData();
    console.log("Ini adalah log saat fetching data setelah submit");
    setIsLoading(false);
    toast.success("Ucapan berhasil dikirim");
    setName("");
    nameRef.current.value = "";
    setMessage("");
    messageRef.current.value = "";
    setMessageLength(500);
    setPresence(3);
    presenceRef.current.value = 3;
  };

  //* Classes
  //* Style for name input
  const nameInputIsInvalid = !nameIsValid && nameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "border border-red-600 bg-red-200"
    : "border border-[#e0dcd1]";
  //* Style for message input
  const messageInputIsInvalid = !messageIsValid && messageTouched;
  const messageInputClasses = messageInputIsInvalid
    ? "border border-red-600 bg-red-200"
    : "border border-[#e0dcd1]";
  //* End of Classes

  const wishes = []
    .concat(data)
    .sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
    .map((item, index) => {
      return (
        <div key={item.id}>
          <div className="flex flex-col gap-1 px-5 py-3 font-poppins">
            <div className="flex items-center gap-2 text-[.8rem] md:text-sm lg:text-base">
              <div className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-sky-600 md:max-w-[500px] lg:max-w-[700px]">
                {item.name}
              </div>
              {item.presence === 1 ? (
                <span className="flex items-center gap-1 rounded-sm bg-green-500 px-1 text-white">
                  <BsFillCheckCircleFill size={12} /> Hadir
                </span>
              ) : item.presence === 2 ? (
                <span className="flex items-center gap-1 rounded-sm bg-red-500 px-1 text-white">
                  <BsFillXCircleFill /> Tidak Hadir
                </span>
              ) : (
                item.presence === 3 && (
                  <span className="flex items-center gap-1 rounded-sm bg-yellow-500 px-1 text-white">
                    <BsFillQuestionCircleFill /> Ragu-Ragu
                  </span>
                )
              )}
            </div>
            <div className="flex items-center gap-1 text-[.6rem] md:text-[.7rem] lg:text-[.8rem]">
              <BsClock />
              <TimeAgo
                date={item.created_at}
                formatter={formatter}
                className="text-slate-600"
              />
            </div>
            <div className="text-[.8rem] md:text-sm lg:text-base">
              {item.message}
            </div>
          </div>
          {countedData - 1 !== index && (
            <hr className="mx-5 border-[0.5px] border-slate-200" />
          )}
        </div>
      );
    });

  return (
    <section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="rotate-180"
      >
        <path
          fill="#FCC2FC"
          fillOpacity="0.6"
          d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
        ></path>
        <path
          fill="#FCC2FC"
          fillOpacity="0.8"
          d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
        ></path>
        <path
          fill="#FCC2FC"
          fillOpacity="1"
          d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
        ></path>
      </svg>
      <ToastContainer />
      <div
        id="wishes"
        className="flex items-center justify-center bg-[#fcc2fc] p-3"
      >
        <div className="min-w-[320px] max-w-[1024px]">
          <div id="ucapan" className="m-auto w-full p-7">
            <h1 className="mb-5 text-center font-alexBrush text-3xl font-bold md:text-4xl lg:text-5xl">
              Ucapan
            </h1>
            <p className="mb-3 text-center font-nanumMyeongjo text-sm font-bold md:text-base lg:text-lg">
              Ucapan selamat dan kebahagiaan bisa dari mana saja.
              <br /> Tanpa berjabat tangan atau pelukan hangat, masih ada
              simpul-simpul senyum dan doa-doa baik yang kami harapkan.
            </p>
          </div>
          {/* Ini adalah modal Chat */}
          <div className="w-full rounded-xl bg-white">
            <div className="px-5 py-3">
              <p className="flex items-center justify-start gap-2 font-poppins text-[.8rem] font-bold md:text-sm lg:text-base">
                <FaDove /> {countedData} Ucapan
              </p>
            </div>
            <hr className="w-full border-[0.5px] border-[#e0dcd1]" />
            <div className="p-5">
              <form onSubmit={submitHandler}>
                <div className="flex flex-col p-0">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <input
                        className={
                          nameInputClasses +
                          " w-full rounded-sm p-1 text-[.8rem] md:text-sm lg:text-base"
                        }
                        type="text"
                        placeholder="Nama"
                        ref={nameRef}
                        onChange={nameInputChangeHandler}
                        onBlur={nameInputBlurHandler}
                        required
                      />
                      {nameInputIsInvalid && (
                        <p className="text-[.8rem] text-red-600 md:text-sm lg:text-base">
                          Nama tidak boleh kosong.
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <textarea
                        className={
                          messageInputClasses +
                          " resize-none rounded-sm p-1 text-[.8rem] md:text-sm lg:text-base"
                        }
                        placeholder="Ucapan"
                        cols="30"
                        rows="6"
                        maxLength="500"
                        ref={messageRef}
                        onChange={messageInputChangeHandler}
                        onBlur={messageInputBlurHandler}
                        defaultValue={message}
                        required
                      ></textarea>
                      <div
                        className={
                          messageInputIsInvalid === true
                            ? "flex justify-between"
                            : "flex justify-end"
                        }
                      >
                        {messageInputIsInvalid && (
                          <p className="text-[.8rem] text-red-600 md:text-sm lg:text-base">
                            Pesan tidak boleh kosong.
                          </p>
                        )}
                        <div className="mb-5 flex justify-end text-[.8rem] md:text-sm lg:text-base">
                          <span>{messageLength}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <select
                    className="mb-5 rounded-sm border border-[#e0dcd1] p-1 font-poppins text-[.8rem] md:text-sm lg:text-base"
                    defaultValue="3"
                    ref={presenceRef}
                    onChange={presenceInputChangeHandler}
                  >
                    <option value="1">Hadir</option>
                    <option value="2">Tidak Hadir</option>
                    <option value="3">Ragu-Ragu</option>
                  </select>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    className="text-nanumMyeongjo mb-5 flex items-center justify-center rounded-md bg-green-500 px-4 py-2 text-right text-[.8rem] text-white hover:bg-green-600 md:text-sm lg:text-base"
                    type="submit"
                  >
                    Kirim
                  </button>
                </div>
              </form>
              {countedData === 0 ? (
                <p className="text-center font-poppins text-[.8rem] text-slate-600 md:text-sm lg:text-base">
                  Semua ucapan akan tampil disini. Ingin mengucapkan sesuatu?
                </p>
              ) : isLoading ? (
                <div className="flex items-center justify-center">
                  <img
                    src={loading}
                    alt="Loading"
                    width={30}
                    className="animate-spin"
                  />
                  <p className="ms-2 font-poppins text-[.8rem] md:text-sm lg:text-base">
                    Loading...
                  </p>
                </div>
              ) : (
                <div className="max-h-[500px] overflow-y-auto">{wishes}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishes;
