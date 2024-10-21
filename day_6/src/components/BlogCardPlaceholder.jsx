const BlogCardPlaceholder = () => {
  return (
    <div>
      <div
        role="status"
        className="rounded  animate-pulse  dark:border-gray-500 space-y-5"
      >
        <div className="flex items-center justify-center h-[600px] mb-4 bg-gray-300 rounded-lg dark:bg-gray-500">
          <svg
            className="w-20 h-20 text-gray-200 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>

        <div className="my-4 flex justify-between   items-center">
          <div className="flex items-center ">
            <svg
              className="w-14 h-14 me-3 text-gray-200 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-32 mb-2" />
              <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-500" />
            </div>
          </div>
          <div>
            {" "}
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-32 mb-2" />
          </div>
        </div>

        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-[800px] mb-4" />

        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5" />
        <div className=" flex justify-between   ">
          <div className="flex gap-2 ">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mt-5 w-20" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mt-5 w-24" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mt-5 w-28" />
          </div>
          <div className="flex gap-2">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mt-5 w-20" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mt-5 w-24" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mt-5 w-28" />
          </div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mt-5 w-28" />
      </div>
    </div>
  );
};

export default BlogCardPlaceholder;
