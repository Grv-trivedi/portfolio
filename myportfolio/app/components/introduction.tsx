import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <div className="flex space-x-30  justify-between m-10 p-10">
        <div className="relative ml-10 pl-12 ">
            <h1 className="text-5xl m-8 font-sans  text-green-500 font-extrabold">HEY THERE!</h1>
          <h1 className="text-6xl ml-8  text-slate-50 font-extrabold">
            I<span className="text-green-500"> ' </span>M
          </h1>
          <h1 className="text-7xl my-8 text-slate-50 font-extrabold">
            G A U R A V{" "}
          </h1>
          <h1 className="text-7xl my-8 text-slate-50 font-extrabold">
            T R I V E D I <span className="text-green-500"> . </span>
          </h1>
          <p className="text-5xl text-green-400">
            A passionate Full stack Developer 
          </p>
        </div>
        <div>
          <Image
            src="/mybg3.jpg"
            width={400}
            height={500}
            alt="Picture of the author"
          />
          {/* <img src="/mybg3.jpg" alt="Girl in a jacket" width="500" height="600"></img> */}
        </div>
      </div>
    </>
  );
}
