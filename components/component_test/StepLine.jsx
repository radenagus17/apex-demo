import { useRouter } from "next/router";
export default function StepLine() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="bg-gray-400/90 max-h-[120px] w-[2px] rounded-full">
      <div className="flex flex-col items-center h-full relative">
        <div
          className={`min-h-[30px] ${
            pathname.includes("/mgwb-test") || pathname.includes("/result-test")
              ? "bg-primary"
              : "bg-gray-400/90"
          } w-full flex items-start justify-center`}
        >
          <div className="p-[5px] bg-primary rounded-full" />
        </div>
        <div
          className={`min-h-[38px] ${
            pathname.includes("/mgwb-test") || pathname.includes("/result-test")
              ? "bg-primary"
              : "bg-gray-400/90"
          } w-full flex items-end justify-center`}
        >
          <div
            className={`p-[5px] ${
              pathname.includes("/mgwb-test") ||
              pathname.includes("/result-test")
                ? "bg-primary"
                : "bg-gray-400/90"
            } rounded-full`}
          />
        </div>
        <div
          className={`min-h-[60px] ${
            pathname.includes("/result-test") && "bg-primary"
          } w-full flex items-end justify-center`}
        >
          <div
            className={`p-[5px] ${
              pathname.includes("/result-test")
                ? "bg-primary"
                : "bg-gray-400/90"
            } rounded-full`}
          />
        </div>
      </div>
    </div>
  );
}
