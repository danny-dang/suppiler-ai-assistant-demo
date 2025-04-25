const ExampleQuery = ({
  question,
  onClick,
}: {
  question: string;
  onClick: VoidFunction;
}) => {
  return (
    <div
      className="cursor-pointer px-3 py-1.5 border border-zinc-500 rounded-full text-xs w-fit text-zinc-200 opacity-70 hover:opacity-100 transition duration-200"
      onClick={onClick}
    >
      {question}
    </div>
  );
};

export default ExampleQuery;
