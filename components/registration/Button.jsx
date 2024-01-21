import ButtonPaymentAlert from "./ButtonPaymentAlert";

export default function Button({
  step,
  setStep,
  line,
  setLine,
  setTerm,
  terms,
}) {
  return (
    <>
      {step === "bayar" ? (
        <div className="flex gap-3 mt-7 lg:mt-16 pb-0 lg:pb-56">
          <button
            type="button"
            onClick={() => {
              setStep("info");
              setLine(line - 1);
              window.scrollTo(0, 0);
            }}
            className="btn-default w-full"
          >
            Kembali
          </button>
          <button type="submit" className="btn-primary w-full">
            Bayar Sekarang
          </button>
        </div>
      ) : step === "info" ? (
        <div className="flex flex-col gap-12 mt-4 pb-0 lg:pb-4">
          <div
            onClick={() => setTerm(!terms)}
            className="flex cursor-pointer gap-2 lg:items-center items-start"
          >
            {/* rounded */}
            <div className="w-5 h-5 rounded-full border bg-white relative flex items-center justify-center border-black/50">
              {terms && (
                <div className="bg-primary p-[0.4rem] rounded-full absolute" />
              )}
            </div>
            <p className="block max-w-[250px] lg:max-w-full text-gray-400/75">
              By sign up, you agree to accept our&nbsp;
              <span className="text-blue-400">Privacy Policy</span>
              &nbsp;and&nbsp;
              <span className="text-blue-400">Term of Service</span>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                setStep("riwayat");
                setLine(line - 2);
                window.scrollTo(0, 0);
              }}
              className="btn-default w-full"
            >
              Kembali
            </button>
            <ButtonPaymentAlert
              setStep={setStep}
              setLine={setLine}
              line={line}
            />
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => {
            setStep("info");
            setLine(line + 2);
            window.scrollTo(0, 0);
          }}
          className="btn-primary mt-6"
        >
          Selanjutnya
        </button>
      )}
    </>
  );
}
