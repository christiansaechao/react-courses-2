// flex justify-center items-center
// xs, sm, xl, 2xl, 3xl, 4xl
// p-10, m-10
// px-10, py-10
// pt-10, pb-10, pr-10

export const NourComponent = ({ name, age, height, hometown }) => {
  return (
    <div className="flex justify-center items-center border-2 rounded-xl p-10 m-10 bg-white text-blue-900/80">
      Name: {name}, Age: {age}, height: {height}, hometown: {hometown}
    </div>
  );
};
