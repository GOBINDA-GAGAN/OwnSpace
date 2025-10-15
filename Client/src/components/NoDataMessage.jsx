
import emptyImage from "../assets/empty-state.png"; // put your image path here

const NoDataMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-10 sm:py-16">
      {/* Image */}
      <img
        src={emptyImage}
        alt="No data"
        className="w-[120px] sm:w-[180px] md:w-[220px] h-auto mb-5 opacity-90"
      />
      {/* Hook Message */}
      <p className="text-gray-900 font-semibold text-sm sm:text-base mt-3  ">
        &quot; Your workspace starts with your first upload &quot;
      </p>
    </div>
  );
};

export default NoDataMessage;
