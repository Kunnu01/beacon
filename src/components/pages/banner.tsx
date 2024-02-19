const Banner = () => {
  return (
    <div className="flex items-start mt-6">
      <div className="rounded-full px-5 py-2 border-2 border-orange-500 text-orange-500 text-2xl">B</div>
      <div className="flex ml-4 w-full text-white bg-gradient-to-r from-blue-500 to-blue-900 p-4 rounded-xl">
        <div className="flex-col justify-between">
          <div>
            <p className="text-base">Good morning, Mary!</p>
            <p className="text-sm">Please confirm the following updates:</p>
          </div>
          <p className="font-semibold text-base underline underline-offset-2 mt-3">Carrier info</p>
        </div>
        <img
          src="https://assets-global.website-files.com/62b67316c53c9156aa2cc271/659c90fc9fe4f9a5b2f2b26b_Picture1.png"
          className="w-28 ml-7"
        />
      </div>
    </div>
  );
};

export { Banner };
