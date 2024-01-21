export default function StepLine({ line }) {
  return (
    <div className="bg-gray-400/50 rounded-full w-full h-[3px] mt-20 lg:mt-0 mb-7 lg:mb-10">
      <div className="flex items-center w-full h-full relative">
        <div
          className={`${
            line > 0 ? "bg-primary" : "bg-gray-400/50"
          } h-1 min-w-[21%] lg:min-w-[26%] flex items-center justify-end`}
        >
          <div
            className={`${
              line > 0 ? "bg-primary" : "bg-gray-400"
            } rounded-full h-3 w-3 relative`}
          >
            {line > 0 && (
              <p className="text-primary font-semibold absolute bottom-4 text-sm min-w-[90px] lg:min-w-[100px] -right-10 capitalize">
                riwayat hidup
              </p>
            )}
          </div>
        </div>
        <div
          className={`${
            line > 2 ? "bg-primary" : "bg-gray-400/50"
          } h-1 min-w-[32%] lg:min-w-[26%] flex items-center justify-end`}
        >
          <div
            className={`${
              line > 2 ? "bg-primary" : "bg-gray-400"
            } rounded-full h-3 w-3 relative`}
          >
            {line > 2 && (
              <p className="text-primary font-semibold absolute bottom-4 text-sm min-w-[90px] -right-10 capitalize">
                pengajuan
              </p>
            )}
          </div>
        </div>
        <div
          className={`${
            line > 3 ? "bg-primary" : "bg-gray-400/50"
          } h-1 min-w-[30%] lg:min-w-[26%] flex items-center justify-end`}
        >
          <div
            className={`${
              line > 3 ? "bg-primary" : "bg-gray-400"
            } rounded-full h-3 w-3 relative`}
          >
            {line > 3 && (
              <p className="text-primary font-semibold absolute bottom-4 text-sm min-w-[90px] -right-10 capitalize">
                pembayaran
              </p>
            )}
          </div>
        </div>
        <div
          className={`${line > 4 ? "bg-primary" : "bg-gray-400/50"} h-1 w-full`}
        />
      </div>
    </div>
  );
}
