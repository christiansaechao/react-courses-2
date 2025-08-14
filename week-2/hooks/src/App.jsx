import { useGetUsers } from "./custom-hooks/custom-hooks.jsx";
import "./App.css";
import { BusinessCardBack } from "./BusinessCardBack.jsx";
// https://randomuser.me/api/

function App() {
  const users = useGetUsers("https://randomuser.me/api/");
  return (
    <>
      <div className="flex flex-col gap-10">
        {users?.map((u) => {
          return (
            <>
              <div className="text-black flex justify-center items-center gap-10 p-20 h-50 w-100 rounded-xl border bg-white ">
                <img src={u.picture.large} />
                <div className="flex flex-col justify-between bg-orange-500 h-full">
                  <div className="">
                    {u.name.first} {u.name.last}
                  </div>
                </div>
              </div>
              <BusinessCardBack users={u} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
