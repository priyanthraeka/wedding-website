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
import PinkCloud from "./atoms/PinkCloud";
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
      "https://wedding-3f233-default-rtdb.firebaseio.com/data.json"
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
    console.log(loadedData);
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      fetchData();
    }, 10000);
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
    await fetch("https://wedding-3f233-default-rtdb.firebaseio.com/data.json", {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.current.value,
        message: messageRef.current.value,
        presence: +presence,
        created_at: timestamp,
      }),
    });
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
          <div className="flex flex-col gap-1 px-5 py-3 font-rubik">
            <div className="flex items-center gap-2 text-[.8rem] md:text-sm lg:text-sm">
              <div className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-sky-600 md:max-w-[500px] lg:max-w-[700px]">
                {item.name}
              </div>
              {item.presence === 1 ? (
                <span className="flex items-center gap-1 rounded-sm bg-green-500 px-1 text-white">
                  <BsFillCheckCircleFill size={10} /> Hadir
                </span>
              ) : item.presence === 2 ? (
                <span className="flex items-center gap-1 rounded-sm bg-red-500 px-1 text-white">
                  <BsFillXCircleFill size={10} /> Tidak Hadir
                </span>
              ) : (
                item.presence === 3 && (
                  <span className="flex items-center gap-1 rounded-sm bg-yellow-500 px-1 text-white">
                    <BsFillQuestionCircleFill size={10} /> Ragu-Ragu
                  </span>
                )
              )}
            </div>
            <div className="flex items-center gap-1 text-[.6rem] md:text-[.7rem] lg:text-[.7rem]">
              <BsClock />
              <TimeAgo
                date={item.created_at}
                formatter={formatter}
                className="text-slate-600"
              />
            </div>
            <div className="text-[.8rem] md:text-sm lg:text-sm">
              {item.message}
            </div>
          </div>
          {countedData - 1 !== index && (
            <hr className="mx-5 border-[0.5px] border-slate-200" />
          )}
        </div>
      );
    });
  // ! Returning
  return (
    <section>
      <PinkCloud />
      <ToastContainer />
      <div
        id="wishes"
        className="flex items-center justify-center bg-[#fcc2fc] p-3"
      >
        <div className="w-full min-w-[320px] max-w-[1024px]">
          <div id="ucapan" className="m-auto w-full p-7">
            <h1 className="mb-5 text-center font-meath text-5xl text-white md:text-6xl lg:text-7xl">
              Wedding Wish
            </h1>
            <p className="mb-3 text-center font-daiBannaSil text-base text-white md:text-xl lg:text-2xl">
              Kirimkan Doa & Ucapan pada Kedua Mempelai
            </p>
          </div>
          {/* Ini adalah modal Chat */}
          <div className="w-full rounded-xl bg-white">
            <div className="px-5 py-3">
              <p className="flex items-center justify-start gap-2 font-rubik text-[.8rem] text-[#555] md:text-sm lg:text-base">
                <FaDove size={18} color="#555" />{" "}
                {countedData === 0 ? "0" : countedData} Ucapan
              </p>
            </div>
            <hr className="w-full border-[0.5px] border-[#e0dcd1]" />
            <div className="p-5">
              <form onSubmit={submitHandler} className="font-rubik">
                <div className="flex flex-col p-0">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <input
                        className={
                          nameInputClasses +
                          " w-full rounded-sm px-2 py-1 text-[.8rem]"
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
                          " resize-none rounded-sm px-2 py-1 text-[.8rem] md:text-sm lg:text-base"
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
                    className="mb-5 rounded-sm border border-[#e0dcd1] px-2 py-1 text-[.8rem] md:text-sm lg:text-base"
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
                  Semua ucapan akan tampil disini.
                  <br />
                  Ingin mengucapkan sesuatu?
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
